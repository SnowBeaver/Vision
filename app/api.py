from flask import Flask, Blueprint, jsonify, abort, make_response, request
from app.diagnostic.models import *
from flask.ext.sqlalchemy import SQLAlchemy
from app.users.models import User
from flask_apidoc import ApiDoc
from cerberus import Validator
from datetime import datetime


api = Flask(__name__, static_url_path='/app/static')
api.config.from_object('config')
doc = ApiDoc(app=api)
db = SQLAlchemy(api, session_options={'autoflush': False})
api_blueprint = Blueprint('api_v1_0', __name__, url_prefix='/api/v1.0')

equipment_schema = {'id': {'readonly': True},
                    'name': {'type': 'string', 'maxlength': 50, 'required': True},
                    'equipment_number': {'type': 'string', 'maxlength': 50, 'required': True},
                    'equipment_type_id': {'type': 'integer', 'required': True, 'coerce': int},
                    'location_id': {'type': 'integer', 'required': True, 'coerce': int},
                    'visual_inspection_by_id': {'type': 'integer', 'required': True, 'coerce': int},
                    'assigned_to_id': {'type': 'integer', 'required': True, 'coerce': int},
                    'norm_id': {'type': 'integer', 'required': True, 'coerce': int},
                    'manufacturer_id': {'type': 'integer', 'coerce': int},
                    'serial': {'type': 'string', 'maxlength': 50},
                    'manufactured': {'type': 'integer', 'min': 1900, 'max': datetime.now().year, 'coerce': int},
                    'frequency': {'type': 'string', 'allowed': ['25', '50', '60', 'DC']},
                    'description': {'type': 'string'},
                    'modifier':  {'type': 'boolean', 'coerce': bool},
                    'comments':  {'type': 'string'},
                    'visual_date':   {'type': 'string'},
                    'visual_inspection_comments':    {'type': 'string'},
                    'nbr_of_tap_change_ltc': {'type': 'string'},
                    'upstream1': {'type': 'string', 'maxlength': 100},
                    'upstream2': {'type': 'string', 'maxlength': 100},
                    'upstream3': {'type': 'string', 'maxlength': 100},
                    'upstream4': {'type': 'string', 'maxlength': 100},
                    'upstream5': {'type': 'string', 'maxlength': 100},
                    'downstream1':   {'type': 'string', 'maxlength': 100},
                    'downstream2':   {'type': 'string', 'maxlength': 100},
                    'downstream3':   {'type': 'string', 'maxlength': 100},
                    'downstream4':   {'type': 'string', 'maxlength': 100},
                    'downstream5':   {'type': 'string', 'maxlength': 100},
                    'tie_location':  {'type': 'boolean', 'coerce': bool},
                    'tie_maintenance_state': {'type': 'integer', 'coerce': int},
                    'tie_status':    {'type': 'integer', 'coerce': int},
                    'phys_position': {'type': 'integer', 'coerce': int},
                    'tension4':  {'type': 'float', 'coerce': float},
                    'validated': {'type': 'boolean', 'coerce': bool},
                    'invalidation':  {'type': 'boolean', 'coerce': bool},
                    'prev_serial_number':    {'type': 'string', 'maxlength': 50},
                    'prev_equipment_number': {'type': 'string', 'maxlength': 50},
                    'sibling':   {'type': 'integer', 'coerce': int},
                    }
equipment_type_schema = {'id': {'readonly': True},
                         'name': {'type': 'string', 'maxlength': 50},
                         'code': {'type': 'string', 'maxlength': 50},
                         'table_name': {'type': 'string', 'maxlength': 50},
                         }
