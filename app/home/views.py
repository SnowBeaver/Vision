#!/usr/bin/env python
# -*- coding: utf-8 -*-

from flask import session
from flask import Blueprint
from flask import render_template
from flask import g, request
from flask import current_app

from app import db ,sql_storage ,blog
from app import babel
from app.users.models import User
from app.home.models import _is_blogger, _get_news , _get_blog_meta
import sqlalchemy_utils
from flask_login import current_user
from app.pages.storage import get_page_by_title ,get_page_by_slug ,process_page , isblogger
from app.pages.views import render
import markdown
from flask import Markup
from flask import jsonify
from app.tree.storage import get_tree

mod = Blueprint('home', __name__, url_prefix='')

@mod.before_app_request
def before_request():
    """
    pull user's profile from the database before every request are treated
    """
    g.user = None

    if 'user_id' in session:
        if session['user_id'] is not None:
            g.user = User.query.get(session['user_id'])
            if not g.user:
                del session['user_id']

    g.locale = get_locale()
    sqlalchemy_utils.i18n.get_locale = get_locale

@babel.localeselector
def get_locale():
    if 'locale' in session:
        if session['locale'] is not None:
            g.locale = session['locale']
            return g.locale

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
# @guest_per.require(http_exception = 403)
def lang(lang):
    """docstring for lang"""
    if lang not in current_app.config['LANGUAGES']:
        lang = current_app.config['BABEL_DEFAULT_LOCALE']

    session['locale'] = lang
    g.locale = lang

    posts = _get_news(current_user)
    meta = _get_blog_meta()

    return render_template(
         'home/index.html'
        ,user = g.user
        ,posts = posts
        ,meta = meta
    )

@mod.route('/', methods=['GET'])
# @guest_per.require(http_exception = 403)
def home():
    """docstring for home."""
    posts = _get_news(current_user)
    meta = _get_blog_meta()

    return render_template(
         'home/index.html'
        ,user  = g.user
        ,posts = posts
        ,meta  = meta
   )

@mod.route('/wiki/users', methods=['GET'])
# @guest_per.require(http_exception = 403)
def wiki_users():
    """docstring for home."""
    #page = get_page_by_title(u"wiki users")

    page = get_page_by_slug(u'wiki-users')

    canEdit = None
    if page is not None:
        canEdit = isblogger(current_user = g.user)
        process_page(page, render = render)

    return render_template(
         'wiki/users.html'
        ,user = g.user
        ,page = page
        ,isblogger = canEdit
    )

@mod.route('/wiki/developers', methods=['GET'])
# @guest_per.require(http_exception = 403)
def wiki_devs():
    """temporary expose README.md from git as a wiki file for developers"""
    with open('README.md', 'r') as fh:
        content = fh.read()
        content = Markup(markdown.markdown(content))

    return render_template(
        'wiki/developers.html',
        **locals()
    )
