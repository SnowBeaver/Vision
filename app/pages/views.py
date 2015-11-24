#!/usr/bin/env python
# -*- coding: utf-8 -*-
from flask import Blueprint, request, render_template
from flask import flash, g, session, redirect, url_for ,flash
from app import blogger_per
from .storage import *
from .forms import PageEditor
from flask.ext.principal import PermissionDenied
from flask.ext.babel import gettext
from app.users.models import User

mod = Blueprint('pages', __name__, url_prefix='/pages')
#true for the moment
render = True

@mod.before_app_request
def before_request():
    """
    pull user's profile from the database before every request are treated
    """
    set_locale()
    g.user = None

    if 'user_id' in session:
        if session['user_id'] is not None:
            g.user = User.query.get(session['user_id'])

@mod.route("/page/<int:page_id>/", defaults={"page_id": None} )
@mod.route("/page/<int:page_id>/")
def page(page_id):
    global render
    page = get_page_by_id(page_id)
    canedit = isblogger(current_user = g.user)

    process_page(page, render = render)

    return render_template(
         "pages/page.html"
        ,page = page
        ,isblogger = canedit
    )

@mod.route("/delete/<int:page_id>/")
def delete(page_id):
    page = get_page_by_id(page_id)
    if page is not None:
        pid = delete_page_by_id(page.id)
        if pid is not None:
            flash(gettext(u"Page successfully delete"), gettext(u"info"))
        else:
            flash(gettext(u"Could not delete page"), gettext(u"warning"))

    else:
        flash(gettext(u"Page dosen't exists"), gettext(u"warning"))

    return redirect(url_for("pages.show"))


@mod.route("/show/", methods=['GET', 'POST'])
@mod.route("/", methods=['GET', 'POST'])
def show():
    global render
    pages  = get_all_pages()
    canedit = isblogger(current_user = g.user)

    for page in pages:
        process_page(page, render = render)

    return render_template(
         "pages/show.html"
        ,pages = pages
        ,isblogger = canedit
    )

@mod.route("/editor/<int:page_id>/", methods=['GET', 'POST'] )
@mod.route("/editor/", defaults={"page_id": None} ,methods=['GET', 'POST'] )
def editor(page_id):
    try:
        with blogger_per.require():
            if request.method == 'POST':
                form = PageEditor(request.form)
                if form.validate():
                    if form.validate():
                        page = get_page_by_id(page_id)
                        if (page is not None) and page.id == page_id:
                            pass
                        else:
                            page = Pages()

                        pid = store_form_data(form,current_user, page)
                        flash(gettext(u"Page successfully added!"), gettext(u"info"))
                        return redirect(url_for(
                                 "pages.page"
                                ,page_id = pid
                        ))
                    else:
                        flash(gettext(u"There were errors in page submission"), gettext(u"warning"))
                        return render_template(
                            "pages/editor.html"
                            ,form = form
                            ,page_id = page_id
                        )
            else:
                if page_id is not None:
                    page = get_page_by_id(page_id)
                    if (page is not None) \
                            and (is_author(page.author_id)):
                        form = PageEditor(
                             title = page.title
                            ,slug = page.slug
                            ,text = page.text
                        )
                        return render_template(
                             "pages/editor.html"
                            ,form = form
                            ,page_id = page_id
                        )
                    else:
                        flash(gettext(u"You do not have the rights to edit this page"),gettext(u"warning"))
                        return redirect(url_for("pages.show"))

            form = PageEditor()
            return render_template(
                 "pages/editor.html"
                ,form = form
                ,page_id = page_id
            )
    except PermissionDenied:
        flash(gettext(u"You do not have permissions to create or edit pages"), gettext(u"warning"))
        return redirect(url_for("pages.show"))