campaign_schema = {'id': {'readonly': True},
                   'date': {'type': 'datetime', 'coerce': datetime, 'required': True},
                   'created_by_id': {'type': 'integer', 'coerce': int, 'required': True},
                   'equipment_id': {'type': 'integer', 'coerce': int, 'required': True},
                   'performed_by_id': {'type': 'integer', 'coerce': int, 'required': True},
                   'lab_id': {'type': 'integer', 'coerce': int, 'required': True},
                   'material_id': {'type': 'integer', 'coerce': int},
                   'analysis_number': {'type': 'string', 'maxlength': 15},
                   'percent_ratio': {'type': 'boolean', 'coerce': bool},
                   'fluid_type_id': {'type': 'integer', 'coerce': int},
                   'charge': {'type': 'float', 'coerce': float},
                   'date_prelevement': {'type': 'datetime', 'coerce': datetime},
                   'remark': {'type': 'string'},
                   'modifier': {'type': 'boolean', 'coerce': bool},
                   'transmission': {'type': 'boolean', 'coerce': bool},
                   'repair_date': {'type': 'datetime', 'coerce': datetime},
                   'repair_description': {'type': 'string'},
                   'if_rem': {'type': 'string', 'maxlength': 5},
                   'if_ok': {'type': 'string', 'maxlength': 5},
                   'recommandation_id': {'type': 'integer', 'coerce': int},
                   'recommendationNotes': {'type': 'string'},
                   'recommended_by_id': {'type': 'integer', 'coerce': int},
                   'date_application': {'type': 'datetime', 'coerce': datetime},
                   'comments': {'type': 'string'},
                   'mws': {'type': 'float', 'coerce': float},
                   'temperature': {'type': 'float', 'coerce': float},
                   'sampling_card_print': {'type': 'boolean', 'coerce': bool},
                   'contract_id': {'type': 'integer', 'coerce': int},
                   'containers': {'type': 'float', 'coerce': float},
                   'sampling_card_gathered': {'type': 'integer', 'coerce': int},
                   'gathered_test_type': {'type': 'string', 'maxlength': 50},
                   'lab_contract_id': {'type': 'integer', 'coerce': int},
                   'seringe_num': {'type': 'string', 'maxlength': 50},
                   'data_valid': {'type': 'integer', 'coerce': int},
                   'status1': {'type': 'integer', 'coerce': int},
                   'status2': {'type': 'integer', 'coerce': int},
                   'error_state': {'type': 'integer', 'coerce': int},
                   'error_code': {'type': 'integer', 'coerce': int},
                   'ambient_air_temperature': {'type': 'float', 'coerce': float},
                   'bushing': {'type': 'boolean', 'coerce': bool},
                   'winding': {'type': 'boolean', 'coerce': bool},
                   'insulation_pf': {'type': 'boolean', 'coerce': bool},
                   'insulation': {'type': 'boolean', 'coerce': bool},
                   'visual_inspection': {'type': 'boolean', 'coerce': bool},
                   'resistance': {'type': 'boolean', 'coerce': bool},
                   'degree': {'type': 'boolean', 'coerce': bool},
                   'turns': {'type': 'boolean', 'coerce': bool},
                   'gas': {'type': 'boolean', 'coerce': bool},
                   'water': {'type': 'boolean', 'coerce': bool},
                   'furans': {'type': 'boolean', 'coerce': bool},
                   'inhibitor': {'type': 'boolean', 'coerce': bool},
                   'pcb': {'type': 'boolean', 'coerce': bool},
                   'qty': {'type': 'integer', 'coerce': int},
                   'sampling': {'type': 'integer', 'coerce': int},
                   'dielec': {'type': 'boolean', 'coerce': bool},
                   'acidity': {'type': 'boolean', 'coerce': bool},
                   'density': {'type': 'boolean', 'coerce': bool},
                   'pcb_jar': {'type': 'boolean', 'coerce': bool},
                   'inhibitor_jar': {'type': 'boolean', 'coerce': bool},
                   'point': {'type': 'boolean', 'coerce': bool},
                   'dielec_2': {'type': 'boolean', 'coerce': bool},
                   'color': {'type': 'boolean', 'coerce': bool},
                   'pf': {'type': 'boolean', 'coerce': bool},
                   'particles': {'type': 'boolean', 'coerce': bool},
                   'metals': {'type': 'boolean', 'coerce': bool},
                   'viscosity': {'type': 'boolean', 'coerce': bool},
                   'dielec_d': {'type': 'boolean', 'coerce': bool},
                   'ift': {'type': 'boolean', 'coerce': bool},
                   'pf_100': {'type': 'boolean', 'coerce': bool},
                   'furans_f': {'type': 'boolean', 'coerce': bool},
                   'water_w': {'type': 'boolean', 'coerce': bool},
                   'corr': {'type': 'boolean', 'coerce': bool},
                   'dielec_i': {'type': 'boolean', 'coerce': bool},
                   'visual': {'type': 'boolean', 'coerce': bool},
                   'qty_jar': {'type': 'integer', 'coerce': int},
                   'sampling_jar': {'type': 'integer', 'coerce': int},
                   'pcb_vial': {'type': 'boolean', 'coerce': bool},
                   'antioxidant': {'type': 'boolean', 'coerce': bool},
                   'qty_vial': {'type': 'integer', 'coerce': int},
                   'sampling_vial': {'type': 'integer', 'coerce': int},
                   }
