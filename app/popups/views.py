#!/usr/bin/env python
# -*- coding: utf-8 -*-
from flask import Blueprint, request, render_template
from flask import flash, g, session
from app.users.models import User
from .storage import *
from flask import jsonify
from .forms import *
from app import admin_per
from flask import redirect, url_for
import json

lab = Blueprint('lab', __name__, url_prefix='/admin/lab')

@lab.route("/create/", methods=['POST'])
def create():
    if request.is_xhr:
        success = False
        id = 0
        if admin_per.require().can():
            if request.form['code'] and request.form['analyser']:
                id = add_lab(request.form['code'], request.form['analyser'])
                if id is not None:
                    success = True

        return jsonify({'success': success , 'id' : id })
    else:
        # redirect to home
        return redirect(url_for('home.home'))

@lab.route("/get_all/", methods=['POST'])
def get_all():
    if request.is_xhr:
        success = False
        if admin_per.require().can():
            labs = get_labs()
            if labs is not None:
                success = True

        return jsonify({'success': success , 'labs' : labs })
    else:
        # redirect to home
        return redirect(url_for('home.home'))

@lab.route("/delete/", methods=['POST'])
def delete():
    if request.is_xhr:
        success = False
        id = 0
        if admin_per.require().can():
            if request.form['id']:
                id = delete_lab(request.form['id'])
                if id is not None:
                    success = True

        return jsonify({'success': success , 'id' : id })
    else:
        # redirect to home
        return redirect(url_for('home.home'))

@lab.route("/modify/", methods=['POST'])
def modify():
    if request.is_xhr:
        success = False
        if admin_per.require().can():
             if request.form['id'] and request.form['code'] and request.form['analyser']:
                 success = modify_lab(request.form['id'], request.form['code'] , request.form['analyser'] )

        return jsonify({'success': success })
    else:
        # redirect to home
        return redirect(url_for('home.home'))