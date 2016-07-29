from flask_apidoc import ApiDoc
from api import api

doc = ApiDoc(app=api)


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
@apiDefine PostItemSuccess
@apiSuccess {Integer}  result  The new item id.
@apiSuccessExample Success-Response true:
    HTTP/1.0 200 OK
    Content-Type: application/json
    {
      "result": 5
    }
"""
"""
@apiDefine PutItemSuccess
@apiSuccess {Dict}  result  {"dict of item's params"} - See "Get an item by id"
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
@apiErrorExample {json} Error-Response JSON:
    HTTP/1.0 400 BAD REQUEST
    Content-Type: application/json
    {
      "error": "JSON not found"
    }
@apiErrorExample {json} Error-Response validation:
    HTTP/1.0 400 BAD REQUEST
    Content-Type: application/json
    {
      "name": "field \\"name\\" is required"
    }
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
@apiExample {curl} Example usage:
    curl -i -H "Content-Type: application/json" -X POST \
         -d '{"alias":"user", "email":"user@example.com", "password":"my_very_secure_password"}' \
         http://localhost:8001/api/v1.0/user/

@apiUse PostItemSuccess
@apiUse Error400
"""
"""
@api {put} /user/:id Update an item
@apiVersion 1.0.0
@apiName update_item
@apiGroup User
@apiExample {curl} Example usage:
    curl -i -H "Content-Type: application/json" -X PUT -d '{"alias":"user1"}' http://localhost:8001/api/v1.0/user/10

@apiUse PutItemSuccess
@apiUse Error400
"""
"""
@api {delete} /user/:id Delete an item
@apiVersion 1.0.0
@apiName delete_item
@apiGroup User
@apiExample {curl} Example usage:
    curl -X DELETE http://localhost:8001/api/v1.0/user/10

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

@apiUse GetItemSuccess

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
@apiExample {curl} Example usage:
    curl -i -H "Content-Type: application/json" -X POST \
         -d '{"equipment_number":"987abc", "equipment_type_id":1, "location_id":4, "visual_inspection_by_id": "4", \
              "assigned_to_id": 4, "norm_id":2, "frequency":"25", "name": "Name"}' \
          http://localhost:8001/api/v1.0/equipment/

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

@apiUse PostItemSuccess
@apiUse Error400
"""
"""
@api {put} /equipment/:id Update an item by id
@apiVersion 1.0.0
@apiName update_item
@apiGroup Equipment
@apiExample {curl} Example usage:
    curl -i -H "Content-Type: application/json" -X PUT -d '{"location_id":5}' http://localhost:8001/api/v1.0/equipment/

@apiUse PutItemSuccess
@apiUse Error404
"""
"""
@api {delete} /equipment/:id Delete an item by id
@apiVersion 1.0.0
@apiName delete_item
@apiGroup Equipment
@apiExample {curl} Example usage:
    curl -X DELETE http://localhost:8001/api/v1.0/equipment/11

@apiUse DelItemSuccess
@apiUse Error404
"""


# Equipment_type
"""
@api {get} /equipment_type/ Get a list of items
@apiVersion 1.0.0
@apiName get_items
@apiGroup equipment_type
@apiExample {curl} Example usage:
      curl -i http://localhost:8001/api/v1.0/equipment_type/

@apiUse GetItemsSuccess
@apiUse Error404
"""
"""
@api {get} /equipment_type/:id Get an item by id
@apiVersion 1.0.0
@apiName get_item
@apiGroup equipment_type
@apiExample {curl} Example usage:
      curl -i http://localhost:8001/api/v1.0/equipment_type/1

@apiSuccessExample Success-Response:
    HTTP/1.0 200 OK
    Content-Type: application/json
    {
        "result": {
            "code": "Y",
            "id": 15,
            "name": "Tank",
            "table_name": "tank"
        }
    }

