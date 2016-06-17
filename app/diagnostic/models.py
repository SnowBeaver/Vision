#!/usr/bin/env python
# -*- coding: utf-8 -*-
from sqlalchemy import ForeignKey, Column, Integer, String, Unicode, Boolean, Float
import sqlalchemy as sqla
# from sqlalchemy_i18n import (
#     make_translatable
# , translation_base
# , Translatable
# )
from app import db
from sqlalchemy.orm import relationship, relation



class Lab(db.Model):
    __tablename__ = 'lab'

    id = Column(Integer, primary_key=True)
    code = Column(Integer)
    analyser = Column(Unicode(256))
    name = Column(Unicode(256))

    def __init__(self, code=0, name=''):
        self.code = code
        self.name = name

    def dump(self, _indent=0):
        return "   " * _indent + repr(self) + \
               "\n" + \
               "".join(
                   [c.dump(_indent + 1) for c in self.children.values()]
               )

    def __repr__(self):
        return "Lab(id=%r, code=%r, name=%r)" % (
            self.id,
            self.code,
            self.name
        )


class ElectricalProfile(db.Model):
    __tablename__ = 'electrical_profile'

    id = db.Column(db.Integer, primary_key=True)
    selection = db.Column(db.Unicode(256))
    description = db.Column(db.Unicode(1024))
    bushing = db.Column(db.Boolean(False))
    winding = db.Column(db.Boolean(False))
    winding_double = db.Column(db.Boolean(False))
    insulation = db.Column(db.Boolean(False))
    visual = db.Column(db.Boolean(False))
    resistance = db.Column(db.Boolean(False))
    degree = db.Column(db.Boolean(False))
    turns = db.Column(db.Boolean(False))

    def dump(self, _indent=0):
        return "   " * _indent + repr(self) + \
               "\n" + \
               "".join(
                   [c.dump(_indent + 1) for c in self.children.values()]
               )

    def parsedata(self, data):
        if data:
            for key in data.keys():
                # print key + ' ' + data[key]
                if hasattr(self, key):
                    if key == 'selection' or key == 'description':
                        if data[key]:
                            setattr(self, key, data[key])
                    else:
                        setattr(self, key, True if data[key] == 'y' else False)

    def __init__(self, data=None):
        self.parsedata(data)
        # print getattr(self, key)

    def clear_data(self):
        for attr in self.__dict__:
            if attr not in ['id', '_sa_instance_state']:
                # print attr
                if attr == 'selection' or attr == 'description':
                    setattr(self, attr, '')
                else:
                    setattr(self, attr, False)

    def add_data(self, data):
        self.parsedata(data)


class ContractStatus(db.Model):
    __tablename__ = 'contract_status'

    id = db.Column(db.Integer(), primary_key=True, nullable=False)
    name = db.Column(db.String(50), index=True)


class SamplingPoint(db.Model):
    __tablename__ = 'sampling_point'

    id = db.Column(db.Integer(), primary_key=True, nullable=False)
    name = db.Column(db.String(50), index=True)


class Contract(db.Model):
    __tablename__ = 'contract'

    id = db.Column(db.Integer(), primary_key=True, nullable=False)
    name = db.Column(db.String(50), index=True)
    code = db.Column(db.String(50), index=True)
    # user 1 enters manually
    # ContractNum: What is the contract number within the company
    # ContractStatus: What is the status of the contract
    status = db.Column(
        'contract_status_id',
        db.ForeignKey("contract_status.id"),
        nullable=False
    )


class Campaign(db.Model):
    """
    Campaign: Contain current analysis results, who did it and why. It also contain analysis management and statuses
    If a test is done on the equipment, then an Analysis record is created
    """
    __tablename__ = u'campaign'

    # __table_args__ = (
    # will be reviewed
    # db.Index(u'campaign_DatePrelevement_NoEquipement_NoSerieEquipe_TypeAnal_key', u'DatePrelevement', u'NoEquipement', u'NoSerieEquipe', u'TypeAnalyse', u'ClefAnalyse', unique=True),
    # db.Index(u'campaign_NoEquipement_NoSerieEquipe_DatePrelevement_ClefAnal_key', u'NoEquipement', u'NoSerieEquipe', u'DatePrelevement', u'ClefAnalyse', u'TypeAnalyse', unique=True),
    # db.Index(u'campaign_SerieDate', u'NoSerieEquipe', u'DatePrelevement', u'ClefAnalyse', u'TypeAnalyse'),
    # db.Index(u'campaign_TypeAnalyse_NoEquipement_NoSerieEquipe_DatePrelevem_key', u'TypeAnalyse', u'NoEquipement', u'NoSerieEquipe', u'DatePrelevement', u'ClefAnalyse', unique=True),
    # db.Index(u'campaign_NoEquipement_NoSerieEquipe_TypeAnalyse_DatePrelevem_key', u'NoEquipement', u'NoSerieEquipe', u'TypeAnalyse', u'DatePrelevement', u'ClefAnalyse', unique=True),
    # db.Index(u'campaign_DateSerie', u'DatePrelevement', u'NoSerieEquipe', u'TypeAnalyse', u'ClefAnalyse'),
    # db.Index(u'campaign_Condition_douteuse', u'NoEquipement', u'NoSerieEquipe', u'If_OK', u'DatePrelevement'),
    # db.Index(u'campaign_NoEquipement', u'NoEquipement', u'NoSerieEquipe')
    # )

    id = db.Column(db.Integer(), primary_key=True, nullable=False)
    date = db.Column(db.DateTime, index=True) # date of campaign start

    # created_by - relation to user table  #user one  (manager group)
    created_by = db.Column(
        'created_by_id',
        sqla.ForeignKey("users_user.id"),
        nullable=False
    )

    # code = db.Column(db.String(50), index=True)  # AnalysisKey: Index key for all tests results - id can be used

    # Sometimes it is mandatory to enter the test equipment information so same one can be used next time
    equipment = db.Column(
        'equipment_id',
        sqla.ForeignKey("equipment.id"),
        nullable=False
    )

    # MaterialCode: Define the type of material analysed: copper, sand, paper, etc..
    material = db.Column(
        'material_id',
        db.ForeignKey("material.id"),
        nullable=True
    )

    # AnalysisNo: a number that comes from laboratory generated by themself, user #3 (at the beggining)
    analysis_number = db.Column(db.String(15), index=True)

    # PercentRatio: Indicate if the TTR was done using Percent ratio or Ratio. Used with TTR table
    # Comes from equipment
    # specific electrical test on winding.  TTR - tranformer term ...
    # true when user decided to use percent ratio for ttr
    percent_ratio = db.Column(db.Boolean)

    # OilType: What type of insulating material is used: Mineral oil, Silicone, Vegetable oil, etc..
    #  comes from equipment
    fluid_type = db.Column(
        'fluid_type_id',
        db.ForeignKey("fluid_type.id"),
        nullable=True
    )

    # Load: what was the equipment loading at the time of sampling
    # MW MVR (Equipment can sustain), charge is the actual MVA MW
    charge = db.Column(db.Float(53))

    # user 1 create the sampling,  date when user 2( guy in the field) starts the work
    # SamplingDate: Date of sampling
    # User 1 adds this value and user 2 has oprtunity to change it (he has access to database)
    date_prelevement = db.Column(db.DateTime, index=True)

    # Remark: Any pertiment remark related to sampling or equipment status  (can be entered by user1 2 or 3)
    remark = db.Column(db.Text)

    # SampledBy: Who did the sampling  user 2 relation to users table
    performed_by = db.Column(
        'performed_by_id',
        db.ForeignKey("users_user.id"),
        nullable=True
    )

    # Modify: Bolean field to indicate record has changed, and foreign database need updates
    modifier = db.Column(db.Boolean)

    # Transmission: Sampled information and material has been sent to the laboratory
    # Toggled by user 2, and sends to lab  (normally it's done buy user 1)
    # user 2 completes the sampling compaign and reassigns record to user 1, transmision is toggled
    # check the screenshot,  it's a file that exported to a laboratory and then received back by email
    # compared checked and user 1 updates data
    transmission = db.Column(db.Boolean)

    # Laboratory: Company that perform the analysis.
    lab = db.Column(
        'lab_id',
        db.ForeignKey("lab.id"),
        nullable=False
    )

    # RepairDate: entered by user1 and indicated when repair is done.  What date was repair done last time
    # It's not a part of the campaign, it should be a kind  of type of campaign
    repair_date = db.Column(db.DateTime)

    # Repairdescription: Describe what was doen during repair, part of repair compaign
    repair_description = db.Column(db.Text)

    # Bolean field that may no longer be required
    if_rem = db.Column(db.String(5))
    # Bolean field that may no longer be required
    if_ok = db.Column(db.String(5))

    # generated by user1   uses predefined list of recommandations
    # RecommendationCode: Used with Recommendation Table, where a list of recomended action are suggested
    recommandation = db.Column(
        'recommendation_id',
        db.ForeignKey("recommendation.id"),
        nullable=True
    )

    # RecommendationWritten:
    # The analyser gather all his though in this field to explain what should be done in plain that
    recommendationNotes = db.Column(db.Text)  # Text are field Reccommandation
    # relation to user who recomends
    recommended_by = db.Column(
        'recommended_by',
        sqla.ForeignKey("users_user.id"),
        nullable=True
    )

    # DateApplication: When recommendation was written
    date_application = db.Column(db.DateTime)

    # Comments: Additional comments.
    comments = db.Column(db.Text)

    # Same like load, actual MW of the equipment
    # MWs: Equipment loading in MWatt
    mws = db.Column(db.Float(53), server_default=db.text("0"))

    # Temperature: Equipement temperature at sampling time
    temperature = db.Column(db.Float(53))

    # SamplingcardPrint: Indicate if the sampling cart need to be printed to fill in the field information
    # user 2 has to print small form
    sampling_card_print = db.Column(db.Boolean)

    contract_id = db.Column(
        'contract_id',
        db.ForeignKey("contract.id"),
        nullable=False
    )

    # Containers: How many containers are required
    containers = db.Column(db.Float(53), server_default=db.text("1"))

    # SamplingCardGathered: Used for printing the card in batch
    sampling_card_gathered = db.Column(db.Integer)

    # GatheredTestType: Indicates the tests that are grouped for each equipment that need work on
    gathered_test_type = db.Column(db.String(50))

    # contract with laboratory
    lab_contract_id = db.Column(
        'lab_contract_id',
        db.ForeignKey("contract.id"),
        nullable=True
    )

    # Seringe number as printed
    seringe_num = db.Column(db.String(50))

    data_valid = db.Column(db.Integer, server_default=db.text("0"))  # DataValid: Need to look into
    status1 = db.Column(db.Integer, server_default=db.text("0"))  # Status1: Need to look into
    status2 = db.Column(db.Integer, server_default=db.text("0"))  # Status2:	 Need to look into
    error_state = db.Column(db.Integer, server_default=db.text("0"))  # ErrorState: Need to look into
    error_code = db.Column(db.Integer, server_default=db.text("0"))  # ErrorCode: Need to look into
    # AmbientAirTemperature: Ambient air temperature at sampling time
    ambient_air_temperature = db.Column(db.Float(53), server_default=db.text("0"))


