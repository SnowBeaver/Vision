#!/usr/bin/env python
# -*- coding: utf-8 -*-
from .forms import *
from flask.ext.admin.contrib.sqla import ModelView
from flask.ext import login


# simple tables
my_simple_views = ({'model': 'TestReason', 'hname': 'Test_reason', 'category': 'Types'},
                   {'model': 'PressureUnit', 'hname': 'Pressure unit', 'category': 'Types'},
                   {'model': 'GasRelay', 'hname': 'Gas relay', 'category': 'Types'},
                   {'model': 'PaintTypes', 'hname': 'Paint types', 'category': 'Types'},
                   {'model': 'SamplingPoint', 'hname': 'Sampling point', 'category': 'Types'},
                   {'model': 'Upstream', 'hname': 'Upstream', 'category': 'Types'},
                   {'model': 'Downstream', 'hname': 'Downstream', 'category': 'Types'},
                   {'model': 'NormType', 'hname': 'Norm type', 'category': 'Types'},
                   {'model': 'FanCondition', 'hname': 'Fan condition', 'category': 'Conditions'},
                   {'model': 'HeatingCondition', 'hname': 'Heating condition', 'category': 'Conditions'},
                   {'model': 'FoundationCondition', 'hname': 'Foundation condition', 'category': 'Conditions'},
                   {'model': 'ConnectionCondition', 'hname': 'Connection condition', 'category': 'Conditions'},
                   {'model': 'TapFilterCondition', 'hname': 'Tap filter condition', 'category': 'Conditions'},
                   {'model': 'OverallCondition', 'hname': 'Overall condition', 'category': 'Conditions'},
                   {'model': 'GasketCondition', 'hname': 'Gasket condition', 'category': 'Conditions'},
                   {'model': 'ValveCondition', 'hname': 'Valve condition', 'category': 'Conditions'},
                   {'model': 'PumpCondition', 'hname': 'Pump condition', 'category': 'Conditions'},
                   {'model': 'ContractStatus', 'hname': 'Contract status', 'category': 'Statuses'},
                   {'model': 'TapCounterStatus', 'hname': 'Tap counter status', 'category': 'Statuses'},
                   {'model': 'GasLevel', 'hname': 'Gas level', 'category': 'Statuses'},
                   {'model': 'FluidLevel', 'hname': 'Fluid level', 'category': 'Statuses'},
                   )


class MyModelView(ModelView):
    def is_accessible(self):
        if not login.current_user.is_authenticated():
            return False

        # Prevent administration of Roles unless the
        # currently logged-in user has the "admin" role
        return login.current_user.has_role('admin')


for item in my_simple_views:
    exec('''class {model}View(MyModelView):
    """
    {model} management view
    """
    # Visible columns in the list view
    column_hide_backrefs = False

    # # List of columns that can be sorted.
    column_sortable_list = ('name',)
    column_searchable_list = ('name',)

    def __init__(self, dbsession):
        super({model}View, self).__init__({model}, dbsession, name="{name}", category="{category}")'''
         .format(model=item['model'], name=item['hname'], category=item['category']))


class EquipmentView(MyModelView):
    """
    Equipment management view
    """
    # Visible columns in the list view
    column_list = (
        'equipment_number', 'eqtype', 'location_id', 'visual_inspection_by_id',
        'visual_date', 'norm_id', 'tie_location', 'tie_maintenance_state', 'tie_status', 'modifier'
    )
    # List of columns that can be sorted.
    column_sortable_list = (
        'id', 'equipment_number', 'eqtype', 'location_id', 'visual_inspection_by_id',
        'visual_date', 'norm_id', 'tie_location', 'tie_maintenance_state', 'tie_status'
    )

    column_searchable_list = ('equipment_number', )

    column_hide_backrefs = False

    # form_excluded_columns = (
    #     'id',
    #     'location_id',
    #     'equipment_number',
    # )
    # column_exclude_list = [
    # ]

    def __init__(self, dbsession):
        super(EquipmentView, self).__init__(Equipment, dbsession)


class NormFuranView(MyModelView):
    """
    NormFuran management view
    """
    # Visible columns in the list view
    column_hide_backrefs = False
    # form_excluded_columns = (
    # )
    # column_exclude_list = [
    # ]

    # # List of columns that can be sorted.
    column_sortable_list = ('name',)
    column_searchable_list = ('name',)

    def __init__(self, dbsession):
        super(NormFuranView, self).__init__(NormFuran, dbsession, name="Norms furan", category="Norms")