contract_schema = {'id': {'readonly': True},
                   'name': {'type': 'string', 'maxlength': 50},
                   'code': {'type': 'string', 'maxlength': 50},
                   'contract_status_id': {'type': 'integer', 'required': True, 'coerce': int},
                   }
norm_schema = {'id': {'readonly': True},
               'name': {'type': 'string', 'maxlength': 50},
               'table_name': {'type': 'string', 'maxlength': 50},
               }
location_schema = {'id': {'readonly': True},
                   'name': {'type': 'string', 'maxlength': 50},
                   }
manufacturer_schema = {'id': {'readonly': True},
                       'name': {'type': 'string', 'maxlength': 50, 'required': True},
                       'markings': {'type': 'string'},
                       'location': {'type': 'string', 'maxlength': 256},
                       'description': {'type': 'string'},
                       }
user_schema = {'id': {'readonly': True},
               'name': {'type': 'string', 'maxlength': 50},
               'alias': {'type': 'string', 'maxlength': 50, 'required': True},
               'email': {'type': 'string', 'maxlength': 120, 'required': True},
               'password': {'type': 'string', 'maxlength': 50, 'required': True},
               'status': {'type': 'integer', 'coerce': int},
               'address': {'type': 'string', 'maxlength': 255},
               'mobile': {'type': 'string', 'maxlength': 50},
               'website': {'type': 'string', 'maxlength': 255},
               'country': {'type': 'string', 'maxlength': 255},
               'photo': {'type': 'string', 'maxlength': 255},
               'description': {'type': 'string'},
               'active': {'type': 'boolean', 'coerce': bool},
               'confirmed': {'type': 'boolean', 'coerce': bool},
               'confirmed_at': {'type': 'datetime', 'coerce': datetime},
               'created': {'type': 'datetime', 'coerce': datetime},
               'updated': {'type': 'datetime', 'coerce': datetime},
               }
electrical_profile_schema = {'id': {'readonly': True},
                             'selection': {'type': 'string', 'maxlength': 256},
                             'description': {'type': 'string', 'maxlength': 1204},
                             'bushing': {'type': 'boolean', 'coerce': bool},
                             'winding': {'type': 'boolean', 'coerce': bool},
                             'insulation_pf': {'type': 'boolean', 'coerce': bool},
                             'insulation': {'type': 'boolean', 'coerce': bool},
                             'visual': {'type': 'boolean', 'coerce': bool},
                             'resistance': {'type': 'boolean', 'coerce': bool},
                             'degree': {'type': 'boolean', 'coerce': bool},
                             'turns': {'type': 'boolean', 'coerce': bool},
                             }