class FluidProfile(db.Model):
    __tablename__ = 'fluid_profile'

    id = db.Column(db.Integer, primary_key=True)

    selection = db.Column(db.Unicode(256))
    description = db.Column(db.Unicode(1024))

    # syringe
    gas = db.Column(db.Boolean(False))
    water = db.Column(db.Boolean(False))
    furans = db.Column(db.Boolean(False))
    inhibitor = db.Column(db.Boolean(False))
    pcb = db.Column(db.Boolean(False))
    qty = db.Column(db.Integer)
    sampling = db.Column(db.Integer)
    # jar
    dielec = db.Column(db.Boolean(False))
    acidity = db.Column(db.Boolean(False))
    density = db.Column(db.Boolean(False))
    pcb_jar = db.Column(db.Boolean(False))
    inhibitor_jar = db.Column(db.Boolean(False))
    point = db.Column(db.Boolean(False))
    dielec_2 = db.Column(db.Boolean(False))
    color = db.Column(db.Boolean(False))
    pf = db.Column(db.Boolean(False))
    particles = db.Column(db.Boolean(False))
    metals = db.Column(db.Boolean(False))
    viscosity = db.Column(db.Boolean(False))
    dielec_d = db.Column(db.Boolean(False))
    ift = db.Column(db.Boolean(False))
    pf_100 = db.Column(db.Boolean(False))
    furans_f = db.Column(db.Boolean(False))
    water_w = db.Column(db.Boolean(False))
    corr = db.Column(db.Boolean(False))
    dielec_i = db.Column(db.Boolean(False))
    visual = db.Column(db.Boolean(False))
    qty_jar = db.Column(db.Integer)
    sampling_jar = db.Column(db.Integer)
    # vial
    pcb_vial = db.Column(db.Boolean(False))
    antioxidant = db.Column(db.Boolean(False))
    qty_vial = db.Column(db.Integer)
    sampling_vial = db.Column(db.Integer)

    def parsedata(self, data):
        if data:
            for key in data.keys():
                if hasattr(self, key):
                    if key in ['selection', 'description', 'qty', 'sampling', 'qty_jar', 'sampling_jar', 'qty_vial',
                               'sampling_vial', 'sampling_vial']:
                        if data[key]:
                            setattr(self, key, data[key])
                    else:
                        setattr(self, key, True if data[key] == 'y' else False)

    def __init__(self, data=None):
        self.parsedata(data)

    def clear_data(self):
        for attr in self.__dict__:
            if attr not in ['id', '_sa_instance_state']:
                # print attr
                if attr == 'selection' and attr == 'description':
                    setattr(self, attr, '')
                if attr in ['qty', 'sampling', 'qty_jar', 'sampling_jar', 'qty_vial', 'sampling_vial', 'sampling_vial']:
                    setattr(self, attr, 0)
                else:
                    setattr(self, attr, False)

    def add_data(self, data):
        self.parsedata(data)


class EquipmentType(db.Model):
    __tablename__ = u'equipment_type'

    id = db.Column(db.Integer(), primary_key=True, nullable=False)
    name = db.Column(db.String(50))
    code = db.Column(db.String(50))


class Material(db.Model):
    __tablename__ = u'material'

    id = db.Column(db.Integer(), primary_key=True, nullable=False)
    name = db.Column(db.String(50))
    code = db.Column(db.String(50))


class FluidType(db.Model):
    __tablename__ = u'fluid_type'

    id = db.Column(db.Integer(), primary_key=True, nullable=False)
    name = db.Column(db.String(50))


class Location(db.Model):
    # PhyPosition GPS location
    __tablename__ = u'location'

    id = db.Column(db.Integer(), primary_key=True, nullable=False)
    # Site. What is the name of the site.
    # Example. A company may have a assembly plants in several cities,
    # therefore each site is named after each city where the plant is.
    name = db.Column(db.String(50), index=True)  # should be relation


class Manufacturer(db.Model):
    __tablename__ = u'manufacturer'

    def __init__(self, code=0, name=''):
        self.code = code
        self.name = name

    id = db.Column(db.Integer(), primary_key=True, nullable=False)
    name = db.Column(db.String(50))

    def dump(self, _indent=0):
        return "   " * _indent + repr(self) + \
               "\n" + \
               "".join(
                   [c.dump(_indent + 1) for c in self.children.values()]
               )

    def __repr__(self):
        return self.name


class GasSensor(db.Model):
    """
    GasSensor. List gas sensor with their respective sensitivity to each measured gas
     """
    __tablename__ = u'gas_sensor'

    id = db.Column(db.Integer(), primary_key=True, nullable=False)

    # Sensor. Sensor commercial name
    name = db.Column(db.String(50))
    serial = db.Column(db.String(50), nullable=False, index=True, unique=True)

    manufacturer = db.Column(
        'manufacturer_id',
        db.ForeignKey("manufacturer.id"),
        nullable=False
    )

    h2 = db.Column(db.Float(53), server_default=db.text("0"))  # Remaining are equivalent
    ch4 = db.Column(db.Float(53), server_default=db.text("0"))
    c2h2 = db.Column(db.Float(53), server_default=db.text("0"))
    c2h4 = db.Column(db.Float(53), server_default=db.text("0"))
    c2h6 = db.Column(db.Float(53), server_default=db.text("0"))
    co = db.Column(db.Float(53), server_default=db.text("0"))
    co2 = db.Column(db.Float(53), server_default=db.text("0"))
    o2 = db.Column(db.Float(53), server_default=db.text("0"))
    n2 = db.Column(db.Float(53), server_default=db.text("0"))

    # ppmError. Calculated ppm error by comparing lab ppm from sample with sensor reading at sampling time
    ppm_error = db.Column(db.Integer, server_default=db.text("0"))

    # percentError. Calculated error in percent
    percent_error = db.Column(db.Float(53), server_default=db.text("0"))

    def __repr__(self):
        return self.__tablename__


class Transformer(db.Model):
    __tablename__ = u'transformer'

    id = db.Column(db.Integer(), primary_key=True, nullable=False)

    # Assigned name given by production.
    # Production name never change but equipment may moved around. Must be careful applying a diagnostic related to a
    # Production because equipment can changed over the years and associate wrong diagnostic
    name = db.Column(db.String(50))

    # EquipmentSerialNum: Equipment ID given by manufacturer.
    # Index key, along with Equipment number to uniquely identify equipment
    serial = db.Column(db.String(50), nullable=False, index=True, unique=True)

    manufacturer = db.Column(
        'manufacturer_id',
        db.ForeignKey("manufacturer.id"),
        nullable=False
    )

    GasSensor = db.Column(
        'gas_sensor_id',
        db.ForeignKey("gas_sensor.id"),
        nullable=False
    )

    frequency = db.Column(db.Integer)  # frequency. Operating frequency
    windings = db.Column(db.Integer)  # Windings. Number of windings in transformer
    sealed = db.Column(db.Boolean)  # sealed. Is equipment sealed.
    phase_number = db.Column(db.Boolean)  # PhaseNum. 1=single phase, 3=triphase, 6=hexaphase

    # FluidVolume. Quantity of insulating fluid in equipment in litre
    fluid_volume = db.Column(db.Float(53))

    description = db.Column(db.String(50))  # description. Describe the equipment function

    # welded_cover. Is cover welded. Important to planned work as it is much longer to remove cover
    welded_cover = db.Column(db.Boolean)

    primary_tension = db.Column(db.Float(53))  # Volt1. Primary voltage in kV
    secondary_tension = db.Column(db.Float(53))  # Volt2. Secondary voltage in kV
    tertiary_tension = db.Column(db.Float(53))  # Volt3. Tertiary voltage in kV

    based_transformerp_ower = db.Column(db.Float(53))  # MVA1. Based transformer power
    first_cooling_stage_power = db.Column(db.Float(53))  # MVA2. First cooling stage power
    second_cooling_stage_power = db.Column(db.Float(53))  # MVA3. second cooling stage power

    autotransformer = db.Column(db.Boolean)  # Autotransformer. True if it is

    # is a separate device
    # PrimConnection. Primary windings connection on a multi phase transformer
    primary_winding_connection = db.Column(db.Integer)
    # SecConnection. Secondary windings connection on a multi phase transformer
    secondary_winding_connection = db.Column(db.Integer)
    # TertConnection. Tertiary windings connection on a multi phase transformer
    tertiary_winding_connection = db.Column(db.Integer)

    # winding metal is a property of winding
    windind_metal = db.Column(db.Integer)  # WindingMetal. Copper or aluminium

    bil1 = db.Column(db.Float(53))  # BIL1. Primary Insulation level in kV
    bil2 = db.Column(db.Float(53))  # BIL2. Secondary Insulation level in kV
    bil3 = db.Column(db.Float(53))  # BIL3. Tertiary Insulation level in kV

    static_shield1 = db.Column(db.Boolean)  # StaticShield1. true with primary electrostatic shield is present
    static_shield2 = db.Column(db.Boolean)  # StaticShield2. true with secondary electrostatic shield is present
    static_shield3 = db.Column(db.Boolean)  # StaticShield3. true with tertiary electrostatic shield is present

    # it's tranformer property
    bushing_neutral1 = db.Column(db.Float(53))
    bushing_neutral2 = db.Column(db.Float(53))
    bushing_neutral3 = db.Column(db.Float(53))
    bushing_neutral4 = db.Column(db.Float(53))

    ltc1 = db.Column(db.Float(53))  # LTC1.
    ltc2 = db.Column(db.Float(53))  # LTC2
    ltc3 = db.Column(db.Float(53))  # LTC3

    temperature_rise = db.Column(db.Integer)  # TemperatureRise. Transformer temperature rise

    # it can be a property and also can be tested
    impedance1 = db.Column(db.Float(53))  # Impedance1. Impedance at base MVA
    imp_base1 = db.Column(db.Float(53))  # ImpBasedMVA1

    impedance2 = db.Column(db.Float(53))  # Impedance2. Impedance at first forced cooling MVA
    imp_base2 = db.Column(db.Float(53))  # ImpBasedMVA2

    mvaforced11 = db.Column(db.Float(53))  # MVAForced11
    mvaforced12 = db.Column(db.Float(53))  # MVAForced12
    mvaforced13 = db.Column(db.Float(53))  # MVAForced13
    mvaforced14 = db.Column(db.Float(53))  # MVAForced14
    mvaforced21 = db.Column(db.Float(53))  # MVAForced21
    mvaforced22 = db.Column(db.Float(53))  # MVAForced22
    mvaforced23 = db.Column(db.Float(53))  # MVAForced23
    mvaforced24 = db.Column(db.Float(53))  # MVAForced24

    impedance3 = db.Column(db.Float(53))  # Impedance3. Impedance at third forced cooling MVA
    impbasedmva3 = db.Column(db.Float(53))  # ImpBasedMVA3

    # it belongs to transformer , tap voltage, it s a part of the test process
    formula_ratio2 = db.Column(db.Integer)  # RatioFormula2. Formula used for TTR

    # it belongs to transformer , tap voltage, it s a part of the test process
    formula_ratio = db.Column(db.Integer)  # RatioFormula. Formula used for TTR
    ratio_tag1 = db.Column(db.String(20))  # RatioTag1. Tag use for TTR
    ratio_tag2 = db.Column(db.String(20))  # RatioTag2. Tag use for TTR
    ratio_tag3 = db.Column(db.String(20))  # RatioTag3. Tag use for TTR
    ratio_tag4 = db.Column(db.String(20))  # RatioTag4. Tag use for TTR
    ratio_tag5 = db.Column(db.String(20))  # RatioTag5. Tag use for TTR
    ratio_tag6 = db.Column(db.String(20))  # RatioTag6. Tag use for TTR

    # FluidType. Insulating fluid used in equipment
    fluid_type = db.Column(
        'fluid_type_id',
        db.ForeignKey("fluid_type.id"),
        nullable=False
    )

    # it's a relation to bushing table column "serial number"
    bushing_serial1 = db.Column(db.String(15))  # BushingSerial1.
    bushing_serial2 = db.Column(db.String(15))  # BushingSerial2.
    bushing_serial3 = db.Column(db.String(15))  # BushingSerial3.
    bushing_serial4 = db.Column(db.String(15))  # BushingSerial4.
    bushing_serial5 = db.Column(db.String(15))  # BushingSerial5.
    bushing_serial6 = db.Column(db.String(15))  # BushingSerial6.
    bushing_serial7 = db.Column(db.String(15))  # BushingSerial7.
    bushing_serial8 = db.Column(db.String(15))  # BushingSerial8.
    bushing_serial9 = db.Column(db.String(15))  # BushingSerial9.
    bushing_serial10 = db.Column(db.String(15))  # BushingSerial10.
    bushing_serial11 = db.Column(db.String(15))  # BushingSerial11.
    bushing_serial12 = db.Column(db.String(15))  # BushingSerial12.

    # device property ,  for  transformer
    mvaactual = db.Column(db.Float(53))  # MVAActual. Actual MVA used
    mvaractual = db.Column(db.Float(53))  # MVARActual. Actual MVA used
    mwreserve = db.Column(db.Float(53))  # MWReserve. How much MW in reserve for backup
    mvarreserve = db.Column(db.Float(53))  # MVARReserve. How much MVAR in reserve for backup
    mwultime = db.Column(db.Float(53))  # MWUltima. How much MW can ultimately be used in emergency
    mvarultime = db.Column(db.Float(53))  # MVARUltima. How much MVAR can ultimately be used in emergency

    # transformer device property
    mva4 = db.Column(db.Float(53))  # MVA4

    # it transformer property
    # QuatConnection. Quaternary windings connection on a multi phase transformer
    quaternary_winding_connection = db.Column(db.Float(53))

    # tranformer property
    bil4 = db.Column(db.Float(53))  # BIL4. Tertiary Insulation level in kV
    # tranformer property
    static_shield4 = db.Column(db.Float(53))  # StaticShield4. true with tertiary electrostatic shield is present

    # tranformer property
    ratio_tag7 = db.Column(db.Float(53))  # RatioTag7. Tag use for TTR
    ratiot_ag8 = db.Column(db.Float(53))  # RatioTag8. Tag use for TTR
    formula_ratio3 = db.Column(db.Float(53))  # RatioFormula3

    def __repr__(self):
        return self.__tablename__


