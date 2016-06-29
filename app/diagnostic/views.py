#!/usr/bin/env python
# -*- coding: utf-8 -*-
from datetime import datetime
from .forms import *
from flask.ext.admin.contrib.sqla import ModelView
from flask.ext import login


class MyModelView(ModelView):
    edit_modal = True
    create_modal = True

    def is_accessible(self):
        if not login.current_user.is_authenticated():
            return False

        # Prevent administration of Roles unless the
        # currently logged-in user has the "admin" role
        return login.current_user.has_role('admin')


class EquipmentView(MyModelView):
    """
    Equipment management view
    """
    # Visible columns in the list view
    column_list = (
        'equipment_number', 'eqtype', 'location_id', 'visual_inspection_by_id',
        'visual_date', 'norm_id', 'tie_location', 'tie_maintenance_state', 'tie_status'
    )
    # List of columns that can be sorted.
    column_sortable_list = (
        'id', 'equipment_number', 'eqtype', 'location_id', 'visual_inspection_by_id',
        'visual_date', 'norm_id', 'tie_location', 'tie_maintenance_state', 'tie_status'
    )

    column_searchable_list = ('equipment_number', )

    column_hide_backrefs = False

    form_excluded_columns = (
        # 'id',
        # 'location_id',
        'sibling',
        'modifier',
    )
    column_exclude_list = [
        'sibling',
        'modifier'
    ]

    def __init__(self, dbsession):
        super(EquipmentView, self).__init__(Equipment, dbsession, name="Equipment", category="Equipment")


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
        super(NormFuranView, self).__init__(
            NormFuran, dbsession, name="Norms furan", category="Norms", endpoint='norm_furan'
        )


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

    def __init__(self, dbsession):
        super(NormIsolationView, self).__init__(
            NormIsolation, dbsession, name="Norms isolation", category='Norms', endpoint='norm_isolation'
        )


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
        super(NormPhysicView, self).__init__(
            NormPhysic, dbsession, name="Norms physic", category='Norms', endpoint='norm_physic'
        )


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
        super(NormGasView, self).__init__(
            NormGas, dbsession, name="Norms gas", category="Norms", endpoint='norm_gas'
        )


