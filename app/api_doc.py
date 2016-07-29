from flask_apidoc import ApiDoc
from api import api

doc = ApiDoc(app=api)


# General
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

@apiSuccess {Integer}     id
@apiSuccess {String(50)}  name
@apiSuccess {String(50)}  code
@apiSuccess {String(50)}  table_name
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

@apiParam {String(50)}  name
@apiParam {String(50)}  code
@apiParam {String(50)}  table_name
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

@apiSuccess {Integer}     id
@apiSuccess {String(50)}  name
@apiSuccess {String(50)}  code
@apiSuccess {String(50)}  contract_status_id
@apiSuccess {Dict}        contract_status
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

@apiParam {String(50)}  name
@apiParam {String(50)}  code
@apiParam {String(50)}  contract_status_id
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


# Norm
"""
@api {get} /norm/ Get a list of items
@apiVersion 1.0.0
@apiName get_items
@apiGroup norm
@apiExample {curl} Example usage:
      curl -i http://localhost:8001/api/v1.0/norm/

@apiUse GetItemsSuccess
@apiUse Error404
"""
"""
@api {get} /norm/:id Get an item by id
@apiVersion 1.0.0
@apiName get_item
@apiGroup norm
@apiExample {curl} Example usage:
      curl -i http://localhost:8001/api/v1.0/norm/1

@apiSuccessExample Success-Response:
    HTTP/1.0 200 OK
    Content-Type: application/json
    {
        "result": {
            "id": 1,
            "name": "Norms furan ",
            "table_name": "norm_furan"
        }
    }

@apiSuccess {Integer}     id
@apiSuccess {String(50)}  name
@apiSuccess {String(50)}  table_name
@apiUse GetItemSuccess
@apiUse Error404
"""
"""
@api {post} /norm Add a new item
@apiVersion 1.0.0
@apiName add_item
@apiGroup norm
@apiExample {curl} Example usage:
    curl -i -H "Content-Type: application/json" -X POST \
         -d '{"name":"Norms furan", "table_name":"norm_furan"}' \
         http://localhost:8001/api/v1.0/norm/

@apiParam {String(50)}  name
@apiParam {String(50)}  table_name
@apiUse PostItemSuccess
@apiUse Error400
"""
"""
@api {put} /norm/:id Update an item
@apiVersion 1.0.0
@apiName update_item
@apiGroup norm
@apiExample {curl} Example usage:
    curl -i -H "Content-Type: application/json" -X PUT -d '{"name":"My other name"}'\
    http://localhost:8001/api/v1.0/norm/10

@apiUse PutItemSuccess
@apiUse Error400
"""
"""
@api {delete} /norm/:id Delete an item
@apiVersion 1.0.0
@apiName delete_item
@apiGroup norm
@apiExample {curl} Example usage:
    curl -X DELETE http://localhost:8001/api/v1.0/norm/3

@apiUse DelItemSuccess
@apiUse Error404
"""


# Location
"""
@api {get} /location/ Get a list of items
@apiVersion 1.0.0
@apiName get_items
@apiGroup location
@apiExample {curl} Example usage:
      curl -i http://localhost:8001/api/v1.0/location/

@apiUse GetItemsSuccess
@apiUse Error404
"""
"""
@api {get} /location/:id Get an item by id
@apiVersion 1.0.0
@apiName get_item
@apiGroup location
@apiExample {curl} Example usage:
      curl -i http://localhost:8001/api/v1.0/location/1

@apiSuccessExample Success-Response:
    HTTP/1.0 200 OK
    Content-Type: application/json
    {
        "result": {
            "id": 1,
            "name": "location"
        }
    }

@apiSuccess {Integer}     id
@apiSuccess {String(50)}  name
@apiUse GetItemSuccess
@apiUse Error404
"""
"""
@api {post} /location Add a new item
@apiVersion 1.0.0
@apiName add_item
@apiGroup location
@apiExample {curl} Example usage:
    curl -i -H "Content-Type: application/json" -X POST -d '{"name":"My location"}' \
         http://localhost:8001/api/v1.0/location/

@apiParam {String(50)}  name
@apiUse PostItemSuccess
@apiUse Error400
"""
"""
@api {put} /location/:id Update an item
@apiVersion 1.0.0
@apiName update_item
@apiGroup location
@apiExample {curl} Example usage:
    curl -i -H "Content-Type: application/json" -X PUT -d '{"name":"My other name"}'\
    http://localhost:8001/api/v1.0/location/10

@apiUse PutItemSuccess
@apiUse Error400
"""
"""
@api {delete} /location/:id Delete an item
@apiVersion 1.0.0
@apiName delete_item
@apiGroup location
@apiExample {curl} Example usage:
    curl -X DELETE http://localhost:8001/api/v1.0/location/3

@apiUse DelItemSuccess
@apiUse Error404
"""


