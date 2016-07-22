define({ "api": [
  {
    "type": "post",
    "url": "/equipment",
    "title": "Adds a new Equipment",
    "version": "1.0.0",
    "name": "add_item_Equipment_",
    "group": "Equipment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String(50)",
            "optional": false,
            "field": "name",
            "description": "<p>Required.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "equipment_number",
            "description": "<p>Required.</p>"
          },
          {
            "group": "Parameter",
            "type": "String(50)",
            "optional": false,
            "field": "serial",
            "description": "<p>Required.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "equipment_type_id",
            "description": "<p>Required.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "manufacturer_id",
            "description": "<p>Required.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "location_id",
            "description": "<p>Required.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "visual_inspection_by_id",
            "description": "<p>Required. User id</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "assigned_to_id",
            "description": "<p>Required. User id</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "norm_id",
            "description": "<p>Required.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "manufactured",
            "description": "<p>Year manufactured, from 1900</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "frequency",
            "description": "<p>'25', '50', '60', 'DC'</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "modifier",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "comments",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "visual_date",
            "description": "<p>Date where was done the last visual inspection.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "visual_inspection_comments",
            "description": "<p>Visual inspection comments,</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nbr_of_tap_change_ltc",
            "description": "<p>Number of tap change on LTC</p>"
          },
          {
            "group": "Parameter",
            "type": "String(100)",
            "optional": false,
            "field": "upstream1",
            "description": "<p>Upstream device name</p>"
          },
          {
            "group": "Parameter",
            "type": "String(100)",
            "optional": false,
            "field": "upstream2",
            "description": "<p>Upstream device name</p>"
          },
          {
            "group": "Parameter",
            "type": "String(100)",
            "optional": false,
            "field": "upstream3",
            "description": "<p>Upstream device name</p>"
          },
          {
            "group": "Parameter",
            "type": "String(100)",
            "optional": false,
            "field": "upstream4",
            "description": "<p>Upstream device name</p>"
          },
          {
            "group": "Parameter",
            "type": "String(100)",
            "optional": false,
            "field": "upstream5",
            "description": "<p>Upstream device name</p>"
          },
          {
            "group": "Parameter",
            "type": "String(100)",
            "optional": false,
            "field": "downstream1",
            "description": "<p>Downstream device name</p>"
          },
          {
            "group": "Parameter",
            "type": "String(100)",
            "optional": false,
            "field": "downstream2",
            "description": "<p>Downstream device name</p>"
          },
          {
            "group": "Parameter",
            "type": "String(100)",
            "optional": false,
            "field": "downstream3",
            "description": "<p>Downstream device name</p>"
          },
          {
            "group": "Parameter",
            "type": "String(100)",
            "optional": false,
            "field": "downstream4",
            "description": "<p>Downstream device name</p>"
          },
          {
            "group": "Parameter",
            "type": "String(100)",
            "optional": false,
            "field": "downstream5",
            "description": "<p>Downstream device name</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "tie_location",
            "description": "<p>Tie device location</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "tie_maintenance_state",
            "description": "<p>Tie is open or closed during maintenance</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "tie_status",
            "description": "<p>TieAnalysisState.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "phys_position",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "tension4",
            "description": "<p>Voltage4</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "validated",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "invalidation",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String(50)",
            "optional": false,
            "field": "prev_serial_number",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String(50)",
            "optional": false,
            "field": "prev_equipment_number",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "sibling",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "result",
            "description": "<p>True if all ok.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>error              &quot;Not found&quot;.</p>"
          }
        ]
      }
    },
    "filename": "./app/api.py",
    "groupTitle": "Equipment"
  },
  {
    "type": "delete",
    "url": "/equipment/:id",
    "title": "Deletes an Equipment",
    "version": "1.0.0",
    "name": "delete_item",
    "group": "Equipment",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "result",
            "description": "<p>True if all ok.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>Error              &quot;Not found&quot;.</p>"
          }
        ]
      }
    },
    "filename": "./app/api.py",
    "groupTitle": "Equipment"
  },
  {
    "type": "get",
    "url": "/equipment/:id",
    "title": "Gets an Equipment",
    "version": "1.0.0",
    "name": "get_item",
    "group": "Equipment",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String(50)",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "equipment_number",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String(50)",
            "optional": false,
            "field": "serial",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "equipment_type_id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Dict",
            "optional": false,
            "field": "equipment_type",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "manufacturer_id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Dict",
            "optional": false,
            "field": "manufacturer",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "manufactured",
            "description": "<p>Year manufactured, from 1900</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "frequency",
            "description": "<p>'25', '50', '60', 'DC'</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "location_id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Dict",
            "optional": false,
            "field": "location",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "modifier",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comments",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "visual_date",
            "description": "<p>Date where was done the last visual inspection.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "visual_inspection_by_id",
            "description": "<p>User</p>"
          },
          {
            "group": "Success 200",
            "type": "Dict",
            "optional": false,
            "field": "visual_inspection_by",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "assigned_to_id",
            "description": "<p>User</p>"
          },
          {
            "group": "Success 200",
            "type": "Dict",
            "optional": false,
            "field": "assigned_to",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "visual_inspection_comments",
            "description": "<p>Visual inspection comments,</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nbr_of_tap_change_ltc",
            "description": "<p>Number of tap change on LTC</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "norm_id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Dict",
            "optional": false,
            "field": "norm",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String(100)",
            "optional": false,
            "field": "upstream1",
            "description": "<p>Upstream device name</p>"
          },
          {
            "group": "Success 200",
            "type": "String(100)",
            "optional": false,
            "field": "upstream2",
            "description": "<p>Upstream device name</p>"
          },
          {
            "group": "Success 200",
            "type": "String(100)",
            "optional": false,
            "field": "upstream3",
            "description": "<p>Upstream device name</p>"
          },
          {
            "group": "Success 200",
            "type": "String(100)",
            "optional": false,
            "field": "upstream4",
            "description": "<p>Upstream device name</p>"
          },
          {
            "group": "Success 200",
            "type": "String(100)",
            "optional": false,
            "field": "upstream5",
            "description": "<p>Upstream device name</p>"
          },
          {
            "group": "Success 200",
            "type": "String(100)",
            "optional": false,
            "field": "downstream1",
            "description": "<p>Downstream device name</p>"
          },
          {
            "group": "Success 200",
            "type": "String(100)",
            "optional": false,
            "field": "downstream2",
            "description": "<p>Downstream device name</p>"
          },
          {
            "group": "Success 200",
            "type": "String(100)",
            "optional": false,
            "field": "downstream3",
            "description": "<p>Downstream device name</p>"
          },
          {
            "group": "Success 200",
            "type": "String(100)",
            "optional": false,
            "field": "downstream4",
            "description": "<p>Downstream device name</p>"
          },
          {
            "group": "Success 200",
            "type": "String(100)",
            "optional": false,
            "field": "downstream5",
            "description": "<p>Downstream device name</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "tie_location",
            "description": "<p>Tie device location</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "tie_maintenance_state",
            "description": "<p>Tie is open or closed during maintenance</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "tie_status",
            "description": "<p>TieAnalysisState.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "phys_position",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "tension4",
            "description": "<p>Voltage4</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "validated",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "invalidation",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String(50)",
            "optional": false,
            "field": "prev_serial_number",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String(50)",
            "optional": false,
            "field": "prev_equipment_number",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "sibling",
            "description": ""
          }
        ]
      }
    },
    "filename": "./app/api.py",
    "groupTitle": "Equipment"
  },
  {
    "type": "get",
    "url": "/equipment",
    "title": "Gets a list of Equipment",
    "version": "1.0.0",
    "name": "get_items",
    "group": "Equipment",
    "filename": "./app/api.py",
    "groupTitle": "Equipment"
  },
  {
    "type": "put",
    "url": "/equipment/:id",
    "title": "Updates an Equipment",
    "version": "1.0.0",
    "name": "update_item",
    "group": "Equipment",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "result",
            "description": "<p>True if all ok.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>error              &quot;Not found&quot;.</p>"
          }
        ]
      }
    },
    "filename": "./app/api.py",
    "groupTitle": "Equipment"
  },
  {
    "type": "post",
    "url": "/user",
    "title": "Adds a new User",
    "version": "1.0.0",
    "name": "add_item_User_",
    "group": "User",
    "filename": "./app/api.py",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "/user/:id",
    "title": "Deletes an User",
    "version": "1.0.0",
    "name": "delete_item",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "result",
            "description": "<p>True if all ok.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>error              &quot;Not found&quot;.</p>"
          }
        ]
      }
    },
    "filename": "./app/api.py",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/:id",
    "title": "Gets an User",
    "version": "1.0.0",
    "name": "get_item",
    "group": "User",
    "filename": "./app/api.py",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user",
    "title": "Gets a list of Users",
    "version": "1.0.0",
    "name": "get_items",
    "group": "User",
    "filename": "./app/api.py",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/user/:id",
    "title": "Updates an User",
    "version": "1.0.0",
    "name": "update_item",
    "group": "User",
    "filename": "./app/api.py",
    "groupTitle": "User"
  },
  {
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>The user's username.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>The first name of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>the last name of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "profile",
            "description": "<p>The profile data</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "profile.age",
            "description": "<p>The user's age.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "profile.image",
            "description": "<p>The user's avatar-image.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The new user id.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./app/api.py",
    "group": "_home_vision_www_app_api_py",
    "groupTitle": "_home_vision_www_app_api_py",
    "name": ""
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./app/static/docs/main.js",
    "group": "_home_vision_www_app_static_docs_main_js",
    "groupTitle": "_home_vision_www_app_static_docs_main_js",
    "name": ""
  }
] });
