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

    id = sqla.Column(sqla.Integer, primary_key = True)
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

import inspect
import json

class ElectricalProfile(BaseManager):
    __tablename__ = 'electrical_profile'

    id = sqla.Column(sqla.Integer, primary_key = True)

    selection = sqla.Column(sqla.Unicode(256))
    description = sqla.Column(sqla.Unicode(1024))

    bushing = sqla.Column(sqla.Boolean(False))
    winding = sqla.Column(sqla.Boolean(False))
    winding_double = sqla.Column(sqla.Boolean(False))
    insulation = sqla.Column(sqla.Boolean(False))
    visual = sqla.Column(sqla.Boolean(False))
    resistance = sqla.Column(sqla.Boolean(False))
    degree = sqla.Column(sqla.Boolean(False))
    turns = sqla.Column(sqla.Boolean(False))

    def dump(self, _indent=0):
        return "   " * _indent + repr(self) + \
               "\n" + \
               "".join(
                   [c.dump(_indent + 1) for c in self.children.values()]
               )

    def parsedata(self , data ):
        if data:
            for key in data.keys():
                # print key + ' ' + data[key]
                if hasattr(self, key):
                    if key == 'selection' or key == 'description':
                        if data[key]:
                            setattr( self, key , data[key] )
                    else:
                        setattr( self, key , True if data[key] == 'y' else False )

    def __init__(self, data = None):
        self.parsedata(data)
        # print getattr(self, key)

    def clear_data(self):
        for attr in self.__dict__:
            if attr not in [ 'id' , '_sa_instance_state' ]:
                #print attr
                if attr == 'selection' or attr == 'description':
                    setattr( self, attr , '' )
                else:
                    setattr( self, attr , False )

    def add_data(self, data):
        self.parsedata(data)

class FluidProfile(BaseManager):
    __tablename__ = 'fluid_profile'

    id = sqla.Column(sqla.Integer, primary_key = True)

    selection = sqla.Column(sqla.Unicode(256))
    description = sqla.Column(sqla.Unicode(1024))

    # syringe
    gas = sqla.Column(sqla.Boolean(False))
    water = sqla.Column(sqla.Boolean(False))
    furans = sqla.Column(sqla.Boolean(False))
    inhibitor = sqla.Column(sqla.Boolean(False))
    pcb = sqla.Column(sqla.Boolean(False))
    qty = sqla.Column(sqla.Integer)
    sampling = sqla.Column(sqla.Integer)
    # jar
    dielec = sqla.Column(sqla.Boolean(False))
    acidity = sqla.Column(sqla.Boolean(False))
    density = sqla.Column(sqla.Boolean(False))
    pcb_jar = sqla.Column(sqla.Boolean(False))
    inhibitor_jar = sqla.Column(sqla.Boolean(False))
    point = sqla.Column(sqla.Boolean(False))
    dielec_2 = sqla.Column(sqla.Boolean(False))
    color = sqla.Column(sqla.Boolean(False))
    pf = sqla.Column(sqla.Boolean(False))
    particles = sqla.Column(sqla.Boolean(False))
    metals = sqla.Column(sqla.Boolean(False))
    viscosity = sqla.Column(sqla.Boolean(False))
    dielec_d = sqla.Column(sqla.Boolean(False))
    ift = sqla.Column(sqla.Boolean(False))
    pf_100 = sqla.Column(sqla.Boolean(False))
    furans_f = sqla.Column(sqla.Boolean(False))
    water_w = sqla.Column(sqla.Boolean(False))
    corr = sqla.Column(sqla.Boolean(False))
    dielec_i = sqla.Column(sqla.Boolean(False))
    visual = sqla.Column(sqla.Boolean(False))
    qty_jar = sqla.Column(sqla.Integer)
    sampling_jar = sqla.Column(sqla.Integer)
    # vial
    pcb_vial = sqla.Column(sqla.Boolean(False))
    antioxidant = sqla.Column(sqla.Boolean(False))
    qty_vial = sqla.Column(sqla.Integer)
    sampling_vial = sqla.Column(sqla.Integer)

    def parsedata(self , data ):
        if data:
            for key in data.keys():
                if hasattr(self, key):
                    if key in [ 'selection', 'description' ,'qty', 'sampling', 'qty_jar', 'sampling_jar', 'qty_vial', 'sampling_vial', 'sampling_vial']:
                        if data[key]:
                            setattr( self, key , data[key] )
                    else:
                        setattr( self, key , True if data[key] == 'y' else False )

    def __init__(self, data = None):
        self.parsedata(data)


    def clear_data(self):
        for attr in self.__dict__:
            if attr not in [ 'id' , '_sa_instance_state' ]:
                #print attr
                if attr == 'selection' and attr == 'description':
                    setattr( self, attr , '' )
                if attr in [ 'qty', 'sampling', 'qty_jar', 'sampling_jar', 'qty_vial', 'sampling_vial', 'sampling_vial']:
                    setattr( self, attr , 0 )
                else:
                    setattr( self, attr , False )

    def add_data(self, data):
        self.parsedata(data)