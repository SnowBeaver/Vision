#!/usr/bin/env python
# -*- coding: utf-8 -*-
from app import db, sql_storage, blog
from flask import g


# check if current user has write options
def _is_blogger(current_user, blogger_permission):
    if current_user is not None:
        authenticated = current_user.is_authenticated() if \
            callable(current_user.is_authenticated) \
            else current_user.is_authenticated
    else:
        authenticated = False

    is_blogger = authenticated and \
                 blogger_permission.require().can()
    return is_blogger


# show last news on the front page
def _get_news(current_user):
    tag = "NEWS"
    count = 10
    offset = 0

    render = blog.config.get("BLOGGING_RENDER_TEXT", True)
    posts = sql_storage.get_posts(count=count, offset=offset, tag=tag,
                                  include_draft=False, user_id=None, recent=True)
    for post in posts:
        blog.process_post(post, render=render)
        post["editable"] = current_user.get_id() == int(post["user_id"])

    return posts


# get blogger meta
def _get_blog_meta():
    meta = {}
    meta["is_user_blogger"] = _is_blogger(g.user, blog.blogger_permission)

    return meta


from flask.ext.principal import identity_loaded, RoleNeed, UserNeed
from app import app as app_cfg
from app import admin_per, user_per, guest_per, blogger_per
from app import be_admin, be_user, be_guest, be_blogger
from flask_login import current_user
from flask import current_app


@identity_loaded.connect_via(app_cfg)
def on_identity_loaded(sender, identity):
    # Set the identity user object
    identity.user = current_user

    # Add the UserNeed to the identity
    if hasattr(current_user, 'id'):
        identity.provides.add(UserNeed(current_user.id))

    # Assuming the User model has a list of roles, update the
    # identity with the roles that the user provides

    if hasattr(current_user, 'roles'):
        roles = getattr(current_app, 'roles', None)
        if roles is not None:
            for role in roles:
                identity.provides.add(RoleNeed(role.name))
        else:
            identity.provides.add(be_guest)
    else:
        identity.provides.add(be_guest)


# get all stored images
from app.admin.models import Image


def get_images():
    try:
        allImages = db.session().query(Image).all()
        res = [img.serialize for img in allImages]
    except Exception as e:
        import logging
        logging.error(e)
        res = None

    return res