@apiSuccess {Integer}   id
@apiSuccess {String}    name        'maxlength': 50
@apiSuccess {String}    code        'maxlength': 50
@apiSuccess {String}    table_name  'maxlength': 50
@apiUse GetItemSuccess
@apiUse Error404
"""
"""
@api {post} /equipment_type Add a new item
@apiVersion 1.0.0
@apiName add_item
@apiGroup equipment_type
@apiExample {curl} Example usage:
    curl -i -H "Content-Type: application/json" -X POST \
         -d '{"name":"Tank", "code":"Y", "table_name":"tank"}' \
         http://localhost:8001/api/v1.0/equipment_type/

@apiParam {String}    name        'maxlength': 50
@apiParam {String}    code        'maxlength': 50
@apiParam {String}    table_name  'maxlength': 50
@apiUse PostItemSuccess
@apiUse Error400
"""
"""
@api {put} /equipment_type/:id Update an item
@apiVersion 1.0.0
@apiName update_item
@apiGroup equipment_type
@apiExample {curl} Example usage:
    curl -i -H "Content-Type: application/json" -X PUT -d '{"name":"My other name"}'\
    http://localhost:8001/api/v1.0/equipment_type/10

@apiUse PutItemSuccess
@apiUse Error400
"""
"""
@api {delete} /equipment_type/:id Delete an item
@apiVersion 1.0.0
@apiName delete_item
@apiGroup equipment_type
@apiExample {curl} Example usage:
    curl -X DELETE http://localhost:8001/api/v1.0/equipment_type/3

@apiUse DelItemSuccess
@apiUse Error404
"""


# Contract
"""
@api {get} /contract/ Get a list of items
@apiVersion 1.0.0
@apiName get_items
@apiGroup Contract
@apiExample {curl} Example usage:
    curl -i http://localhost:8001/api/v1.0/contract/

@apiUse GetItemsSuccess
@apiUse Error404
"""

"""
@api {get} /contract/:id Get an item by id
@apiVersion 1.0.0
@apiName get_item
@apiGroup Contract
@apiExample {curl} Example usage:
    curl -i http://localhost:8001/api/v1.0/contract/1

@apiSuccessExample Success-Response:
    HTTP/1.0 200 OK
    Content-Type: application/json
    {
        "result": {
            "code": "code",
            "contract_status": {
                "id": 1,
                "name": "Test contract status"
                },
            "contract_status_id": 1,
            "id": 1,
            "name": "first contract"
        }
    }

@apiSuccess {Integer}   id
@apiSuccess {String}    name                'maxlength': 50
@apiSuccess {String}    code                'maxlength': 50
@apiSuccess {String}    contract_status_id  'maxlength': 50
@apiSuccess {Dict}      contract_status
@apiUse GetItemSuccess
@apiUse Error404
"""
"""
@api {post} /contract/ Add a new item
@apiVersion 1.0.0
@apiName add_item
@apiGroup Contract
@apiExample {curl} Example usage:
    curl -i -H "Content-Type: application/json" -X POST \
         -d '{"name":"My contract", "code":"My code", "contract_status_id":1}' \
         http://localhost:8001/api/v1.0/contract/

@apiSuccess {String}    name                'maxlength': 50
@apiSuccess {String}    code                'maxlength': 50
@apiSuccess {String}    contract_status_id  'maxlength': 50

@apiUse PostItemSuccess
@apiUse Error400
"""
"""
@api {put} /contract/:id Update an item
@apiVersion 1.0.0
@apiName update_item
@apiGroup Contract
@apiExample {curl} Example usage:
    curl -i -H "Content-Type: application/json" -X PUT -d '{"name":"My other name"}'\
         http://localhost:8001/api/v1.0/contract/10

@apiUse PutItemSuccess
@apiUse Error400
"""
"""
@api {delete} /contract/:id Delete an item
@apiVersion 1.0.0
@apiName delete_item
@apiGroup Contract
@apiExample {curl} Example usage:
    curl -X DELETE http://localhost:8001/api/v1.0/contract/10

@apiUse DelItemSuccess
@apiUse Error404
"""
