#!/usr/bin/env python
# -*- coding: utf-8 -*-
from flask import Blueprint, request, render_template
from .storage import *
from flask import jsonify
from .forms import *
from app import admin_per
from flask import redirect, url_for
from flask.ext.wtf import Form
from wtforms.ext.appengine.db import model_form


lab_profile = Blueprint('lab_profile', __name__, url_prefix='/admin/lab')
test_profile = Blueprint('test_profile', __name__, url_prefix='/admin/test_profile')
campaign_profile = Blueprint('campaign_profile', __name__, url_prefix='/admin/campaign')
equipment_profile = Blueprint('equipment_profile', __name__, url_prefix='/admin/equipment')
contract_profile = Blueprint('contract_profile', __name__, url_prefix='/admin/contract')
fluid_profile = Blueprint('fluid_profile', __name__, url_prefix='/admin/fluid_profile')
test_type_profile = Blueprint('test_type_profile', __name__, url_prefix='/admin/test_type')
test_type_result_table_profile = Blueprint('test_type_result_table_profile', __name__, url_prefix='/admin/test_type_result_table')

# simple tables
blueprints = ({'table': 'TestReason', 'table_title': 'test_reason', 'hname': 'Test_reason'},
              {'table': 'GasLevel', 'table_title': 'gas_level', 'hname': 'Gas level'},
              {'table': 'PaintTypes', 'table_title': 'paint_types', 'hname': 'Paint types'},
              {'table': 'FanCondition', 'table_title': 'fan_condition', 'hname': 'Fan condition'},
              {'table': 'HeatingCondition', 'table_title': 'heating_condition', 'hname': 'Heating condition'},
              {'table': 'FoundationCondition', 'table_title': 'foundation_condition', 'hname': 'Foundation condition'},
              {'table': 'ConnectionCondition', 'table_title': 'connection_condition', 'hname': 'Connection condition'},
              {'table': 'TapFilterCondition', 'table_title': 'tap_filter_condition', 'hname': 'Tap filter condition'},
              {'table': 'TapCounterStatus', 'table_title': 'tap_counter_status', 'hname': 'Tap counter status'},
              {'table': 'OverallCondition', 'table_title': 'overall_condition', 'hname': 'Overall condition'},
              {'table': 'GasketCondition', 'table_title': 'gasket_condition', 'hname': 'Gasket condition'},
              {'table': 'ValveCondition', 'table_title': 'valve_condition', 'hname': 'Valve condition'},
              {'table': 'PumpCondition', 'table_title': 'pump_condition', 'hname': 'Pump condition'},
              {'table': 'PressureUnit', 'table_title': 'pressure_unit', 'hname': 'Pressure unit'},
              {'table': 'FluidLevel', 'table_title': 'fluid_level', 'hname': 'Fluid level'},
              {'table': 'GasRelay', 'table_title': 'gas_relay', 'hname': 'Gas relay'},
              )
for item in blueprints:
    table = item['table']
    table_title = item['table_title']
    hname = item['hname']
    exec("{func}_profile = Blueprint('{func}_profile', __name__, url_prefix='/admin/{func}')".format(func=table_title))
    exec('''@{func}_profile.route("/", methods=["GET"])
def {func}_list():
    result = db.session.query({class_name}).all()
    keys = ["name"]
    return items_list(table_title="{name}", keys=keys, names={{"name": "name"}}, items=result)'''.format(func=table_title, class_name=table, name=hname))


@lab_profile.route("/create/", methods=['POST'])
def create():
    if request.is_xhr:
        success = False
        id = 0
        if admin_per.require().can():
            if request.form['code'] and request.form['analyser']:
                id = add_lab(request.form['code'], request.form['analyser'])
                if id is not None:
                    success = True

        return jsonify({'success': success, 'id': id})
    else:
        # redirect to home
        return redirect(url_for('home.home'))


@lab_profile.route("/get_all/", methods=['POST'])
def get_all():
    labs = []
    if request.is_xhr:
        success = False
        if admin_per.require().can():
            labs = get_labs()
            if labs is not None:
                success = True

        return jsonify({'success': success, 'labs': labs})
    else:
        # redirect to home
        return redirect(url_for('home.home'))


