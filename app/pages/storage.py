#!/usr/bin/env python
# -*- coding: utf-8 -*-

from .models import Pages, PageTranslation
from app import db, sql_storage, blog ,blogger_per , admin_per
from flask import g
from flask.ext.login import current_user
from flask.ext.principal import Principal, RoleNeed ,Permission , ActionNeed
import datetime
from flask import session
import sqlalchemy_utils
from flask import url_for
import markdown
from markdown.extensions.meta import MetaExtension
from sqlalchemy.orm import joinedload

class MathJaxPattern(markdown.inlinepatterns.Pattern):

    def __init__(self):
        markdown.inlinepatterns.Pattern.__init__(self,
                                                 r'(?<!\\)(\$\$?)(.+?)\2')

    def handleMatch(self, m):
        node = markdown.util.etree.Element('mathjax')
        node.text = markdown.util.AtomicString(m.group(2) + m.group(3) +
                                               m.group(2))
        return node

class MathJaxExtension(markdown.Extension):
    def extendMarkdown(self, md, md_globals):
        # Needs to come before escape matching because \ is pretty important
        # in LaTeX
        md.inlinePatterns.add('mathjax', MathJaxPattern(), '<escape')

_markdown_extensions = [MathJaxExtension(), MetaExtension()]


def get_locale():
    if 'locale' in session:
        if session['locale'] is not None:
            return session['locale']

    return 'en'

def set_locale():
    sqlalchemy_utils.i18n.get_locale = get_locale

# Get page by id
def get_page_by_id(page_id):
    try:
        res = Pages.query.filter_by(id = page_id).first()
    except Exception as e:
        import logging
        logging.error(e)
        res = None

    return res

# get page by slug
def get_page_by_slug(slug):
    try:
        res = Pages.query.filter_by(slug = slug).first()
    except Exception as e:
        import logging
        logging.error(e)
        res = None

    return res


# get page by title
def get_page_by_title(title):
    try:
        res = db.session.query(Pages).join(PageTranslation, (PageTranslation.id == Pages.id)).filter(Pages.title == title)\
             .first()
        # print(db.session.query(Pages).join(PageTranslation, (PageTranslation.id == Pages.id)).filter(Pages.title == title))
        # print(res)
    except Exception as e:
        import logging
        logging.error(e)
        res = None

    return res

# delete post by id
def delete_page_by_id(page_id):
    try:
        page = Pages.query.filter_by(id = page_id).first()
        db.session.delete(page)
        db.session.commit()
        res = page.id
    except Exception as e:
        import logging
        logging.error(e)
        res  = None

    return res

#check if user is the author of the post
def is_author(page_id):
    author = False
    if page_id is not None:
        author = current_user.get_id() == int(page_id)
    canedit = author or admin_per.require().can()

    return canedit

# Get all pages
def get_all_pages():
    pages = Pages.query.order_by(Pages.updated_on.desc()).all()
    return pages

#check if user can edit
def isblogger(current_user):
    if current_user is not None:
	    authenticated = current_user.is_authenticated() if \
	        callable(current_user.is_authenticated) \
	        else current_user.is_authenticated
    else:
    	authenticated = False

    is_blogger = authenticated and \
        blogger_per.require().can()

    return is_blogger

#store data from page
def store_form_data(blog_form ,user ,page):
    title = blog_form.title.data
    text = blog_form.text.data
    slug = blog_form.slug.data
    # draft = blog_form.draft.data
    author_id = user.get_id()
    current_datetime = datetime.datetime.utcnow()
    # created_on = page.get("created_on", current_datetime)
    created_on = page.created_on if page.created_on is not None else current_datetime
    updated_on = datetime.datetime.utcnow()
    # page_id = page.get("id")
    page_id = page.id if page.id is not None else None

    pid = save_page(  title = title
                     ,text = text
                     ,slug = slug
                     ,author_id = author_id
                     ,created_on = created_on
                     ,updated_on = updated_on
                     ,page_id = page_id
    )

    return pid

def save_page(title ,text, slug , author_id ,created_on,updated_on,page_id):
    try:
        if page_id is not None:
            currentPage = Pages.query.filter_by(id = page_id).first()
            page_id = page_id if currentPage else None

        if page_id is None:
            currentPage = Pages(  title = title
                                 ,text = text
                                 ,slug = slug
                                 ,created_on = created_on
                                 ,updated_on = updated_on
                                 ,author_id = author_id
            )

            if get_locale() is not currentPage.get_locale():
                currentPage.translations[currentPage.get_locale()].title = title
                currentPage.translations[currentPage.get_locale()].text = text
        else:
            currentPage.title = title;
            currentPage.text = text;
            currentPage.slug = slug;
            currentPage.created_on = created_on;
            currentPage.updated_on = updated_on;
            currentPage.author_id = author_id;

        db.session.add(currentPage)
        db.session.commit()

        page_id = currentPage.id \
                    if page_id is None else page_id
    except Exception as e:
        import logging
        logging.error(e)
        page_id = None

    return page_id

def construct_url(page_id):
    url = url_for("pages.page", page_id = page_id)
    return url

def render_text(page):
    md = markdown.Markdown(extensions = _markdown_extensions)
    page.rendered_text = md.convert(page.text)
    page.meta = md.Meta

def process_page(page, render):
    page.editable = is_author(page.author_id)
    page.url = construct_url(page.id)
    if render:
        render_text(page)