class NormIsolationView(MyModelView):
    """
    NormIsolation management view
    """
    # Visible columns in the list view
    column_hide_backrefs = False
    # form_excluded_columns = (
    # )
    # column_exclude_list = [
    # ]

    # # List of columns that can be sorted.
    column_sortable_list = ('c', 'f', 'notseal', 'seal')
    column_searchable_list = ('c', 'f')

    def __init__(self, dbsession, **kwargs):
        super(NormIsolationView, self).__init__(NormIsolation, dbsession, name="Norms isolation", category='Norms')


class NormPhysicView(MyModelView):
    """
    NormPhysic management view
    """
    # Visible columns in the list view
    column_hide_backrefs = False
    # form_excluded_columns = (
    # )
    # column_exclude_list = [
    # ]

    # # List of columns that can be sorted.
    column_sortable_list = ('name',)
    column_searchable_list = ('name',)

    def __init__(self, dbsession):
        super(NormPhysicView, self).__init__(NormPhysic, dbsession, name="Norms physic", category='Norms')


class NormGasView(MyModelView):
    """
    NormGasView management view
    """
    # Visible columns in the list view
    column_hide_backrefs = False
    # form_excluded_columns = (
    # )
    # column_exclude_list = [
    # ]

    # # List of columns that can be sorted.
    column_sortable_list = ('name',)
    column_searchable_list = ('name',)

    def __init__(self, dbsession):
        super(NormGasView, self).__init__(NormGas, dbsession, name="Norms gas", category="Norms")


class ManufacturerView(MyModelView):
    """
    Manufacturer management view
    """
    # Visible columns in the list view
    column_hide_backrefs = False

    # # List of columns that can be sorted.
    column_sortable_list = ('name', )
    column_searchable_list = ('name', )

    def __init__(self, dbsession):
        super(ManufacturerView, self).__init__(
            Manufacturer, dbsession, name="Manufacturer", category="Options"
        )


class FluidTypeView(MyModelView):
    """
    Manufacturer management view
    """
    # Visible columns in the list view
    column_hide_backrefs = False

    # # List of columns that can be sorted.
    column_sortable_list = ('name', )
    column_searchable_list = ('name', )

    def __init__(self, dbsession):
        super(FluidTypeView, self).__init__(
            FluidType, dbsession, name="Fluid type", category="Types"
        )


class AirCircuitBreakerView(MyModelView):
    """
    Airbreaker management view
    """
    # Visible columns in the list view
    column_hide_backrefs = False

    # form_excluded_columns = (
    # )
    # column_exclude_list = [
    # ]
    form_widget_args = {
        'frequency': {
            'style': 'width: 50px'
        },
        'phase_number': {
            'style': 'width: 50px'
        },
        'manufactured': {
            'style': 'width: 80px'
        },
    }
    form_choices = {
        'manufactured': [(int(x), x) for x in range(1900, datetime.now().year)]
    }
    form_args = {
        'manufactured': {'coerce': int}
    }

    # # List of columns that can be sorted.
    column_sortable_list = ('name', 'serial', 'phase_number', 'frequency', 'sealed', 'manufactured',
                            'welded_cover', 'manufacturer_id')
    column_searchable_list = ('name', 'serial')

    def __init__(self, dbsession):
        super(AirCircuitBreakerView, self).__init__(
            AirCircuitBreaker, dbsession, name="Air circuit breaker", category="Equipment"
        )


class BushingView(MyModelView):
    column_hide_backrefs = False
    column_list = ('id', 'name', 'serial', 'manufactured', 'frequency', 'phase_number')
    column_searchable_list = ('name', 'serial', 'manufactured', 'frequency')
    column_sortable_list = ('id', 'name', 'serial', 'manufactured', 'frequency', 'phase_number')

    form_widget_args = {
        'frequency': {
            'style': 'width: 50px'
        },
        'phase_number': {
            'style': 'width: 50px'
        },
        'manufactured': {
            'style': 'width: 80px'
        },
    }
    form_choices = {
        'manufactured': [(int(x), x) for x in range(1900, datetime.now().year)]
    }
    form_args = {'manufactured': {'coerce': int}}

    def __init__(self, dbsession):
        super(BushingView, self).__init__(
            Bushing, dbsession, name="Bushing", category="Equipment"
        )


