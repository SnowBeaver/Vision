from flask import Flask
from celery import Celery
from .mail_utility import send_email


def make_celery(app):
    celery = Celery(app.import_name, backend=app.config['CELERY_BACKEND'],
                    broker=app.config['CELERY_BROKER_URL'])
    celery.conf.update(app.config)
    TaskBase = celery.Task

    class ContextTask(TaskBase):
        abstract = True

        def __call__(self, *args, **kwargs):
            with app.app_context():
                return TaskBase.__call__(self, *args, **kwargs)
    celery.Task = ContextTask
    return celery


flask_app = Flask(__name__)
flask_app.config.from_object('config')
celery = make_celery(flask_app)


@celery.task()
def send_email_task(email_recipients, message, subject):
    send_email(email_recipients, message, subject)


def setup_periodic_task(email_recipients, message, subject):
    celery.add_periodic_task(10.0, send_email_task.s(email_recipients, message, subject), name='add every 10')
