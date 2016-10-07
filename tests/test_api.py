import unittest
import requests
import sys
import json
sys.path.append('..')
from app.api_utility import model_dict


class TestRESTAPI(unittest.TestCase):
    pass


def base_test_generator(path, r, result_key='result'):
    def test(self):
        msg = '{}: {} != 200'.format(path, r.status_code)
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
        # 'dict': {},
        # an iterable: ???
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
        item_id = answer.get('result').get('id')
    except:
        pass

    setattr(TestRESTAPI, 'test_{}_step_1_create'.format(path), test)
    return item_id


def test_read_one_generator(url, path, item_id, token):
    r = requests.get('{}/{}/{}'.format(url, path, item_id), auth=(token, ''))
    test = base_test_generator(path, r)
    setattr(TestRESTAPI, 'test_{}_step_2_read'.format(path), test)


def test_update_generator(path, item_id):
    r = requests.put('{}/{}/{}'.format(url, path, item_id), auth=(token, ''))
    test = base_test_generator(path, r)
    setattr(TestRESTAPI, 'test_{}_step_3_update'.format(path), test)

    r = requests.post('{}/{}/{}'.format(url, path, item_id), auth=(token, ''))
    test = base_test_generator(path, r)
    setattr(TestRESTAPI, 'test_{}_step_3_update_by_post'.format(path), test)


def test_delete_generator(url, path, item_id, token):
    r = requests.delete('{}/{}/{}'.format(url, path, item_id), auth=(token, ''))
    test = base_test_generator(path, r)
    setattr(TestRESTAPI, 'test_{}_step_4_delete'.format(path), test)


def test_read_all_generator(url, path, token):
    r = requests.get(url.format(path=path), auth=(token, ''))
    test = base_test_generator(path, r)
    setattr(TestRESTAPI, 'test_{}_step_5_get'.format(path), test)


if __name__ == '__main__':
    url = 'http://dev.vision.local/api/v1.0/{path}/'
    user = 'test'
    password = 'test-123'
    path_to_get_token = 'token'
    # Authentication
    token = test_auth_generator(url, path_to_get_token, user, password)
    # Testing CRUD
    for path, params in model_dict.items():
        schema = params.get('schema')
        # Standard CRUD
        # create an item
        item_id = test_create_generator(url, path, token, schema)
        # get item by id
        test_read_one_generator(url, path, item_id, token)
        # update item
        # test_update_generator(path, item_id)
        # # delete item
        test_delete_generator(url, path, item_id, token)
        # get all items
        test_read_all_generator(url, path, token)

        # Custom CRUD

    test_pack = unittest.TestLoader().loadTestsFromTestCase(TestRESTAPI)
    unittest.TextTestRunner(verbosity=0).run(test_pack)
