#!/usr/bin/env python
# -*- coding: utf-8 -*-
import sqlalchemy as sqla
from sqlalchemy_i18n import (
     make_translatable
    ,translation_base
    ,Translatable
)
from app import db
from datetime import datetime

make_translatable( options = {'locales': ['en' , 'fr' , 'es']})

class Pages(Translatable , db.Model):
    __tablename__ = 'pages'
    __translatable__ = {
          'locales': ['en' , 'fr', 'es']
         ,'dynamic_source_locale': True
    }

    locale = 'en'  # this defines the default locale

    id = sqla.Column(sqla.Integer, primary_key=True)

    created_on = db.Column(db.DateTime(), default = datetime.utcnow)
    updated_on = db.Column(db.DateTime(), default = datetime.utcnow, onupdate = datetime.utcnow)
    author_id = db.Column(db.Integer,  default = 0)
    draft = sqla.Column(sqla.SmallInteger, default=0)
    slug = sqla.Column(sqla.Unicode(256))
    tag =  sqla.Column(sqla.Unicode(256),autoincrement = False, nullable = True)

    def get_locale(self):
        return self.locale

    def __repr__(self):
        return '<Page - {}>'.format(self.title)

class PageTranslation(translation_base(Pages)):
    __tablename__ = 'pages_translation'

    title = sqla.Column(sqla.Unicode(256))
    text = sqla.Column(sqla.UnicodeText())


