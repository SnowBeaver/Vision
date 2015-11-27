import os
from fabric.api import *
from unipath import Path
from contextlib import contextmanager
from fabric.contrib.files import exists
from fabric.api import settings

class FabricException(Exception):
    pass

# the servers where the commands are executed
# the user to use for the remote commands
env.hosts = ['192.168.88.88']
env.user = 'vagrant'

PROJECT = 'vision'

LOCAL_ROOT_DIR = Path(__file__).ancestor(2)
LOCAL_PROJECT_DIR = Path(LOCAL_ROOT_DIR, 'project')

env.directory = '/home/%s/www'%PROJECT

env.venv = env.directory + '/env'
env.activate = 'source ' + env.venv + '/bin/activate'
env.pip = env.venv + '/bin/pip'
env.python = env.venv + '/bin/python'
env.home = '/home/' + PROJECT

#bbflask
env.bbenv = env.directory + '/bbenv'
env.bbactivate = 'source ' + env.bbenv + '/bin/activate'
env.bbpip = env.bbenv + '/bin/pip'
env.bbpython = env.bbenv + '/bin/python'

@contextmanager
def source_virtualenv():
    with prefix(env.activate):
        yield

@contextmanager
def source_bb_virtualenv():
    with prefix(env.bbactivate):
        yield

def setup_dev():
    local('cd %s && vagrant up && vagrant provision' % LOCAL_PROJECT_DIR)
    sudo("mkdir -p %s/var/logs" % env.directory, user="vision")
    sudo("mkdir -p %s/var/uploads" % env.directory, user="vision")
    sudo("chmod -R g+wrx %s/var/logs" % env.directory, user="vision")
    sudo('apt-get install -y git')
    sudo('apt-get install -y postgresql-server-dev-9.3 python-dev libjpeg-dev')
    sudo('apt-get install -y libpcre3 libpcre3-dev')
    sudo('apt-get install -y nginx')
    sudo('apt-get install -y postgresql')
    sudo('apt-get install -y supervisor')
    sudo('apt-get install -y python-pip')
    sudo("pip install virtualenv")
    sudo("pip install gunicorn")

    sudo("rm -rf %s"  % env.venv)
    sudo("mkdir -p %s" % env.directory, user="vision")
    with cd(env.directory):
        run('git pull origin master')
        run('virtualenv env --always-copy')
        with source_virtualenv():
            run(env.pip + ' install uwsgi')
            #run(env.bbpip + ' install uwsgi')
            run(env.pip + ' install -r requirements.txt')

    deploy_nginx()
    deploy_supervisor()

    setup_dev_app()
    restart_services()
    deploy()


def restart_services():
    sudo("service supervisor stop")
    sudo('service redis-server stop')
    sudo("service nginx stop")
    with settings(abort_exception = FabricException):
        try:
            sudo('killall uwsgi')
        except FabricException:
            pass
    sudo("service nginx reload")
    sudo("service nginx start")
    sudo("service supervisor force-reload")
    sudo("service supervisor start")
    sudo('service redis-server start')

def deploy_dev_image():
    # create vagrant box
    nginx_ppth = "/home/%s/conf" % PROJECT
    box = os.path.join(LOCAL_PROJECT_DIR, 'package.box')
    remotebox = Path(env.home, 'www', 'app', 'devbox')
    sudo("rm -rf %s" % remotebox, user="vision")
    sudo("mkdir -p %s" % remotebox, user="vision")
    sudo("mkdir -p %s" % nginx_ppth, user="vision")
    local(
        'cd %s && vagrant halt && vagrant package --base "vision_development" '
        % LOCAL_PROJECT_DIR
    )
    local('cd %s && vagrant up' % LOCAL_PROJECT_DIR)
    put(box, os.path.join(remotebox, 'package.box'))
    local('rm -f %s' % box)

def deploy_supervisor():
    super_conf = "/etc/supervisor/conf.d/%s.conf" % PROJECT
    sudo("rm -f %s" % super_conf)
    #put("%s/dep/supervisor/template.conf" % LOCAL_ROOT_DIR, super_conf, use_sudo=True)
    put( Path(LOCAL_PROJECT_DIR, 'dep' , 'supervisor' , 'template.conf'), super_conf, use_sudo=True)

    sudo("chown root:root %s" % super_conf)
    restart_services()

def deploy_nginx():
    nginx_conf = "/etc/nginx/sites-available/%s.conf" % PROJECT
    sudo("rm -f %s" % nginx_conf)
    #put("%s/dep/nginx/template.conf" % LOCAL_ROOT_DIR, nginx_conf, use_sudo=True)
    put( Path(LOCAL_PROJECT_DIR,'dep', 'nginx', 'template.conf') , nginx_conf, use_sudo=True)

    sudo("chown root:root %s" % nginx_conf)
    sudo("rm -f /etc/nginx/sites-enabled/%s.conf" % PROJECT)
    sudo("ln -s %s /etc/nginx/sites-enabled/%s.conf" %
         (nginx_conf, PROJECT))
    sudo("service nginx restart")