class Breaker(db.Model):
    __tablename__ = u'breaker'

    id = db.Column(db.Integer(), primary_key=True, nullable=False)

    # Assigned name given by production.
    # Production name never change but equipment may moved around. Must be careful applying a diagnostic related to a
    # Production because equipment can changed over the years and associate wrong diagnostic
    name = db.Column(db.String(50))

    # EquipmentSerialNum: Equipment ID given by manufacturer.
    # Index key, along with Equipment number to uniquely identify equipment
    serial = db.Column(db.String(50), nullable=False, index=True, unique=True)

    manufacturer = db.Column(
        'manufacturer_id',
        db.ForeignKey("manufacturer.id"),
        nullable=False
    )

    phase_number = db.Column(db.Boolean)  # PhaseNum. 1=single phase, 3=triphase, 6=hexaphase
    frequency = db.Column(db.Integer)  # frequency. Operating frequency
    sealed = db.Column(db.Boolean)  # sealed. Is equipment sealed.
    manufactured = db.Column(db.Integer)  # ManuYear. Year manufactured
    description = db.Column(db.String(50))  # description. Describe the equipment function

    # welded_cover. Is cover welded. Important to planned work as it is much longer to remove cover
    welded_cover = db.Column(db.Boolean)

    def __repr__(self):
        return self.__tablename__


class LoadTapChanger(db.Model):
    __tablename__ = u'tap_changer'

    id = db.Column(db.Integer(), primary_key=True, nullable=False)

    # Assigned name given by production.
    # Production name never change but equipment may moved around. Must be careful applying a diagnostic related to a
    # Production because equipment can changed over the years and associate wrong diagnostic
    name = db.Column(db.String(50))
    serial = db.Column(db.String(50), nullable=False, index=True, unique=True)

    manufacturer = db.Column(
        'manufacturer_id',
        db.ForeignKey("manufacturer.id"),
        nullable=False
    )
    manufactured = db.Column(db.Integer)  # ManuYear. Year manufactured
    frequency = db.Column(db.Integer)  # frequency. Operating frequency
    phase_number = db.Column(db.Boolean)  # PhaseNum. 1=single phase, 3=triphase, 6=hexaphase
    sealed = db.Column(db.Boolean)  # sealed. Is equipment sealed.
    description = db.Column(db.String(50))  # description. Describe the equipment function
    # welded_cover. Is cover welded. Important to planned work as it is much longer to remove cover
    welded_cover = db.Column(db.Boolean)

    # it should be a test value
    # Filter. What condition is the filter. We must make this field a selection choice such Good, bad, replace etc..
    filter = db.Column(db.String(30))

    # so this is test value (inspection)
    counter = db.Column(db.Integer)  # Counter. Used for load tap changer or arrester (ligthning)

    # tap changer property property
    ltc4 = db.Column(db.Float(53))  # LTC4

    def __repr__(self):
        return self.__tablename__


class Bushing(db.Model):
    __tablename__ = u'bushing'

    id = db.Column(db.Integer(), primary_key=True, nullable=False)
    type = ['phase', 'Neutral']
    name = db.Column(db.String(50))
    serial = db.Column(db.String(50), nullable=False, index=True, unique=True)

    manufacturer = db.Column(
        'manufacturer_id',
        db.ForeignKey("manufacturer.id"),
        nullable=False
    )
    manufactured = db.Column(db.Integer)  # ManuYear. Year manufactured
    frequency = db.Column(db.Integer)  # frequency. Operating frequency
    phase_number = db.Column(db.Boolean)  # PhaseNum. 1=single phase, 3=triphase, 6=hexaphase
    description = db.Column(db.String(50))  # description. Describe the equipment function
    bushing_manufacturer_h1 = db.Column(db.String(25))  # Bushing manufacturer for H1
    bushing_manufacturer_h2 = db.Column(db.String(25))  # Bushing manufacturer for H2
    bushing_manufacturer_h3 = db.Column(db.String(25))  # Bushing manufacturer for H3
    bushing_manufacturer_hn = db.Column(db.String(25))  # Bushing manufacturer for HN
    bushing_manufacturer_x1 = db.Column(db.String(25))  # Bushing manufacturer for X1
    bushing_manufacturer_x2 = db.Column(db.String(25))  # Bushing manufacturer for X2
    bushing_manufacturer_x3 = db.Column(db.String(25))  # Bushing manufacturer for X3
    bushing_manufacturer_xn = db.Column(db.String(25))  # Bushing manufacturer for XN
    bushing_manufacturer_t1 = db.Column(db.String(25))  # Bushing manufacturer for T1
    bushing_manufacturer_t2 = db.Column(db.String(25))  # Bushing manufacturer for T2
    bushing_manufacturer_t3 = db.Column(db.String(25))  # Bushing manufacturer for T3
    bushing_manufacturer_tn = db.Column(db.String(25))  # Bushing manufacturer for TN
    bushing_manufacturer_q1 = db.Column(db.String(25))  # Bushing manufacturer for Q1
    bushing_manufacturer_q2 = db.Column(db.String(25))  # Bushing manufacturer for Q2
    bushing_manufacturer_q3 = db.Column(db.String(25))  # Bushing manufacturer for Q3
    bushing_manufacturer_qn = db.Column(db.String(25))  # Bushing manufacturer for QN
    bushing_type_h = db.Column(db.String(25))  # Bushing type for H
    bushing_type_hn = db.Column(db.String(25))  # Bushing type for HN
    bushing_type_x = db.Column(db.String(25))  # Bushing type for X
    bushing_type_xn = db.Column(db.String(25))  # Bushing type for XN
    bushing_type_t = db.Column(db.String(25))  # Bushing type for T
    bushing_type_tn = db.Column(db.String(25))  # Bushing type for TN
    bushing_type_q = db.Column(db.String(25))  # Bushing type for Q
    bushing_type_qn = db.Column(db.String(25))  # Bushing type for QN

    def __repr__(self):
        return self.__tablename__


class Upstream(db.Model):
    __tablename__ = u'upstream'

    id = db.Column(db.Integer(), primary_key=True, nullable=False)
    name = db.Column(db.String(50), index=True)


class Downstream(db.Model):
    __tablename__ = u'downstream'

    id = db.Column(db.Integer(), primary_key=True, nullable=False)
    name = db.Column(db.String(50), index=True)


class NeutralResistance(db.Model):
    __tablename__ = u'resistance'

    id = db.Column(db.Integer(), primary_key=True, nullable=False)
    name = db.Column(db.String(50))
    serial = db.Column(db.String(50), nullable=False, index=True, unique=True)

    manufacturer = db.Column(
        'manufacturer_id',
        db.ForeignKey("manufacturer.id"),
        nullable=False
    )
    # its a separate device should be splitted into another table
    neutral_resistance = db.Column(db.Float(53))  # NeutralResistance1.
    neutral_resistance1 = db.Column(db.Float(53))  # NeutralResistance1.
    neutral_resistance0 = db.Column(db.Boolean)  # NeutralResistance0
    neutral_resistance2 = db.Column(db.Float(53))  # NeutralResistance2
    neutral_resistance3 = db.Column(db.Float(53))  # NeutralResistance3

    # it's status or mode  of a resistance
    neutral_resistance_open1 = db.Column(db.Boolean)  # NeutralResistanceOpen1
    neutral_resistance_open2 = db.Column(db.Boolean)  # NeutralResistanceOpen2
    # property of resistence, it's status
    neutral_resistance_open3 = db.Column(db.Float(53))  # NeutralResistanceOpen3

    def __repr__(self):
        return self.__tablename__


