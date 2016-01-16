from app import db
from .models import MenuItemsNode, MenuItemsNodeTranslation
from sqlalchemy.orm import joinedload_all
from flask import url_for

def get_menu():
    try:
        # .options(joinedload_all("children", "children", "children", "children"))
        tree = db.session.query(MenuItemsNode).options(joinedload_all("children", "children", "children", "children"))\
            .filter(MenuItemsNode.text == u'Vision Diagnostic').first()
        res = None
        if tree is not None:
            res = "<ul>"
            res += create_menu(tree)
            res += "</ul>"

    except Exception as e:
        import logging
        logging.error(e)
        res = None

    return res

def render_tree_li(tree):

    data = "<li data-jstree='{"
    opened = "true" if tree.opened else "false"
    data += "\"openend\" : " + opened
    selected = "true" if tree.selected else "false"
    data += ",\"selected\" : " + selected
    disabled = "true" if tree.disabled else "false"
    data += ",\"disabled\" : " + disabled
    data += ",\"type\" : \"" + tree.type + "\" }' "
    data += " id=\"" + str(tree.id) + "\">" + tree.text

    return data

def create_tree(tree):
    data = render_tree_li(tree)
    if tree.children:
        data+= "<ul>"
        for chd in tree.children:
            if tree.children[chd].children:
                data+= create_tree(tree.children[chd])
            else:
                data += render_tree_li(tree.children[chd])
                data += "</li>"
        data+= "</ul>"
    data+= "</li>"
    return data

def create_menu(tree):
    data = render_tree_li(tree)
    if tree.children:
        data+= "<ul>"
        for chd in tree.children:
            if tree.children[chd].children:
                data+= create_tree(tree.children[chd])
            else:
                data += render_tree_li(tree.children[chd])
                data += "</li>"
        data+= "</ul>"
    data+= "</li>"
    return data

from app.tree.storage import get_locale

# create generate tree
def create_node(parent, text, type ):
    try:
        # options(joinedload_all("children", "children", "children", "children")).
        parent = db.session.query(MenuItemsNode).filter(MenuItemsNode.id == parent).first()
        node = MenuItemsNode( parent = parent , type = type)
        #think of a different solution how to extract node.id
        db.session.commit()

        node.text = text + str(node.id)
        if get_locale() is not node.get_locale():
            node.translations[node.get_locale()].text = text + str(node.id)

        # parent.append(node)
        # parent.children[text + str(node.id)] = node
        db.session.commit()
        res = node.id
    except Exception as e:
        import logging
        logging.error(e)
        res = None

    return res

#delete node element
def delete_node(id):
    try:
        node = db.session.query(MenuItemsNode).filter(MenuItemsNode.id == id).first()
        db.session.delete(node)
        db.session.commit()
        res = node.id
    except Exception as e:
        import logging
        logging.error(e)
        res = None

    return res

#rename tree element
def rename_node(id , text):
    try:
        node = db.session.query(MenuItemsNode).filter(MenuItemsNode.id == id).first()
        node.text = text
        db.session.commit()
        res = True
    except Exception as e:
        import logging
        logging.error(e)
        res = False
    return res


#move node tree
def move_node(node_id,parent_id):
    try:
        db.session.query(MenuItemsNode).filter(MenuItemsNode.id == node_id).update({ 'parent_id' : parent_id })
        db.session.commit()
        res = True
    except Exception as e:
        import logging
        logging.error(e)
        res = None

    return res

from app.pages.models import Pages
import sqlalchemy as sqla
from flask import request

#update node tree
def update_node(node_id , page_view ):
    try:
        if int(page_view) == 0:
            node = db.session.query(MenuItemsNode).filter(MenuItemsNode.id == node_id).first()
            node.slug = ''
            node.tag = ''
            node.page_id = 0
            db.session.commit()
        else:
            page  = db.session.query(Pages).options(sqla.orm.joinedload(Pages.current_translation)).filter(Pages.id == int(page_view)).first()
            if page:
                node = db.session.query(MenuItemsNode).filter(MenuItemsNode.id == node_id).first()
                node.slug = page.slug
                node.tag = page.tag
                node.page_id = page.id

                db.session.commit()

        #page  = db.session.query(Pages).options(sqla.orm.joinedload(Pages.current_translation)).filter(Pages.title == page_view).first()
        #page =  db.session.query(Pages).options(sqla.orm.joinedload(Pages.translations['en'])).filter(Pages.title == page_view).first()

        res = True
    except Exception as e:
        import logging
        logging.error(e)
        res = None

    return res


def get_view_by_id(node_id):
    try:
        node = db.session.query(MenuItemsNode).filter(MenuItemsNode.id == node_id).first()
        res = 0
        if node.page_id :
            res = node.page_id

        return res
    except Exception as e:
        import logging
        logging.error(e)
        res = None

    return res

def ul_menu_creation(text = u'Top Menu' , use_ul = True):
    try:
        tree = db.session.query(MenuItemsNode).options(joinedload_all("children", "children", "children", "children"))\
            .filter(MenuItemsNode.text == text ).first()
        res = None

        if tree is not None:
            make_node = None
            for node in tree.children:
                if tree.children[node].translations[tree.children[node].get_locale()].text == text:
                    make_node = tree.children[node]
                    # print(make_node.dump())

            if make_node is not None:
                res = ''
                if use_ul:
                    res += '<ul class="nav navbar-nav">'

                for chd in make_node.children:
                    res += create_menu_ul(make_node.children[chd], root = False , first = True , use_ul = use_ul )

                if use_ul:
                    res += '</ul>'

        # print(tree.dump())
        # print(res)
    except Exception as e:
        import logging
        logging.error(e)
        res = None

    return res

def render_menu_li(tree , root = False , first = False , use_ul = True):

    if use_ul is False and tree.children:
        return ' '

    if root and use_ul:
        data = '<li class="dropdown-submenu">'
    else:
        data = '<li>'

    if tree.children:
        data += '<a href="#" class="dropdown-toggle active" data-toggle="dropdown">'
    else:
        data += '<a href="' + url_for('home.show_page_tag' , tag = tree.tag , slug = tree.slug) + '">'

    data += tree.text
    if first:
        data += '<span class="caret"></span>'

    data += '</a>'

    return data

def create_menu_ul(tree , root = False , first = False , use_ul =  True ):
    data = render_menu_li( tree = tree , root = root , first = first , use_ul = use_ul )
    if tree.children:
        if use_ul:
            data+= "<ul class='dropdown-menu multi-level'>"

        for chd in tree.children:
            if tree.children[chd].children:
                data+= create_menu_ul(tree.children[chd] , root = True , first = False , use_ul = use_ul )
            else:
                data += render_menu_li(tree.children[chd] , use_ul = use_ul )
                data += '</li>'

        if use_ul:
            data+= "</ul>"

    data += '</li>'

    return data

