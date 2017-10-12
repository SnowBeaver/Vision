import unittest
import requests
import sys
import json
sys.path.append('..')
from app.api_utility import model_dict


url = 'http://localhost:9000/api/v1.0/{path}/'
user = 'test@example.com'
password = 'test-123'
path_to_get_token = 'token'


class TestRESTAPI(unittest.TestCase):
    pass


# # Readonly model
# class Test_REST_API_country(unittest.TestCase):
#     path = 'country'
#     url = url.format(path=path)
#     def setUp(self):
#
#
#     def tearDown(self):
#         pass
#
#     # country
#     path = 'country'
#     schema = model_dict.get(path).get('schema')
#     item_id = test_create_generator(url, path, token, schema)
#     test_read_one_generator(url, path, item_id, token)
#     test_read_all_generator(url, path, token)
#     test_update_generator(url, path, item_id, token, schema)
#     test_delete_generator(url, path, item_id, token)


def base_test_generator(path, r, result_key='result'):
    def test(self):
        msg = '{}: {} != 200\n{}'.format(path, r.status_code, r.text)
        self.assertEqual(r.status_code, 200, msg)
        try:
            json_data = json.loads(r.text)
        except ValueError:
            msg = '{}: answer: No JSON object could be decoded'.format(path)
            self.fail(msg)
        else:
            msg = '{}: {} not found in {}'.format(path, result_key, json_data)
            self.assertIn(result_key, json_data, msg)
    return test


def test_auth_generator(url, path, user, password):
    r = requests.get(url.format(path=path), auth=(user, password))
    test = base_test_generator(path, r, path)
    try:
        token = json.loads(r.text)[path]
    except KeyError:
        token = None

    def test_token_is_set(self):
        self.assertIsNotNone(token, 'token is missing')

    setattr(TestRESTAPI, 'test_0_step_auth'.format(path), test)
    setattr(TestRESTAPI, 'test_0_step_auth_token_is_set', test_token_is_set)

    return token


def prepare_a_test_data(schema):
    test_data_values = {
        'string': 'Qwe',
        'integer': 1,
        'float': 1.0,
        'boolean': True,
        # 'list': [],
        # 'dict': {}, # equipment
        # an iterable: ??? # test_result_equipment - 'type': ['integer', 'list']

    }
    test_data = {}
    for k,v in schema.items():
        if v.get('readonly'):
            continue
        type = v.get('type')
        try:
            test_data[k] = test_data_values[type]
        except:
            pass

    return test_data


def test_create_generator(url, path, token, schema):
    data = prepare_a_test_data(schema)
    r = requests.post(url.format(path=path), auth=(token, ''), json=data)
    test = base_test_generator(path, r)
    item_id = 0
    try:
        answer = json.loads(r.text)
        item_id = answer.get('result')
        item_id = int(item_id)
    except:
        pass

    setattr(TestRESTAPI, 'test_step_1_create_{}'.format(path), test)
    return item_id


def test_read_one_generator(url, path, item_id, token):
    r = requests.get('{}{}'.format(url.format(path=path), item_id), auth=(token, ''))
    test = base_test_generator(path, r)
    setattr(TestRESTAPI, 'test_step_2_read_{}_by_id'.format(path), test)


def test_read_all_generator(url, path, token):
    r = requests.get(url.format(path=path), auth=(token, ''))
    test = base_test_generator(path, r)
    setattr(TestRESTAPI, 'test_step_3_read_all_{}'.format(path), test)


def test_update_generator(url, path, item_id, token, schema):
    data = prepare_a_test_data(schema)
    r = requests.put('{}{}'.format(url.format(path=path), item_id), auth=(token, ''), json=data)
    test = base_test_generator(path, r)
    setattr(TestRESTAPI, 'test_step_4_update_{}'.format(path), test)

    r = requests.post('{}{}'.format(url.format(path=path), item_id), auth=(token, ''), json=data)
    test = base_test_generator(path, r)
    setattr(TestRESTAPI, 'test_step_5_update_{}_using_post'.format(path), test)


def test_delete_generator(url, path, item_id, token):
    r = requests.delete('{}{}'.format(url.format(path=path), item_id), auth=(token, ''))
    test = base_test_generator(path, r)
    setattr(TestRESTAPI, 'test_step_6_delete_{}'.format(path), test)


if __name__ == '__main__':
    # Authentication
    token = test_auth_generator(url, path_to_get_token, user, password)

    # Standard CRUD
    # Simple models (without relations) paths
    path_list = [
        'fluid_type',
        'sampling_point',
        'contract_status',
        'interrupting_medium',
        'gas_level',
        'breaker_mechanism',
        'insulation',
        'test_reason',
        'location',
        'gasket_condition',
        'gas_relay',
        'fluid_level',
        'pressure_unit',
        'valve_condition',
        'pump_condition',
        'overall_condition',
        'paint_types',
        'tap_counter_status',
        'tap_filter_condition',
        'fan_condition',
        'connection_condition',
        'foundation_condition',
        'heating_condition',
        'equipment_type',
        'norm',
        'manufacturer',
        'material',
        'lab',
        'role',
        'test_status',
        'test_type',
        'inhibitor_type',
        'norm_gas',
        'norm_isolation',
        'norm_furan',
        'task_status',
    ]

    for path in path_list:
        schema = model_dict.get(path).get('schema')

        item_id = test_create_generator(url, path, token, schema)
        test_read_one_generator(url, path, item_id, token)
        test_read_all_generator(url, path, token)
        test_update_generator(url, path, item_id, token, schema)
        test_delete_generator(url, path, item_id, token)

    test_pack = unittest.TestLoader().loadTestsFromTestCase(TestRESTAPI)
    unittest.TextTestRunner(verbosity=0).run(test_pack)

    # Models with relations paths
    # tree_translation
    # equipment_connection
    # sibling
    # equipment
    # campaign
    # contract
    # user
    # electrical_profile
    # fluid_profile
    # test_result
    # test_result_equipment
    # test_recommendation
    # recommendation
    # cable
    # switch
    # tank
    # inductance
    # rectifier
    # synchronous_machine
    # induction_machine
    # switchgear
    # powersource
    # bushing
    # tap_changer
    # breaker
    # transformer
    # gas_sensor
    # norm_physic
    # particles
    # test_sampling_card
    # tree
    # test_repair_note
    # diagnosis
    # test_diagnosis

    # syringe
    # schedule
    #
    # bushing_test
    # winding_test
    # visual_inspection_test
    # insulation_resistance_test
    # polymerisation_degree_test
    # transformer_turn_ratio_test
    # winding_resistance_test
    # dissolved_gas_test
    # water_test
    # furan_test
    # inhibitor_test
    # pcb_test
    # particle_test
    # metals_in_oil_test
    # fluid_test

    # Custom CRUD