class AirCircuitBreaker(db.Model):
    __tablename__ = u'air_breaker'

    id = db.Column(db.Integer(), primary_key=True, nullable=False)

    # Assigned name given by production.
    # Production name never change but equipment may moved around. Must be careful applying a diagnostic related to a
    # Production because equipment can changed over the years and associate wrong diagnostic
    name = db.Column(db.String(50))

    # EquipmentSerialNum: Equipment ID given by manufacturer.
    # Index key, along with Equipment number to uniquely identify equipment
    serial = db.Column(db.String(50), nullable=False, index=True, unique=True)

    manufacturer_id = db.Column(
        'manufacturer_id',
        db.ForeignKey("manufacturer.id"),
        nullable=False
    )
    Manufacturer = db.relationship('Manufacturer', backref="air_breaker")

    phase_number = db.Column(sqla.Enum('1', '3', '6', name="Phase number"))  # PhaseNum. 1=single phase, 3=triphase, 6=hexaphase
    frequency = db.Column(sqla.Enum('25', '50', '60', 'DC', name="Frequency"), default=db.text('25'))  # frequency. Operating frequency
    sealed = db.Column(db.Boolean)  # sealed. Is equipment sealed.
    manufactured = db.Column(db.Integer)  # ManuYear. Year manufactured
    description = db.Column(db.Unicode())  # description. Describe the equipment function

    # welded_cover. Is cover welded. Important to planned work as it is much longer to remove cover
    welded_cover = db.Column(db.Boolean)

    def __repr__(self):
        return self.__tablename__


class Capacitor(db.Model):
    __tablename__ = u'capacitor'

    id = db.Column(db.Integer(), primary_key=True, nullable=False)

    # Assigned name given by production.
    # Production name never change but equipment may moved around. Must be careful applying a diagnostic related to a
    # Production because equipment can changed over the years and associate wrong diagnostic
    name = db.Column(db.String(50))

    # EquipmentSerialNum: Equipment ID given by manufacturer.
    # Index key, along with Equipment number to uniquely identify equipment
    serial = db.Column(db.String(50), nullable=False, index=True, unique=True)

    manufacturer = db.Column(
        'manufacturer_id',
        db.ForeignKey("manufacturer.id"),
        nullable=False
    )

    phase_number = db.Column(db.Boolean)  # PhaseNum. 1=single phase, 3=triphase, 6=hexaphase
    frequency = db.Column(db.Integer)  # frequency. Operating frequency
    sealed = db.Column(db.Boolean)  # sealed. Is equipment sealed.
    manufactured = db.Column(db.Integer)  # ManuYear. Year manufactured
    description = db.Column(db.String(50))  # description. Describe the equipment function

    # welded_cover. Is cover welded. Important to planned work as it is much longer to remove cover
    welded_cover = db.Column(db.Boolean)

    def __repr__(self):
        return self.__tablename__


class PowerSource(db.Model):
    __tablename__ = u'powersource'

    id = db.Column(db.Integer(), primary_key=True, nullable=False)

    # Assigned name given by production.
    # Production name never change but equipment may moved around. Must be careful applying a diagnostic related to a
    # Production because equipment can changed over the years and associate wrong diagnostic
    name = db.Column(db.String(50))

    # EquipmentSerialNum: Equipment ID given by manufacturer.
    # Index key, along with Equipment number to uniquely identify equipment
    serial = db.Column(db.String(50), nullable=False, index=True, unique=True)

    manufacturer = db.Column(
        'manufacturer_id',
        db.ForeignKey("manufacturer.id"),
        nullable=False
    )

    phase_number = db.Column(db.Boolean)  # PhaseNum. 1=single phase, 3=triphase, 6=hexaphase
    frequency = db.Column(db.Integer)  # frequency. Operating frequency
    sealed = db.Column(db.Boolean)  # sealed. Is equipment sealed.
    manufactured = db.Column(db.Integer)  # ManuYear. Year manufactured
    description = db.Column(db.String(50))  # description. Describe the equipment function

    # welded_cover. Is cover welded. Important to planned work as it is much longer to remove cover
    welded_cover = db.Column(db.Boolean)

    def __repr__(self):
        return self.__tablename__


class SwitchGear(db.Model):
    __tablename__ = u'switchgear'

    id = db.Column(db.Integer(), primary_key=True, nullable=False)

    # Assigned name given by production.
    # Production name never change but equipment may moved around. Must be careful applying a diagnostic related to a
    # Production because equipment can changed over the years and associate wrong diagnostic
    name = db.Column(db.String(50))

    # EquipmentSerialNum: Equipment ID given by manufacturer.
    # Index key, along with Equipment number to uniquely identify equipment
    serial = db.Column(db.String(50), nullable=False, index=True, unique=True)

    manufacturer = db.Column(
        'manufacturer_id',
        db.ForeignKey("manufacturer.id"),
        nullable=False
    )

    sealed = db.Column(db.Boolean)  # sealed. Is equipment sealed.
    manufactured = db.Column(db.Integer)  # ManuYear. Year manufactured
    description = db.Column(db.String(50))  # description. Describe the equipment function

    # welded_cover. Is cover welded. Important to planned work as it is much longer to remove cover
    welded_cover = db.Column(db.Boolean)

    def __repr__(self):
        return self.__tablename__


class InductionMachine(db.Model):
    __tablename__ = u'induction_machine'

    id = db.Column(db.Integer(), primary_key=True, nullable=False)

    # Assigned name given by production.
    # Production name never change but equipment may moved around. Must be careful applying a diagnostic related to a
    # Production because equipment can changed over the years and associate wrong diagnostic
    name = db.Column(db.String(50))

    # EquipmentSerialNum: Equipment ID given by manufacturer.
    # Index key, along with Equipment number to uniquely identify equipment
    serial = db.Column(db.String(50), nullable=False, index=True, unique=True)

    manufacturer = db.Column(
        'manufacturer_id',
        db.ForeignKey("manufacturer.id"),
        nullable=False
    )

    sealed = db.Column(db.Boolean)  # sealed. Is equipment sealed.
    manufactured = db.Column(db.Integer)  # ManuYear. Year manufactured
    description = db.Column(db.String(50))  # description. Describe the equipment function

    # welded_cover. Is cover welded. Important to planned work as it is much longer to remove cover
    welded_cover = db.Column(db.Boolean)

    def __repr__(self):
        return self.__tablename__


class SynchronousMachine(db.Model):
    __tablename__ = u'synchronous_machine'

    id = db.Column(db.Integer(), primary_key=True, nullable=False)

    # Assigned name given by production.
    # Production name never change but equipment may moved around. Must be careful applying a diagnostic related to a
    # Production because equipment can changed over the years and associate wrong diagnostic
    name = db.Column(db.String(50))

    # EquipmentSerialNum: Equipment ID given by manufacturer.
    # Index key, along with Equipment number to uniquely identify equipment
    serial = db.Column(db.String(50), nullable=False, index=True, unique=True)

    manufacturer = db.Column(
        'manufacturer_id',
        db.ForeignKey("manufacturer.id"),
        nullable=False
    )

    sealed = db.Column(db.Boolean)  # sealed. Is equipment sealed.
    manufactured = db.Column(db.Integer)  # ManuYear. Year manufactured
    description = db.Column(db.String(50))  # description. Describe the equipment function

    # welded_cover. Is cover welded. Important to planned work as it is much longer to remove cover
    welded_cover = db.Column(db.Boolean)

    def __repr__(self):
        return self.__tablename__


class Rectifier(db.Model):
    __tablename__ = u'rectifier'

    id = db.Column(db.Integer(), primary_key=True, nullable=False)

    # Assigned name given by production.
    # Production name never change but equipment may moved around. Must be careful applying a diagnostic related to a
    # Production because equipment can changed over the years and associate wrong diagnostic
    name = db.Column(db.String(50))

    # EquipmentSerialNum: Equipment ID given by manufacturer.
    # Index key, along with Equipment number to uniquely identify equipment
    serial = db.Column(db.String(50), nullable=False, index=True, unique=True)

    manufacturer = db.Column(
        'manufacturer_id',
        db.ForeignKey("manufacturer.id"),
        nullable=False
    )

    sealed = db.Column(db.Boolean)  # sealed. Is equipment sealed.
    manufactured = db.Column(db.Integer)  # ManuYear. Year manufactured
    description = db.Column(db.String(50))  # description. Describe the equipment function

    # welded_cover. Is cover welded. Important to planned work as it is much longer to remove cover
    welded_cover = db.Column(db.Boolean)

    def __repr__(self):
        return self.__tablename__


class Tank(db.Model):
    __tablename__ = u'tank'

    id = db.Column(db.Integer(), primary_key=True, nullable=False)

    # Assigned name given by production.
    # Production name never change but equipment may moved around. Must be careful applying a diagnostic related to a
    # Production because equipment can changed over the years and associate wrong diagnostic
    name = db.Column(db.String(50))

    # EquipmentSerialNum: Equipment ID given by manufacturer.
    # Index key, along with Equipment number to uniquely identify equipment
    serial = db.Column(db.String(50), nullable=False, index=True, unique=True)

    manufacturer = db.Column(
        'manufacturer_id',
        db.ForeignKey("manufacturer.id"),
        nullable=False
    )

    sealed = db.Column(db.Boolean)  # sealed. Is equipment sealed.
    manufactured = db.Column(db.Integer)  # ManuYear. Year manufactured
    description = db.Column(db.String(50))  # description. Describe the equipment function

    # welded_cover. Is cover welded. Important to planned work as it is much longer to remove cover
    welded_cover = db.Column(db.Boolean)

    def __repr__(self):
        return self.__tablename__


class Switch(db.Model):
    __tablename__ = u'switch'

    id = db.Column(db.Integer(), primary_key=True, nullable=False)

    # Assigned name given by production.
    # Production name never change but equipment may moved around. Must be careful applying a diagnostic related to a
    # Production because equipment can changed over the years and associate wrong diagnostic
    name = db.Column(db.String(50))

    # EquipmentSerialNum: Equipment ID given by manufacturer.
    # Index key, along with Equipment number to uniquely identify equipment
    serial = db.Column(db.String(50), nullable=False, index=True, unique=True)

    manufacturer = db.Column(
        'manufacturer_id',
        db.ForeignKey("manufacturer.id"),
        nullable=False
    )

    sealed = db.Column(db.Boolean)  # sealed. Is equipment sealed.
    manufactured = db.Column(db.Integer)  # ManuYear. Year manufactured
    description = db.Column(db.String(50))  # description. Describe the equipment function

    # welded_cover. Is cover welded. Important to planned work as it is much longer to remove cover
    welded_cover = db.Column(db.Boolean)

    def __repr__(self):
        return self.__tablename__


class Cable(db.Model):
    __tablename__ = u'cable'

    id = db.Column(db.Integer(), primary_key=True, nullable=False)

    # Assigned name given by production.
    # Production name never change but equipment may moved around. Must be careful applying a diagnostic related to a
    # Production because equipment can changed over the years and associate wrong diagnostic
    name = db.Column(db.String(50))

    # EquipmentSerialNum: Equipment ID given by manufacturer.
    # Index key, along with Equipment number to uniquely identify equipment
    serial = db.Column(db.String(50), nullable=False, index=True, unique=True)

    manufacturer = db.Column(
        'manufacturer_id',
        db.ForeignKey("manufacturer.id"),
        nullable=False
    )

    sealed = db.Column(db.Boolean)  # sealed. Is equipment sealed.
    manufactured = db.Column(db.Integer)  # ManuYear. Year manufactured
    description = db.Column(db.String(50))  # description. Describe the equipment function

    def __repr__(self):
        return self.__tablename__


