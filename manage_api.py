from app.api import app_api as app
from flask.ext.script import Manager
from flask_apidoc.commands import GenerateApiDoc


manager = Manager(app)
manager.add_command('apidoc', GenerateApiDoc(input_path=None, output_path='/home/vision/www/app/static/docs', template_path=None))
# manager.add_command('apidoc', GenerateApiDoc())


if __name__ == '__main__':
    manager.run()
    # generator = GenerateApiDoc(input_path=None, output_path='/home/vision/www/app/static/docs', template_path=None)
    # generator.run()