class CableView(MyModelView):
    # can_view_details = True
    column_searchable_list = ('name', 'serial', 'manufactured')
    column_sortable_list = ('id', 'name', 'serial', 'manufactured', 'sealed')

    column_hide_backrefs = False

    form_choices = {
        'manufactured': [(int(x), x) for x in range(1900, datetime.now().year)]
    }
    form_args = {'manufactured': {'coerce': int}}

    form_widget_args = {
        'manufactured': {
            'style': 'width: 80px'
        },
    }

    def __init__(self, dbsession):
        super(CableView, self).__init__(
            Cable, dbsession, name="Cable", category="Equipment"
        )


class CapacitorView(MyModelView):
    can_view_details = True
    column_hide_backrefs = False

    column_searchable_list = ('name', 'serial', 'manufactured')
    column_sortable_list = ('id', 'name', 'serial', 'manufacturer_id', 'manufactured', 'sealed', 'welded_cover')

    form_choices = {
        'manufactured': [(int(x), x) for x in range(1900, datetime.now().year)]
    }
    form_args = {'manufactured': {'coerce': int}}

    form_widget_args = {
        'frequency': {
            'style': 'width: 50px'
        },
        'phase_number': {
            'style': 'width: 50px'
        },
        'manufactured': {
            'style': 'width: 80px'
        },
        'description': {
        }
    }

    def __init__(self, dbsession):
        super(CapacitorView, self).__init__(
            Capacitor, dbsession, name="Capacitor", category="Equipment"
        )


class RectifierView(MyModelView):
    can_view_details = True
    column_hide_backrefs = False

    column_searchable_list = ('name', 'serial', 'manufactured')
    column_sortable_list = ('id', 'name', 'serial', 'manufacturer_id', 'manufactured', 'sealed', 'welded_cover')

    form_choices = {
        'manufactured': [(int(x), x) for x in range(1900, datetime.now().year)]
    }
    form_args = {'manufactured': {'coerce': int}}

    form_widget_args = {
        'frequency': {
            'style': 'width: 50px'
        },
        'phase_number': {
            'style': 'width: 50px'
        },
        'manufactured': {
            'style': 'width: 80px'
        },
        'description': {
        }
    }

    def __init__(self, dbsession):
        super(RectifierView, self).__init__(
            Rectifier, dbsession, name="Rectifier", category="Equipment"
        )


class NeutralResistanceView(MyModelView):
    can_view_details = True
    column_hide_backrefs = False

    column_searchable_list = ('name', 'serial', 'manufactured')
    column_sortable_list = ('id', 'name', 'serial', 'manufacturer_id', 'manufactured')

    form_choices = {
        'manufactured': [(int(x), x) for x in range(1900, datetime.now().year)]
    }
    form_args = {'manufactured': {'coerce': int}}

    form_widget_args = {
        'manufactured': {
            'style': 'width: 80px'
        },
    }

    def __init__(self, dbsession):
        super(NeutralResistanceView, self).__init__(
            NeutralResistance, dbsession, name="Neutral resistance", category="Equipment"
        )


class TankView(MyModelView):
    can_view_details = True
    column_hide_backrefs = False

    column_searchable_list = ('name', 'serial', 'manufactured')
    column_sortable_list = ('id', 'name', 'serial', 'manufacturer_id', 'manufactured', 'sealed', 'welded_cover')

    form_choices = {
        'manufactured': [(int(x), x) for x in range(1900, datetime.now().year)]
    }
    form_args = {'manufactured': {'coerce': int}}

    form_widget_args = {
        'manufactured': {
            'style': 'width: 80px'
        },
        'description': {
        }
    }

    def __init__(self, dbsession):
        super(TankView, self).__init__(
            Tank, dbsession, name="Tank", category="Equipment"
        )


class LoadTapChangerView(MyModelView):
    can_view_details = True
    column_hide_backrefs = False

    column_searchable_list = ('name', 'serial', 'manufactured', 'filter')
    column_sortable_list = ('id', 'name', 'serial', 'manufacturer_id', 'manufactured',
                            'sealed', 'welded_cover', 'counter', 'phase_number', 'ltc4')

    form_choices = {
        'manufactured': [(int(x), x) for x in range(1900, datetime.now().year)]
    }
    form_args = {'manufactured': {'coerce': int}}

    form_widget_args = {
        'frequency': {
            'style': 'width: 50px'
        },
        'phase_number': {
            'style': 'width: 50px'
        },
        'description': {
        },
        'manufactured': {
            'style': 'width: 80px'
        },
    }

    def __init__(self, dbsession):
        super(LoadTapChangerView, self).__init__(
            LoadTapChanger, dbsession, name="Tap changer", category="Equipment"
        )