class Equipment(db.Model):
    """
    Equipment.  records all information about the equipment.
    """
    __tablename__ = u'equipment'

    id = db.Column(db.Integer(), primary_key=True, nullable=False)

    # EquipmentNumber: Equipment ID given by equipment owner.
    # Equipment number to uniquely identify equipment
    equipment_number = db.Column(db.Integer, nullable=False, index=True)

    # EquipmentType. Define equipment by a single letter code. T:transformer, D; breaker etc...
    type = db.Column(
        'equipment_type_id',
        db.ForeignKey("equipment_type.id"),
        nullable=False
    )
    eqtype = relation(EquipmentType, backref='equipment')
    # Location. Indicate the named placed where the equipement is.
    # Example, a main transformer is at site Budapest, and at localisation Church street.
    # Its the equivalent of the substation name.
    location = db.Column(
        'location_id',
        db.ForeignKey("location.id"),
        nullable=False
    )

    # EditedInfo. False no changes.  True Indicates the equipment info have changed and should update information
    # while importing data from Lab.
    modifier = db.Column(db.Boolean)

    comments = db.Column(db.Text)  # Comments relation

    # these fields should be related to every components test , it's not a preperty of the device its a test
    visual_date = db.Column(db.DateTime)  # VisualDate.  Date where was done the last visual inspection.
    # VisualInspectionBy. Who made the visual inspection. user relation
    visual_inspection_by = db.Column(
        'visual_inspection_by_id',
        sqla.ForeignKey("users_user.id"),
        nullable=False
    )
    visual_inspection_comments = db.Column(db.Text)  # VisualInspectionComments. Visual inspection comments,

    # test inspection of tap changer or characteristic ?
    nbr_of_tap_change_ltc = db.Column(db.Integer)  # NbrTapChange.  Number of tap change on LTC

    # its a separate norms table for all devices
    norm = db.Column(
        'norm_id',
        db.ForeignKey("norm.id"),
        nullable=False
    )

    # its a state of a transformer / breaker /switch /motor / cable  not
    upstream1 = db.Column(db.String(100))  # Upstream1. Upstream device name
    upstream2 = db.Column(db.String(100))  # Upstream2. Upstream device name
    upstream3 = db.Column(db.String(100))  # Upstream3. Upstream device name
    upstream4 = db.Column(db.String(100))  # Upstream4. Upstream device name
    upstream5 = db.Column(db.String(100))  # Upstream5. Upstream device name

    downstream1 = db.Column(db.String(100))  # Downstream1. Downstream device name
    downstream2 = db.Column(db.String(100))  # Downstream2. Downstream device name
    downstream3 = db.Column(db.String(100))  # Downstream3. Downstream device name
    downstream4 = db.Column(db.String(100))  # Downstream4. Downstream device name
    downstream5 = db.Column(db.String(100))  # Downstream5. Downstream device name

    tie_location = db.Column(db.Boolean)  # TieLocation. Tie device location
    tie_maintenance_state = db.Column(db.Integer)  # TieMaintenanceState. Tie is open or closed during maintenance
    tie_status = db.Column(db.Integer)  # TieAnalysisState.

    phys_position = db.Column(db.Integer)

    # device property for all equipment
    tension4 = db.Column(db.Float(53))  # Voltage4

    # Validated. Indicate equipment info has been validated and can be imported.
    validated = db.Column(db.Boolean)

    # InValidation. If true, equipment information from lab must be updated before get imported into the main DB
    invalidation = db.Column(db.Boolean)

    # PrevSerielNum. If InValidation is true, indicate what was the previous value to retreive the correct equipment
    # information from Lab
    prev_serial_number = db.Column(db.String(50))

    # PrevEquipmentNum.
    # If InValidation is true,
    # indicate what was the previous value to retreive the correct equipment information from Lab
    prev_equipment_number = db.Column(db.String(50))

    # Sibling. Unique Common Index with the other siblings.  If 0 then no sibling
    # id of a similar equipment
    sibling = db.Column(db.Integer)


class NormType(db.Model):
    __tablename__ = u'norm_type'

    id = db.Column(db.Integer(), primary_key=True, nullable=False)
    name = db.Column(db.String(50), index=True)

    # NormPHY.  Fluid physical properties norms
    # NormDissolvedGas. Fluid dissolved gas norms
    # NormFluid# NormFur. Fluid furan norms


class Recommendation(db.Model):
    __tablename__ = u'recommendation'

    id = db.Column(db.Integer(), primary_key=True, nullable=False)
    name = db.Column(db.String(50), index=True)
    code = db.Column(db.String(50), index=True)
    description = db.Column(db.Text)


class GasLevel(db.Model):
    # 0-normal, 1-caution, 2- danger and 3-extreme
    __tablename__ = u'gas_level'

    id = db.Column(db.Integer(), primary_key=True, nullable=False)
    name = db.Column(db.String(50), nullable=False, index=True, unique=True)


class Syringe(db.Model):
    __tablename__ = u'syringe'

    id = db.Column(db.Integer(), primary_key=True, nullable=False)
    serial = db.Column(db.String(50), nullable=False, index=True, unique=True)
    lab = db.Column(
        'lab_id',
        db.ForeignKey('lab.id'),
        nullable=False
    )


class TestReason(db.Model):
    __tablename__ = 'test_reason'

    id = db.Column(db.Integer(), primary_key=True, nullable=False)
    name = db.Column(db.String(50), index=True)


class TestStatus(db.Model):
    __tablename__ = 'test_status'

    id = db.Column(db.Integer(), primary_key=True, nullable=False)
    code = db.Column(db.String(50), index=True)
    name = db.Column(db.String(50), index=True)


class CampaignStatus(db.Model):
    __tablename__ = 'campaign_status'

    id = db.Column(db.Integer(), primary_key=True, nullable=False)
    code = db.Column(db.String(50), index=True)
    name = db.Column(db.String(50), index=True)


class TestSchedule(db.Model):
    """
    Schedule. List work, periodic or not, to be done on individual equipment.
    Tests profile are used to define the work to be done.
    If work are very specific, then use description to detail the work required.
    """

    __tablename__ = u'schedule'

    # EquipmentSerialNum: Equipment ID given by manufacturer.
    # Index key, along with Equipment number to uniquely identify equipment
    # NoSerieEquipe = Column(String(50), primary_key=True,
    #                        nullable=False)
    # EquipmentNumber: Equipment ID given by equipment owner.
    # Index key, along with Equipment number to uniquely identify equipment
    # NoEquipement = Column(String(50), primary_key=True,
    #                       nullable=False)

    equipment = db.Column('equipment_id', sqla.ForeignKey("equipment.id"), nullable=False)

    start_date = db.Column(db.DateTime, primary_key=True, nullable=False)  # StartDate. Starting date of periodic task
    period_years = db.Column(db.Integer, server_default=db.text("0"))  # AnnualPeriod. Number of year between tasks
    period_months = db.Column(db.Integer, server_default=db.text("0"))  # AnnualPeriod. Number of month between tasks
    period_days = db.Column(db.Integer, server_default=db.text("0"))  # AnnualPeriod. Number of days between tasks

    # Worker. Who did the work or was responsible for
    assigned_to = db.Column(
        'assigned_to_id',
        db.ForeignKey("users_user.id"),
        nullable=False
    )

    recurring = db.Column(db.Boolean)  # RecurrentTask. Indicate if task takes place periodically

    # RecallDays. How many days ahead message before work takes place
    notify_before_in_days = db.Column(db.Integer, server_default=db.text("0"))

    description = db.Column(db.Text)  # Description. Describe task

    # prof_fluid = Column(String(25))  # Prof_Fluid. Which fluid tests profile should be used
    # prof_elec = Column(String(25))  # Prof_Elec.  Which electrical tests profile should be used
    # prof_mec = Column(String(25))  # Prof_Mec.  Which mechanical tests profile should be used

    tests_to_perform = db.Column(db.Integer, db.ForeignKey('test_type.id'))
    tests = relationship("TestType")

    order = db.Column(db.Integer, primary_key=True, nullable=False)  # WorkOrderNum


class TestType(db.Model):
    __tablename__ = u'test_type'

    id = db.Column(db.Integer(), primary_key=True, nullable=False)
    name = db.Column(db.String(50), nullable=False, index=True)
    group_id = db.Column(Integer)
    is_group = db.Column(Boolean, nullable=False, default=False)


class TestTypeResultTable(db.Model):
    __tablename__ = u'test_type_result_table'

    id = db.Column(db.Integer(), primary_key=True, nullable=False)
    test_type_id = db.Column(Integer, db.ForeignKey('test_type.id'), nullable=False)
    test_result_table_name = db.Column(String(100), nullable=False)


class TestResult(db.Model):
    """
    TestResults. Contains test results. It is a "tablepart" of campaign
    """
    __tablename__ = 'test_result'

    id = Column(Integer, primary_key=True)
    campaign_id = Column(Integer, ForeignKey("campaign.id"))

    # Reason: Code indicating why the analysis was performed.
    # Mainly use for oil sampling.
    reason = db.Column('test_reason_id', db.ForeignKey("test_reason.id"), nullable=True)

    # Date filled by labratory when analysis was done
    # AnalysisDate: Date the analysis was performed
    date_analyse = db.Column(db.DateTime, index=True)

    # AnalysisType: Analysis type performed on equipment:
    # (insulating fluid  material from equipment , it should be a relation )
    test_type_id = db.Column(db.Integer, index=True)

    # PointCode: Code indicating where the oil sample was done
    sampling_point = db.Column('sampling_point_id', db.ForeignKey("sampling_point.id"), nullable=True)

    # Status: Code indicating the Analysis status.
    # Analysis is a process with several steps and each one has a code.
    status = db.Column('status_id', sqla.ForeignKey("test_status.id"), nullable=True)


class GasketCondition(db.Model):
    """Predefined: (Good, Leak-wet, Leak-flowing, Not-visible, Not appl, See notes)"""
    __tablename__ = 'gasket_condition'

    id = db.Column(Integer, primary_key=True)
    name = db.Column(String(25))


class GasRelay(db.Model):
    """Predefined: (Good, 100cc -1/2 full, 200cc - full, Not appl, See notes)"""
    __tablename__ = 'gas_relay'

    id = db.Column(Integer, primary_key=True)
    name = db.Column(String(25))


class FluidLevel(db.Model):
    """Predefined: (Good, Very Low, Low, High, Unavailable, Not readable, Not-visible, Not appl, See notes)"""
    __tablename__ = 'fluid_level'

    id = db.Column(Integer, primary_key=True)
    name = db.Column(String(25))


class PressureUnit(db.Model):
    """(kPa, psi)"""
    __tablename__ = 'pressure_unit'

    id = db.Column(Integer, primary_key=True)
    name = db.Column(String(25))


class ValveCondition(db.Model):
    """Predefined: (Good, Leak-wet, Leak-flowing, Unavalable, Not-visible, Not appl, See notes)"""
    __tablename__ = 'valve_condition'

    id = db.Column(Integer, primary_key=True)
    name = db.Column(String(25))


class PumpCondition(db.Model):
    """Predefined: (Working, Inoperable, Vibrating, Noisy, Leak-wet, Leak-flowing, Not appl, See notes)"""
    __tablename__ = 'pump_condition'

    id = db.Column(Integer, primary_key=True)
    name = db.Column(String(25))


class OverallCondition(db.Model):
    """Predefined: (Good, Dirty, Leak-wet, Rusted, Not appl. See notes)"""
    __tablename__ = 'overall_condition'

    id = db.Column(Integer, primary_key=True)
    name = db.Column(String(25))


