#!/usr/bin/env python
# -*- coding: utf-8 -*-
from datetime import datetime
from .forms import *
from app.admin.views import MyModelView
from flask.ext import login
from .models import *
from app.users.models import User


class EquipmentView(MyModelView):
    """
    Equipment management view
    """
    # Visible columns in the list view
    column_list = (
        'equipment_number', 'equipment_type_id', 'location_id',
    )
    # List of columns that can be sorted.
    column_sortable_list = (
        'id', 'equipment_number', 'equipment_type', 'location_id',
        'status', 'tie_status'
    )

    column_searchable_list = ('equipment_number',)

    column_hide_backrefs = False

    form_excluded_columns = (
        # 'id',
        # 'location_id',
        'sibling',
        'modifier',
        'status',
    )
    column_exclude_list = [
        'sibling',
        'modifier'
    ]

    form_widget_args = {
        'frequency': {
            'style': 'width: 100px'
        },
        'manufactured': {
            'style': 'width: 100px'
        },
    }

    form_choices = {
        'manufactured': [(int(x), x) for x in range(1900, datetime.now().year + 1)]
    }
    form_args = {
        'manufactured': {'coerce': int}
    }

    form_ajax_refs = {
        'manufacturer': {'fields': (Manufacturer.name,)},
        'location': {'fields': (Location.name,)},
        'norm_isolation_data': {'fields': (NormIsolationData.name,)},
        'norm_furan_data': {'fields': (NormFuranData.name,)},
        'norm_particles_data': {'fields': (NormParticlesData.name,)},
        'norm_physic_data': {'fields': (NormPhysicData.name,)},
        'norm_gas_data': {'fields': (NormGasData.name,)},
    }

    def __init__(self, dbsession):
        super(EquipmentView, self).__init__(Equipment, dbsession, name="Equipment", category="Equipment")
