#!/usr/bin/env python
# -*- coding: utf-8 -*-

from flask import session
from flask import Blueprint
from flask import render_template
from flask import g, request
from flask import current_app
from app import db
from app import babel
from app.users.models import User

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

    g.locale = get_locale()

@babel.localeselector
def get_locale():
    if 'locale' in session:
        g.locale = session['locale']
        return g.locale

    # import sys
    # sys.exit(1)
    return request.accept_languages.best_match(
        current_app.config['LANGUAGES'].keys()
    )

@babel.timezoneselector
def get_timezone():
    user = getattr(g, 'user', None)
    if user is not None:
        return user.timezone

# Use the browser's language preferences to select an available translation
# @babel.localeselector
# def get_locale():
    # translations = [str(translation) for translation in babel.list_translations()]
    # return request.accept_languages.best_match(translations)

@mod.route('/lang/<string:lang>', methods=['GET'])
def lang(lang):
    """docstring for lang"""
    if lang not in current_app.config['LANGUAGES']:
        lang = current_app.config['BABEL_DEFAULT_LOCALE']

    session['locale'] = lang
    g.locale = lang

    return render_template(
        'home/index.html',
        user=g.user,
    )

@mod.route('/', methods=['GET'])
def home():
    """docstring for home."""
    return render_template(
        'home/index.html',
        user=g.user,
    )