class BreakerView(MyModelView):
    can_view_details = True
    column_hide_backrefs = False

    column_searchable_list = ('name', 'serial', 'manufactured')
    column_sortable_list = ('id', 'name', 'serial', 'manufacturer_id', 'manufactured', 'sealed', 'welded_cover',
                            'phase_number', 'frequency', 'manufacturer_id')

    form_choices = {
        'manufactured': [(int(x), x) for x in range(1900, datetime.now().year)]
    }
    form_args = {'manufactured': {'coerce': int}}

    form_widget_args = {
        'frequency': {
            'style': 'width: 50px'
        },
        'phase_number': {
            'style': 'width: 50px'
        },
        'description': {
        },
        'manufactured': {
            'style': 'width: 80px'
        },
    }

    def __init__(self, dbsession):
        super(BreakerView, self).__init__(
            Breaker, dbsession, name="Breaker", category="Equipment"
        )


class SwitchView(MyModelView):
    can_view_details = True
    column_hide_backrefs = False

    column_searchable_list = ('name', 'serial', 'manufactured')
    column_sortable_list = ('id', 'name', 'serial', 'manufacturer_id', 'manufactured', 'sealed', 'welded_cover')

    form_choices = {
        'manufactured': [(int(x), x) for x in range(1900, datetime.now().year)]
    }
    form_args = {'manufactured': {'coerce': int}}

    form_widget_args = {
        'manufactured': {
            'style': 'width: 80px'
        },
    }

    def __init__(self, dbsession):
        super(SwitchView, self).__init__(
            Switch, dbsession, name="Switch", category="Equipment"
        )


class SwitchGearView(MyModelView):
    can_view_details = True
    column_hide_backrefs = False

    column_searchable_list = ('name', 'serial', 'manufactured')
    column_sortable_list = ('id', 'name', 'serial', 'manufacturer_id', 'manufactured', 'sealed', 'welded_cover')

    form_choices = {
        'manufactured': [(int(x), x) for x in range(1900, datetime.now().year)]
    }
    form_args = {'manufactured': {'coerce': int}}

    form_widget_args = {
        'manufactured': {
            'style': 'width: 80px'
        },
    }

    def __init__(self, dbsession):
        super(SwitchGearView, self).__init__(
            SwitchGear, dbsession, name="Switch gear", category="Equipment"
        )


class SynchronousMachineView(MyModelView):
    can_view_details = True
    column_hide_backrefs = False

    column_searchable_list = ('name', 'serial', 'manufactured')
    column_sortable_list = ('id', 'name', 'serial', 'manufacturer_id', 'manufactured', 'sealed', 'welded_cover')

    form_choices = {
        'manufactured': [(int(x), x) for x in range(1900, datetime.now().year)]
    }
    form_args = {'manufactured': {'coerce': int}}

    form_widget_args = {
        'manufactured': {
            'style': 'width: 80px'
        },
    }

    def __init__(self, dbsession):
        super(SynchronousMachineView, self).__init__(
            SynchronousMachine, dbsession, name="Synchronous machine", category="Equipment"
        )


class InductionMachineView(MyModelView):
    can_view_details = True
    column_hide_backrefs = False

    column_searchable_list = ('name', 'serial', 'manufactured')
    column_sortable_list = ('id', 'name', 'serial', 'manufacturer_id', 'manufactured', 'sealed', 'welded_cover')

    form_choices = {
        'manufactured': [(int(x), x) for x in range(1900, datetime.now().year)]
    }
    form_args = {'manufactured': {'coerce': int}}

    form_widget_args = {
        'manufactured': {
            'style': 'width: 80px'
        },
    }

    def __init__(self, dbsession):
        super(InductionMachineView, self).__init__(
            InductionMachine, dbsession, name="Induction machine", category="Equipment"
        )