fluid_profile_schema = {'id': {'readonly': True},
                        'selection': {'type': 'string', 'maxlength': 256},
                        'description': {'type': 'string', 'maxlength': 1204},
                        'gas': {'type': 'boolean', 'coerce': bool},
                        'water': {'type': 'boolean', 'coerce': bool},
                        'furans': {'type': 'boolean', 'coerce': bool},
                        'inhibitor': {'type': 'boolean', 'coerce': bool},
                        'pcb': {'type': 'boolean', 'coerce': bool},
                        'qty': {'type': 'integer', 'coerce': int},
                        'sampling': {'type': 'integer', 'coerce': int},
                        'dielec': {'type': 'boolean', 'coerce': bool},
                        'acidity': {'type': 'boolean', 'coerce': bool},
                        'density': {'type': 'boolean', 'coerce': bool},
                        'pcb_jar': {'type': 'boolean', 'coerce': bool},
                        'inhibitor_jar': {'type': 'boolean', 'coerce': bool},
                        'point': {'type': 'boolean', 'coerce': bool},
                        'dielec_2': {'type': 'boolean', 'coerce': bool},
                        'color': {'type': 'boolean', 'coerce': bool},
                        'pf': {'type': 'boolean', 'coerce': bool},
                        'particles': {'type': 'boolean', 'coerce': bool},
                        'metals': {'type': 'boolean', 'coerce': bool},
                        'viscosity': {'type': 'boolean', 'coerce': bool},
                        'dielec_d': {'type': 'boolean', 'coerce': bool},
                        'ift': {'type': 'boolean', 'coerce': bool},
                        'pf_100': {'type': 'boolean', 'coerce': bool},
                        'furans_f': {'type': 'boolean', 'coerce': bool},
                        'water_w': {'type': 'boolean', 'coerce': bool},
                        'corr': {'type': 'boolean', 'coerce': bool},
                        'dielec_i': {'type': 'boolean', 'coerce': bool},
                        'visual': {'type': 'boolean', 'coerce': bool},
                        'qty_jar': {'type': 'integer', 'coerce': int},
                        'sampling_jar': {'type': 'integer', 'coerce': int},
                        'pcb_vial': {'type': 'boolean', 'coerce': bool},
                        'antioxidant': {'type': 'boolean', 'coerce': bool},
                        'qty_vial': {'type': 'integer', 'coerce': int},
                        'sampling_vial': {'type': 'integer', 'coerce': int},
                        }
test_result_schema = {'id': {'readonly': True},
                      'campaign_id': {'type': 'integer', 'coerce': int},
                      'reason_id': {'type': 'integer', 'coerce': int},
                      'date_analyse': {'type': 'datetime', 'coerce': datetime},
                      'test_type_id': {'type': 'integer', 'coerce': int},
                      'sampling_point_id': {'type': 'integer', 'coerce': int},
                      'test_status_id': {'type': 'integer', 'coerce': int},
                      }
model_dict = {'equipment': {'model': Equipment, 'schema': equipment_schema},
              'equipment_type': {'model': EquipmentType, 'schema': equipment_type_schema},
              'campaign': {'model': Campaign, 'schema': campaign_schema},
              'contract': {'model': Contract, 'schema': contract_schema},
              'norm': {'model': Norm, 'schema': norm_schema},
              'location': {'model': Location, 'schema': location_schema},
              'manufacturer': {'model': Manufacturer, 'schema': manufacturer_schema},
              'user': {'model': User, 'schema': user_schema},
              'assigned_to': {'model': User, 'schema': user_schema},
              'visual_inspection_by': {'model': User, 'schema': user_schema},
              'electrical_profile': {'model': ElectricalProfile, 'schema': electrical_profile_schema},
              'fluid_profile': {'model': FluidProfile, 'schema': fluid_profile_schema},
              'test_result': {'model': TestResult, 'schema': test_result_schema},
              }

eq_type_dict = {1: 'air_bkr',
                2: 'bushing',
                3: 'capacitor',
                4: 'bkr',
                5: 'source',
                6: 'cable',
                # 7: 'Switchgear',
                # 8: 'Induction machine',
                9: 'synch',
                # 10: 'localization'
                11: 'tc',  # tap changer
                12: 'rect',
                # 13: 'site',
                14: 'transfo',
                15: 'tank',
                16: 'switch',
                17: 'induc',
                # 18: 'neutral resistance',
                # 19: 'gas sensor',
                }


