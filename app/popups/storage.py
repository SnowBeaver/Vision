from flask import flash, g, session
import sqlalchemy_utils
from .models import *
from app import db
from sqlalchemy.orm import joinedload_all
from app import app
from sqlalchemy.orm.session import make_transient
import json

def add_lab(code , analyser):
    try:
        node = LabManager(code = code, analyser = analyser)
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
                 'id' : node.id
                ,'code': node.code
                ,'analyser' : node.analyser
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