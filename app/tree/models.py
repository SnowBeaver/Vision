#!/usr/bin/env python
# -*- coding: utf-8 -*-
import sqlalchemy as sqla
from sqlalchemy_i18n import (
    make_translatable
, translation_base
, Translatable
)

from sqlalchemy.orm import relationship, backref
from sqlalchemy.orm.collections import attribute_mapped_collection
from sqlalchemy.ext.declarative import declarative_base
import json

from app.diagnostic.models import Equipment


BaseManager = declarative_base()

make_translatable(options={'locales': ['en', 'fr', 'es']})

def dump_datetime(value):
    """Deserialize datetime object into string form for JSON processing."""
    if value is None:
        return None
    return [value.strftime("%Y-%m-%d"), value.strftime("%H:%M:%S")]


class TreeNode(Translatable, BaseManager):
    # class TreeNode(Translatable , db.Model):
    __tablename__ = 'tree'
    __translatable__ = {
        'locales': ['en', 'fr', 'es']
        , 'dynamic_source_locale': True
    }

    locale = 'en'  # this defines the default locale

    id = sqla.Column(sqla.Integer, primary_key=True)
    parent_id = sqla.Column(sqla.Integer, sqla.ForeignKey(id))

    # equipment_id is a foreign key only to equipment, not like it was
    # previously it was sqla.Integer field as this table was used for
    # storing both  equipment and pages
    equipment_id = sqla.Column(sqla.ForeignKey(Equipment.id), nullable=True)
    equipment = relationship(Equipment, backref='tree',cascade="all, delete")

    # costumed column
    icon = sqla.Column(sqla.String(126), default="../app/static/img/file.png")
    opened = sqla.Column(sqla.Boolean(), default=True)
    disabled = sqla.Column(sqla.Boolean(), default=False)
    selected = sqla.Column(sqla.Boolean(), default=False)
    type = sqla.Column(sqla.String(58), default='file')
    view = sqla.Column(sqla.String(126), default='home')
    status = sqla.Column(sqla.SmallInteger(), default=1)

    children = relationship(
        "TreeNode",
        # cascade deletions
        cascade="all, delete-orphan",
        # many to one + adjacency list - remote_side
        # is required to reference the 'remote'
        # column in the join condition.
        backref=backref("parent", remote_side=id),
        # children will be represented as a dictionary
        # on the "name" attribute.
        # collection_class=attribute_mapped_collection('text'),
    )

    def get_locale(self):
        return self.locale


    def __init__(self, text='', parent=None, icon="glyphicon-file", opened=True, disabled=False
                 , selected=False, view="home", type='file', tooltip='', status=1):
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

    def serialize(self):
        """Return object data in easily serializeable format"""
        # return json.dumps(self, default=lambda o: o.__dict__,
        #                   sort_keys=True, indent=4)
        return {
            'id': self.id,
            'text': self.text,
            # 'parent': self.parent and self.parent.serialize(),
            'icon': self.icon,
            'opened': self.opened,
            'disabled': self.disabled,
            'view': self.view,
            'type': self.type,
            'status': self.status,
            'equipment_id': self.equipment_id,
            'equipment_type_id': self.equipment and self.equipment.equipment_type_id,
            'tie_status': self.equipment and self.equipment.tie_status,
            # # This is an example how to deal with Many2Many relations
            'children': self.serialize_many2many()
        }

    def serialize_many2many(self):
        """
        Return object's relations in easily serializeable format.
        NB! Calls many2many's serialize property.
        """
        if not self.children:
            return None
        return [item.serialize() for item in self.children]

    def __repr__(self):
        return "{ name: %r, id: %r, parent_id: %r }" % (
            self.text or '',
            self.id,
            self.parent_id
        )

    # def dump(self, _indent=0):
    #     p = self.serialize()
    #     p['children'] = [c.serialize() for c in self.children.values()]
    #     return p

    def dump(self, _indent=0):
        return "   " * _indent + repr(self) + \
               "\n" + \
               "".join(
                   [c.dump(_indent + 1) for c in self.children.values()]
               )

    def append(self, nodename):
        self.children[nodename] = TreeNode(nodename, parent=self)


class TreeNodeTranslation(translation_base(TreeNode)):
    __tablename__ = 'tree_translation'

    text = sqla.Column(sqla.UnicodeText())
    tooltip = sqla.Column(sqla.UnicodeText())

    @property
    def serialize(self):
        """Return object data in easily serializeable format"""
        # return json.dumps(self, default=lambda o: o.__dict__,
        #                   sort_keys=True, indent=4)
        return {
            'id': self.id,
            'text': self.text,
            'tooltip': self.tooltip,
        }

