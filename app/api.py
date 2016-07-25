from flask import Flask, Blueprint, jsonify, abort, make_response, request
from app.diagnostic.models import *
from flask.ext.sqlalchemy import SQLAlchemy
from app.users.models import User
from flask_apidoc import ApiDoc


api = Flask(__name__, static_url_path='/app/static')
api.config.from_object('config')
doc = ApiDoc(app=api)
db = SQLAlchemy(api)
api_blueprint = Blueprint('api_v1_0', __name__, url_prefix='/api/v1.0')


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
              'test_result': TestResult,
              }


def return_json(items_name, items_list):
    return jsonify({items_name: items_list})


def get_item(items_model, item_id=None):
    if item_id:
        item = db.session.query(items_model).get(item_id) or abort(404)
        return item.serialize()
    if request.args:
        kwargs = {key: request.args.get(key) for key in request.args if hasattr(items_model, key)
                  or abort(400, 'Wrong attribute: {}'.format(key))
                  }
        return [item.serialize() for item in db.session.query(items_model).filter_by(**kwargs)]
    return [item.serialize() for item in db.session.query(items_model).all()]


def add_item(items_model):
    if not request.json:
        abort(400, 'JSON not found')

    param_dict = { k:v for k,v in request.json.items() }
    item = items_model(**param_dict)
    db.session.add(item)
    db.session.commit()
    return item.id


def update_item(items_model, item_id):
    if not request.json:
        abort(400, 'JSON not found')
    item = db.session.query(items_model).get(item_id)
    for k, v in request.json.items():
        setattr(item, k, v)
    db.session.commit()
    return item.serialize()


def delete_item(items_model, item_id):
    rows = db.session.query(items_model).filter(items_model.id == item_id).delete(synchronize_session=False)
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
    args = [model_dict[path]]
    if item_id:
        args.append(item_id)
    return return_json('result', crud_func(*args))


api.register_blueprint(api_blueprint)


"""
@apiDefine Version100
@apiVersion 1.0.0
"""
"""
@apiDefine GetSuccess
@apiSuccess {Dict}  result  [list of dicts with items parameters].
"""
"""
@apiDefine Error404
@apiError(Error 404){Dict}  NotFound    {"error": "Not found"}
"""
"""
@apiDefine Error400
@apiError(Error 400){Dict}  NotFound    {"error": "JSON not found"}
"""

#### General
"""
@api {get} /<path>/ Gets a list of items
@apiVersion 1.0.0
@apiName get_items
@apiGroup path

@apiUse GetSuccess
@apiUse Error404
"""

#### Users
"""
@api {get} /user Gets a list of items
@apiVersion 1.0.0
@apiName get_items
@apiGroup User

@apiUse GetSuccess
@apiUse Error404
"""
"""
@api {get} /user/:id Gets an item by id
@apiVersion 1.0.0
@apiName get_item
@apiGroup User

@apiSuccess         {Dict}                 result { "dict of item's params"}
@apiUse Error404
"""
"""
@api {post} /user Adds a new User
@apiVersion 1.0.0
@apiName add_item(User)
@apiGroup User

@apiSuccess {Number}     result              The new item id.
@apiUse Error400
"""
"""
@api {put} /user/:id Updates an User
@apiVersion 1.0.0
@apiName update_item
@apiGroup User

@apiSuccess {Number}     result              See {get} /user/:id.
@apiUse Error400
"""
"""
@api {delete} /user/:id Deletes an User
@apiVersion 1.0.0
@apiName delete_item
@apiGroup User

@apiSuccess {Boolean}    result              True or False if couldn't delete.
@apiUse Error404
"""