class GasSensorView(MyModelView):
    can_view_details = True
    column_hide_backrefs = False

    column_searchable_list = ('name', 'serial', 'manufactured')
    column_sortable_list = ('id', 'name', 'serial', 'manufacturer_id', 'manufactured')

    form_choices = {
        'manufactured': [(int(x), x) for x in range(1900, datetime.now().year)]
    }
    form_args = {'manufactured': {'coerce': int}}

    form_widget_args = {
        'manufactured': {
            'style': 'width: 80px'
        },
    }

    def __init__(self, dbsession):
        super(GasSensorView, self).__init__(
            GasSensor, dbsession, name="Gas sensor", category="Equipment"
        )


class TransformerView(MyModelView):
    can_view_details = True
    column_hide_backrefs = False

    column_list = (
        'id', 'name', 'serial', 'manufacturer_id', 'fluid_type',
        'gassensor_id', 'manufactured', 'phase_number', 'sealed',
        'welded_cover', 'windings', 'fluid_volume', 'frequency',
        'autotransformer'
    )
    column_searchable_list = ('name', 'serial', 'manufactured')
    column_sortable_list = (
        'id', 'name', 'serial', 'manufacturer_id', 'fluid_type',
        'gassensor_id', 'manufactured', 'phase_number', 'sealed',
        'welded_cover', 'windings', 'fluid_volume', 'frequency',
        'autotransformer'
    )

    form_choices = {
        'manufactured': [(int(x), x) for x in range(1900, datetime.now().year)]
    }
    form_args = {'manufactured': {'coerce': int}}

    form_widget_args = {
        'manufactured': {
            'style': 'width: 80px'
        },
        'phase_number': {
            'style': 'width: 50px'
        },
        'frequency': {
            'style': 'width: 50px'
        },
        'gas_sensor': {
            'style': 'width: 250px'
        },
    }

    def __init__(self, dbsession):
        super(TransformerView, self).__init__(
            Transformer, dbsession, name="Transformer", category="Equipment"
        )


class LocationView(MyModelView):
    can_view_details = True
    column_hide_backrefs = False

    column_searchable_list = ('name',)
    column_sortable_list = ('id', 'name')

    def __init__(self, dbsession):
        super(LocationView, self).__init__(
            Location, dbsession, name="Location", category="Options"
        )


class LabView(MyModelView):
    """
    Lab management view
    """
    # Visible columns in the list view
    # can_view_details = True
    column_hide_backrefs = False

    # # List of columns that can be sorted.
    column_sortable_list = (['name', 'code', 'analyser'])
    column_searchable_list = (['name', 'code', 'analyser'])

    def __init__(self, dbsession):
        super(LabView, self).__init__(
            Lab, dbsession, name="Lab", category="Equipment"
        )


class CampaignView(MyModelView):
    """
    Campaign management view
    """
    # Visible columns in the list view
    # can_view_details = True
    column_hide_backrefs = False

    # # List of columns that can be sorted.
    column_sortable_list = (['created_by', 'equipment', 'lab', 'date', 'contract_id'])
    column_searchable_list = (['created_by', 'equipment', 'lab', 'date', 'contract_id'])

    def __init__(self, dbsession):
        super(CampaignView, self).__init__(
            Campaign, dbsession, name="Campaign", category="Equipment"
        )


class ContractView(MyModelView):
    """
    Contract management view
    """
    # Visible columns in the list view
    # can_view_details = True
    column_hide_backrefs = False

    # # List of columns that can be sorted.
    column_sortable_list = (['name', 'code', 'status_id'])
    column_searchable_list = (['name', 'code', 'status_id'])

    def __init__(self, dbsession):
        super(ContractView, self).__init__(
            Contract, dbsession, name="Contract", category="Equipment"
        )


class FluidProfileView(MyModelView):
    """
    FluidProfile management view
    """
    # Visible columns in the list view
    # can_view_details = True
    column_hide_backrefs = False

    # # List of columns that can be sorted.
    column_sortable_list = (['selection', 'description'])
    column_searchable_list = (['selection', 'description'])

    def __init__(self, dbsession):
        super(FluidProfileView, self).__init__(
            FluidProfile, dbsession, name="Fluid profile", category="Equipment"
        )


class TestStatusView(MyModelView):
    """
    TestStatus management view
    """
    # Visible columns in the list view
    # can_view_details = True
    column_hide_backrefs = False

    # # List of columns that can be sorted.
    column_sortable_list = (['name', 'code'])
    column_searchable_list = (['name', 'code'])

    def __init__(self, dbsession):
        super(TestStatusView, self).__init__(
            TestStatus, dbsession, name="Test status", category="Statuses"
        )


