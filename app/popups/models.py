#!/usr/bin/env python
# -*- coding: utf-8 -*-
import sqlalchemy as sqla
from sqlalchemy_i18n import (
    make_translatable
, translation_base
, Translatable
)
from app import db
from sqlalchemy.orm import relationship, backref
from sqlalchemy.orm.collections import attribute_mapped_collection
import json

from sqlalchemy.ext.declarative import declarative_base
BaseManager = declarative_base()

class LabManager(BaseManager):
    __tablename__ = 'lab_manager'

    id = sqla.Column(sqla.Integer, primary_key=True)
    code = sqla.Column(db.Integer)
    analyser = sqla.Column(sqla.Unicode(256))

    def __init__(self, code = 0, analyser = ''):
        self.code = code
        self.analyser = analyser

    def dump(self, _indent=0):
        return "   " * _indent + repr(self) + \
               "\n" + \
               "".join(
                   [c.dump(_indent + 1) for c in self.children.values()]
               )

    def __repr__(self):
        return "LabManager(id=%r, code=%r, analyser=%r)" % (
            self.id,
            self.code,
            self.analyser
        )