#### Equipment
"""
@api {get} /equipment Gets a list of items
@apiVersion 1.0.0
@apiName get_items
@apiGroup Equipment

@apiUse GetSuccess
@apiUse Error404
"""
"""
@api {get} /equipment/:id Gets an item by id
@apiVersion 1.0.0
@apiName get_item
@apiGroup Equipment

@apiSuccess {Integer}         id
@apiSuccess {String(50)}      name
@apiSuccess {Integer}         equipment_number
@apiSuccess {String(50)}      serial
@apiSuccess {Integer}         equipment_type_id
@apiSuccess {Dict}            equipment_type
@apiSuccess {Integer}         manufacturer_id
@apiSuccess {Dict}            manufacturer
@apiSuccess {Integer}         manufactured                Year manufactured, from 1900
@apiSuccess {String}          frequency                   '25', '50', '60', 'DC'
@apiSuccess {String}          description
@apiSuccess {Integer}         location_id
@apiSuccess {Dict}            location
@apiSuccess {Boolean}         modifier
@apiSuccess {String}          comments
@apiSuccess {String}          visual_date                 Date where was done the last visual inspection.
@apiSuccess {Integer}         visual_inspection_by_id     User
@apiSuccess {Dict}            visual_inspection_by
@apiSuccess {Integer}         assigned_to_id              User
@apiSuccess {Dict}            assigned_to
@apiSuccess {String}          visual_inspection_comments  Visual inspection comments,
@apiSuccess {String}          nbr_of_tap_change_ltc       Number of tap change on LTC
@apiSuccess {Integer}         norm_id
@apiSuccess {Dict}            norm
@apiSuccess {String(100)}     upstream1                   Upstream device name
@apiSuccess {String(100)}     upstream2                   Upstream device name
@apiSuccess {String(100)}     upstream3                   Upstream device name
@apiSuccess {String(100)}     upstream4                   Upstream device name
@apiSuccess {String(100)}     upstream5                   Upstream device name
@apiSuccess {String(100)}     downstream1                 Downstream device name
@apiSuccess {String(100)}     downstream2                 Downstream device name
@apiSuccess {String(100)}     downstream3                 Downstream device name
@apiSuccess {String(100)}     downstream4                 Downstream device name
@apiSuccess {String(100)}     downstream5                 Downstream device name
@apiSuccess {Boolean}         tie_location                Tie device location
@apiSuccess {Integer}         tie_maintenance_state       Tie is open or closed during maintenance
@apiSuccess {Integer}         tie_status                  TieAnalysisState.
@apiSuccess {Integer}         phys_position
@apiSuccess {Float}           tension4                    Voltage4
@apiSuccess {Boolean}         validated
@apiSuccess {Boolean}         invalidation
@apiSuccess {String(50)}      prev_serial_number
@apiSuccess {String(50)}      prev_equipment_number
@apiSuccess {Integer}         sibling

@apiUse Error404
"""
"""
@api {post} /equipment Adds a new item
@apiVersion 1.0.0
@apiName add_item(Equipment)
@apiGroup Equipment

@apiParam {String(50)}      name                        Required.
@apiParam {Integer}         equipment_number            Required.
@apiParam {String(50)}      serial                      Required.
@apiParam {Integer}         equipment_type_id           Required.
@apiParam {Integer}         manufacturer_id             Required.
@apiParam {Integer}         location_id                 Required.
@apiParam {Integer}         visual_inspection_by_id     Required. User id
@apiParam {Integer}         assigned_to_id              Required. User id
@apiParam {Integer}         norm_id                     Required.
@apiParam {Integer}         manufactured                Year manufactured, from 1900
@apiParam {String}          frequency                   '25', '50', '60', 'DC'
@apiParam {String}          description
@apiParam {Boolean}         modifier
@apiParam {String}          comments
@apiParam {String}          visual_date                 Date where was done the last visual inspection.
@apiParam {String}          visual_inspection_comments  Visual inspection comments,
@apiParam {String}          nbr_of_tap_change_ltc       Number of tap change on LTC
@apiParam {String(100)}     upstream1                   Upstream device name
@apiParam {String(100)}     upstream2                   Upstream device name
@apiParam {String(100)}     upstream3                   Upstream device name
@apiParam {String(100)}     upstream4                   Upstream device name
@apiParam {String(100)}     upstream5                   Upstream device name
@apiParam {String(100)}     downstream1                 Downstream device name
@apiParam {String(100)}     downstream2                 Downstream device name
@apiParam {String(100)}     downstream3                 Downstream device name
@apiParam {String(100)}     downstream4                 Downstream device name
@apiParam {String(100)}     downstream5                 Downstream device name
@apiParam {Boolean}         tie_location                Tie device location
@apiParam {Integer}         tie_maintenance_state       Tie is open or closed during maintenance
@apiParam {Integer}         tie_status                  TieAnalysisState.
@apiParam {Integer}         phys_position
@apiParam {Float}           tension4                    Voltage4
@apiParam {Boolean}         validated
@apiParam {Boolean}         invalidation
@apiParam {String(50)}      prev_serial_number
@apiParam {String(50)}      prev_equipment_number
@apiParam {Integer}         sibling

@apiSuccess {Integer}        result     id of new item.
@apiUse Error400
"""
"""
@api {put} /equipment/:id Updates an item by id
@apiVersion 1.0.0
@apiName update_item
@apiGroup Equipment

@apiSuccess {Boolean}        result     True
@apiUse Error404
"""
"""
@api {delete} /equipment/:id Deletes an Equipment
@apiVersion 1.0.0
@apiName delete_item
@apiGroup Equipment

@apiSuccess {Boolean}    result              True if all ok.
@apiUse Error404
"""
