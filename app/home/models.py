#!/usr/bin/env python
# -*- coding: utf-8 -*-
from app import db ,sql_storage ,blog
from flask import g

# check if current user has write options
def _is_blogger(current_user,blogger_permission):
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

    tag  = "NEWS"
    count = 10
    offset = 0

    render = blog.config.get("BLOGGING_RENDER_TEXT", True)
    posts = sql_storage.get_posts(count=count, offset=offset, tag=tag,
                              include_draft=False, user_id=None, recent=True)
    for post in posts:
        blog.process_post(post, render=render)
        post["editable"] = current_user.get_id() == int(post["user_id"])

    return posts

#get blogger meta
def _get_blog_meta():
    meta = {}
    meta["is_user_blogger"] = _is_blogger(g.user , blog.blogger_permission)

    return meta
