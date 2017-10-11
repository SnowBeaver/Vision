from datetime import datetime
from dateutil.relativedelta import relativedelta

from flask import Flask
from celery import Celery

from .mail_utility import send_email


def make_celery(app):
    celery = Celery(app.import_name,
                    backend=app.config['CELERY_BACKEND'],
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
DEBUG = flask_app.config.get('DEBUG')


@celery.task()
def send_email_task(email_recipients, message, subject):
    send_email(email_recipients, message, subject)


@celery.task()
def send_email_periodic_task(email_recipients, message, subject, period_data, last_date):
    send_email(email_recipients, message, subject)
    next_date = calculate_next_date(period_data, datetime.strptime(last_date, '%Y-%m-%dT%H:%M:%S'))
    try:
        send_email_periodic_task.apply_async(args=[email_recipients, message, subject, period_data, next_date],
                                             eta=next_date)
    except:
        if DEBUG:
            raise


def setup_periodic_email_task(email_recipients, message, subject, period_data, date_start):
    # The task is added, but scheduler isn't reloaded.
    # Tried to use beat_max_loop_interval setting as well
    # celery.add_periodic_task(10.0,
    # app.tasks.send_email_task.s(email_recipients, message, subject),
    # name='add every 10')

    # Calculate next date
    next_date = calculate_next_date(period_data, date_start)
    try:
        send_email_periodic_task.apply_async(args=[email_recipients, message, subject, period_data, next_date],
                                             eta=next_date)
    except:
        if DEBUG:
            raise


def calculate_next_date(data, date_start):
    if data.get('period_days'):
        days = data.get('period_days')
        next_date = date_start + relativedelta(days=+days)
    elif data.get('period_months'):
        months = data.get('period_months')
        next_date = date_start + relativedelta(months=+months)
    elif data.get('period_years'):
        years = data.get('period_years')
        next_date = date_start + relativedelta(years=+years)
    return next_date


def apply_send_email_task(email_recipients, email_message, subject, kwargs):
    try:
        send_email_task.apply_async(args=[email_recipients, email_message, subject], **kwargs)
    except:
        if DEBUG:
            raise
