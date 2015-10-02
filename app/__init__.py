#!/usr/bin/env python
# -*- coding: utf-8 -*-

from flask import Flask, render_template
from flask.ext.sqlalchemy import SQLAlchemy
from flask_mail import Mail

app = Flask(__name__)
app.config.from_object('config')
db = SQLAlchemy(app)
db.create_all()
mail = Mail(app)


@app.errorhandler(404)
def not_found(error):
    return render_template('404.html'), 404

@app.errorhandler(500)
def error_500(error):
    return render_template('500.html'), 500


from app.home.views import mod as homeModule
app.register_blueprint(homeModule)

from app.users.views import mod as userModule
app.register_blueprint(userModule)