def setup_dev_app():
    with cd(env.directory):
        run('cp config.py.dist config.py')
        with source_virtualenv():
            run('find . -name "*.pyc" -exec rm -rf {} \;')
            run('python manage.py db init')

def provision():
    with cd(env.directory):
        with source_virtualenv():
            run('python manage.py db migrate')

def first_deploy():
    if 'vagrant' in env.user:
        local('cd %s && vagrant up' % LOCAL_PROJECT_DIR)

    with cd(env.directory):
        run('git pull origin master')
        sudo("rm -f %s/config.py" % env.directory, user="vision")
        sudo("cp %s/config.py.dist %s/config.py" % (env.directory, env.directory), user="vision")
        with source_virtualenv():
            nginx_conf = "/etc/nginx/sites-available/%s.conf" % PROJECT
            flaskbb_conf = "/etc/supervisor/conf.d/flaskbb.conf"
            flaskbb_xml = "%s/flask_bb.xml" % PROJECT
            vision_xml = "%s/vision.xml" % PROJECT
            uwsgi_local = LOCAL_PROJECT_DIR.child('dep').child('uwsgi')

            sudo("rm -f %s/vision.xml" % (env.directory))
            sudo("rm -f %s/flask_bb.xml" % (env.directory))
            put( Path(uwsgi_local , "flask_bb.xml"), "%s/flask_bb.xml" % env.directory)
            put( Path(uwsgi_local , "vision.xml" ), "%s/vision.xml" % env.directory)

            sudo("rm -f %s" % nginx_conf)
            sudo("rm -f %s" % flaskbb_conf)

            put( Path(LOCAL_PROJECT_DIR , 'dep' , 'nginx' ,'template.conf') , nginx_conf, use_sudo=True)
            put( Path(LOCAL_PROJECT_DIR , 'dep' , 'supervisor' ,'flaskbb.conf'), flaskbb_conf, use_sudo=True)

            run(env.pip + ' install -r requirements.txt')
            setup_trans()
            update_trans()
            compile_trans()
            update_flaskbb()

            run('find . -name "*.pyc" -exec rm -rf {} \;')
            run('python -c "from app import db;db.create_all()"')

            sudo('service supervisor stop')
            if 'vagrant' not in env.user:
                sudo('service apache2 stop')

            deploy_supervisor()
            restart_services()

def deploy():
    with cd(env.directory):
        run('git pull origin master')
        with source_virtualenv():
            run(env.pip + ' install -r requirements.txt')
            update_trans()
            compile_trans()
            run('find . -name "*.pyc" -exec rm -rf {} \;')
            run('python -c "from app import db;db.create_all()"')
    restart_services()


def update_flaskbb():
    with cd(env.directory):
        with source_virtualenv():
            with cd('./flaskbb'):
                flaskbb_dir = env.directory + '/flaskbb/flaskbb/configs'
                # sudo('apt-get install -y uwsgi-plugin-python')
                run(env.bbpip + ' install uwsgi')
                run(env.bbpip + ' install -r requirements.txt')

def update_remote():
    with cd(env.directory):
        run('git pull origin master')
        with source_virtualenv():
            run(env.pip + ' install -r requirements.txt')
            run('find . -name "*.pyc" -exec rm -rf {} \;')
            run('python -c "from app import db;db.create_all()"')
            restart_services()

def setup_redis():
    sudo("apt-get install -y redis-server")
    redis_conf = "%s/dep/redis/redis.conf" % LOCAL_ROOT_DIR
    put(redis_conf, '/etc/redis/redis.conf', use_sudo=True)
    sudo("update-rc.d redis-server defaults")
    sudo("service redis-server start")

def setup_trans():
    with cd(env.directory):
        with source_virtualenv():
            run('./env/bin/pybabel extract -F babel.cfg -o app/messages.pot app')
            run('./env/bin/pybabel init -i app/messages.pot -d app/translations -l es')
            run('./env/bin/pybabel init -i app/messages.pot -d app/translations -l fr')

def compile_trans():
    with cd(env.directory):
        with source_virtualenv():
            run('./env/bin/pybabel compile -f -d app/translations')

def update_trans():
    with cd(env.directory):
        with source_virtualenv():
            run('pybabel update -i app/messages.pot -d app/translations')
            run('rm -f ./messages.pot')

def create_root():
    with cd(env.directory):
        with source_virtualenv():
            run('python -c "from app import db;from app.tree.models import TreeNode;node = TreeNode(text = u\'Vision Diagnostic\' , disabled=True , selected=True , icon=\'../app/static/img/root.png\' , type=\'default\');db.session.add(node);db.session.commit()"')

def create_home():
    with cd(env.directory):
        with source_virtualenv():
            run('python -c "from app import db;")
            run('python -c "")

