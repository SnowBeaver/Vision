import pytz

from flask_mail import Message
from flask import g
from app import app, mail


NOREPLY_EMAIL = app.config['NOREPLY_EMAIL']
LOG_EMAIL = app.config.get('LOG_EMAIL', False)


def send_email(recipients, body, subject='News from Vision', sender=NOREPLY_EMAIL):
    """Send email"""
    msg = Message(subject=subject, sender=sender, body=body, recipients=recipients)
    if LOG_EMAIL:
        app.logger.debug(msg)
    else:
        mail.send(msg)


def generate_message(path, item):
    data = email_dict[path]['item'](item)
    return email_dict[path]['tmpl'].format(**data)


schedule_tmpl = """
Task #{id} has been updated by {updated_by}.

\tTask details:
Test recommendation: #{test_recommendation_id}
Test recommendation description: {test_recommendation_description}
Status: {status}
Description: {description}
Assigned to: {assigned_to_name} (Email: {assigned_to_email}, Contact Phone: {assigned_to_phone})
Created on: {date_created}
Start on: {date_start}
Updated on: {date_updated}
"""

equipment_tmpl = """
Equipment health state of {name} has been changed to {status}
"""


def schedule_data(item):
    info = {
        'id': item.id,
        'updated_by': g.user.name,      # TODO: Remake - shouldn't be here?
        'date_updated': '{:%m/%d/%Y %I:%M %p}'.format(item.date_updated.replace(tzinfo=pytz.utc)) if item.date_updated else '',
        'test_recommendation_id': item.test_recommendation_id,
        'test_recommendation_description': item.test_recommendation.recommendation_notes or item.test_recommendation.recommendation.name or '',
        'status': item.status.name if item.status else '',
        'description': item.description or '',
        'assigned_to_name': item.assigned_to.name or '',
        'assigned_to_email': item.assigned_to.email or '',
        'assigned_to_phone': item.assigned_to.mobile or '-',
        'date_created': '{:%m/%d/%Y %I:%M %p}'.format(item.date_created.replace(tzinfo=pytz.utc)) if item.date_created else '',
        'date_start': '{:%m/%d/%Y %I:%M %p}'.format(item.date_start.replace(tzinfo=pytz.utc)) if item.date_start else '',
    }
    return info


def equipment_data(item):
    info = {
        'name': item.name or '',
        'status': item.status,  #TODO: Get equipment status name
    }
    return info


email_dict = {
    'schedule': {
        'tmpl': schedule_tmpl,
        'item': schedule_data
    },
    'equipment': {
        'tmpl': equipment_tmpl,
        'item': equipment_data
    }
}
