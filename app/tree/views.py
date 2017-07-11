#!/usr/bin/env python
# -*- coding: utf-8 -*-
from flask import Blueprint, request, render_template
from flask import flash, g, session
from app.users.models import User
from .storage import *
from flask import jsonify
from .forms import TreeView
from app import admin_per
from flask import redirect, url_for
from app.graph_renderer import GraphGenerator

mod = Blueprint('tree', __name__, url_prefix='/admin/tree')


@mod.before_app_request
def before_request():
    set_locale()
    g.user = None
    if 'user_id' in session:
        if session['user_id'] is not None:
            g.user = User.query.get(session['user_id'])


@mod.route("/rename/", methods=['POST'])
def rename():
    if request.is_xhr:
        success = False
        if admin_per.require().can():
            if request.form['id']:
                success = rename_node(id=request.form['id'], text=request.form['text'])

        return jsonify({'success': success})
    else:
        # redirect to home
        return redirect(url_for('home.home'))


@mod.route("/create/", methods=['POST'])
def create():
    if request.is_xhr:
        id = None
        if admin_per.require().can():
            if request.form['parent']:
                id = create_node(parent=request.form['parent'], text=request.form['text']
                                 , icon=request.form['icon'], type=request.form['type'],
                                 tooltip=request.form['tooltip'])

        return jsonify({'id': id})
    else:
        # redirect to home
        return redirect(url_for('home.home'))


@mod.route("/delete/", methods=['POST'])
def delete():
    if request.is_xhr:
        id = None
        if admin_per.require().can():
            if request.form['id']:
                id = delete_node(id=request.form['id'])

        return jsonify({'id': id})
    else:
        # redirect to home
        return redirect(url_for('home.home'))


@mod.route("/update/", methods=['POST'])
def update():
    if request.is_xhr:
        status = "NOK"
        ret_id = None
        tooltip = None
        if admin_per.require().can():
            form = TreeView(request.form)
            if form.validate():
                res = update_node(request.form['node_id'], request.form['view'], request.form['tooltip'])
                if res is not None:
                    ret_id = request.form['node_id']
                    tooltip = request.form['tooltip']
                    status = "OK"
        return jsonify({'status': status, 'id': ret_id, 'tooltip': tooltip})
    else:
        # redirect to home
        return redirect(url_for('home.home'))


@mod.route("/getview/", methods=['POST'])
def getview():
    if request.is_xhr:
        retView = None
        tooltip = None
        if admin_per.require().can():
            if request.form['node_id']:
                res = get_view_by_id(request.form['node_id'])
                if res is not None:
                    retView, tooltip = res

        return jsonify({'view': retView, 'tooltip': tooltip})
    else:
        # redirect to home
        return redirect(url_for('home.home'))


@mod.route("/renderview/", methods=['POST'])
def renderview():
    if request.is_xhr:
        template = None
        if request.form['node_id']:
            view = get_view_by_id(request.form['node_id'])
            data = "views/" + view + ".html"
            template = render_template(data)

        return template
    else:
        # redirect to home
        return redirect(url_for('home.home'))


@mod.route("/move/", methods=['POST'])
def move():
    if request.is_xhr:
        status = "NOK"
        if request.form['node_id']:
            res = move_node(request.form['node_id'], request.form['parent_id'])
            if res is not None:
                status = "OK"
        return jsonify({'status': status})
    else:
        # redirect to home
        return redirect(url_for('home.home'))


@mod.route("/move_to_location/", methods=['POST'])
def move_to_location():
    if request.is_xhr:
        status = "NOK"
        if request.form['node_id']:
            res = move_node_to_location(request.form['node_id'], request.form['location_id'])
            if res is not None:
                status = "OK"
        return jsonify({'status': status})
    else:
        # redirect to home
        return redirect(url_for('home.home'))


@mod.route("/copy/", methods=['POST'])
def copy():
    if request.is_xhr:
        status = "NOK"
        if request.form['node_id']:
            res = copy_node(request.form['node_id'], request.form['parent_id'])
            if res is not None:
                status = "OK"

        return jsonify({'status': status})
    else:
        # redirect to home
        return redirect(url_for('home.home'))


@mod.route("/join/", methods=['POST'])
def join():
    if request.is_xhr:
        status = "NOK"
        if request.form['node_id']:
            res = join_node(request.form['node_id'], request.form['to_join'])
            if res is not None:
                status = "OK"

        return jsonify({'status': status, 'joined': res})
    else:
        # redirect to home
        return redirect(url_for('home.home'))


@mod.route("/status/", methods=['POST'])
def status():
    if request.is_xhr:
        status = "NOK"
        src = ''
        if request.form['node_id']:
            res = change_status(request.form['node_id'], request.form['status'])
            if res is not None:
                status = "OK"
                src = res

        return jsonify({'status': status, 'src': src})
    else:
        # redirect to home
        return redirect(url_for('home.home'))


@mod.route('/graph/<int:id>', methods=['GET'])
def graph(id):
    html = GraphGenerator(equipment_id=id, graph_type='gas_concentration_vs_time').render()
    return render_template('admin/graph.html', graph=html)
