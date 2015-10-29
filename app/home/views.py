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
from app.home.models import _is_blogger

from flask_login import current_user


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

    # g.locale = get_locale()

# @babel.localeselector
# def get_locale():
    # if 'locale' in session:
       # g.locale = session['locale']
       # return g.locale

    # return request.accept_languages.best_match(
        # current_app.config['LANGUAGES'].keys()
    # )

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

    # show last news on the front page
    blogging_engine = current_app.extensions["FLASK_BLOGGING_ENGINE"]
    storage = blogging_engine.storage
    
    tag  = "NEWS"
    count = 10
    offset = 0

    render = blogging_engine.config.get("BLOGGING_RENDER_TEXT", True)
    posts = storage.get_posts(count=count, offset=offset, tag=tag,
                              include_draft=False, user_id=None, recent=True)
    for post in posts:
        blogging_engine.process_post(post, render=render)
        post["editable"] = current_user.get_id() == int(post["user_id"])
    
    meta = {}
    meta["is_user_blogger"] = _is_blogger(g.user , blogging_engine.blogger_permission)

    return render_template(
         'home/index.html'
        ,user  = g.user
        ,posts = posts
        ,meta  = meta
   )

@mod.route('/wiki/users', methods=['GET'])
def wiki_users():
    """docstring for home."""
    return render_template(
        'wiki/users.html',
        user=g.user,
    )

@mod.route('/wiki/developers', methods=['GET'])
def wiki_devs():
    """docstring for home."""
    return render_template(
        'wiki/developers.html',
        user=g.user,
    )