class PaintTypes(db.Model):
    """Predefined: (Good, White, Blue, Brown, Pink, Defective, Unavailable, Not appl., See notes)"""
    __tablename__ = 'paint_types'

    id = db.Column(Integer, primary_key=True)
    name = db.Column(String(25))


class TapCounterStatus(db.Model):
    """Predefined: (Good, Defective, Not readable, Not appl., See notes)"""
    __tablename__ = 'tap_counter_status'

    id = db.Column(Integer, primary_key=True)
    name = db.Column(String(25))


class TapFilterCondition(db.Model):
    """Predefined: (Good, Clogged, Defective, Leak-wet, Leak-flowing, Not appl, See notes)"""
    __tablename__ = 'tap_filter_condition'

    id = db.Column(Integer, primary_key=True)
    name = db.Column(String(25))


class FanCondition(db.Model):
    """Predefined: (Working, Inoperable, Vibrating, Noisy, Not appl, See notes)"""
    __tablename__ = 'fan_condition'

    id = db.Column(Integer, primary_key=True)
    name = db.Column(String(25))


class ConnectionCondition(db.Model):
    """Predefined: (Good, Sealed, Not appl., See notes)"""
    __tablename__ = 'connection_condition'

    id = db.Column(Integer, primary_key=True)
    name = db.Column(String(25))


class FoundationCondition(db.Model):
    """Predefined: (Good, Not to level, Dirty, Damaged, Not appl, See notes)"""
    __tablename__ = 'foundation_condition'

    id = db.Column(Integer, primary_key=True)
    name = db.Column(String(25))


class HeatingCondition(db.Model):
    """Predefined: (Good, Defective Res, Thermal_fault, Not appl., See notes)"""
    __tablename__ = 'heating_condition'

    id = db.Column(Integer, primary_key=True)
    name = db.Column(String(25))


class BushingTest(db.Model):
    """Bushing. Bushing test result"""

    __tablename__ = u'bushing_test'

    id = db.Column(Integer, primary_key=True)
    test_result_id = db.Column(Integer, ForeignKey("test_result.id"))
    h1 = Column(Float(53))  # Remaining are as is
    h2 = Column(Float(53))
    h3 = Column(Float(53))
    hn = Column(Float(53))
    h1c1 = Column(Float(53))
    h2c1 = Column(Float(53))
    h3c1 = Column(Float(53))
    hnc1 = Column(Float(53))
    h1c2 = Column(Float(53))
    h2c2 = Column(Float(53))
    h3c2 = Column(Float(53))
    hnc2 = Column(Float(53))
    x1 = Column(Float(53))
    x2 = Column(Float(53))
    x3 = Column(Float(53))
    xn = Column(Float(53))
    x1c1 = Column(Float(53))
    x2c1 = Column(Float(53))
    x3c1 = Column(Float(53))
    xnc1 = Column(Float(53))
    x1c2 = Column(Float(53))
    x2c2 = Column(Float(53))
    x3c2 = Column(Float(53))
    xnc2 = Column(Float(53))
    t1 = Column(Float(53))
    t2 = Column(Float(53))
    t3 = Column(Float(53))
    tn = Column(Float(53))
    t1c1 = Column(Float(53))
    t2c1 = Column(Float(53))
    t3c1 = Column(Float(53))
    tnc1 = Column(Float(53))
    t1c2 = Column(Float(53))
    t2c2 = Column(Float(53))
    t3c2 = Column(Float(53))
    tnc2 = Column(Float(53))
    temperature = Column(Float(53))
    facteur = Column(Float(53))
    facteur1 = Column(Float(53))
    facteur2 = Column(Float(53))
    q1 = Column(Float(53))
    q2 = Column(Float(53))
    q3 = Column(Float(53))
    qn = Column(Float(53))
    q1c1 = Column(Float(53))
    q2c1 = Column(Float(53))
    q3c1 = Column(Float(53))
    qnc1 = Column(Float(53))
    q1c2 = Column(Float(53))
    q2c2 = Column(Float(53))
    q3c2 = Column(Float(53))
    qnc2 = Column(Float(53))
    facteur3 = Column(Float(53))
    humidity = Column(Float(53))

    test_kv_h1 = Column(Float(53))
    test_kv_h2 = Column(Float(53))
    test_kv_h3 = Column(Float(53))
    test_kv_hn = Column(Float(53))
    test_kv_x1 = Column(Float(53))
    test_kv_x2 = Column(Float(53))
    test_kv_x3 = Column(Float(53))
    test_kv_xn = Column(Float(53))
    test_kv_t1 = Column(Float(53))
    test_kv_t2 = Column(Float(53))
    test_kv_t3 = Column(Float(53))
    test_kv_tn = Column(Float(53))
    test_kv_q1 = Column(Float(53))
    test_kv_q2 = Column(Float(53))
    test_kv_q3 = Column(Float(53))
    test_kv_qn = Column(Float(53))

    test_pfc2_h1 = Column(Float(53))
    test_pfc2_h2 = Column(Float(53))
    test_pfc2_h3 = Column(Float(53))
    test_pfc2_hn = Column(Float(53))
    test_pfc2_x1 = Column(Float(53))
    test_pfc2_x2 = Column(Float(53))
    test_pfc2_x3 = Column(Float(53))
    test_pfc2_xn = Column(Float(53))
    test_pfc2_t1 = Column(Float(53))
    test_pfc2_t2 = Column(Float(53))
    test_pfc2_t3 = Column(Float(53))
    test_pfc2_tn = Column(Float(53))
    test_pfc2_q1 = Column(Float(53))
    test_pfc2_q2 = Column(Float(53))
    test_pfc2_q3 = Column(Float(53))
    test_pfc2_qn = Column(Float(53))
    facteurn = Column(Float(53))
    facteurn1 = Column(Float(53))
    facteurn2 = Column(Float(53))
    facteurn3 = Column(Float(53))


class WindingTest(db.Model):
    """Bushing data and test results"""
    __tablename__ = u'winding_test'

    id = db.Column(Integer, primary_key=True)
    test_result_id = db.Column(Integer, ForeignKey("test_result.id"))
    test_kv1 = Column(Float(53))  # Remaining field names are equivalent
    test_kv2 = Column(Float(53))
    test_kv3 = Column(Float(53))
    test_kv4 = Column(Float(53))
    test_kv5 = Column(Float(53))
    test_kv6 = Column(Float(53))
    test_kv7 = Column(Float(53))
    test_kv8 = Column(Float(53))
    test_kv9 = Column(Float(53))
    test_kv10 = Column(Float(53))
    m_meter1 = Column(Float(53))
    m_meter2 = Column(Float(53))
    m_meter3 = Column(Float(53))
    m_meter4 = Column(Float(53))
    m_meter5 = Column(Float(53))
    m_meter6 = Column(Float(53))
    m_meter7 = Column(Float(53))
    m_meter8 = Column(Float(53))
    m_meter9 = Column(Float(53))
    m_meter10 = Column(Float(53))
    m_multiplier1 = Column(Float(53))
    m_multiplier2 = Column(Float(53))
    m_multiplier3 = Column(Float(53))
    m_multiplier4 = Column(Float(53))
    m_multiplier5 = Column(Float(53))
    m_multiplier6 = Column(Float(53))
    m_multiplier7 = Column(Float(53))
    m_multiplier8 = Column(Float(53))
    m_multiplier9 = Column(Float(53))
    m_multiplier10 = Column(Float(53))
    w_meter1 = Column(Float(53))
    w_meter2 = Column(Float(53))
    w_meter3 = Column(Float(53))
    w_meter4 = Column(Float(53))
    w_meter5 = Column(Float(53))
    w_meter6 = Column(Float(53))
    w_meter7 = Column(Float(53))
    w_meter8 = Column(Float(53))
    w_meter9 = Column(Float(53))
    w_meter10 = Column(Float(53))
    w_multiplier1 = Column(Float(53))
    w_multiplier2 = Column(Float(53))
    w_multiplier3 = Column(Float(53))
    w_multiplier4 = Column(Float(53))
    w_multiplier5 = Column(Float(53))
    w_multiplier6 = Column(Float(53))
    w_multiplier7 = Column(Float(53))
    w_multiplier8 = Column(Float(53))
    w_multiplier9 = Column(Float(53))
    w_multiplier10 = Column(Float(53))
    type_doble = Column(Boolean)
    humidity = Column(Float(53))  # Humidity


