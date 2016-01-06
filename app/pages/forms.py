#!/usr/bin/env python
# -*- coding: utf-8 -*-
from flask.ext.wtf import Form
from wtforms import StringField, TextAreaField, SubmitField, BooleanField
from wtforms.validators import DataRequired
from flask.ext.babel import gettext

class PageEditor(Form):
    title = StringField( "title" , validators=[DataRequired()])
    slug = StringField( "slug" , validators=[DataRequired()])
    tag = StringField( "slug" , validators=[DataRequired()])
    text = TextAreaField( "text" , validators=[DataRequired()])
    # draft = BooleanField("draft" , default=False)
    submit = SubmitField(gettext(u"submit"))