#


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

    def is_accessible(self):
        """ Can create and edit norm tables """
        if login.current_user.is_authenticated():
            return login.current_user.has_role('expert')

        return False

    def __init__(self, dbsession):
        super(NormFuranView, self).__init__(
            NormFuran, dbsession, name="Norms furan", category="Norms"
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

    def is_accessible(self):
        """ Can create and edit norm tables """
        if login.current_user.is_authenticated():
            return login.current_user.has_role('expert')

        return False

    def __init__(self, dbsession):
        super(NormIsolationView, self).__init__(
            NormIsolation, dbsession, name="Norms isolation", category='Norms'
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

    def is_accessible(self):
        """ Can create and edit norm tables """
        if login.current_user.is_authenticated():
            return login.current_user.has_role('expert')

        return False

    def __init__(self, dbsession):
        super(NormPhysicView, self).__init__(
            NormPhysic, dbsession, name="Norms physic", category='Norms'
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

    def is_accessible(self):
        """ Can create and edit norm tables """
        if login.current_user.is_authenticated():
            return login.current_user.has_role('expert')

        return False

    def __init__(self, dbsession):
        super(NormGasView, self).__init__(
            NormGas, dbsession, name="Norms gas", category="Norms"
        )


class NormParticlesView(MyModelView):
    column_searchable_list = ('name',)

    def __init__(self, dbsession):
        super(NormParticlesView, self).__init__(
            NormParticles, dbsession, name="Norms gas", category="Norms"
        )


class ManufacturerView(MyModelView):
    """
    Manufacturer management view
    """
    # Visible columns in the list view
    column_hide_backrefs = True

    # # List of columns that can be sorted.
    column_sortable_list = ('name',)
    column_searchable_list = ('name',)

    # inline_models = (GasSensor, Transformer, Breaker, AirCircuitBreaker, Capacitor, PowerSource, SwitchGear, Tank,
    #                  InductionMachine, SynchronousMachine, Rectifier, LoadTapChanger, Bushing, NeutralResistance,
    #                  Switch, Cable,
    #                  )

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
    column_sortable_list = ('name',)
    column_searchable_list = ('name',)

    # inline_models = (Transformer, Campaign)

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

    form_ajax_refs = {
        'equipment': {'fields': (Equipment.name,)},
    }

    def __init__(self, dbsession):
        super(AirCircuitBreakerView, self).__init__(
            AirCircuitBreaker, dbsession,
            name="Air circuit breaker", category="Equipment"
        )


class BushingView(MyModelView):
    column_hide_backrefs = False
    column_list = ('id')

    form_ajax_refs = {
        'mfr_h1': {'fields': (Manufacturer.name,)},
        'mfr_h2': {'fields': (Manufacturer.name,)},
        'mfr_h3': {'fields': (Manufacturer.name,)},
        'mfr_hn': {'fields': (Manufacturer.name,)},
        'mfr_x1': {'fields': (Manufacturer.name,)},
        'mfr_x2': {'fields': (Manufacturer.name,)},
        'mfr_x3': {'fields': (Manufacturer.name,)},
        'mfr_xn': {'fields': (Manufacturer.name,)},
        'mfr_t1': {'fields': (Manufacturer.name,)},
        'mfr_t2': {'fields': (Manufacturer.name,)},
        'mfr_t3': {'fields': (Manufacturer.name,)},
        'mfr_tn': {'fields': (Manufacturer.name,)},
        'mfr_q1': {'fields': (Manufacturer.name,)},
        'mfr_q2': {'fields': (Manufacturer.name,)},
        'mfr_q3': {'fields': (Manufacturer.name,)},
        'mfr_qn': {'fields': (Manufacturer.name,)},
        'equipment': {'fields': (Equipment.name,)},
    }

    def __init__(self, dbsession):
        super(BushingView, self).__init__(
            Bushing, dbsession, name="Bushing", category="Equipment"
        )


class CableView(MyModelView):
    column_hide_backrefs = False

    form_ajax_refs = {
        'equipment': {'fields': (Equipment.name,)},
    }

    def __init__(self, dbsession):
        super(CableView, self).__init__(
            Cable, dbsession, name="Cable", category="Equipment"
        )


class CapacitorView(MyModelView):
    can_view_details = True
    column_hide_backrefs = False

    form_ajax_refs = {
        'equipment': {'fields': (Equipment.name,)},
    }

    def __init__(self, dbsession):
        super(CapacitorView, self).__init__(
            Capacitor, dbsession, name="Capacitor", category="Equipment"
        )


class RectifierView(MyModelView):
    can_view_details = True
    column_hide_backrefs = False

    # form_widget_args = {
    #     'phase_number': {
    #         'style': 'width: 50px'
    #     },
    # }

    form_ajax_refs = {
        'equipment': {'fields': (Equipment.name,)},
    }

    def __init__(self, dbsession):
        super(RectifierView, self).__init__(
            Rectifier, dbsession, name="Rectifier", category="Equipment"
        )


class InductanceView(MyModelView):
    form_ajax_refs = {
        'equipment': {'fields': (Equipment.name,)},
    }

    def __init__(self, dbsession):
        super(InductanceView, self).__init__(
            Inductance, dbsession, name="Inductance", category="Equipment"
        )


class NeutralResistanceView(MyModelView):
    can_view_details = True
    column_hide_backrefs = False

    form_ajax_refs = {
        'equipment': {'fields': (Equipment.name,)},
    }

    def __init__(self, dbsession):
        super(NeutralResistanceView, self).__init__(
            NeutralResistance, dbsession, name="Neutral resistance", category="Equipment"
        )


class TankView(MyModelView):
    can_view_details = True
    column_hide_backrefs = False

    form_ajax_refs = {
        'equipment': {'fields': (Equipment.name,)},
    }

    def __init__(self, dbsession):
        super(TankView, self).__init__(
            Tank, dbsession, name="Tank", category="Equipment"
        )


class LoadTapChangerView(MyModelView):
    can_view_details = True
    column_hide_backrefs = False

    form_ajax_refs = {
        'equipment': {'fields': (Equipment.name,)},
    }

    def __init__(self, dbsession):
        super(LoadTapChangerView, self).__init__(
            LoadTapChanger, dbsession, name="Tap changer", category="Equipment"
        )


class BreakerView(MyModelView):
    can_view_details = True
    column_hide_backrefs = False

    form_ajax_refs = {
        'equipment': {'fields': (Equipment.name,)},
    }

    def __init__(self, dbsession):
        super(BreakerView, self).__init__(
            Breaker, dbsession, name="Breaker", category="Equipment"
        )


class SwitchView(MyModelView):
    can_view_details = True
    column_hide_backrefs = False

    form_ajax_refs = {
        'equipment': {'fields': (Equipment.name,)},
    }

    def __init__(self, dbsession):
        super(SwitchView, self).__init__(
            Switch, dbsession, name="Switch", category="Equipment"
        )


class SwitchGearView(MyModelView):
    can_view_details = True
    column_hide_backrefs = False

    form_ajax_refs = {
        'equipment': {'fields': (Equipment.name,)},
    }

    def __init__(self, dbsession):
        super(SwitchGearView, self).__init__(
            SwitchGear, dbsession, name="Switch gear", category="Equipment"
        )


class SynchronousMachineView(MyModelView):
    can_view_details = True
    column_hide_backrefs = False

    form_ajax_refs = {
        'equipment': {'fields': (Equipment.name,)},
    }

    def __init__(self, dbsession):
        super(SynchronousMachineView, self).__init__(
            SynchronousMachine, dbsession,
            name="Synchronous machine", category="Equipment"
        )


class InductionMachineView(MyModelView):
    can_view_details = True
    column_hide_backrefs = False

    form_ajax_refs = {
        'equipment': {'fields': (Equipment.name,)},
    }

    def __init__(self, dbsession):
        super(InductionMachineView, self).__init__(
            InductionMachine, dbsession,
            name="Induction machine", category="Equipment"
        )


class GasSensorView(MyModelView):
    can_view_details = True
    column_hide_backrefs = False
    inline_models = (Transformer,)

    form_ajax_refs = {
        'equipment': {'fields': (Equipment.name,)},
        'manufacturer': {'fields': (Manufacturer.name,)},
    }

    def __init__(self, dbsession):
        super(GasSensorView, self).__init__(
            GasSensor, dbsession, name="Gas sensor", category="Equipment"
        )


class TransformerView(MyModelView):
    can_view_details = True
    column_hide_backrefs = False

    column_list = (
        'id', 'fluid_type',
        'gassensor_id', 'phase_number', 'sealed',
        'welded_cover', 'windings', 'fluid_volume',
        'autotransformer'
    )


    form_widget_args = {
        'phase_number': {
            'style': 'width: 50px'
        },
    }

    form_ajax_refs = {
        'equipment': {'fields': (Equipment.name,)},
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

    form_ajax_refs = {
        'test_result': {'fields': (TestResult.remark,)}
    }

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
    can_view_details = True
    column_hide_backrefs = True

    # # List of columns that can be sorted.
    # column_sortable_list = (['equipment_id', 'lab_id', 'date', 'contract_id'])
    column_searchable_list = (['date_created', 'contract_id'])
    # inline_models = (TestResult,)
    # column_editable_list = ['created_by']

    form_excluded_columns = (
        # 'id',
        # 'location_id',z
        # 'if_rem',
        # 'if_ok',
        # 'sibling',
        # 'modifier',
        # 'data_valid',
        # 'status1',
        # 'status2',
        # 'error_state',
        # 'error_code',
    )
    column_list = (
        'date_created',
        # 'analysis_number',
        # 'equipment',
        # 'fluid_type',
        'created_by',
        # 'performed_by',
        # 'lab',
        # 'repair_date',
    )
    column_filters = [
        'date_created',
        # 'analysis_number',
        # 'equipment',
        # 'fluid_type',
        'created_by',
        # 'performed_by',
        # 'lab',
        # 'repair_date',
    ]
    form_ajax_refs = {
        'created_by': {'fields': (User.name,)},
        # 'performed_by': {'fields': (User.name,)},
        # 'recommended_by': {'fields': (User.name,)},
        # 'recommendation': {'fields': (Recommendation.name,)},
        # 'equipment': {'fields': (Equipment.equipment_number,)},
        # 'material': {'fields': (Material.name,)},
        # 'fluid_type': {'fields': (FluidType.name,)},
        # 'lab': {'fields': (Lab.name,)},
        'contract': {'fields': (Contract.name,)},
        'test_result': {'fields': (TestResult.remark,)},
        # 'lab_contract': {'fields': (Contract.name,)},
    }

    form_args = {
        'date_prelevement': {
            'label': 'Date of Sampling',
        }
    }

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
    # column_sortable_list = (['name'])
    column_searchable_list = (['name'])
    column_exclude_list = (['description'])
    column_labels = {'qty_ser': 'Qty Syringe', 'pf': 'Pf 20', 'point': 'Pour Point'}

    def __init__(self, dbsession):
        super(FluidProfileView, self).__init__(
            FluidProfile, dbsession, name="Fluid profile", category="Campaign"
        )


class TestTypeView(MyModelView):
    """
    TestType management view
    """
    # Visible columns in the list view
    # can_view_details = True
    column_hide_backrefs = False

    # # List of columns that can be sorted.
    # column_sortable_list = (['name', 'group_id', 'is_group'])
    column_searchable_list = (['name', 'group_id', 'is_group'])

    # inline_models = (TestResult,)

    form_ajax_refs = {
        'test_result': {'fields': (TestResult.remark,)},
        'test_repair_note': {'fields': (TestRepairNote.remark,)},
        'test_diagnosis': {'fields': (TestDiagnosis.diagnosis_notes,)},
        'test_recommendation': {'fields': (TestRecommendation.recommendation_notes,)},
    }

    def __init__(self, dbsession):
        super(TestTypeView, self).__init__(
            TestType, dbsession, name="Test type", category="Types"
        )


class InhibitorTypeView(MyModelView):
    """
       InhibitorType management view
       """
    # Visible columns in the list view
    # can_view_details = True
    # column_hide_backrefs = False

    # # List of columns that can be sorted.
    column_sortable_list = (['name'])
    column_searchable_list = (['name'])

    def __init__(self, dbsession):
        super(InhibitorTypeView, self).__init__(
            InhibitorType, dbsession, name="Inhibitor type", category="Types"
        )


class TestResultView(MyModelView):
    """
    TestResult management view
    """
    # Visible columns in the list view
    can_view_details = True
    column_hide_backrefs = False

    # List of columns that can be sorted.
    column_sortable_list = ('date_analyse', 'test_reason_id', 'test_type_id',
                            'test_status', 'sampling_point_id', 'campaign_id')
    column_searchable_list = ('date_analyse', 'test_reason_id', 'test_type_id',
                              'test_status_id', 'sampling_point_id', 'campaign_id')

    # inline_models = (BushingTest, WindingTest, VisualInspectionTest, InsulationResistanceTest, PolymerisationDegreeTest,
    #                  TransformerTurnRatioTest, WindingResistanceTest, DissolvedGasTest, WaterTest, FuranTest,
    #                  InhibitorTest, PCBTest, ParticleTest, MetalsInOilTest, FluidTest
    #                  )
    form_excluded_columns = ('bushing_test', 'winding_test', 'insulation_resistance_test',
                             'polymerisation_degree_test', 'transformer_turn_ratio_test',
                             'winding_resistance_test', 'dissolved_gas_test',
                             'furan_test', 'pcb_test',
                             'particle_test', 'metals_in_oil_test', 'fluid_test',)
    # TODO: fix other relations
    form_ajax_refs = {
        'campaign': {'fields': (Campaign.description,)},
        'sampling_point': {'fields': (SamplingPoint.name,)},
        'equipment': {'fields': (Equipment.name,)},
        'lab_contract': {'fields': (Contract.name,)},
        'test_recommendation': {'fields': (TestRecommendation.recommendation_notes,)},
        'test_repair_note': {'fields': (TestRepairNote.remark,)},
        'test_diagnosis': {'fields': (TestDiagnosis.diagnosis_notes,)},
        # 'bushing_test': {'fields': (BushingTest.h1,)},
        # 'winding_test': {'fields': (WindingTest.test_kv1,)},
        'visual_inspection_test': {'fields': (VisualInspectionTest.notes,)},
        # 'insulation_resistance_test': {'fields': (InsulationResistanceTest.test_kv1,)},
        # 'polymerisation_degree_test': {'fields': (PolymerisationDegreeTest.phase_a1,)},
        # 'transformer_turn_ratio_test': {'fields': (TransformerTurnRatioTest.winding,)},
        # 'winding_resistance_test': {'fields': (WindingResistanceTest.winding,)},
        # 'dissolved_gas_test': {'fields': (DissolvedGasTest.h2,)},
        'water_test': {'fields': (WaterTest.remark,)},
        # 'furan_test': {'fields': (FuranTest.hmf,)},
        'inhibitor_test': {'fields': (InhibitorTest.remark,)},
        # 'pcb_test': {'fields': (PCBTest.aroclor_1242,)},
        # 'particle_test': {'fields': (ParticleTest._2um,)},
        # 'metals_in_oil_test': {'fields': (MetalsInOilTest.iron,)},
        # 'fluid_test': {'fields': (FluidTest.dielectric_1816,)},
    }

    def __init__(self, dbsession):
        super(TestResultView, self).__init__(
            TestResult, dbsession, name="Test result", category="Campaign"
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

    # inline_models = (Equipment,)

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
    # column_sortable_list = ('name', 'description', 'bushing', 'winding', 'winding_double',
    #                         'insulation', 'visual', 'resistance', 'degree', 'turns')
    column_searchable_list = ('name', 'description', 'bushing', 'winding', 'insulation_pf',
                              'insulation', 'visual', 'resistance', 'degree', 'turns')

    # form_args = {'winding_double': {'label': 'Winding Doble', }}
    column_labels = {'insulation_pf': 'Insulation PF'}

    def __init__(self, dbsession):
        super(ElectricalProfileView, self).__init__(
            ElectricalProfile, dbsession, name="Electrical profile", category="Campaign"
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

    form_ajax_refs = {
        'equipment': {'fields': (Equipment.name,)},
    }

    def __init__(self, dbsession):
        super(PowerSourceView, self).__init__(
            PowerSource, dbsession, name="Power source", category="Equipment"
        )


class NormView(MyModelView):
    """
    Norm management view
    """
    # Visible columns in the list view
    column_hide_backrefs = True
    can_view_details = True

    # # List of columns that can be sorted.
    column_sortable_list = ('name', )
    column_searchable_list = ('name', 'name', 'table_name')

    def is_accessible(self):
        """ Can create and edit norm tables """
        if login.current_user.is_authenticated():
            return login.current_user.has_role('expert')

        return False

    def __init__(self, dbsession):
        super(NormView, self).__init__(
            Norm, dbsession, name="Norm", category="Norms"
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
    form_ajax_refs = {
        'test_recommendation': {'fields': (TestRecommendation.recommendation_notes,)},
    }

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

    form_ajax_refs = {
        'test_result': {'fields': (TestResult.remark,)},
    }

    def __init__(self, dbsession):
        super(TestStatusView, self).__init__(
            TestStatus, dbsession, name="Test status", category="Statuses"
        )



class CampaignStatusView(MyModelView):
    """
    CampaignStatus management view
    """
    # Visible columns in the list view
    # can_view_details = True
    column_hide_backrefs = False

    # # List of columns that can be sorted.
    column_sortable_list = (['name', 'code'])
    column_searchable_list = (['name', 'code'])

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
    column_searchable_list = ('date_start', 'assigned_to_id', 'description')

    form_ajax_refs = {
        'assigned_to': {'fields': (User.name,)},
        'test_recommendation': {'fields': (TestRecommendation.recommendation_notes,)},
        'status': {'fields': (TaskStatus.name,)},
    }

    def __init__(self, dbsession):
        super(TestScheduleView, self).__init__(
            TestSchedule, dbsession, name="Test schedule", category="Statuses"
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

    form_ajax_refs = {
        'test_result': {'fields': (TestResult.remark,)},
    }

    def __init__(self, dbsession):
        super(TestReasonView, self).__init__(
            TestReason, dbsession, name="Test reason"
        )


class PressureUnitView(MySimpleTypesView):
    """
    PressureUnit management view
    """

    def __init__(self, dbsession):
        super(PressureUnitView, self).__init__(
            PressureUnit, dbsession, name="Pressure unit"
        )


class GasRelayView(MySimpleTypesView):
    """
    GasRelay management view
    """

    def __init__(self, dbsession):
        super(GasRelayView, self).__init__(
            GasRelay, dbsession, name="Gas relay"
        )


class SamplingPointView(MySimpleTypesView):
    """
    SamplingPoint management view
    """

    # inline_models = (TestResult,)
    form_ajax_refs = {
        'test_result': {'fields': (TestResult.remark,)},
    }

    def __init__(self, dbsession):
        super(SamplingPointView, self).__init__(
            SamplingPoint, dbsession, name="Sampling point"
        )


class EquipmentConnectionView(MySimpleView):
    """
    EquipmentConnection management view
    """
    # List of columns that can be sorted.
    column_sortable_list = ()
    column_searchable_list = ()

    form_ajax_refs = {
        'parent': {'fields': (Equipment.name,)},
    }

    def __init__(self, dbsession):
        super(EquipmentConnectionView, self).__init__(
            EquipmentConnection, dbsession, category="Equipment", name="Equipment connection"
        )


class SiblingView(MySimpleView):
    """
    Sibling management view
    """
    # List of columns that can be sorted.
    column_sortable_list = ()
    column_searchable_list = ()

    form_ajax_refs = {
        'equipment': {'fields': (Equipment.name,)},
        'sibling': {'fields': (Equipment.name,)},
    }

    def __init__(self, dbsession):
        super(SiblingView, self).__init__(
            Sibling, dbsession, category="Equipment", name="Sibling"
        )


# class SamplingCardView(MySimpleView):
#     """
#     SamplingCard management view
#     """
#     # List of columns that can be sorted.
#     column_sortable_list = ()
#     column_searchable_list = ()
#
#     def __init__(self, dbsession):
#         super(SamplingCardView, self).__init__(
#             SamplingCard, dbsession, category="Campaign", name="Sampling card"
#         )


class TestRecommendationView(MySimpleView):
    """
    TestRecommendation management view
    """
    # List of columns that can be sorted.
    column_sortable_list = ()
    column_searchable_list = ()

    form_ajax_refs = {
        'user': {'fields': (User.name,)},
        'test_result': {'fields': (TestResult.remark,)},
        'recommendation': {'fields': (Recommendation.name,)},
    }

    def __init__(self, dbsession):
        super(TestRecommendationView, self).__init__(
            TestRecommendation, dbsession, category="Types", name="Test recommendation"
        )


class InterruptingMediumView(MySimpleTypesView):
    def __init__(self, dbsession):
        super(InterruptingMediumView, self).__init__(
            InterruptingMedium, dbsession, name="Interrupting medium"
        )


class InsulationView(MySimpleTypesView):
    def __init__(self, dbsession):
        super(InsulationView, self).__init__(
            Insulation, dbsession, name="Insulation"
        )


class BreakerMechanismView(MySimpleTypesView):
    """
    Downstream management view
    """

    def __init__(self, dbsession):
        super(BreakerMechanismView, self).__init__(
            BreakerMechanism, dbsession, name="Breaker mechanism"
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
            PumpCondition, dbsession, name="Pump condition"
        )


class ValveConditionView(MySimpleConditionsView):
    """
    ValveCondition management view
    """

    def __init__(self, dbsession):
        super(ValveConditionView, self).__init__(
            ValveCondition, dbsession, name="Valve condition"
        )


class GasketConditionView(MySimpleConditionsView):
    """
    GasketCondition management view
    """

    def __init__(self, dbsession):
        super(GasketConditionView, self).__init__(
            GasketCondition, dbsession, name="Gasket condition"
        )


class OverallConditionView(MySimpleConditionsView):
    """
    OverallCondition management view
    """

    def __init__(self, dbsession):
        super(OverallConditionView, self).__init__(
            OverallCondition, dbsession, name="Overall condition"
        )


class TapFilterConditionView(MySimpleConditionsView):
    """
    TapFilterCondition management view
    """

    def __init__(self, dbsession):
        super(TapFilterConditionView, self).__init__(
            TapFilterCondition, dbsession, name="Tap filter condition"
        )


class ConnectionConditionView(MySimpleConditionsView):
    """
    ConnectionCondition management view
    """

    def __init__(self, dbsession):
        super(ConnectionConditionView, self).__init__(
            ConnectionCondition, dbsession, name="Connection condition"
        )


class FoundationConditionView(MySimpleConditionsView):
    """
    FoundationCondition management view
    """

    def __init__(self, dbsession):
        super(FoundationConditionView, self).__init__(
            FoundationCondition, dbsession, name="Foundation condition"
        )


class HeatingConditionView(MySimpleConditionsView):
    """
    HeatingCondition management view
    """

    def __init__(self, dbsession):
        super(HeatingConditionView, self).__init__(
            HeatingCondition, dbsession, name="Heating condition"
        )


class FanConditionView(MySimpleConditionsView):
    """
    FanCondition management view
    """

    def __init__(self, dbsession):
        super(FanConditionView, self).__init__(
            FanCondition, dbsession, name="Fan condition"
        )


class PaintTypesView(MySimpleConditionsView):
    """
    PaintTypes management view
    """

    def __init__(self, dbsession):
        super(PaintTypesView, self).__init__(
            PaintTypes, dbsession, name="Paint types"
        )


class FluidLevelView(MySimpleConditionsView):
    """
    FluidLevel management view
    """

    def __init__(self, dbsession):
        super(FluidLevelView, self).__init__(
            FluidLevel, dbsession, name="Fluid level"
        )


class GasLevelView(MySimpleConditionsView):
    """
    GasLevel management view
    """

    def __init__(self, dbsession):
        super(GasLevelView, self).__init__(
            GasLevel, dbsession, name="Gas level"
        )


class TapCounterStatusView(MySimpleConditionsView):
    """
    TapCounterStatus management view
    """

    def __init__(self, dbsession):
        super(TapCounterStatusView, self).__init__(
            TapCounterStatus, dbsession, name="Tap counter status"
        )


class MySimpleStatusesView(MySimpleView):
    def __init__(self, model_class, dbsession, **kvargs):
        super(MySimpleStatusesView, self).__init__(
            model_class, dbsession, category="Statuses", **kvargs
        )


class ContractStatusView(MySimpleStatusesView):
    """
    ContractStatus management view
    """

    # inline_models = (Contract,)

    def __init__(self, dbsession):
        super(ContractStatusView, self).__init__(
            ContractStatus, dbsession, name="Contract status"
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
            BushingTest, dbsession, name="Bushing test"
        )


class WindingTestView(MyTestView):
    """
    WindingTest management view
    """

    def __init__(self, dbsession):
        super(WindingTestView, self).__init__(
            WindingTest, dbsession, name="Winding PF"
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
            InsulationResistanceTest, dbsession,
            name="Insulation resistance test"
        )


class PolymerisationDegreeTestView(MyTestView):
    """
    PolymerisationDegreeTest management view
    """

    def __init__(self, dbsession):
        super(PolymerisationDegreeTestView, self).__init__(
            PolymerisationDegreeTest, dbsession,
            name="Polymerisation degree test"
        )


class TransformerTurnRatioTestView(MyTestView):
    """
    TransformerTurnRatioTest management view
    """

    def __init__(self, dbsession):
        super(TransformerTurnRatioTestView, self).__init__(
            TransformerTurnRatioTest, dbsession,
            name="Transformer turn ratio test"
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
            DissolvedGasTest, dbsession, name="Dissolved gas test"
        )


class WaterTestView(MyTestView):
    """
    WaterTest management view
    """

    def __init__(self, dbsession):
        super(WaterTestView, self).__init__(
            WaterTest, dbsession, name="Water test"
        )


class FuranTestView(MyTestView):
    """
    FuranTest management view
    """

    def __init__(self, dbsession):
        super(FuranTestView, self).__init__(
            FuranTest, dbsession, name="Furan test"
        )


class InhibitorTestView(MyTestView):
    """
    InhibitorTest management view
    """

    def __init__(self, dbsession):
        super(InhibitorTestView, self).__init__(
            InhibitorTest, dbsession, name="Inhibitor test"
        )


class PCBTestView(MyTestView):
    """
    PCBTest management view
    """

    def __init__(self, dbsession):
        super(PCBTestView, self).__init__(
            PCBTest, dbsession, name="PCB test"
        )


class ParticleTestView(MyTestView):
    """
    ParticleTest management view
    """

    def __init__(self, dbsession):
        super(ParticleTestView, self).__init__(
            ParticleTest, dbsession, name="Particle test"
        )


class MetalsInOilTestView(MyTestView):
    """
    MetalsInOilTest management view
    """

    def __init__(self, dbsession):
        super(MetalsInOilTestView, self).__init__(
            MetalsInOilTest, dbsession, name="Metals in oil test"
        )


class FluidTestView(MyTestView):
    """
    FluidTest management view
    """

    def __init__(self, dbsession):
        super(FluidTestView, self).__init__(
            FluidTest, dbsession, name="Fluid test"
        )


class TestSamplingCardView(MySimpleView):
    """
    TestSamplingCard management view
    """
    # List of columns that can be sorted.
    column_sortable_list = ()
    column_searchable_list = ()

    form_ajax_refs = {
        'test_result': {'fields': (TestResult.remark,)},
    }

    def __init__(self, dbsession):
        super(TestSamplingCardView, self).__init__(
            TestSamplingCard, dbsession, category="Campaign", name="Test sampling card"
        )

class CountryView(MySimpleView):
    """
    Country management view
    """
    def __init__(self, dbsession):
        super(CountryView, self).__init__(
            Country, dbsession, category="Options", name="Country"
        )

simple_views = [
    TestReasonView, PressureUnitView, GasRelayView, PaintTypesView,
    SamplingPointView, EquipmentConnectionView, InterruptingMediumView,
    InsulationView, BreakerMechanismView, FanConditionView, HeatingConditionView,
    FoundationConditionView, ConnectionConditionView, TapFilterConditionView,
    OverallConditionView, GasketConditionView, ValveConditionView,
    PumpConditionView, ContractStatusView, TapCounterStatusView, GasLevelView,
    FluidLevelView, TestRecommendationView, TestSamplingCardView, SiblingView,
    # SamplingCardView,
]
test_views = [
    BushingTestView, WindingTestView, VisualInspectionTestView, InsulationResistanceTestView,
    PolymerisationDegreeTestView, TransformerTurnRatioTestView, WindingResistanceTestView,
    DissolvedGasTestView, WaterTestView, PCBTestView, InhibitorTestView, FuranTestView, FluidTestView,
    MetalsInOilTestView, ParticleTestView
]
other_views = [
    EquipmentView, NormFuranView, NormPhysicView, NormIsolationView, NormGasView, AirCircuitBreakerView,
    ManufacturerView, BushingView, CableView, CapacitorView, RectifierView, NeutralResistanceView, TankView,
    LoadTapChangerView, BreakerView, SwitchView, SwitchGearView, SynchronousMachineView, InductanceView,
    InductionMachineView, TransformerView, GasSensorView, FluidTypeView, LocationView, LabView, CampaignView,
    ContractView, FluidProfileView, TestStatusView, TestTypeView, TestResultView,
    EquipmentTypeView, ElectricalProfileView, MaterialView, PowerSourceView, NormView, RecommendationView,
    SyringeView, TestScheduleView, InhibitorTypeView, CampaignStatusView, CountryView
]
admin_views = simple_views
admin_views.extend(test_views)
admin_views.extend(other_views)