# Manufacturer
"""
@api {get} /manufacturer/ Get a list of items
@apiVersion 1.0.0
@apiName get_items
@apiGroup manufacturer
@apiExample {curl} Example usage:
      curl -i http://localhost:8001/api/v1.0/manufacturer/

@apiUse GetItemsSuccess
@apiUse Error404
"""
"""
@api {get} /manufacturer/:id Get an item by id
@apiVersion 1.0.0
@apiName get_item
@apiGroup manufacturer
@apiExample {curl} Example usage:
      curl -i http://localhost:8001/api/v1.0/manufacturer/1

@apiSuccessExample Success-Response:
    HTTP/1.0 200 OK
    Content-Type: application/json
    {
        "result": {
            "description": "-",
            "id": 1,
            "location": "Enteropia",
            "markings": "AAA",
            "name": "Ardrites"
        }
    }

@apiSuccess {Integer}     id
@apiSuccess {String(50)}  name
@apiSuccess {String(50)}  table_name
@apiSuccess {String(256)} location
@apiSuccess {String}      markings
@apiSuccess {String}      description
@apiUse GetItemSuccess
@apiUse Error404
"""
"""
@api {post} /manufacturer Add a new item
@apiVersion 1.0.0
@apiName add_item
@apiGroup manufacturer
@apiExample {curl} Example usage:
    curl -i -H "Content-Type: application/json" -X POST \
         -d '{"name":"Ardrites", "location": "Enteropia", "markings": "AAA"}' \
         http://localhost:8001/api/v1.0/manufacturer/

@apiParam {String(50)}  name        required
@apiParam {String(50)}  table_name
@apiParam {String(256)} location
@apiParam {String}      markings
@apiParam {String}      description
@apiUse PostItemSuccess
@apiUse Error400
"""
"""
@api {put} /manufacturer/:id Update an item
@apiVersion 1.0.0
@apiName update_item
@apiGroup manufacturer
@apiExample {curl} Example usage:
    curl -i -H "Content-Type: application/json" -X PUT -d '{"name":"My other name"}'\
    http://localhost:8001/api/v1.0/manufacturer/10

@apiUse PutItemSuccess
@apiUse Error400
"""
"""
@api {delete} /manufacturer/:id Delete an item
@apiVersion 1.0.0
@apiName delete_item
@apiGroup manufacturer
@apiExample {curl} Example usage:
    curl -X DELETE http://localhost:8001/api/v1.0/manufacturer/3

@apiUse DelItemSuccess
@apiUse Error404
"""


# Electrical profile
"""
@api {get} /electrical_profile/ Get a list of items
@apiVersion 1.0.0
@apiName get_items
@apiGroup electrical_profile
@apiExample {curl} Example usage:
      curl -i http://localhost:8001/api/v1.0/electrical_profile/

@apiUse GetItemsSuccess
@apiUse Error404
"""
"""
@api {get} /electrical_profile/:id Get an item by id
@apiVersion 1.0.0
@apiName get_item
@apiGroup electrical_profile
@apiExample {curl} Example usage:
      curl -i http://localhost:8001/api/v1.0/electrical_profile/1

@apiSuccessExample Success-Response:
    HTTP/1.0 200 OK
    Content-Type: application/json
    {
        "result": {
            "id": 1,
            "selection": "My selection"
            "description": "My descripton"
            "bushing": true
            "winding": true
            "insulation_pf": true
            "insulation": true
            "visual": true
            "resistance": true
            "degree": true
            "turns": true
        }
    }

@apiSuccess {Integer}       id
@apiSuccess {String(256)}   selection
@apiSuccess {String(1024)}  description
@apiSuccess {Boolean}       bushing
@apiSuccess {Boolean}       winding
@apiSuccess {Boolean}       insulation_pf
@apiSuccess {Boolean}       insulation
@apiSuccess {Boolean}       visual
@apiSuccess {Boolean}       resistance
@apiSuccess {Boolean}       degree
@apiSuccess {Boolean}       turns
@apiUse GetItemSuccess
@apiUse Error404
"""
"""
@api {post} /electrical_profile Add a new item
@apiVersion 1.0.0
@apiName add_item
@apiGroup electrical_profile
@apiExample {curl} Example usage:
    curl -i -H "Content-Type: application/json" -X POST \
         -d '{"selection":"My selection", "description": "My description", "bushing": true}' \
         http://localhost:8001/api/v1.0/electrical_profile/

@apiParam {String(256)}   selection
@apiParam {String(1024)}  description
@apiParam {Boolean}       bushing
@apiParam {Boolean}       winding
@apiParam {Boolean}       insulation_pf
@apiParam {Boolean}       insulation
@apiParam {Boolean}       visual
@apiParam {Boolean}       resistance
@apiParam {Boolean}       degree
@apiParam {Boolean}       turns
@apiUse PostItemSuccess
@apiUse Error400
"""
"""
@api {put} /electrical_profile/:id Update an item
@apiVersion 1.0.0
@apiName update_item
@apiGroup electrical_profile
@apiExample {curl} Example usage:
    curl -i -H "Content-Type: application/json" -X PUT -d '{"name":"My other name"}'\
    http://localhost:8001/api/v1.0/electrical_profile/10

@apiUse PutItemSuccess
@apiUse Error400
"""
"""
@api {delete} /electrical_profile/:id Delete an item
@apiVersion 1.0.0
@apiName delete_item
@apiGroup electrical_profile
@apiExample {curl} Example usage:
    curl -X DELETE http://localhost:8001/api/v1.0/electrical_profile/3

@apiUse DelItemSuccess
@apiUse Error404
"""


