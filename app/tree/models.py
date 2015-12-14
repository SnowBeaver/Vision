#!/usr/bin/env python
# -*- coding: utf-8 -*-
import sqlalchemy as sqla
from sqlalchemy_i18n import (
     make_translatable
    ,translation_base
    ,Translatable
)
from app import db
from sqlalchemy.orm import relationship,backref
from sqlalchemy.orm.collections import attribute_mapped_collection

from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()
make_translatable( options = {'locales': ['en' , 'fr' , 'es']})

class TreeNode(Translatable , Base):
#class TreeNode(Translatable , db.Model):
    __tablename__ = 'tree'
    __translatable__ = {
          'locales': ['en' , 'fr', 'es']
         ,'dynamic_source_locale': True
    }

    locale = 'en'  # this defines the default locale

    id = sqla.Column(sqla.Integer, primary_key=True)
    parent_id = sqla.Column(sqla.Integer, sqla.ForeignKey(id))

    #costumed column
    icon = sqla.Column(sqla.String(126) , default="../app/static/img/file.png")
    opened = sqla.Column(sqla.Boolean() , default = True)
    disabled = sqla.Column(sqla.Boolean() , default = False)
    selected = sqla.Column(sqla.Boolean() , default = False)
    type = sqla.Column(sqla.String(58) , default = 'file')
    view = sqla.Column(sqla.String(126) , default = 'home')
    status = sqla.Column(sqla.SmallInteger(), default = 1 )

    children = relationship("TreeNode",
        # cascade deletions
        cascade="all, delete-orphan",
        # many to one + adjacency list - remote_side
        # is required to reference the 'remote'
        # column in the join condition.
        backref = backref("parent", remote_side=id),
        # children will be represented as a dictionary
        # on the "name" attribute.
        collection_class = attribute_mapped_collection('text'),
    )

    def get_locale(self):
        return self.locale

    def __init__(self, text = '', parent=None ,icon="glyphicon-file", opened = True , disabled = False
                 , selected = False , view = "home" , type = 'file' , tooltip = '' , status = 1):
        self.text = text
        self.tooltip = tooltip
        self.parent = parent
        self.icon = icon
        self.opened = opened
        self.disabled = disabled
        self.selected = selected
        self.view = view
        self.type = type
        self.status = status

    def __repr__(self):
        return "TreeNode(name=%r, id=%r, parent_id=%r)" % (
                    self.text,
                    self.id,
                    self.parent_id
                )

    def dump(self, _indent=0):
        return "   " * _indent + repr(self) + \
                    "\n" + \
                    "".join([
                        c.dump(_indent + 1)
                        for c in self.children.values()]
                    )

    def append(self, nodename):
        self.children[nodename] = TreeNode(nodename, parent=self)

class TreeNodeTranslation(translation_base(TreeNode)):
    __tablename__ = 'tree_translation'

    text = sqla.Column(sqla.UnicodeText())
    tooltip = sqla.Column(sqla.UnicodeText())