from flask import Flask, Blueprint, jsonify, abort, make_response, request
from app.diagnostic.models import *
from flask.ext.sqlalchemy import SQLAlchemy
from app.users.models import User


app_api = Flask(__name__)
app_api.config.from_object('config')
db = SQLAlchemy(app_api)
api_blueprint = Blueprint('api_v1_0', __name__, url_prefix='/v1.0')

model_dict = {'equipment': Equipment,
              'equipment_type': EquipmentType,
              'campaign': Campaign,
              'contract': Contract,
              'norm': Norm,
              'location': Location,
              'manufacturer': Manufacturer,
              'user': User,
              'assigned_to': User,
              'visual_inspection_by': User,
              'electrical_profile': ElectricalProfile,
              'fluid_profile': FluidProfile,
              }


def row2dict(row):
    d = {}
    for column in row.__table__.columns:
        d[column.name] = str(getattr(row, column.name))
    return d


def return_json(items_name, items_list):
    return jsonify({items_name: items_list})


def get_item_fields(item):
    return [{k: str(getattr(item, k)) for k in item.__class__.__dict__.keys() if k[:1] != '_'}]


def get_item(items_model, item_id=None):
    if not item_id:
        return [{'id': item.id, 'name': str(item)} for item in db.session.query(items_model).all()]
    item = db.session.query(items_model).get(item_id)
    if not item:
        abort(404)
    return get_item_fields(item)


def add_item(items_model):
    if not request.json:
        abort(400)
    param_dict = { k:v for k,v in request.json.items() }
    item = items_model(**param_dict)
    db.session.add(item)
    db.session.commit()
    return item.id


def update_item(items_model, item_id):
    if not request.json:
        abort(400)
    item = db.session.query(items_model).get(item_id)
    for k, v in request.json.items():
        setattr(item, k, v)
    db.session.commit()
    return get_item_fields(item)


def delete_item(items_model, item_id):
    rows = db.session.query(items_model).filter(items_model.id == item_id).delete(synchronize_session=False)
    db.session.commit()
    return rows > 0


@app_api.errorhandler(404)
def not_found(error):
    return make_response(return_json('error', 'Not found'), 404)


@api_blueprint.route('/<path>/', methods=['GET', 'POST'])
@api_blueprint.route('/<path>/<int:item_id>', methods=['GET', 'PUT', 'DELETE'])
def handler(path, item_id=None):
    if path not in model_dict:
        abort(404)

    crud_functions = {'GET': get_item,
                      'POST': add_item,
                      'PUT': update_item,
                      'DELETE': delete_item
                      }
    crud_func = crud_functions[request.method]
    args = [model_dict[path]]
    if item_id:
        args.append(item_id)
    return return_json('result', crud_func(*args))

app_api.register_blueprint(api_blueprint)