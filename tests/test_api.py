import unittest
import requests
import sys
import json
sys.path.append("..")
from app.api_utility import model_dict


class TestRESTAPI(unittest.TestCase):
    pass


def test_create_generator(path):
    r = requests.post("{}/{}/".format(site_url, path))
    def test(self):
        pass
    setattr(TestRESTAPI, 'test_{}_1_create'.format(path), test)
    return 0


def test_read_one_generator(path, item_id):
    r = requests.get("{}/{}/{}".format(site_url, path, item_id))
    def test(self):
        pass
    setattr(TestRESTAPI, 'test_{}_2_get_one'.format(path), test)


def test_update_generator(path, item_id):
    r = requests.post("{}/{}/{}".format(site_url, path, item_id))
    r = requests.put("{}/{}/{}".format(site_url, path, item_id))
    def test_post(self):
        pass
    def test_put(self):
        pass
    setattr(TestRESTAPI, 'test_{}_3_update_post'.format(path), test_post)
    setattr(TestRESTAPI, 'test_{}_3_update_put'.format(path), test_put)


def test_delete_generator(path, item_id):
    r = requests.delete("{}/{}/{}".format(site_url, path, item_id))
    def test(self):
        pass
    setattr(TestRESTAPI, 'test_{}_4_delete'.format(path), test)


def test_read_all_generator(path):
    r = requests.get("{}/{}/".format(site_url, path))

    def test(self):
        msg = "{}: {} != 200".format(path, r.status_code)
        self.assertEqual(r.status_code, 200, msg)

    def test_json(self):
        try:
            json_data = json.loads(r.text)
        except ValueError:
            msg = '{}: answer: No JSON object could be decoded'.format(path)
            self.fail(msg)
        else:
            msg = "{}: 'result' not found in {}".format(path, json_data)
            self.assertIn('result', json_data, msg)
    setattr(TestRESTAPI, 'test_{}_5_get'.format(path), test)
    setattr(TestRESTAPI, 'test_{}_5_get_json'.format(path), test_json)


if __name__ == '__main__':
    site_url = 'http://127.0.0.1:8001/api/v1.0'
    # Testing CRUD
    for path in model_dict.keys():
        # Standard CRUD
        # create an item
        # item_id = test_create_generator(path)
        # # get item by id
        # test_read_one_generator(path, item_id)
        # # update item
        # test_update_generator(path, item_id)
        # # delete item
        # test_delete_generator(path, item_id)
        # get all items
        test_read_all_generator(path)

        # Custom CRUD

    test_pack = unittest.TestLoader().loadTestsFromTestCase(TestRESTAPI)
    unittest.TextTestRunner(verbosity=0).run(test_pack)
