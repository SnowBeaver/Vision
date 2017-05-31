from flask import flash, g, session
import sqlalchemy_utils
from .models import *
from app import db
from sqlalchemy.orm import joinedload_all
from app import app
from sqlalchemy.orm.session import make_transient
import json
from flask import jsonify
from app.diagnostic.models import EquipmentType, Location

def set_locale():
    sqlalchemy_utils.i18n.get_locale = get_locale


def get_locale():
    if 'locale' in session:
        if session['locale'] is not None:
            return session['locale']

    return 'en'


# return all tree
def get_tree():
    # try:
    #     # .options(joinedload_all("children", "children", "children", "children"))
    #     tree = db.session.query(TreeNode).options(joinedload_all("children", "children", "children", "children")) \
    #         .filter(TreeNode.text == u'Vision Diagnostic').first()
    #     res = None
    #     if tree is not None:
    #         res = "<ul>"
    #         res += create_tree(tree)
    #         res += "</ul>"
    # except Exception as e:
    #     import logging
    #     logging.error(e)
    #     res = None

    # try:
    #     tree = db.session.query(TreeNode).options(joinedload_all("children", "children", "children", "children")) \
    #         .filter(TreeNode.text == u'Vision Diagnostic').first()
    # tree = db.session.query(TreeNode)\
    #     .options(joinedload_all("children", "children", "children", "children"))\
    #     .filter(TreeNode.text == u'Vision Diagnostic').first()

    tree = db.session.query(TreeNode).options(joinedload_all("children", "children", "children", "children")).get(1) # get root

    res = []
    # res.insert(0,tree.serialize())
    if tree:
        res.append(tree.serialize())

        if tree.children:
            res = serialize(tree.children, res)
            # for item in tree.children:
            #     res.append(item.serialize())
            #     if item.children:
        # print res

    response = json.dumps(res)
    return response

    # except Exception as e:
    #     import logging
    #     logging.error(e)


def get_owner_tree():
    """ Get tree which lists owners and equipment which belong to them """
    locations = db.session.query(Location).options(joinedload_all('children')).all()

    res = []
    for location in locations:
        res.append(location.serialize(True))
    response = json.dumps(res)
    return response


def serialize_equipment(tree):
    children = []
    for item in tree:
        children.append(item.serialize())
    return children


def get_switch_ids():
    switch_names = ("Air circuit breaker", "Breaker", "Switch")
    switches = db.session.query(EquipmentType).filter(EquipmentType.name.in_(switch_names)).values("id")
    switches = [switch[0] for switch in switches]
    return json.dumps(switches)


def serialize(tree, res):
    if type(tree) == list:
        for item in tree:
            res.append(item.serialize())
            if item.children:
                return serialize(item.children, res)

    # item = tree.serialize()
    # res.append(item)
    return res

# create generate tree
def create_node(parent, text, icon, type, tooltip):
    try:
        # options(joinedload_all("children", "children", "children", "children")).
        parent = db.session.query(TreeNode).filter(TreeNode.id == parent).first()
        node = TreeNode(icon=icon, parent=parent, type=type)
        # think of a different solution how to extract node.id
        db.session.commit()

        node.text = text + str(node.id)
        node.tooltip = tooltip + str(node.id)

        if get_locale() is not node.get_locale():
            node.translations[node.get_locale()].text = text + str(node.id)
            node.translations[node.get_locale()].tooltip = tooltip + str(node.id)

        # parent.append(node)
        # parent.children[text + str(node.id)] = node
        db.session.commit()
        res = node.id
    except Exception as e:
        import logging
        logging.error(e)
        res = None

    return res


# rename tree element
def rename_node(id, text):
    try:
        node = db.session.query(TreeNode).filter(TreeNode.id == id).first()
        node.text = text
        db.session.commit()
        res = True
    except Exception as e:
        import logging
        logging.error(e)
        res = False
    return res