class Tree(db.Model):
    __tablename__ = 'tree'

    id = db.Column(db.Integer(), primary_key=True, nullable=False, autoincrement=True)
    parent_id = db.Column('parent_id', db.ForeignKey("tree.id"), nullable=True)
    equipment_id = db.Column('equipment_id', db.ForeignKey(Equipment.id), nullable=False)
    equipment = db.relationship(Equipment, foreign_keys='Tree.equipment_id')
    icon = db.Column(db.String(126))
    opened = db.Column(db.Boolean)
    disabled = db.Column(db.Boolean)
    selected = db.Column(db.Boolean)
    type = db.Column(db.String(58))
    view = db.Column(db.String(126))
    status = db.Column(db.SMALLINT)

    #
    # def __repr__(self):
    #     return "{}".format(self.id)
    #
    # def serialize(self):
    #     """Return object data in easily serializeable format"""
    #     return {'id': self.id,
    #             'parent_id': self.parent_id,
    #             'icon': self.icon,
    #             'opened': self.opened,
    #             'disabled': self.disabled,
    #             'selected': self.selected,
    #             'type': self.type,
    #             'view': self.view,
    #             'status': self.status,
    #             }


class TreeTranslation(db.Model):
    __tablename__ = 'tree_translation'

    id = db.Column(db.Integer(), primary_key=True, nullable=False, autoincrement=True)
    locale = db.Column(db.String(10))
    text = db.Column(db.String(250))
    tooltip = db.Column(db.String(250))


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
    validation_schema = model_dict[path]['schema']
    param_dict = {k: v for k, v in request.json.items()}
    v = Validator()
    if not v.validate(param_dict, validation_schema):
        abort(400, v.errors)

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


# General
"""
@apiDefine Version100
@apiVersion 1.0.0
"""
"""
@apiDefine GetItemsSuccess
@apiSuccess {Dict}  result  [list of dicts with items parameters].
@apiSuccessExample Success-Response:
    HTTP/1.0 200 OK
    Content-Type: application/json
    {
      "result": [
        {"id": 1, ... },
        {"id": 2, ... },
        ...
      ]
    }
"""
"""
@apiDefine GetItemSuccess
@apiSuccess {Dict}  result  {"dict of item's params"}
"""
"""
@apiDefine DelItemSuccess
@apiSuccess {Boolean}  result  True or False if item with id is present but couldn't be deleted (e.g. in relative DBMS).
@apiSuccessExample Success-Response false:
    HTTP/1.0 200 OK
    Content-Type: application/json
    {
      "result": false
    }
@apiSuccessExample Success-Response true:
    HTTP/1.0 200 OK
    Content-Type: application/json
    {
      "result": true
    }
"""
"""
@apiDefine Error404
@apiError(Error 404){Dict}  NotFound    {"error": "Not found"}
@apiErrorExample {json} Error-Response:
    HTTP/1.0 404 NOT FOUND
    Content-Type: application/json
    {
      "error": "Not found"
    }
"""
"""
@apiDefine Error400
@apiError(Error 400){Dict}  JSONNotFound    {"error": "JSON not found"}
@apiError(Error 400){Dict}  ValidationError    {"field": "error"}
"""


# Users
"""
@api {get} /user Get a list of items
@apiVersion 1.0.0
@apiName get_items
@apiGroup User
@apiExample {curl} Example usage:
      curl -i http://localhost:8001/api/v1.0/user/

@apiUse GetItemsSuccess
@apiUse Error404
"""