class VisualInspectionTest(db.Model):
    """ Visual inspection test result """
    __tablename__ = u'visual_inspection_test'

    id = db.Column(Integer, primary_key=True)
    test_result_id = db.Column(Integer, ForeignKey("test_result.id"))
    notes = db.Column(String(1000))

    # Tank subgroup
    tank_cover_gasket = db.Column(Integer, ForeignKey("gasket_condition.id"))  # TankCoverGasket
    tank_manhole_gasket = db.Column(Integer, ForeignKey("gasket_condition.id"))  # TankManHole
    tank_gas_relay = db.Column(Integer, ForeignKey("gas_relay.id"))  # TankGasRelay
    tank_oil_level = db.Column(Integer, ForeignKey("fluid_level.id"))  # TankLevel
    tank_winding_temp_max = db.Column(Float(10))  # TankWindingTemp
    tank_winding_temp_actual = db.Column(Float(10))  # TankWindingTemp2
    tank_oil_temp_max = db.Column(Float(10))  # TankOilTemp
    tank_Oil_temp_actual = db.Column(Float(10))  # TankOilTemp2
    tank_winding_flag = db.Column(Boolean)  # TankVent
    tank_oil_flag = db.Column(Boolean)  # TankHeatings
    tank_pressure_unit = db.Column(Integer, ForeignKey("pressure_unit.id"))  # TankPressureUnit
    tank_pressure = db.Column(Float(10))  # TankPressure
    tank_overpressure_valve = db.Column(Integer, ForeignKey("valve_condition.id"))  # TankOverPressureValve
    tank_ampling_valve = db.Column(Integer, ForeignKey("valve_condition.id"))  # TankSamplingValve
    tank_oil_pump = db.Column(Integer, ForeignKey("pump_condition.id"))  # TankOilPump
    tank_gas_analyser = db.Column(Float(10))  # TankGasSensor
    tank_overall_condition = db.Column(Integer, ForeignKey("overall_condition.id"))  # TankPaint

    # Expansion/Conservator tank subgroup
    exp_tank_pipe_gasket = db.Column(Integer, ForeignKey("gasket_condition.id"))  # ExpTankPipeGasket
    exp_tank_oil_level = db.Column(Integer, ForeignKey("fluid_level.id"))  # ExpTankLevel
    exp_tank_paint = db.Column(Integer, ForeignKey("paint_types.id"))  # ExpTankPaint
    exp_tank_overall_condition = db.Column(Integer, ForeignKey("overall_condition.id"))  # ExpTankDessicant

    # Bushing + arrester subgroup
    bushing_gasket = db.Column(Integer, ForeignKey("gasket_condition.id"))  # BushingGasket
    bushing_oil_level = db.Column(Integer, ForeignKey("fluid_level.id"))  # BushingLevel
    bushing_overall_condition = db.Column(Integer, ForeignKey("overall_condition.id"))  # BushingCleaniness

    # Tap changer subgroup
    tap_changer_gasket = db.Column(Integer, ForeignKey("gasket_condition.id"))  # TCGasket
    tap_changer_oil_level = db.Column(Integer, ForeignKey("fluid_level.id"))  # TCLevel
    tap_changer_temp_max = db.Column(Float(10))  # TCTemperature
    tap_changer_temp_actual = db.Column(Float(10))  # TCTemperature2
    tap_changer_pressure_max = db.Column(Float(10))  # TCPressure
    tap_changer_pressure_actual = db.Column(Float(10))  # TCPressure2
    tap_changer_pressure_unit = db.Column(Integer, ForeignKey("pressure_unit.id"))  # TCPressureUnit
    tap_changer_tap_position = db.Column(Float(10))  # TCTapPosition
    tap_changer_overpressure_valve = db.Column(Integer, ForeignKey("valve_condition.id"))  # TCOverPressureValve
    tap_changer_ampling_valve = db.Column(Integer, ForeignKey("valve_condition.id"))  # TCSamplingGasket
    tap_changer_operation_counter = db.Column(Integer)  # TCOperationCounter
    tap_changer_counter = db.Column(Integer, ForeignKey("tap_counter_status.id"))  # TCCounter
    tap_changer_filter = db.Column(Integer, ForeignKey("tap_filter_condition.id"))  # TCFilter
    tap_changer_overall_condition = db.Column(Integer, ForeignKey("overall_condition.id"))  # TCPaint

    # Radiator subgroup
    radiator_fan = db.Column(Integer, ForeignKey("fan_condition.id"))  # RadiatorFan
    radiator_gasket = db.Column(Integer, ForeignKey("gasket_condition.id"))  # RadiatorGasket
    radiator_overall_condition = db.Column(Integer, ForeignKey("overall_condition.id"))  # RadiatorGeneralCondition

    # Control cabinet subgroup
    control_cab_connection = db.Column(Integer, ForeignKey("connection_condition.id"))  # PhaseElectricalConnection
    control_cab_heating = db.Column(Integer, ForeignKey("heating_condition.id"))  # SSIndicator
    control_cab_overall_condition = db.Column(Integer, ForeignKey("overall_condition.id"))  # PhaseGeneralCondition

    # Grounding
    grounding_value = db.Column(Float(53))  # GroundingValue
    grounding_connection = db.Column(Integer, ForeignKey("connection_condition.id"))  # GroundingConnection

    # Miscellaneous
    misc_foundation = db.Column(Integer, ForeignKey("foundation_condition.id"))  # foundation_condition
    misc_temp_ambiant = db.Column(Float(53))  # AmbiantTemperature
    misc_load = db.Column(Float(53))  # Load

    # Cuve_Temp_Bob_Decl1 = db.Column(Float(53))#TankTemperatureWindingTrip1
    # Cuve_Temp_Bob_Decl2 = db.Column(Float(53))#TankTemperatureWindingTrip2
    # Cuve_Temp_Bob_Decl3 = db.Column(Float(53))#TankTemperatureWindingTrip4
    # Cuve_Temp_Liq_Decl1 = db.Column(Float(53))#TankTemperatureOilTrip1
    # Cuve_Temp_Liq_Decl2 = db.Column(Float(53))#TankTemperatureOilTrip2
    # Cuve_Temp_Liq_Decl3 = db.Column(Float(53))#TankTemperatureOilTrip3
    # Cuve_TempContact_Bob_Decl1 = db.Column(Boolean)#TankTemperatureContactWindingTrip1
    # Cuve_TempContact_Liq_Decl1 = db.Column(Boolean)#TankTemperatureContactOilTrip11


class InsulationResistanceTest(db.Model):
    __tablename__ = u'insulation_resistance_test'

    id = db.Column(Integer, primary_key=True)
    test_result_id = db.Column(Integer, ForeignKey("test_result.id"))
    test_kv1 = db.Column(Float(53))
    resistance1 = db.Column(Float(53))  # in megohm
    multiplier1 = db.Column(Float(53))
    test_kv2 = db.Column(Float(53))
    resistance2 = db.Column(Float(53))  # in megohm
    multiplier2 = db.Column(Float(53))
    test_kv3 = db.Column(Float(53))
    resistance3 = db.Column(Float(53))  # in megohm
    multiplier3 = db.Column(Float(53))
    test_kv4 = db.Column(Float(53))
    resistance4 = db.Column(Float(53))  # in megohm
    multiplier4 = db.Column(Float(53))
    test_kv5 = db.Column(Float(53))
    resistance5 = db.Column(Float(53))  # in megohm
    multiplier5 = db.Column(Float(53))


class PolymerisationDegreeTest(db.Model):
    """DP. Degree of polymerisation of paper results"""
    __tablename__ = u'polymerisation_degree_test'

    id = db.Column(Integer, primary_key=True)
    test_result_id = db.Column(Integer, ForeignKey("test_result.id"))
    phase_a1 = db.Column(Float(53))  # Remaining are equivalent
    phase_a2 = db.Column(Float(53))
    phase_a3 = db.Column(Float(53))
    phase_b1 = db.Column(Float(53))
    phase_b2 = db.Column(Float(53))
    phase_b3 = db.Column(Float(53))
    phase_c1 = db.Column(Float(53))
    phase_c2 = db.Column(Float(53))
    phase_c3 = db.Column(Float(53))


class TransformerTurnRatioTest(db.Model):
    """TTR.  Transformer Turn Ratio test result
     It could by more then one string of TTR related with one test_result"""
    __tablename__ = u'transformer_turn_ratio_test'

    id = db.Column(Integer, primary_key=True)
    test_result_id = db.Column(Integer, ForeignKey("test_result.id"))
    winding = db.Column(Integer, nullable=False)  # Winding. Winding, primary, secondary, etc. been measured
    tap_position = db.Column(Integer)  # Tap position.
    measured_current1 = db.Column(Float(53))  # Measured ratio of phase 1
    measured_current2 = db.Column(Float(53))  # Measured ratio of phase 2
    measured_current3 = db.Column(Float(53))  # Measured ratio of phase 3
    calculated_current1 = db.Column(Float(53))  # Measured excitation current phase 1
    calculated_current2 = db.Column(Float(53))  # Measured excitation current phase 2
    calculated_current3 = db.Column(Float(53))  # Measured excitation current phase 3
    error1 = db.Column(Float(53))  # Ratio error between calculated and measured on phase 1
    error2 = db.Column(Float(53))  # Ratio error between calculated and measured on phase 2
    error3 = db.Column(Float(53))  # Ratio error between calculated and measured on phase 3
    ratio = db.Column(Float(53))  # Calculated ratio
    select = db.Column(Boolean)  # TapPos. Tap position during normal operation.


class WindingResistanceTest(db.Model):
    """WindingResistanceTest.  Resistance; winding/contact. Winding resistance test results.
    It could by more then one string of winding resistance related with one test_result"""
    __tablename__ = u'winding_resistance_test'

    id = db.Column(Integer, primary_key=True)
    test_result_id = db.Column(Integer, ForeignKey("test_result.id"))
    winding = db.Column(Integer, nullable=False)  # Winding. Winding, primary, secondary, etc. been measured
    tap_position = db.Column(Integer)  # Tap position.
    mesure1 = db.Column(Float(53))  # Measure1
    temp1 = db.Column(Float(53))  # Temperature1. In Celsius
    corr1 = db.Column(Float(53))  # Correction1
    mesure2 = db.Column(Float(53))  # Measure2
    temp2 = db.Column(Float(53))  # Temperature2
    corr2 = db.Column(Float(53))  # Correction2
    mesure3 = db.Column(Float(53))  # Measure3
    temp3 = db.Column(Float(53))  # Temperature3
    corr3 = db.Column(Float(53))  # Correction3


class DissolvedGasTest(db.Model):
    """DissolvedGasTest. Dissolved gas results.
    We should add sub-table to store results to specific online gas sensor,
    such as Kelman acoustic sensor data.
    """
    __tablename__ = u'dissolved_gas_test'

    id = db.Column(Integer, primary_key=True)
    test_result_id = db.Column(Integer, ForeignKey("test_result.id"))
    h2 = db.Column(Float(53))  # H2, Hydrogen (ppm)
    o2 = db.Column(Float(53))  # O2, Oxygen (ppm)
    n2 = db.Column(Float(53))  # N2, Nitrogen (ppm)
    co = db.Column(Float(53))  # CO, Carbon monoxide (ppm)
    ch4 = db.Column(Float(53))  # CH4, Methane (ppm)
    co2 = db.Column(Float(53))  # CO2, Carbon dioxide (ppm)
    c2h2 = db.Column(Float(53))  # C2H2, Acetylene (ppm)
    c2h4 = db.Column(Float(53))  # C2H4, Ethylene (ppm)
    c2h6 = db.Column(Float(53))  # C2H6, Ethane (ppm)
    h2_flag = db.Column(Boolean)  # true if not detectable
    o2_flag = db.Column(Boolean)  # true if not detectable
    n2_flag = db.Column(Boolean)  # true if not detectable
    co_flag = db.Column(Boolean)  # true if not detectable
    ch4_flag = db.Column(Boolean)  # true if not detectable
    co2_flag = db.Column(Boolean)  # true if not detectable
    c2h2_flag = db.Column(Boolean)  # true if not detectable
    c2h4_flag = db.Column(Boolean)  # true if not detectable
    c2h6_flag = db.Column(Boolean)  # true if not detectable
    cap_gaz = db.Column(Float(53))  # GasSensor, value of gas sensor at time of sampling
    content_gaz = db.Column(Float(53))  # TCG. Total Gas content
    # Noise = db.Column(Float(53))             #Kelman acoustic sensor
    # Tzone1 = db.Column(Float(53))            #Kelman acoustic sensor
    # Tzone2 = db.Column(Float(53))            #Kelman acoustic sensor
    # Flow_gas = db.Column(Float(53)           #Kelman acoustic sensor
    # Pcell = db.Column(Float(53))             #Kelman acoustic sensor
    # Toil_hs = db.Column(Float(53)            #Kelman acoustic sensor
    # Tpga = db.Column(Float(53))              #Kelman acoustic sensor
    # RH_pga = db.Column(Float(53)             #Kelman acoustic sensor
    # Normalization_Temperature = db.Column(Float(53))#Kelman acoustic sensor
    # Oil_Pressure = db.Column(Float(53))      #Kelman acoustic sensor
    # Poil_pump = db.Column(Float(53))         #Kelman acoustic sensor
    # Toil_cond = db.Column(Float(53))         #Kelman acoustic sensor
    # Oil_Temperature = db.Column(Float(53))   #Kelman acoustic sensor
    # N_fill = db.Column(Float(53))            #Kelman acoustic sensor
    # N_drain = db.Column(Float(53))           #Kelman acoustic sensor
    # Mic1 = db.Column(Float(53))              #Kelman acoustic sensor
    # Mic2 = db.Column(Float(53))              #Kelman acoustic sensor
    # opt_36 = db.Column(Float(53))            #Kelman acoustic sensor
    # opt_37 = db.Column(Float(53))            #Kelman acoustic sensor
    # opt_38 = db.Column(Float(53))            #Kelman acoustic sensor
    # opt_39 = db.Column(Float(53))            #Kelman acoustic sensor
    # opt_40 = db.Column(Float(53))            #Kelman acoustic sensor
    # opt_41 = db.Column(Float(53))            #Kelman acoustic sensor
    # opt_42 = db.Column(Float(53))            #Kelman acoustic sensor
    # opt_43 = db.Column(Float(53))            #Kelman acoustic sensor
    # opt_44 = db.Column(Float(53))            #Kelman acoustic sensor
    # opt_45 = db.Column(Float(53))            #Kelman acoustic sensor
    # opt_46 = db.Column(Float(53))            #Kelman acoustic sensor
    # opt_47 = db.Column(Float(53))            #Kelman acoustic sensor
    # opt_48 = db.Column(Float(53))            #Kelman acoustic sensor
    # opt_49 = db.Column(Float(53))            #Kelman acoustic sensor
    # opt_50 = db.Column(Float(53))            #Kelman acoustic sensor