# delete node element
def delete_node(id):
    try:
        node = db.session.query(TreeNode).filter(TreeNode.id == id).first()
        db.session.delete(node)
        db.session.commit()
        res = node.id
    except Exception as e:
        import logging
        logging.error(e)
        res = None

    return res


# get view by id
def get_view_by_id(id):
    try:
        node = db.session.query(TreeNode).filter(TreeNode.id == id).first()
        res = (node.view, node.tooltip)
    except Exception as e:
        import logging
        logging.error(e)
        res = None

    return res


# update node tree
def update_node(node_id, view, tooltip):
    try:
        node = db.session.query(TreeNode).filter(TreeNode.id == node_id).first()
        node.view = view
        node.tooltip = tooltip
        db.session.commit()
        res = True
    except Exception as e:
        import logging
        logging.error(e)
        res = None

    return res


# move node tree
def move_node(node_id, parent_id):
    try:
        db.session.query(TreeNode).filter(TreeNode.id == node_id).update({'parent_id': parent_id})
        db.session.commit()
        res = True
    except Exception as e:
        import logging
        logging.error(e)
        res = None

    return res


def change_status(node_id, status):
    try:
        node = db.session.query(TreeNode).filter(TreeNode.id == node_id).first()

        if int(status) == 0:
            node.status = 0
            to_rep = '_b.ico'
            if '_y.ico' in node.icon:
                to_rep = '_y.ico'
            node.icon = node.icon.replace(to_rep, '_r.ico')
        elif int(status) == 2:
            node.status = 0
            to_rep = '_b.ico'
            if '_r.ico' in node.icon:
                to_rep = '_r.ico'
            node.icon = node.icon.replace(to_rep, '_y.ico')
        elif int(status) == 1:
            node.status = 1
            to_rep = '_r.ico'
            if '_y.ico' in node.icon:
                to_rep = '_y.ico'
            node.icon = node.icon.replace(to_rep, '_b.ico')

        db.session.commit()
        res = node.icon
    except Exception as e:
        import logging
        logging.error(e)
        res = None

    return res


def join_node(node_id, to_join):
    try:
        res = []
        ids = json.loads(to_join)

        for id in ids:
            node = db.session.query(TreeNode).filter(TreeNode.id == id).first()
            db.session.delete(node)
            db.session.commit()
            res.append(id)

    except Exception as e:
        import logging
        logging.error(e)
        res = None

    return res


# copy node tree
def copy_node(node_id, parent_id):
    try:
        node = db.session.query(TreeNode).filter(TreeNode.id == node_id).first()
        db.session.expunge(node)

        make_transient(node)
        node.id = None
        node.parent_id = parent_id
        # print(node.text)
        node.text = node.text + 'Copy'
        if get_locale() is not node.get_locale():
            node.translations[node.get_locale()].text = node.text + 'Copy'

        db.session.add(node)
        db.session.commit()
        db.session.flush()

        res = node.id
    except Exception as e:
        import logging
        logging.error(e)
        res = None

    return res


def render_tree_li(tree):
    data = "<li data-jstree='"
    opened = "true" if tree.opened else "false"
    data += "\"openend\" : " + opened
    selected = "true" if tree.selected else "false"
    data += ",\"selected\" : " + selected
    disabled = "true" if tree.disabled else "false"
    data += ",\"disabled\" : " + disabled
    data += ",\"type\" : \"" + tree.type + "\""
    data += ",\"icon\" : \"" + tree.icon + "\"}'"
    if tree.tooltip is not None:
        data += " title=\"" + tree.tooltip + "\""
    data += " id=\"" + str(tree.id) + "\">" + tree.text

    return data


def create_tree(tree):
    data = render_tree_li(tree)
    if tree.children:
        data += "<ul>"
        for chd in tree.children:
            if tree.children[chd].children:
                data += create_tree(tree.children[chd])
            else:
                data += render_tree_li(tree.children[chd])
                data += "</li>"
        data += "</ul>"
    data += "</li>"
    return data


@app.template_filter('render_tree')
def render_tree_filter(tree):
    data = "<ul>"
    data += create_tree(tree)
    data += "</ul>"

    return data