@lab_profile.route("/delete/", methods=['POST'])
def delete():
    if request.is_xhr:
        success = False
        id = 0
        if admin_per.require().can():
            if request.form['id']:
                id = delete_lab(request.form['id'])
                if id is not None:
                    success = True

        return jsonify({'success': success, 'id': id})
    else:
        # redirect to home
        return redirect(url_for('home.home'))


@lab_profile.route("/modify/", methods=['POST'])
def modify():
    if request.is_xhr:
        success = False
        if admin_per.require().can():
            if request.form['id'] and request.form['code'] and request.form['analyser']:
                success = modify_lab(request.form['id'], request.form['code'], request.form['analyser'])

        return jsonify({'success': success})
    else:
        # redirect to home
        return redirect(url_for('home.home'))


@test_profile.route("/get_value/", methods=['POST'])
def get_value():
    if request.is_xhr:
        data = {
            'electrical': get_selections(ElectricalProfile)
            , 'fluid': get_selections(FluidProfile)
        }
        return jsonify({'data': data})
    else:
        # redirect to home
        return redirect(url_for('home.home'))


@test_profile.route("/create/", methods=['POST'])
def create():
    if request.is_xhr:
        success = False
        res = None
        if admin_per.require().can():
            if request.form['select'] == 'electrical':
                res = create_electrical_profile(request.form)
            elif request.form['select'] == 'fluid':
                # print request.form
                res = create_fluid_profile(request.form)

            if res is not None:
                success = True

        return jsonify({'success': success})
    else:
        # redirect to home
        return redirect(url_for('home.home'))


@test_profile.route("/delete/", methods=['POST'])
def delete():
    if request.is_xhr:
        res = None
        if admin_per.require().can():
            if request.form['select'] == 'electrical':
                res = delete_electrical_profile(request.form['profile'])
            elif request.form['select'] == 'fluid':
                res = delete_fluid_profile(request.form['profile'])
        success = res is not None
        return jsonify({'success': success, 'profile': request.form['profile']})
    else:
        # redirect to home
        return redirect(url_for('home.home'))


@test_profile.route("/modify/", methods=['POST'])
def modify():
    if request.is_xhr:
        res = None
        if admin_per.require().can():
            if request.form['select'] == 'electrical':
                res = modify_electrical_profile(request.form)
            elif request.form['select'] == 'fluid':
                res = modify_fluid_profile(request.form)
        success = res is not None
        return jsonify({'success': success})
    else:
        # redirect to home
        return redirect(url_for('home.home'))


@test_profile.route("/get_profile/", methods=['POST'])
def get_profile():
    if request.is_xhr:
        success = False
        node = None
        if admin_per.require().can():
            if request.form['select'] == 'electrical':
                node = get_electrical_profile(request.form['selection'])
            elif request.form['select'] == 'fluid':
                node = get_fluid_profile(request.form['selection'])

            if node is not None:
                success = True

        return jsonify({'success': success, 'node': node})
    else:
        # redirect to home
        return redirect(url_for('home.home'))


def items_list(table_title, keys, names, items):
    data = {'table_title': table_title, 'keys': keys, 'names': names, 'items': items}
    return render_template("admin/diagnostic/items_list.html", data=data)


@campaign_profile.route("/", methods=['GET'])
def campaign_list():
    result = (db.session.query(Campaign, Equipment, User, Lab, Contract)
              .join(Equipment, Equipment.id == Campaign.equipment)
              .join(User, User.id == Campaign.created_by)
              .join(Lab, Lab.id == Campaign.lab)
              .join(Contract, Contract.id == Campaign.contract_id).all()
              )
    keys = ['created_by', 'equipment', 'lab', 'date', 'contract_id']
    items = []
    for campaign, equipment, user, lab, contract in result:
        items.append({'id': campaign.id,
                      'created_by': user.name,
                      'equipment': equipment.equipment_number,
                      'lab': lab.name,
                      'date': campaign.date,
                      'contract_id': contract.name
                      })
    names = {'created_by': 'created by',
             'equipment': 'equipment',
             'lab': 'laboratory',
             'date': 'date',
             'contract_id': 'contract'
             }
    return items_list(table_title='Campaign', keys=keys, names=names, items=items)

