from flask import flash, g, session
import sqlalchemy_utils
from .models import *
from app import db
from sqlalchemy.orm import joinedload_all
from app import app
from sqlalchemy.orm.session import make_transient
import json


def add_lab(code, analyser):
    try:
        node = LabManager(code=code, analyser=analyser)
        # think of a different solution how to extract node.id
        db.session.add(node)
        db.session.commit()
        res = node.id
    except Exception as e:
        import logging
        logging.error(e)
        res = None

    return res


def get_labs():
    try:
        res = []
        out = db.session.query(LabManager).all()

        for node in out:
            res.append({
                'id': node.id
                , 'code': node.code
                , 'analyser': node.analyser
            })
    except Exception as e:
        import logging
        logging.error(e)
        res = None

    return res


def delete_lab(id):
    try:
        node = db.session.query(LabManager).filter(LabManager.id == id).first()
        db.session.delete(node)
        db.session.commit()
        res = node.id
    except Exception as e:
        import logging
        logging.error(e)
        res = None

    return res


def modify_lab(id, code, analyser):
    try:
        node = db.session.query(LabManager).filter(LabManager.id == id).first()
        node.code = code
        node.analyser = analyser
        db.session.commit()

        res = True
    except Exception as e:
        import logging
        logging.error(e)
        res = None

    return res


def create_electrical_profile(data):
    try:
        node = ElectricalProfile(data=data)
        # think of a different solution how to extract node.id
        db.session.add(node)
        db.session.commit()
        res = node.id
    except Exception as e:
        import logging
        logging.error(e)
        res = None

    return res


def create_fluid_profile(data):
    try:
        node = FluidProfile(data=data)
        # think of a different solution how to extract node.id
        db.session.add(node)
        db.session.commit()
        res = node.id
    except Exception as e:
        import logging
        logging.error(e)
        res = None

    return res


def get_selections(model):
    try:
        res = []
        nodes = db.session.query(model).with_entities(model.selection, model.description).all()
        # nodes =  db.session.query(ElectricalProfile).all()
        for node in nodes:
            res.append({
                'selection': node.selection
                , 'description': node.description
            })

    except Exception as e:
        import logging
        logging.error(e)
        res = None

    return res


def delete_electrical_profile(profile):
    try:
        node = db.session.query(ElectricalProfile).filter(ElectricalProfile.selection == profile).first()
        db.session.delete(node)
        db.session.commit()
        res = node.id
    except Exception as e:
        import logging
        logging.error(e)
        res = None

    return res


def delete_fluid_profile(profile):
    try:
        node = db.session.query(FluidProfile).filter(FluidProfile.selection == profile).first()
        db.session.delete(node)
        db.session.commit()
        res = node.id
    except Exception as e:
        import logging
        logging.error(e)
        res = None

    return res


def modify_electrical_profile(data):
    try:
        # print data['selection']
        node = db.session.query(ElectricalProfile).filter(ElectricalProfile.selection == data['selection']).first()
        res = None
        if node:
            node.clear_data()
            node.add_data(data)

            db.session.add(node)
            db.session.commit()
            res = node.id
    except Exception as e:
        import logging
        logging.error(e)
        res = None

    return res


def modify_fluid_profile(data):
    try:
        node = db.session.query(FluidProfile).filter(FluidProfile.selection == data['selection']).first()
        res = None
        if node:
            node.clear_data()
            node.add_data(data)

            db.session.add(node)
            db.session.commit()
            res = node.id
    except Exception as e:
        import logging
        logging.error(e)
        res = None

    return res


def get_electrical_profile(selection):
    try:
        res = None
        node = db.session.query(ElectricalProfile).filter(ElectricalProfile.selection == selection).first()
        if node:
            out = {}
            for key in node.__dict__:
                if key not in ['_sa_instance_state', 'id', 'selection']:
                    out[key] = getattr(node, key)

            res = out
    except Exception as e:
        import logging
        logging.error(e)
        res = None

    return res


def get_fluid_profile(selection):
    try:
        res = None
        node = db.session.query(FluidProfile).filter(FluidProfile.selection == selection).first()
        if node:
            out = {}
            for key in node.__dict__:
                if key not in ['_sa_instance_state', 'id', 'selection']:
                    out[key] = getattr(node, key)

            res = out
    except Exception as e:
        import logging
        logging.error(e)
        res = None

    return res