# Fluid profile
"""
@api {get} /fluid_profile/ Get a list of items
@apiVersion 1.0.0
@apiName get_items
@apiGroup fluid_profile
@apiExample {curl} Example usage:
      curl -i http://localhost:8001/api/v1.0/fluid_profile/

@apiUse GetItemsSuccess
@apiUse Error404
"""
"""
@api {get} /fluid_profile/:id Get an item by id
@apiVersion 1.0.0
@apiName get_item
@apiGroup fluid_profile
@apiExample {curl} Example usage:
      curl -i http://localhost:8001/api/v1.0/fluid_profile/1

@apiSuccessExample Success-Response:
    HTTP/1.0 200 OK
    Content-Type: application/json
    {
        "result": {
            "id": 1,
            "selection": "My selection"
            "description": "My descripton"
            ...
        }
    }

@apiSuccess {Integer}       id
@apiSuccess {String(256)}   selection
@apiSuccess {String(1024)}  description
@apiSuccess {Integer}       qty
@apiSuccess {Integer}       sampling
@apiSuccess {Integer}       qty_jar
@apiSuccess {Integer}       sampling_jar
@apiSuccess {Integer}       qty_vial
@apiSuccess {Integer}       sampling_vial
@apiSuccess {Boolean}       gas
@apiSuccess {Boolean}       water
@apiSuccess {Boolean}       furans
@apiSuccess {Boolean}       inhibitor
@apiSuccess {Boolean}       pcb
@apiSuccess {Boolean}       dielec
@apiSuccess {Boolean}       acidity
@apiSuccess {Boolean}       density
@apiSuccess {Boolean}       pcb_jar
@apiSuccess {Boolean}       inhibitor_jar
@apiSuccess {Boolean}       point
@apiSuccess {Boolean}       dielec_2
@apiSuccess {Boolean}       color
@apiSuccess {Boolean}       pf
@apiSuccess {Boolean}       particles
@apiSuccess {Boolean}       metals
@apiSuccess {Boolean}       viscosity
@apiSuccess {Boolean}       dielec_d
@apiSuccess {Boolean}       ift
@apiSuccess {Boolean}       pf_100
@apiSuccess {Boolean}       furans_f
@apiSuccess {Boolean}       water_w
@apiSuccess {Boolean}       corr
@apiSuccess {Boolean}       dielec_i
@apiSuccess {Boolean}       visual
@apiSuccess {Boolean}       pcb_vial
@apiSuccess {Boolean}       antioxidant
@apiUse GetItemSuccess
@apiUse Error404
"""
"""
@api {post} /fluid_profile Add a new item
@apiVersion 1.0.0
@apiName add_item
@apiGroup fluid_profile
@apiExample {curl} Example usage:
    curl -i -H "Content-Type: application/json" -X POST \
         -d '{"selection":"My selection", "description": "My description", "gas": true}' \
         http://localhost:8001/api/v1.0/fluid_profile/

@apiParam {String(256)}   selection
@apiParam {String(1024)}  description
@apiParam {Integer}       qty
@apiParam {Integer}       sampling
@apiParam {Integer}       qty_jar
@apiParam {Integer}       sampling_jar
@apiParam {Integer}       qty_vial
@apiParam {Integer}       sampling_vial
@apiParam {Boolean}       gas
@apiParam {Boolean}       water
@apiParam {Boolean}       furans
@apiParam {Boolean}       inhibitor
@apiParam {Boolean}       pcb
@apiParam {Boolean}       dielec
@apiParam {Boolean}       acidity
@apiParam {Boolean}       density
@apiParam {Boolean}       pcb_jar
@apiParam {Boolean}       inhibitor_jar
@apiParam {Boolean}       point
@apiParam {Boolean}       dielec_2
@apiParam {Boolean}       color
@apiParam {Boolean}       pf
@apiParam {Boolean}       particles
@apiParam {Boolean}       metals
@apiParam {Boolean}       viscosity
@apiParam {Boolean}       dielec_d
@apiParam {Boolean}       ift
@apiParam {Boolean}       pf_100
@apiParam {Boolean}       furans_f
@apiParam {Boolean}       water_w
@apiParam {Boolean}       corr
@apiParam {Boolean}       dielec_i
@apiParam {Boolean}       visual
@apiParam {Boolean}       pcb_vial
@apiParam {Boolean}       antioxidant
@apiUse PostItemSuccess
@apiUse Error400
"""
"""
@api {put} /fluid_profile/:id Update an item
@apiVersion 1.0.0
@apiName update_item
@apiGroup fluid_profile
@apiExample {curl} Example usage:
    curl -i -H "Content-Type: application/json" -X PUT -d '{"name":"My other name"}'\
    http://localhost:8001/api/v1.0/fluid_profile/10

@apiUse PutItemSuccess
@apiUse Error400
"""
"""
@api {delete} /fluid_profile/:id Delete an item
@apiVersion 1.0.0
@apiName delete_item
@apiGroup fluid_profile
@apiExample {curl} Example usage:
    curl -X DELETE http://localhost:8001/api/v1.0/fluid_profile/3

@apiUse DelItemSuccess
@apiUse Error404
"""


