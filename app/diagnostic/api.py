from flask import jsonify, Blueprint, abort, make_response
from app import db
from .models import Equipment, EquipmentType, Manufacturer, Location, Norm
from app.users.models import User


api_blueprint = Blueprint('api_v1_1', __name__, url_prefix='/api/v1.0')


def row2dict(row):
    d = {}
    for column in row.__table__.columns:
        d[column.name] = str(getattr(row, column.name))
    return d


def get_item_fields(item):
    return [{k: str(getattr(item, k)) for k in item.__class__.__dict__.keys() if k[:1] != '_'}]


def get_items_list(items_model):
    return [{'id': item.id, 'name': str(item)} for item in db.session.query(items_model).all()]


def return_json(items_name, items_list):
    return jsonify({items_name: items_list})


@api_blueprint.errorhandler(404)
def not_found(error):
    return make_response(jsonify({'error': 'Not found'}), 404)


@api_blueprint.route('/test/', methods=['GET'])
def get_tests():
    return return_json('tests', [{'test1': 'ok'}, {'test2': 'ok'}])


@api_blueprint.route('/equipment/', methods=['GET'])
def get_equipment_list():
    return return_json('equipment', get_items_list(Equipment))


@api_blueprint.route('/equipment/<int:item_id>', methods=['GET'])
def get_equipment(item_id):
    item = db.session.query(Equipment).get(item_id)
    if not item:
        abort(404)
    return jsonify({'equipment': get_item_fields(item)})


@api_blueprint.route('/equipment_type/', methods=['GET'])
def get_equipment_type():
    import json
    # return jsonify(results=db.session.query(EquipmentType).all())
    return jsonify(equipment_type=[e.serialize() for e in db.session.query(EquipmentType).all()])
    # return jsonify(get_items_list(EquipmentType))


@api_blueprint.route('/manufacturer/', methods=['GET'])
def get_manufacturer():
    return return_json('manufacturer', get_items_list(Manufacturer))


@api_blueprint.route('/location/', methods=['GET'])
def get_location():
    return return_json('location', get_items_list(Location))


@api_blueprint.route('/user/', methods=['GET'])
@api_blueprint.route('/visual_inspection_by/', methods=['GET'])
@api_blueprint.route('/assigned_to/', methods=['GET'])
def get_user():
    return return_json('user', get_items_list(User))


@api_blueprint.route('/norm/', methods=['GET'])
def get_norm():
    return return_json('norm', get_items_list(Norm))
