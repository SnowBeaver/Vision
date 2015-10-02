#!/usr/bin/env python
# -*- coding: utf-8 -*-
from flask import session
from flask import Blueprint
from flask import render_template
from app import db
from app.users.models import User
import datetime
from app.home.decorators import templated
from flask import g

mod = Blueprint('home', __name__, url_prefix='')


@mod.before_app_request
def before_request():
    """
    pull user's profile from the database before every request are treated
    """
    g.user = None

    if 'user_id' in session:
        g.user = User.query.get(session['user_id'])
        if not g.user:
            del session['user_id']


@mod.route('/', methods=['GET'])
def home():
    """docstring for home."""
    return render_template(
        'home/index.html',
        user=g.user
    )