class WaterTest(db.Model):
    """Water. Dissolved and free water content in oil test results"""
    __tablename__ = u'water_test'

    id = db.Column(Integer, primary_key=True)
    test_result_id = db.Column(Integer, ForeignKey("test_result.id"))
    water_flag = db.Column(Boolean)  # FreeWater. Indicates if free water is present.
    water = db.Column(Float(53))  # Water. Dissolved water content in the insulated fluid
    remark = db.Column(String(80))  # Remark.


class FuranTest(db.Model):
    """FuranTest.  Furan test results."""
    __tablename__ = u'furan_test'

    id = db.Column(Integer, primary_key=True)
    test_result_id = db.Column(Integer, ForeignKey("test_result.id"))
    hmf = db.Column(Float(53))  # HMF, Hydroxymethylfurfural test in ppm
    fol = db.Column(Float(53))  # FOL, Furfurol
    fal = db.Column(Float(53))  # FAL, Furfural
    acf = db.Column(Float(53))  # ACF, Acetyl Furan
    mef = db.Column(Float(53))  # MEF, Methyl furan
    hmf_flag = db.Column(Boolean)  # HMF flag, true if not detectable
    fol_flag = db.Column(Boolean)  # FOL flag, true if not detectable
    fal_flag = db.Column(Boolean)  # FAL flag, true if not detectable
    acf_flag = db.Column(Boolean)  # ACF flag, true if not detectable
    mef_flag = db.Column(Boolean)  # MEF flag, true if not detectable


class InhibitorTest(db.Model):
    """DPCB results. InhibitorTest. AntioxidantTest"""
    __tablename__ = u'inhibitor_test'

    id = db.Column(Integer, primary_key=True)
    test_result_id = db.Column(Integer, ForeignKey("test_result.id"))
    inhibitor = db.Column(Float(53))  # Remaining are equivalent
    remark = db.Column(String(80))
    inhibitor_flag = db.Column(Boolean)


class PCBTest(db.Model):
    """PCBTest fluid test results"""
    __tablename__ = u'pcb_test'

    id = db.Column(Integer, primary_key=True)
    test_result_id = db.Column(Integer, ForeignKey("test_result.id"))
    aroclor_1242 = db.Column(Float(53))  # Remaining are equivalent
    aroclor_1254 = db.Column(Float(53))
    aroclor_1260 = db.Column(Float(53))
    aroclor_1242_flag = db.Column(Boolean)
    aroclor_1254_flag = db.Column(Boolean)
    aroclor_1260_flag = db.Column(Boolean)
    pcb_total = db.Column(Float(53))
    total_flag = db.Column(Boolean)


class ParticleTest(db.Model):
    """ParticleTest. Number and sized of particles found in the fluid """
    __tablename__ = u'particle_test'

    id = db.Column(Integer, primary_key=True)
    test_result_id = db.Column(Integer, ForeignKey("test_result.id"))
    _2um = db.Column(u'2um', Float(53))  # _2um
    _5um = db.Column(u'5um', Float(53))  # _5um
    _10um = db.Column(u'10um', Float(53))  # _10um
    _15um = db.Column(u'15um', Float(53))  # _15um
    _25um = db.Column(u'25um', Float(53))  # _25um
    _50um = db.Column(u'50um', Float(53))  # _50um
    _100um = db.Column(u'100um', Float(53))  # _100um
    nas1638 = db.Column(Float(53))  # NAS1638
    iso4406_1 = db.Column(Float(53))  # ISO4406_1
    iso4406_2 = db.Column(Float(53))  # ISO4406_2
    iso4406_3 = db.Column(Float(53))  # ISO4406_3


class MetalsInOilTest(db.Model):
    """MetalInFluid. Dissolved metal in insulated fluid test results."""
    __tablename__ = u'metals_in_oil_test'

    id = db.Column(Integer, primary_key=True)
    test_result_id = db.Column(Integer, ForeignKey("test_result.id"))
    iron = db.Column(Float(53))  # Iron
    nickel = db.Column(Float(53))  # Nickel
    aluminium = db.Column(Float(53))  # Aluminium
    copper = db.Column(Float(53))  # Copper
    tin = db.Column(Float(53))  # Tin
    silver = db.Column(Float(53))  # Silver
    lead = db.Column(Float(53))  # Lead
    zinc = db.Column(Float(53))  # Zinc
    arsenic = db.Column(Float(53))
    cadmium = db.Column(Float(53))
    chrome = db.Column(Float(53))
    iron_flag = db.Column(
        Boolean)  # bAluminium. Boolean are used to indicate non detectable concentration rather than use 0
    nickel_flag = db.Column(Boolean)  # bIron
    aluminium_flag = db.Column(Boolean)  # bTin
    copper_flag = db.Column(Boolean)  # bZinc
    tin_flag = db.Column(Boolean)  # bNickel
    silver_flag = db.Column(Boolean)  # bSilver
    lead_flag = db.Column(Boolean)  # bLead
    zinc_flag = db.Column(Boolean)  # bCopperarsenic
    arsenic_flag = db.Column(Boolean)
    cadmium_flag = db.Column(Boolean)
    chrome_flag = db.Column(Boolean)


class FluidTest(db.Model):
    """PHY. Fluid physical properties test results"""
    __tablename__ = u'fluid_test'

    id = db.Column(db.Integer(), primary_key=True, nullable=False)
    test_result_id = db.Column(Integer, ForeignKey("test_result.id"))
    dielectric_1816 = db.Column(Float(53))  # D1816
    dielectric_1816_2 = db.Column(Float(53))  # D1816_2
    dielectric_877 = db.Column(Float(53))  # D877
    dielectric_iec_156 = db.Column(Float(53))  # CEI156
    acidity = db.Column(Float(53))  # Acid
    color = db.Column(Float(53))  # Color
    ift = db.Column(Float(53))  # IFT
    visual = db.Column(String(25))  # Visual
    density = db.Column(Float(53))  # Density
    pf20c = db.Column(Float(53))  # PF20C
    pf100c = db.Column(Float(53))  # PF100C
    sludge = db.Column(Float(53))  # Sludge
    aniline_point = db.Column(Float(53))  # AnilinePoint
    corrosive_sulfur = db.Column(String(25))  # CorrosiveSulfur
    viscosity = db.Column(Float(53))  # Viscosity
    flash_point = db.Column(Float(53))  # FlashPoint
    pour_point = db.Column(Float(53))  # PourPoint
    dielectric_1816_flag = db.Column(Boolean)  # b1816
    dielectric_1816_2_flag = db.Column(Boolean)  # bD1816_2
    dielectric_877_flag = db.Column(Boolean)  # bD877
    dielectric_iec_156_flag = db.Column(Boolean)  # bCEI156


class NormPhysic(db.Model):

    __tablename__ = 'norm_physic'

    id = db.Column(db.Integer(), primary_key=True, nullable=False)
    name = db.Column(db.String(20), nullable=False, index=True)
    equipment_id = Column(db.Integer, nullable=False)
    acid_min = db.Column(db.Float(53))
    acid_max = db.Column(db.Float(53))
    ift_min = db.Column(db.Float(53))
    ift_max = db.Column(db.Float(53))
    d1816_min = db.Column(db.Float(53))
    d1816_max = db.Column(db.Float(53))
    d877_min = db.Column(db.Float(53))
    d877_max = db.Column(db.Float(53))
    color_min = db.Column(db.Float(53))
    color_max = db.Column(db.Float(53))
    density_min = db.Column(db.Float(53))
    density_max = db.Column(db.Float(53))
    pf20_min = db.Column(db.Float(53))
    pf20_max = db.Column(db.Float(53))
    water_min = db.Column(db.Float(53))
    water_max = db.Column(db.Float(53))
    flashpoint_min = db.Column(db.Float(53))
    flashpoint_max = db.Column(db.Float(53))
    pourpoint_min = db.Column(db.Float(53))
    pourpoint_max = db.Column(db.Float(53))
    viscosity_min = db.Column(db.Float(53))
    viscosity_max = db.Column(db.Float(53))
    d1816_2_min = db.Column(db.Float(53))
    d1816_2_max = db.Column(db.Float(53), server_default=db.text("0"))
    p100_min = db.Column(db.Float(53))
    p100_max = db.Column(db.Float(53))
    fluid_type_id = db.Column(db.Integer, server_default=db.text("0"))
    cei156_min = db.Column(db.Integer, server_default=db.text("0"))
    cei156_max = db.Column(db.Integer, server_default=db.text("0"))


class NormGas(db.Model):

    __tablename__ = 'norm_gas'

    id = db.Column(db.Integer(), primary_key=True, nullable=False)
    name = db.Column('name', String(50), index=True)
    condition = db.Column('condition', db.Integer, server_default=db.text("0"))
    h2 = db.Column('h2', db.Float(53), server_default=db.text("0"))
    ch4 = db.Column('ch4', db.Float(53), server_default=db.text("0"))
    c2h2 = db.Column('c2h2', db.Float(53), server_default=db.text("0"))
    c2h4 = db.Column('c2h4', db.Float(53), server_default=db.text("0"))
    c2h6 = db.Column('c2h6', db.Float(53), server_default=db.text("0"))
    co = db.Column('co', db.Float(53), server_default=db.text("0"))
    co2 = db.Column('co2', db.Float(53), server_default=db.text("0"))
    tdcg = db.Column('tdcg', db.Float(53), server_default=db.text("0"))
    fluid_level = db.Column('fluid_level', db.Integer, server_default=db.text("0"))
    #db.Index('norm_gas_condition_key', 'name', 'condition', unique=True)


class NormIsolation(db.Model):

    __tablename__ = 'norm_isolation'

    id = db.Column(db.Integer(), primary_key=True, nullable=False)
    c = db.Column('c', Float(53), server_default=db.text("0"))
    f = db.Column('f', Float(53), server_default=db.text("0"))
    notseal = db.Column('notseal', Float(53), server_default=db.text("0"))
    seal = db.Column('seal', Float(53), server_default=db.text("0"))


class NormFuran(db.Model):

    __tablename__ = 'norm_furan'

    id = db.Column(db.Integer(), primary_key=True, nullable=False)
    name = db.Column(String(50), index=True)
    c1 = db.Column(db.Float(53), server_default=db.text("0"))
    c2 = db.Column(db.Float(53), server_default=db.text("0"))
    c3 = db.Column(db.Float(53), server_default=db.text("0"))
    c4 = db.Column(db.Float(53), server_default=db.text("0"))