class ManufacturerView(MyModelView):
    """
    Manufacturer management view
    """
    # Visible columns in the list view
    column_hide_backrefs = False

    # # List of columns that can be sorted.
    column_sortable_list = ('name', )
    column_searchable_list = ('name', )

    inline_models = (GasSensor, Transformer, Breaker, AirCircuitBreaker, Capacitor, PowerSource, SwitchGear, Tank,
                     InductionMachine, SynchronousMachine, Rectifier, LoadTapChanger, Bushing, NeutralResistance,
                     Switch, Cable,
                     )

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

    # inline_models = (Transformer, Campaign)

    def __init__(self, dbsession):
        super(FluidTypeView, self).__init__(
            FluidType, dbsession, name="Fluid type", category="Types", endpoint='fluid_type'
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
            AirCircuitBreaker, dbsession,
            name="Air circuit breaker", category="Equipment", endpoint='air_circuit_breaker'
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
            NeutralResistance, dbsession, name="Neutral resistance", category="Equipment", endpoint='neutral_resistance'
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
            LoadTapChanger, dbsession, name="Tap changer", category="Equipment", endpoint='load_tap_changer'
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
            SwitchGear, dbsession, name="Switch gear", category="Equipment", endpoint='switch_gear'
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
            SynchronousMachine, dbsession,
            name="Synchronous machine", category="Equipment", endpoint='synchronous_machine'
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
            InductionMachine, dbsession,
            name="Induction machine", category="Equipment", endpoint='induction_machine'
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

    inline_models = (Transformer,)

    def __init__(self, dbsession):
        super(GasSensorView, self).__init__(
            GasSensor, dbsession, name="Gas sensor", category="Equipment", endpoint='gas_sensor'
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

    # inline_models = (Equipment,)
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

    # inline_models = (Campaign,)

    def __init__(self, dbsession):
        super(LabView, self).__init__(
            Lab, dbsession, name="Laboratory", category="Campaign"
        )


class CampaignView(MyModelView):
    """
    Campaign management view
    """
    create_modal = False
    # Visible columns in the list view
    # can_view_details = True
    column_hide_backrefs = True

    # # List of columns that can be sorted.
    column_sortable_list = (['created_by_id', 'equipment_id', 'lab_id', 'date', 'contract_id'])
    column_searchable_list = (['created_by_id', 'equipment_id', 'lab_id', 'date', 'contract_id'])
    inline_models = (TestResult,)
    column_editable_list = ['created_by']

    def __init__(self, dbsession):
        super(CampaignView, self).__init__(
            Campaign, dbsession, name="Campaign", category="Campaign",
        )


class ContractView(MyModelView):
    """
    Contract management view
    """
    # Visible columns in the list view
    # can_view_details = True
    column_hide_backrefs = False

    # # List of columns that can be sorted.
    # column_sortable_list = ()
    column_searchable_list = (['name', 'code', 'contract_status_id'])

    def __init__(self, dbsession):
        super(ContractView, self).__init__(
            Contract, dbsession, name="Contract", category="Campaign"
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
            FluidProfile, dbsession, name="Fluid profile", category="Campaign", endpoint='fluid_profile'
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
            TestStatus, dbsession, name="Test status", category="Statuses", endpoint='test_status'
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

    # inline_models = (TestResult,)

    def __init__(self, dbsession):
        super(TestTypeView, self).__init__(
            TestType, dbsession, name="Test type", category="Types", endpoint='test_type'
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
    # edit_modal = True
    # from flask_admin.model.form import InlineFormAdmin
    #
    # class MyInlineModelForm(InlineFormAdmin):
    #     form_columns = ('name')
    #
    # inline_models = (TestType,)

    def __init__(self, dbsession):
        super(TestTypeResultTableView, self).__init__(
            TestTypeResultTable, dbsession,
            name="Test type result table", category="Conditions", endpoint='test_type_result_table'
        )


class TestResultView(MyModelView):
    """
    TestResult management view
    """
    # Visible columns in the list view
    can_view_details = True
    column_hide_backrefs = False

    # # List of columns that can be sorted.
    column_sortable_list = ('date_analyse', 'reason_id', 'test_type_id',
                            'campaign_status', 'sampling_point_id', 'campaign_id')
    column_searchable_list = ('date_analyse', 'reason_id', 'test_type_id',
                              'campaign_status_id', 'sampling_point_id', 'campaign_id')

    inline_models = (BushingTest, WindingTest, VisualInspectionTest, InsulationResistanceTest, PolymerisationDegreeTest,
                     TransformerTurnRatioTest, WindingResistanceTest, DissolvedGasTest, WaterTest, FuranTest,
                     InhibitorTest, PCBTest, ParticleTest, MetalsInOilTest, FluidTest
                     )

    def __init__(self, dbsession):
        super(TestResultView, self).__init__(
            TestResult, dbsession, name="Test result", category="Campaign", endpoint='test_result'
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

    inline_models = (Equipment,)

    def __init__(self, dbsession):
        super(EquipmentTypeView, self).__init__(
            EquipmentType, dbsession, name="Equipment type", category="Types", endpoint='equipment_type'
        )


class ElectricalProfileView(MyModelView):
    """
    ElectricalProfile management view
    """
    # Visible columns in the list view
    can_view_details = True
    column_hide_backrefs = False

    # # List of columns that can be sorted.
    column_sortable_list = ('selection', 'description', 'bushing', 'winding', 'winding_double',
                            'insulation', 'visual', 'resistance', 'degree', 'turns')
    column_searchable_list = ('selection', 'description', 'bushing', 'winding', 'winding_double',
                              'insulation', 'visual', 'resistance', 'degree', 'turns')

    def __init__(self, dbsession):
        super(ElectricalProfileView, self).__init__(
            ElectricalProfile, dbsession, name="Electrical profile", category="Campaign", endpoint='electrical_profile'
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

    # inline_models = (Campaign,)

    def __init__(self, dbsession):
        super(MaterialView, self).__init__(
            Material, dbsession, name="Material", category="Options"
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
    column_searchable_list = ('name', 'serial', 'manufacturer_id')

    def __init__(self, dbsession):
        super(PowerSourceView, self).__init__(
            PowerSource, dbsession, name="Power source", category="Equipment", endpoint='power_source'
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
    column_searchable_list = ('name', 'type_id')

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

    # inline_models = (Campaign,)

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
    column_searchable_list = ('serial', 'lab_id')

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

    # inline_models = (TestResult,)

    def __init__(self, dbsession):
        super(CampaignStatusView, self).__init__(
            CampaignStatus, dbsession, name="Campaign status", category="Statuses", endpoint='campaign_status'
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
    column_searchable_list = ('equipment_id', 'start_date', 'assigned_to_id', 'description')

    def __init__(self, dbsession):
        super(TestScheduleView, self).__init__(
            TestSchedule, dbsession, name="Test schedule", category="Statuses", endpoint='test_schedule'
        )


class MySimpleView(MyModelView):
    """
    Simple models management view
    """
    # Visible columns in the list view
    can_view_details = True
    column_hide_backrefs = False

    # List of columns that can be sorted.
    column_sortable_list = ('name',)
    column_searchable_list = ('name',)


class MySimpleTypesView(MySimpleView):
    def __init__(self, model_class, dbsession, **kvargs):
        super(MySimpleTypesView, self).__init__(
            model_class, dbsession, category="Types", **kvargs
        )


class TestReasonView(MySimpleTypesView):
    """
    TestReason management view
    """
    # inline_models = (TestResult,)

    def __init__(self, dbsession):
        super(TestReasonView, self).__init__(
            TestReason, dbsession, name="Test reason", endpoint='test_reason'
        )


class PressureUnitView(MySimpleTypesView):
    """
    PressureUnit management view
    """
    def __init__(self, dbsession):
        super(PressureUnitView, self).__init__(
            PressureUnit, dbsession, name="Pressure unit", endpoint='pressure_unit'
        )


class GasRelayView(MySimpleTypesView):
    """
    GasRelay management view
    """
    def __init__(self, dbsession):
        super(GasRelayView, self).__init__(
            GasRelay, dbsession, name="Gas relay", endpoint='gas_relay'
        )


class PaintTypesView(MySimpleTypesView):
    """
    PaintTypes management view
    """
    def __init__(self, dbsession):
        super(PaintTypesView, self).__init__(
            PaintTypes, dbsession, name="Paint types", endpoint='paint_types'
        )


class SamplingPointView(MySimpleTypesView):
    """
    SamplingPoint management view
    """
    # inline_models = (TestResult,)

    def __init__(self, dbsession):
        super(SamplingPointView, self).__init__(
            SamplingPoint, dbsession, name="Sampling point", endpoint='sampling_point'
        )


class UpstreamView(MySimpleTypesView):
    """
    Upstream management view
    """
    def __init__(self, dbsession):
        super(UpstreamView, self).__init__(
            Upstream, dbsession, name="Upstream"
        )


class DownstreamView(MySimpleTypesView):
    """
    Downstream management view
    """
    def __init__(self, dbsession):
        super(DownstreamView, self).__init__(
            Downstream, dbsession, name="Downstream"
        )


class NormTypeView(MySimpleTypesView):
    """
    NormType management view
    """
    inline_models = (Norm,)

    def __init__(self, dbsession):
        super(NormTypeView, self).__init__(
            NormType, dbsession, name="Norm type", endpoint='norm_type'
        )


class MySimpleConditionsView(MySimpleView):
    def __init__(self, model_class, dbsession, **kvargs):
        super(MySimpleConditionsView, self).__init__(
            model_class, dbsession, category="Conditions", **kvargs
        )


class PumpConditionView(MySimpleConditionsView):
    """
    PumpCondition management view
    """
    def __init__(self, dbsession):
        super(PumpConditionView, self).__init__(
            PumpCondition, dbsession, name="Pump condition", endpoint='pump_condition'
        )


class ValveConditionView(MySimpleConditionsView):
    """
    ValveCondition management view
    """
    def __init__(self, dbsession):
        super(ValveConditionView, self).__init__(
            ValveCondition, dbsession, name="Valve condition", endpoint="valve_condition"
        )


class GasketConditionView(MySimpleConditionsView):
    """
    GasketCondition management view
    """
    def __init__(self, dbsession):
        super(GasketConditionView, self).__init__(
            GasketCondition, dbsession, name="Gasket condition", endpoint="gasket_condition"
        )


class OverallConditionView(MySimpleConditionsView):
    """
    OverallCondition management view
    """
    def __init__(self, dbsession):
        super(OverallConditionView, self).__init__(
            OverallCondition, dbsession, name="Overall condition", endpoint="overall_condition"
        )


class TapFilterConditionView(MySimpleConditionsView):
    """
    TapFilterCondition management view
    """
    def __init__(self, dbsession):
        super(TapFilterConditionView, self).__init__(
            TapFilterCondition, dbsession, name="Tap filter condition", endpoint="tap_filter_condition"
        )


class ConnectionConditionView(MySimpleConditionsView):
    """
    ConnectionCondition management view
    """
    def __init__(self, dbsession):
        super(ConnectionConditionView, self).__init__(
            ConnectionCondition, dbsession, name="Connection condition", endpoint="connection_condition"
        )


class FoundationConditionView(MySimpleConditionsView):
    """
    FoundationCondition management view
    """
    def __init__(self, dbsession):
        super(FoundationConditionView, self).__init__(
            FoundationCondition, dbsession, name="Foundation condition", endpoint="foundation_condition"
        )


class HeatingConditionView(MySimpleConditionsView):
    """
    HeatingCondition management view
    """
    def __init__(self, dbsession):
        super(HeatingConditionView, self).__init__(
            HeatingCondition, dbsession, name="Heating condition", endpoint="heating_condition"
        )


class FanConditionView(MySimpleConditionsView):
    """
    FanCondition management view
    """
    def __init__(self, dbsession):
        super(FanConditionView, self).__init__(
            FanCondition, dbsession, name="Fan condition", endpoint="fan_condition"
        )


class MySimpleStatusesView(MySimpleView):
    def __init__(self, model_class, dbsession, **kvargs):
        super(MySimpleStatusesView, self).__init__(
            model_class, dbsession, category="Statuses", **kvargs
        )


class FluidLevelView(MySimpleStatusesView):
    """
    FluidLevel management view
    """
    def __init__(self, dbsession):
        super(FluidLevelView, self).__init__(
            FluidLevel, dbsession, name="Fluid level", endpoint="fluid_level"
        )


class GasLevelView(MySimpleStatusesView):
    """
    GasLevel management view
    """
    def __init__(self, dbsession):
        super(GasLevelView, self).__init__(
            GasLevel, dbsession, name="Gas level", endpoint="gas_level"
        )


class TapCounterStatusView(MySimpleStatusesView):
    """
    TapCounterStatus management view
    """
    def __init__(self, dbsession):
        super(TapCounterStatusView, self).__init__(
            TapCounterStatus, dbsession, name="Tap counter status", endpoint="tap_counter_status"
        )


class ContractStatusView(MySimpleStatusesView):
    """
    ContractStatus management view
    """
    # inline_models = (Contract,)

    def __init__(self, dbsession):
        super(ContractStatusView, self).__init__(
            ContractStatus, dbsession, name="Contract status", endpoint="contract_status"
        )


class MyTestView(MyModelView):
    """
    Test management view
    """
    # Visible columns in the list view
    can_view_details = True
    column_hide_backrefs = False

    def __init__(self, model_class, dbsession, **kvargs):
        super(MyTestView, self).__init__(
            model_class, dbsession, category="Tests", **kvargs
        )


class BushingTestView(MyTestView):
    """
    BushingTest management view
    """

    def __init__(self, dbsession):
        super(BushingTestView, self).__init__(
            BushingTest, dbsession, name="Bushing test", endpoint="bushing_test"
        )


class WindingTestView(MyTestView):
    """
    WindingTest management view
    """

    def __init__(self, dbsession):
        super(WindingTestView, self).__init__(
            WindingTest, dbsession, name="Winding test", endpoint="winding_test"
        )


class VisualInspectionTestView(MyTestView):
    """
    VisualInspectionTest management view
    """
    def __init__(self, dbsession):
        super(VisualInspectionTestView, self).__init__(
            VisualInspectionTest, dbsession, name="Visual inspection test", endpoint="visual_inspection_test"
        )


class InsulationResistanceTestView(MyTestView):
    """
    InsulationResistanceTest management view
    """
    def __init__(self, dbsession):
        super(InsulationResistanceTestView, self).__init__(
            InsulationResistanceTest, dbsession,
            name="Insulation resistance test", endpoint="insulation_resistance_test"
        )


class PolymerisationDegreeTestView(MyTestView):
    """
    PolymerisationDegreeTest management view
    """
    def __init__(self, dbsession):
        super(PolymerisationDegreeTestView, self).__init__(
            PolymerisationDegreeTest, dbsession,
            name="Polymerisation degree test", endpoint="polymerisation_degree_test"
        )


class TransformerTurnRatioTestView(MyTestView):
    """
    TransformerTurnRatioTest management view
    """
    def __init__(self, dbsession):
        super(TransformerTurnRatioTestView, self).__init__(
            TransformerTurnRatioTest, dbsession,
            name="Transformer turn ratio test", endpoint="transformer_turn_ratio_test"
        )


class WindingResistanceTestView(MyTestView):
    """
    WindingResistanceTest management view
    """
    def __init__(self, dbsession):
        super(WindingResistanceTestView, self).__init__(
            WindingResistanceTest, dbsession, name="Winding resistance test", endpoint="winding_resistance_test"
        )


class DissolvedGasTestView(MyTestView):
    """
    DissolvedGasTest management view
    """
    def __init__(self, dbsession):
        super(DissolvedGasTestView, self).__init__(
            DissolvedGasTest, dbsession, name="Dissolved gas test", endpoint="dissolved_gas_test"
        )


class WaterTestView(MyTestView):
    """
    WaterTest management view
    """
    def __init__(self, dbsession):
        super(WaterTestView, self).__init__(
            WaterTest, dbsession, name="Water test", endpoint="water_test"
        )


class FuranTestView(MyTestView):
    """
    FuranTest management view
    """
    def __init__(self, dbsession):
        super(FuranTestView, self).__init__(
            FuranTest, dbsession, name="Furan test", endpoint="furan_test"
        )


class InhibitorTestView(MyTestView):
    """
    InhibitorTest management view
    """
    def __init__(self, dbsession):
        super(InhibitorTestView, self).__init__(
            InhibitorTest, dbsession, name="Inhibitor test", endpoint="inhibitor_test"
        )


class PCBTestView(MyTestView):
    """
    PCBTest management view
    """
    def __init__(self, dbsession):
        super(PCBTestView, self).__init__(
            PCBTest, dbsession, name="PCB test", endpoint="pcb_test"
        )


class ParticleTestView(MyTestView):
    """
    ParticleTest management view
    """
    def __init__(self, dbsession):
        super(ParticleTestView, self).__init__(
            ParticleTest, dbsession, name="Particle test", endpoint="particle_test"
        )


class MetalsInOilTestView(MyTestView):
    """
    MetalsInOilTest management view
    """
    def __init__(self, dbsession):
        super(MetalsInOilTestView, self).__init__(
            MetalsInOilTest, dbsession, name="Metals in oil test", endpoint="metals_in_oil_test"
        )


class FluidTestView(MyTestView):
    """
    FluidTest management view
    """
    def __init__(self, dbsession):
        super(FluidTestView, self).__init__(
            FluidTest, dbsession, name="Fluid test", endpoint="fluid_test"
        )


simple_views = {TestReasonView, PressureUnitView, GasRelayView, PaintTypesView, SamplingPointView, UpstreamView,
                DownstreamView, NormTypeView, FanConditionView, HeatingConditionView, FoundationConditionView,
                ConnectionConditionView, TapFilterConditionView, OverallConditionView, GasketConditionView,
                ValveConditionView, PumpConditionView, ContractStatusView, TapCounterStatusView, GasLevelView,
                FluidLevelView
                }
test_views = {BushingTestView, WindingTestView, VisualInspectionTestView, InsulationResistanceTestView,
              PolymerisationDegreeTestView, TransformerTurnRatioTestView, WindingResistanceTestView,
              DissolvedGasTestView, WaterTestView, PCBTestView, InhibitorTestView, FuranTestView, FluidTestView,
              MetalsInOilTestView, ParticleTestView
              }