class TestTypeView(MyModelView):
    """
    TestType management view
    """
    # Visible columns in the list view
    # can_view_details = True
    column_hide_backrefs = False

    # # List of columns that can be sorted.
    column_sortable_list = (['name', 'group_id', 'is_group'])
    column_searchable_list = (['name', 'group_id', 'is_group'])

    def __init__(self, dbsession):
        super(TestTypeView, self).__init__(
            TestType, dbsession, name="Test type", category="Types"
        )


class TestTypeResultTableView(MyModelView):
    """
    TestTypeResultTable management view
    """
    # Visible columns in the list view
    can_view_details = True
    column_hide_backrefs = False

    # # List of columns that can be sorted.
    column_sortable_list = ('test_type_id', 'test_result_table_name')
    column_searchable_list = ('test_type_id', 'test_result_table_name')

    def __init__(self, dbsession):
        super(TestTypeResultTableView, self).__init__(
            TestTypeResultTable, dbsession, name="Test type result table", category="Conditions"
        )


class TestResultView(MyModelView):
    """
    TestResult management view
    """
    # Visible columns in the list view
    can_view_details = True
    column_hide_backrefs = False

    # # List of columns that can be sorted.
    column_sortable_list = ('date_analyse', 'reason', 'test_type_id', 'status', 'sampling_point', 'campaign_id')
    column_searchable_list = ('date_analyse', 'reason', 'test_type_id', 'status', 'sampling_point', 'campaign_id')

    def __init__(self, dbsession):
        super(TestResultView, self).__init__(
            TestResult, dbsession, name="Test result", category="Equipment"
        )


class EquipmentTypeView(MyModelView):
    """
    EquipmentType management view
    """
    # Visible columns in the list view
    can_view_details = True
    column_hide_backrefs = False

    # # List of columns that can be sorted.
    column_sortable_list = ('name', 'code')
    column_searchable_list = ('name', 'code')

    def __init__(self, dbsession):
        super(EquipmentTypeView, self).__init__(
            EquipmentType, dbsession, name="Equipment type", category="Types"
        )


class ElectricalProfileView(MyModelView):
    """
    ElectricalProfile management view
    """
    # Visible columns in the list view
    can_view_details = True
    column_hide_backrefs = False

    # # List of columns that can be sorted.
    column_sortable_list = ('selection', 'description', 'bushing', 'winding', 'winding_double', 'insulation', 'visual', 'resistance', 'degree', 'turns')
    column_searchable_list = ('selection', 'description', 'bushing', 'winding', 'winding_double', 'insulation', 'visual', 'resistance', 'degree', 'turns')

    def __init__(self, dbsession):
        super(ElectricalProfileView, self).__init__(
            ElectricalProfile, dbsession, name="Electrical profile", category="Equipment"
        )


class MaterialView(MyModelView):
    """
    Material management view
    """
    # Visible columns in the list view
    can_view_details = True
    column_hide_backrefs = False

    # # List of columns that can be sorted.
    column_sortable_list = ('name', 'code')
    column_searchable_list = ('name', 'code')

    def __init__(self, dbsession):
        super(MaterialView, self).__init__(
            Material, dbsession, name="Material", category="Equipment"
        )


class PowerSourceView(MyModelView):
    """
    PowerSource management view
    """
    # Visible columns in the list view
    can_view_details = True
    column_hide_backrefs = False

    # # List of columns that can be sorted.
    # column_sortable_list = ('name', 'serial', 'manufacturer')
    column_searchable_list = ('name', 'serial', 'manufacturer')

    def __init__(self, dbsession):
        super(PowerSourceView, self).__init__(
            PowerSource, dbsession, name="Power source", category="Types"
        )


class NormView(MyModelView):
    """
    Norm management view
    """
    # Visible columns in the list view
    can_view_details = True
    column_hide_backrefs = False

    # # List of columns that can be sorted.
    # column_sortable_list = ('name', 'serial', 'manufacturer')
    column_searchable_list = ('name', 'type')

    def __init__(self, dbsession):
        super(NormView, self).__init__(
            Norm, dbsession, name="Norm", category="Types"
        )


