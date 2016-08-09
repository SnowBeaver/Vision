from flask import Flask, Blueprint, jsonify, abort, make_response, request
from flask.ext.sqlalchemy import SQLAlchemy
from cerberus import Validator
from api_utility import model_dict, eq_type_dict, Tree, TreeTranslation
from app.diagnostic.models import Equipment, TestResult, Campaign

api = Flask(__name__, static_url_path='/app/static')
api.config.from_object('config')
db = SQLAlchemy(api, session_options={'autoflush': False})
api_blueprint = Blueprint('api_v1_0', __name__, url_prefix='/api/v1.0')


def return_json(items_name, items_list):
    return jsonify({items_name: items_list})


def get_item(path, item_id=None):
    items_model = model_dict[path]['model']
    if item_id:
        item = db.session.query(items_model).get(item_id) or abort(404)
        return item.serialize()
    if request.args:
        kwargs = {key: request.args.get(key) for key in request.args if hasattr(items_model, key)
                  or abort(400, 'Wrong attribute: {}'.format(key))
                  }
        if items_model == Campaign and 'equipment_id' in kwargs:
            campaing_ids = {item.campaign_id for item in db.session.query(TestResult).filter_by(**kwargs)}
            return [item.serialize() for item in db.session.query(Campaign).filter(Campaign.id.in_(campaing_ids))]

        return [item.serialize() for item in db.session.query(items_model).filter_by(**kwargs)]
    return [item.serialize() for item in db.session.query(items_model).all()]


def add_item(path):
    if not request.json:
        abort(400, 'JSON not found')

    items_model = model_dict[path]['model']
    validation_schema = model_dict[path]['schema']
    param_dict = {k: v for k, v in request.json.items()}
    v = Validator()
    if not v.validate(param_dict, validation_schema):
        abort(400, v.errors)

    item = items_model(**param_dict)
    db.session.add(item)
    db.session.commit()
    if items_model == Equipment:

        param_tree_dict = {
            'equipment_id': item.id,
            'parent_id': 32,
            'icon': '../app/static/img/icons/{0}_b.ico'.format(eq_type_dict.get(item.equipment_type_id, '')),
            'type': '{0}'.format(eq_type_dict.get(item.equipment_type_id, ''))
        }
        item_tree = Tree(**param_tree_dict)
        db.session.add(item_tree)
        db.session.commit()
        param_tree_trans_dict = {
            'id': item_tree.id, 'locale': 'en',
            'text': param_dict['name'],
            'tooltip': param_dict['name']
        }
        item_tree_trans = TreeTranslation(**param_tree_trans_dict)
        db.session.add(item_tree_trans)
        db.session.commit()
    return item.id


def update_item(path, item_id):
    if not request.json:
        abort(400, 'JSON not found')

    items_model = model_dict[path]['model']
    item = db.session.query(items_model).get(item_id)
    for k, v in request.json.items():
        setattr(item, k, v)
    db.session.commit()
    return item.serialize()


def delete_item(path, item_id):
    items_model = model_dict[path]['model']
    try:
        rows = db.session.query(items_model).filter(items_model.id == item_id).delete(synchronize_session=False)
    except:
        return False
    else:
        db.session.commit()
        return rows > 0


@api.errorhandler(404)
def not_found(error):
    return make_response(return_json('error', 'Not found'), 404)


@api.errorhandler(400)
def bad_request(error):
    return make_response(return_json('error', error.description), 400)


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
    args = [path]
    if item_id:
        args.append(item_id)
    return return_json('result', crud_func(*args))


api.register_blueprint(api_blueprint)