@campaign_profile.route("/add", methods=['POST', 'GET'])
def add_campaign():
    form = NewCampaignView()
    if form.validate_on_submit():
        campaign = Campaign()
        campaign.created_by = form.created_by.data
        campaign.performed_by = form.created_by.data
        campaign.equipment = form.equipment.data
        campaign.lab = form.lab.data
        campaign.lab_no = form.lab_no.data
        campaign.date = form.date.data
        campaign.contract_id = form.contract_id.data
        db.session.add(campaign)
        db.session.commit()
        return redirect('/admin')
    return render_template('admin/diagnostic/add.html', title='Create campaign', form=form)


@equipment_profile.route("/", methods=['GET'])
def equipment_list():
    result = db.session.query(Equipment, EquipmentType, Location).join(EquipmentType).join(Location).all()
    keys = ['equipment_number', 'equipment_type', 'visual_date', 'modifier', 'location']
    items = []
    for equipment, equip_type, location in result:
        items.append({'id': equipment.id,
                      'equipment_number': equipment.equipment_number,
                      'equipment_type': equip_type.name,
                      'location': location.name,
                      'visual_date': equipment.visual_date,
                      'modifier': equipment.modifier,
                      })
    names = {'equipment_number': 'number',
             'equipment_type': 'type',
             'location': 'location',
             'visual_date': 'visual date',
             'modifier': 'modifier'
             }
    return items_list(table_title='Equipment', keys=keys, names=names, items=items)


@equipment_profile.route("/add", methods=['POST', 'GET'])
def equipment_add():
    EqForm = model_form(Equipment, Form)
    model = Equipment()
    form = EqForm(request.form, model)

    if form.validate_on_submit():
        form.populate_obj(model)
        model.put()
        flash("Equipment added")
        return redirect(url_for("index"))
    return render_template("admin/diagnostic/equipment_add.html", form=form)


@equipment_profile.route("/edit/<id>", methods=['POST', 'GET'])
def equipment_edit(id):
    EqForm = model_form(Equipment, Form)
    model = Equipment.get(id)
    form = EqForm(request.form, model)

    if form.validate_on_submit():
        form.populate_obj(model)
        model.put()
        flash("Equipment updated")
        return redirect(url_for("index"))
    return render_template('admin/diagnostic/equipment_edit.html', form=form)


@contract_profile.route("/", methods=['GET'])
def contract_list():
    result = db.session.query(Contract, ContractStatus).join(ContractStatus).all()
    keys = ['name', 'code', 'status']
    items = []
    for contract, status in result:
        items.append({'id': contract.id,
                      'name': contract.name,
                      'code': contract.code,
                      'status': status.name
                      })
    return items_list(table_title='Contract', keys=keys, names=zip(keys, keys), items=items)


@lab_profile.route("/", methods=['GET'])
def lab_list():
    result = db.session.query(Lab).all()
    keys = ['name', 'code', 'analyzer']
    return items_list(table_title='Laboratory', keys=keys, names=zip(keys, keys), items=result)


@fluid_profile.route("/", methods=['GET'])
def fliud_list():
    result = db.session.query(FluidProfile).all()
    keys = ['selection', 'description']
    return items_list(table_title='Fluid profile', keys=keys, names=zip(keys, keys), items=result)


@test_type_profile.route("/", methods=['GET'])
def test_type_list():
    result = db.session.query(TestType).all()
    keys = ['name', 'group_id', 'is_group']
    names = {'name': 'name', 'group_id': 'group id', 'is_group': 'is group'}
    return items_list(table_title='Test type', keys=keys, names=names, items=result)


@test_type_result_table_profile.route("/", methods=['GET'])
def test_type_result_table_list():
    result = db.session.query(TestTypeResultTable, TestType).join(TestType).all()
    keys = ['test_type', 'test_result_table_name']
    names = {'test_type': 'test type', 'test_result_table_name': 'result table name'}
    items = []
    for type_result, type in result:
        items.append({'id': type_result.id,
                      'test_type': type.name,
                      'test_result_table_name': type_result.test_result_table_name
                      })
    return items_list(table_title='Test type result table', keys=keys, names=names, items=items)