class RecommendationView(MyModelView):
    """
    Recommendation management view
    """
    # Visible columns in the list view
    can_view_details = True
    column_hide_backrefs = False

    # # List of columns that can be sorted.
    # column_sortable_list = ('name', 'serial', 'manufacturer')
    column_searchable_list = ('name', 'code', 'description')

    def __init__(self, dbsession):
        super(RecommendationView, self).__init__(
            Recommendation, dbsession, name="Recommendation", category="Types"
        )


class SyringeView(MyModelView):
    """
    Syringe management view
    """
    # Visible columns in the list view
    can_view_details = True
    column_hide_backrefs = False

    # # List of columns that can be sorted.
    # column_sortable_list = ('name', 'serial', 'manufacturer')
    column_searchable_list = ('serial', 'lab')

    def __init__(self, dbsession):
        super(SyringeView, self).__init__(
            Syringe, dbsession, name="Syringe", category="Types"
        )


class CampaignStatusView(MyModelView):
    """
    CampaignStatus management view
    """
    # Visible columns in the list view
    can_view_details = True
    column_hide_backrefs = False

    # # List of columns that can be sorted.
    # column_sortable_list = ('name', 'code')
    column_searchable_list = ('name', 'code')

    def __init__(self, dbsession):
        super(CampaignStatusView, self).__init__(
            CampaignStatus, dbsession, name="Campaign status", category="Statuses"
        )


class TestScheduleView(MyModelView):
    """
    TestSchedule management view
    """
    # Visible columns in the list view
    can_view_details = True
    column_hide_backrefs = False

    # # List of columns that can be sorted.
    # column_sortable_list = ('equipment', 'start_date', 'assigned_to', 'description')
    column_searchable_list = ('equipment', 'start_date', 'assigned_to', 'description')

    def __init__(self, dbsession):
        super(TestScheduleView, self).__init__(
            TestSchedule, dbsession, name="Test schedule", category="Statuses"
        )


class MyTestView(MyModelView):
    """
    Test management view
    """
    # Visible columns in the list view
    can_view_details = True
    column_hide_backrefs = False

    def __init__(self, model_class, dbsession, name):
        super(MyTestView, self).__init__(
            model_class, dbsession, name=name, category="Tests"
        )


class BushingTestView(MyTestView):
    """
    BushingTest management view
    """
    def __init__(self, dbsession):
        super(BushingTestView, self).__init__(
            BushingTest, dbsession, name="Bushing test"
        )


class WindingTestView(MyTestView):
    """
    WindingTest management view
    """
    def __init__(self, dbsession):
        super(WindingTestView, self).__init__(
            WindingTest, dbsession, name="Winding test"
        )


class VisualInspectionTestView(MyTestView):
    """
    VisualInspectionTest management view
    """
    def __init__(self, dbsession):
        super(VisualInspectionTestView, self).__init__(
            VisualInspectionTest, dbsession, name="Visual inspection test"
        )


class InsulationResistanceTestView(MyTestView):
    """
    InsulationResistanceTest management view
    """
    def __init__(self, dbsession):
        super(InsulationResistanceTestView, self).__init__(
            InsulationResistanceTest, dbsession, name="Insulation resistance test"
        )


class PolymerisationDegreeTestView(MyTestView):
    """
    PolymerisationDegreeTest management view
    """
    def __init__(self, dbsession):
        super(PolymerisationDegreeTestView, self).__init__(
            PolymerisationDegreeTest, dbsession, name="Polymerisation degree test"
        )


class TransformerTurnRatioTestView(MyTestView):
    """
    TransformerTurnRatioTest management view
    """
    def __init__(self, dbsession):
        super(TransformerTurnRatioTestView, self).__init__(
            TransformerTurnRatioTest, dbsession, name="Transformer turn ratio test"
        )


class WindingResistanceTestView(MyTestView):
    """
    WindingResistanceTest management view
    """
    def __init__(self, dbsession):
        super(WindingResistanceTestView, self).__init__(
            WindingResistanceTest, dbsession, name="Winding resistance test"
        )


class DissolvedGasTestView(MyTestView):
    """
    DissolvedGasTest management view
    """
    def __init__(self, dbsession):
        super(DissolvedGasTestView, self).__init__(
            DissolvedGasTest, dbsession, name="DissolvedGasTest"
        )


test_views = {BushingTestView, WindingTestView, VisualInspectionTestView, InsulationResistanceTestView,
              PolymerisationDegreeTestView, TransformerTurnRatioTestView, WindingResistanceTestView,
              DissolvedGasTestView
              }