# Test result
"""
@api {get} /test_result/ Get a list of items
@apiVersion 1.0.0
@apiName get_items
@apiGroup test_result
@apiExample {curl} Example usage:
      curl -i http://localhost:8001/api/v1.0/test_result/

@apiUse GetItemsSuccess
@apiUse Error404
"""
"""
@api {get} /test_result/:id Get an item by id
@apiVersion 1.0.0
@apiName get_item
@apiGroup test_result
@apiExample {curl} Example usage:
      curl -i http://localhost:8001/api/v1.0/test_result/1

@apiSuccessExample Success-Response:
    HTTP/1.0 200 OK
    Content-Type: application/json
    {
        "result": {
            "id": 1,
            "campaign_id": 1,
            "reason_id": 1,
            "date_analyse": [
                "2016-07-29",
                "17:52:19"
            ],
            "test_type_id": 1,
            "sampling_point_id": 1,
            "test_status_id": 1,
        }
    }

@apiSuccess {Integer}   id
@apiSuccess {Integer}   campaign_id
@apiSuccess {Integer}   reason_id
@apiSuccess {DateTime}  date_analyse
@apiSuccess {Integer}   test_type_id
@apiSuccess {Integer}   sampling_point_id
@apiSuccess {Integer}   test_status_id
@apiUse GetItemSuccess
@apiUse Error404
"""
"""
@api {post} /test_result Add a new item
@apiVersion 1.0.0
@apiName add_item
@apiGroup test_result
@apiExample {curl} Example usage:
    curl -i -H "Content-Type: application/json" -X POST \
         -d '{"campaign_id":1, "reason_id": 5, "test_type_id": 1, "date_analyse": "2016-07-29 17:52:19"}' \
         http://localhost:8001/api/v1.0/test_result/

@apiParam {Integer}   campaign_id
@apiParam {Integer}   reason_id
@apiParam {DateTime}  date_analyse      format "2016-07-29 17:52:19"
@apiParam {Integer}   test_type_id
@apiParam {Integer}   sampling_point_id
@apiParam {Integer}   test_status_id
@apiUse PostItemSuccess
@apiUse Error400
"""
"""
@api {put} /test_result/:id Update an item
@apiVersion 1.0.0
@apiName update_item
@apiGroup test_result
@apiExample {curl} Example usage:
    curl -i -H "Content-Type: application/json" -X PUT -d '{"date_analyse": "2016-07-29 17:52:19"}'\
    http://localhost:8001/api/v1.0/test_result/1

@apiUse PutItemSuccess
@apiUse Error400
"""
"""
@api {delete} /test_result/:id Delete an item
@apiVersion 1.0.0
@apiName delete_item
@apiGroup test_result
@apiExample {curl} Example usage:
    curl -X DELETE http://localhost:8001/api/v1.0/test_result/3

@apiUse DelItemSuccess
@apiUse Error404
"""