"""
@api {get} /user/:id Get an item by id
@apiVersion 1.0.0
@apiName get_item
@apiGroup User
@apiExample {curl} Example usage:
      curl -i http://localhost:8001/api/v1.0/user/1

@apiUse GetItemSuccess
@apiUse Error404
"""
"""
@api {post} /user Add a new item
@apiVersion 1.0.0
@apiName add_item
@apiGroup User

@apiSuccess {Number}     result              The new item id.
@apiUse Error400
"""
"""
@api {put} /user/:id Update an item
@apiVersion 1.0.0
@apiName update_item
@apiGroup User

@apiSuccess {Number}     result              See {get} /user/:id.
@apiUse Error400
"""
"""
@api {delete} /user/:id Delete an item
@apiVersion 1.0.0
@apiName delete_item
@apiGroup User

@apiUse DelItemSuccess
@apiUse Error404
"""


# Equipment
"""
@api {get} /equipment Get a list of items
@apiVersion 1.0.0
@apiName get_items
@apiGroup Equipment
@apiExample {curl} Example usage:
      curl -i http://localhost:8001/api/v1.0/equipment/

@apiUse GetItemsSuccess
@apiUse Error404
"""
"""
@api {get} /equipment/:id Get an item by id
@apiVersion 1.0.0
@apiName get_item
@apiGroup Equipment


@apiExample {curl} Example usage:
      curl -i http://localhost:8001/api/v1.0/equipment/1

@apiSuccessExample Success-Response:
    HTTP/1.0 200 OK
    Content-Type: application/json
    {
        "result": {"id": 1,
                   "name": "Air Breaker",
                   "equipment_number": "123ABC456",
                   ...
                   "prev_equipment_number": "789WSX159",
                   "sibling": 1,
                   }
    }

@apiSuccess {Integer}         id
@apiSuccess {String(50)}      name
@apiSuccess {String(50)}      equipment_number
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
@api {post} /equipment Add a new item
@apiVersion 1.0.0
@apiName add_item
@apiGroup Equipment

@apiParam {String(50)}      name                        Required.
@apiParam {String(50)}      equipment_number            Required.
@apiParam {Integer}         equipment_type_id           Required.
@apiParam {Integer}         location_id                 Required.
@apiParam {Integer}         visual_inspection_by_id     Required. User id
@apiParam {Integer}         assigned_to_id              Required. User id
@apiParam {Integer}         norm_id                     Required.
@apiParam {String(50)}      serial
@apiParam {Integer}         manufacturer_id
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
@api {put} /equipment/:id Update an item by id
@apiVersion 1.0.0
@apiName update_item
@apiGroup Equipment

@apiSuccess {Boolean}        result     True
@apiUse Error404
"""
"""
@api {delete} /equipment/:id Delete an item by id
@apiVersion 1.0.0
@apiName delete_item
@apiGroup Equipment

@apiUse DelItemSuccess
@apiUse Error404
"""


# Equipment_type
equipment_type_schema = {'id': {'readonly': True},
                         'name': {'type': 'string', 'maxlength': 50},
                         'code': {'type': 'string', 'maxlength': 50},
                         'table_name': {'type': 'string', 'maxlength': 50},
                         }


"""
@api {get} /equipment_type Get a list of items
@apiVersion 1.0.0
@apiName get_items
@apiGroup equipment_type

@apiUse GetItemsSuccess
@apiUse Error404
"""
"""
@api {get} /equipment_type/:id Get an item by id
@apiVersion 1.0.0
@apiName get_item
@apiGroup equipment_type

@apiUse GetItemSuccess
@apiUse Error404
"""
"""
@api {post} /equipment_type Add a new item
@apiVersion 1.0.0
@apiName add_item
@apiGroup equipment_type

@apiSuccess {Number}     result              The new item id.
@apiUse Error400
"""
"""
@api {put} /equipment_type/:id Update an item
@apiVersion 1.0.0
@apiName update_item
@apiGroup equipment_type

@apiSuccess {Number}     result              See {get} /equipment_type/:id.
@apiUse Error400
"""
"""
@api {delete} /equipment_type/:id Delete an item
@apiVersion 1.0.0
@apiName delete_item
@apiGroup equipment_type

@apiUse DelItemSuccess
@apiUse Error404
"""