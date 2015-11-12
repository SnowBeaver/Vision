import os
import os.path as op
from flask import Flask
from flask import Blueprint, request, render_template
from flask.ext.admin.contrib import sqla
from app import db
from app.users.models import User, Role
from flask import flash, g, session, redirect, url_for
from flask.ext.admin.contrib.sqla import ModelView
from flask.ext.sqlalchemy import SQLAlchemy
from flask.ext.admin.contrib.sqla import filters
from flask.ext.admin import helpers, expose
from flask.ext import admin, login
from wtforms import form, fields, validators
from flask import current_app
from werkzeug.security import check_password_hash
from app import admin_per , user_per , guest_per , blogger_per


# Define login and registration forms (for flask-login)
class LoginForm(form.Form):
    email = fields.TextField(validators=[validators.required()])
    password = fields.PasswordField(validators=[validators.required()])

    def validate_email(self, field):
        user = self.get_user()

        if user is None:
            raise validators.ValidationError('Invalid user')

        if not check_password_hash(user.password, self.password.data):
            raise validators.ValidationError('Invalid password')

    def get_user(self):
        return db.session.query(User).filter_by(email=self.email.data).first()

class MyAdminIndexView(admin.AdminIndexView):

    @expose('/')
    @admin_per.require(http_exception = 403)
    def index(self):
        if not login.current_user.is_authenticated():
            return redirect(url_for('.login_view'))
        return super(MyAdminIndexView, self).index()

    @expose('/login/', methods=('GET', 'POST'))
    def login_view(self):
        # handle user login
        link = ''
        form = LoginForm(request.form)
        if helpers.validate_form_on_submit(form):
            user = form.get_user()
            if not user:
                link = '<p>Please contact %s</p>' % current_app.config['SUPPORT_EMAIL']
                self._template_args['link'] = link
                return redirect(url_for('.index'))

            login.login_user(user)

        if login.current_user.is_authenticated():
            return redirect(url_for('.index'))
        self._template_args['form'] = form
        self._template_args['link'] = link
        return super(MyAdminIndexView, self).index()

    @expose('/logout/')
    def logout_view(self):
        login.logout_user()
        return redirect(url_for('.index'))


class MyModelView(ModelView):

    def is_accessible(self):

        if not login.current_user.is_authenticated():
            return False

        # Prevent administration of Roles unless the
        # currently logged-in user has the "admin" role
        return login.current_user.has_role('admin')


class RoleAdmin(MyModelView):

    def __init__(self, dbsession):
        super(RoleAdmin, self).__init__(Role, dbsession)


class UserAdmin(MyModelView):
    """
    User management view
    """
    # Visible columns in the list view
    column_hide_backrefs = False
    form_excluded_columns = (
        'password',
        'confirmed_at',
        'created',
        'updated',
        'status',
    )
    column_exclude_list = [
        'password',
        'confirmed_at',
        'updated',
        'photo',
        'address',
        'mobile',
        'website',
        'country'
    ]

    # # List of columns that can be sorted.
    column_sortable_list = ('name', 'email', 'alias')

    # # rename column names
    column_labels = dict(
        name='Full Name',
        alias='Username',
    )

    column_searchable_list = ('alias', 'name', 'email', 'id')

    def __init__(self, dbsession):
        super(UserAdmin, self).__init__(User, dbsession)
