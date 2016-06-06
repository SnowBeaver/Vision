#!/usr/bin/env python
# -*- coding: utf-8 -*-
import sqlalchemy as sqla
from sqlalchemy_i18n import (
    make_translatable
, translation_base
, Translatable
)
from app import db
from sqlalchemy.orm import relationship, backref


class Lab(db.Model):
    __tablename__ = 'lab'

    id = db.Column(sqla.Integer, primary_key=True)
    code = db.Column(db.Integer)
    analyser = db.Column(sqla.Unicode(256))

    def __init__(self, code=0, analyser=''):
        self.code = code
        self.analyser = analyser

    def dump(self, _indent=0):
        return "   " * _indent + repr(self) + \
               "\n" + \
               "".join(
                   [c.dump(_indent + 1) for c in self.children.values()]
               )

    def __repr__(self):
        return "Lab(id=%r, code=%r, analyser=%r)" % (
            self.id,
            self.code,
            self.analyser
        )


class ElectricalProfile(db.Model):
    __tablename__ = 'electrical_profile'

    id = db.Column(sqla.Integer, primary_key=True)

    selection = db.Column(sqla.Unicode(256))
    description = db.Column(sqla.Unicode(1024))
    bushing = db.Column(sqla.Boolean(False))
    winding = db.Column(sqla.Boolean(False))
    winding_double = db.Column(sqla.Boolean(False))
    insulation = db.Column(sqla.Boolean(False))
    visual = db.Column(sqla.Boolean(False))
    resistance = db.Column(sqla.Boolean(False))
    degree = db.Column(sqla.Boolean(False))
    turns = db.Column(sqla.Boolean(False))

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


class CampaignStatus(db.Model):

    __tablename__ = 'campaign_status'

    id = db.Column(db.Integer(), primary_key=True, nullable=False)
    code = db.Column(db.String(50), index=True)
    name = db.Column(db.String(50), index=True)


class TestReason(db.Model):

    __tablename__ = 'test_reason'

    id = db.Column(db.Integer(), primary_key=True, nullable=False)
    name = db.Column(db.String(50), index=True)


class Campaign(db.Model):
    """
    Campaign: Contain current analysis results, who did it and why. It also contain analysis management and statuses
    If a test is done on the equipment, then an Analysis record is created
    """
    __tablename__ = u'campaign'

    # __table_args__ = (
    # will be reviewed
    #db.Index(u'campaign_DatePrelevement_NoEquipement_NoSerieEquipe_TypeAnal_key', u'DatePrelevement', u'NoEquipement', u'NoSerieEquipe', u'TypeAnalyse', u'ClefAnalyse', unique=True),
    #db.Index(u'campaign_NoEquipement_NoSerieEquipe_DatePrelevement_ClefAnal_key', u'NoEquipement', u'NoSerieEquipe', u'DatePrelevement', u'ClefAnalyse', u'TypeAnalyse', unique=True),
    #db.Index(u'campaign_SerieDate', u'NoSerieEquipe', u'DatePrelevement', u'ClefAnalyse', u'TypeAnalyse'),
    #db.Index(u'campaign_TypeAnalyse_NoEquipement_NoSerieEquipe_DatePrelevem_key', u'TypeAnalyse', u'NoEquipement', u'NoSerieEquipe', u'DatePrelevement', u'ClefAnalyse', unique=True),
    #db.Index(u'campaign_NoEquipement_NoSerieEquipe_TypeAnalyse_DatePrelevem_key', u'NoEquipement', u'NoSerieEquipe', u'TypeAnalyse', u'DatePrelevement', u'ClefAnalyse', unique=True),
    #db.Index(u'campaign_DateSerie', u'DatePrelevement', u'NoSerieEquipe', u'TypeAnalyse', u'ClefAnalyse'),
    #db.Index(u'campaign_Condition_douteuse', u'NoEquipement', u'NoSerieEquipe', u'If_OK', u'DatePrelevement'),
    #db.Index(u'campaign_NoEquipement', u'NoEquipement', u'NoSerieEquipe')
    # )

    id = db.Column(db.Integer(), primary_key=True, nullable=False)
    #created_by - relation to user table  #user one  (manager group)
    CreatedBy = db.Column(
        'created_by',
        sqla.ForeignKey("users_user.id"),
        nullable=False
    )

    code = db.Column(db.String(50), index=True) 	#AnalysisKey: Index key for all tests results

    # relation
    NoSerieEquipe = db.Column(db.String(50), index=True)                 	#EquipmentSerialNum: Equipment ID given by manufacturer. Index key, along with Equipment number to uniquely identify equipment

    NoEquipement = db.Column(db.String(50))  								#EquipmentNumber: Equipment ID given by equipment owner. Index key, along with Equipment number to uniquely identify equipment

    # date filled by labratory when analysis was done
    DateAnalyse = db.Column(db.DateTime, index=True)						#AnalysisDate: Date the analysis was performed

    #  it should be a relation to equipment field

    Type = db.Column(db.String(4), index=True)						#AnalysisType: Analysis type performed on equipment: (insulating fluid  material from equipment , it should be a relation )

    #MaterialCode: Define the type of material analysed: copper, sand, paper, etc..
    Material = db.Column(
        'material_id',
        db.ForeignKey("material.id"),
        nullable=False
    )

    #AnalysisNo: a number that comes from laboratory generated by themself, user #3 (at the beggining)
    NoAnalyse = db.Column(db.String(15), index=True)

    # Reason: Code indicating why the analysis was performed. Mainly use for oil sampling. We should add a table that defines these code.
    Reason = db.Column(db.Integer, server_default=db.text("0"))	# the list is defined in the campagn

    # comes from  "Fluid as per user"   dropdown  list  when add new test in perception
    # PointCode: Code indicating where the oil sample was done
    PointCode = db.Column(db.Integer, server_default=db.text("0"))


    # comes from equipment
    # PercentRatio: Indicate if the TTR was done using Percent ratio or Ratio. Used with TTR table
    # specific electrical test on winding.  TTR - tranformer term ...
    # true when user decided to use percent ratio for ttr
    PercentRatio = db.Column(db.Boolean)

    # OilType: What type of insulating material is used: Mineral oil, Silicone, Vegetable oil, etc..
    #  comes from equipment
    FluidType = db.Column(
        'fluid_type_id',
        db.ForeignKey("fluid_type.id"),
        nullable=False
    )

    #Load: what was the equipment loading at the time of sampling
    # MW MVR (Equipment can sustain), charge is the actual MVA MW
    Charge = db.Column(db.Float(53))

    # user 1 create the sampling,  date when user 2( guy in the field) starts the work
    # SamplingDate: Date of sampling
    # User 1 adds this value and user 2 has oprtunity to change it (he has access to database)
    DatePrelevement = db.Column(db.DateTime, index=True)

    # Remark: Any pertiment remark related to sampling or equipment status  (can be entered by user1 2 or 3)
    Remark = db.Column(db.Text)

    # SampledBy: Who did the sampling  user 2 relation to users table
    PerformedBy = db.Column(
        'performed_by',
        db.ForeignKey("users_user.id"),
        nullable=False
    )


    # Modify: Bolean field to indicate record has changed, and foreign database need updates
    Modifier = db.Column(db.Boolean)

    # Transmission: Sampled information and material has been sent to the laboratory
    # Toggled by user 2, and sends to lab  (normally it's done buy user 1)
    # user 2 completes the sampling compaign and reassigns record to user 1, transmision is toggled
    # check the screenshot,  it's a file that exported to a laboratory and then received back by email compared checked and
    # user 1 updates data
    Transmission = db.Column(db.Boolean)


    # Laboratory: Company that perform the analysis.
    Lab = db.Column(
        'lab_id',
        db.ForeignKey("lab.id"),
        nullable=False
    )

    # RepairDate: entered by user1 and indicated when repair is done.  What date was repair done last time
    # It's not a part of the campaign, it should be a kind  of type of campaign
    RepairDate = db.Column(db.DateTime)

    # RepairDescription: Describe what was doen during repair, part of repair compaign
    RepairDescription = db.Column(db.Text)

    # Bolean field that may no longer be required
    If_REM = db.Column(db.String(5))
    # Bolean field that may no longer be required
    If_OK = db.Column(db.String(5))


    # generated by user1   uses predefined list of recommandations
    # RecommendationCode: Used with Recommendation Table, where a list of recomended action are suggested
    Recommandation = db.Column(
        'recommendation_id',
        db.ForeignKey("recommendation.id"),
        nullable=True
    )

    # RecommendationWritten: The analyser gather all his though in this field to explain what should be done in plain that
    RecommendationNotes = db.Column(db.Text)	# Text are field Reccommandation
    # relation to user who recomends
    RecommendedBy = db.Column(
        'recommended_by',
        sqla.ForeignKey("users_user.id"),
        nullable=True
    )

    #DateApplication: When recommendation was written
    DateApplication = db.Column(db.DateTime)

    #Comments: Additional comments.
    Comments = db.Column(db.Text)


    # Status: Code indicating the Analysis status.
    # Analysis is a process with several steps and each one has a code.
    Status = db.Column(
        'status_id',
        sqla.ForeignKey("compaign_status.id"),
        nullable=True
    )

    # Same like load, actual MW of the equipment
    #MWs: Equipment loading in MWatt
    MWs = db.Column(db.Float(53), server_default=db.text("0"))

    # Temperature: Equipement temperature at sampling time
    Temperature = db.Column(db.Float(53))

    # TestEquipNum: What is the serial number of the test equipement.
    # Sometimes it is mandatory to enter the test equipment information so same one can be used next time
    Equipment = db.Column(
        'equipment_id',
        db.ForeignKey("equipment.id"),
        nullable=False
    )

    # SamplingcardPrint: Indicate if the sampling cart need to be printed to fill in the field information
    # user 2 has to print small form
    SamplingCardPrint = db.Column(db.Boolean)

    # user 1 enters manually
    # ContractNum: What is the contract number within the company
    ContratNumber = db.Column(db.String(25))

    # ContractStatus: What is the status of the contract
    ContractStatus = db.Column(db.Integer)

    # Containers: How many containers are required
    Containers = db.Column(db.Float(53), server_default=db.text("1"))

    # SamplingCardGathered: Used for printing the card in batch
    SamplingCardGathered = db.Column(db.Integer)

    #GatheredTestType: Indicates the tests that are grouped for each equipment that need work on
    GatheredTestType = db.Column(db.String(50))

    #ContractLabNum: What is the contract number with laboratory
    ContractLabNum = db.Column(db.String(50))

    #SeringeNum: Seringe number as printed
    SeringeNum = db.Column(db.String(50))

    DataValid = db.Column(db.Integer, server_default=db.text("0"))			#DataValid: Need to look into
    Status1 = db.Column(db.Integer, server_default=db.text("0"))				#Status1: Need to look into
    Status2 = db.Column(db.Integer, server_default=db.text("0"))				#Status2:	 Need to look into
    ErrorState = db.Column(db.Integer, server_default=db.text("0"))			#ErrorState: Need to look into
    ErrorCode = db.Column(db.Integer, server_default=db.text("0"))			#ErrorCode: Need to look into

    Ambient_Air_Temperature = db.Column(db.Float(53), server_default=db.text("0"))	#AmbientAirTemperature: Ambient air temperature at sampling time

class FluidProfile(db.Model):
    __tablename__ = 'fluid_profile'

    id = db.Column(sqla.Integer, primary_key=True)

    selection = db.Column(sqla.Unicode(256))
    description = db.Column(sqla.Unicode(1024))

    # syringe
    gas = db.Column(sqla.Boolean(False))
    water = db.Column(sqla.Boolean(False))
    furans = db.Column(sqla.Boolean(False))
    inhibitor = db.Column(sqla.Boolean(False))
    pcb = db.Column(sqla.Boolean(False))
    qty = db.Column(sqla.Integer)
    sampling = db.Column(sqla.Integer)
    # jar
    dielec = db.Column(sqla.Boolean(False))
    acidity = db.Column(sqla.Boolean(False))
    density = db.Column(sqla.Boolean(False))
    pcb_jar = db.Column(sqla.Boolean(False))
    inhibitor_jar = db.Column(sqla.Boolean(False))
    point = db.Column(sqla.Boolean(False))
    dielec_2 = db.Column(sqla.Boolean(False))
    color = db.Column(sqla.Boolean(False))
    pf = db.Column(sqla.Boolean(False))
    particles = db.Column(sqla.Boolean(False))
    metals = db.Column(sqla.Boolean(False))
    viscosity = db.Column(sqla.Boolean(False))
    dielec_d = db.Column(sqla.Boolean(False))
    ift = db.Column(sqla.Boolean(False))
    pf_100 = db.Column(sqla.Boolean(False))
    furans_f = db.Column(sqla.Boolean(False))
    water_w = db.Column(sqla.Boolean(False))
    corr = db.Column(sqla.Boolean(False))
    dielec_i = db.Column(sqla.Boolean(False))
    visual = db.Column(sqla.Boolean(False))
    qty_jar = db.Column(sqla.Integer)
    sampling_jar = db.Column(sqla.Integer)
    # vial
    pcb_vial = db.Column(sqla.Boolean(False))
    antioxidant = db.Column(sqla.Boolean(False))
    qty_vial = db.Column(sqla.Integer)
    sampling_vial = db.Column(sqla.Integer)

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
    Name = db.Column(db.String(50))
    Code = db.Column(db.String(50))


class Material(db.Model):

    __tablename__ = u'material'

    id = db.Column(db.Integer(), primary_key=True, nullable=False)
    Name = db.Column(db.String(50))
    Code = db.Column(db.String(50))


class FluidType(db.Model):

    __tablename__ = u'fluid_type'

    id = db.Column(db.Integer(), primary_key=True, nullable=False)
    Name = db.Column(db.String(50))


class Location(db.Model):
    # PhyPosition GPS location
    __tablename__ = u'location'

    id = db.Column(db.Integer(), primary_key=True, nullable=False)
    # Site. What is the name of the site.
    # Example. A company may have a assembly plants in several cities,
    # therefore each site is named after each city where the plant is.
    Name = db.Column(db.String(50), index=True)  # should be relation


class Manufacturer(db.Model):
    __tablename__ = u'manufacturer'

    id = db.Column(db.Integer(), primary_key=True, nullable=False)
    Name = db.Column(db.String(50))


class GasSensor(db.Model):
    """
    GasSensor. List gas sensor with their respective sensitivity to each measured gas
     """
    __tablename__ = u'gas_sensor'

    id = db.Column(db.Integer(), primary_key=True, nullable=False)

    # Sensor. Sensor commercial name
    Name = db.Column(db.String(50))
    Serial = db.Column(db.String(50), nullable=False, index=True, unique=True)

    Manufacturer = db.Column(
        'manufacturer_id',
        db.ForeignKey("manufacturer.id"),
        nullable=False
    )

    H2 = db.Column(db.Float(53), server_default=db.text("0"))  # Remaining are equivalent
    CH4 = db.Column(db.Float(53), server_default=db.text("0"))
    C2H2 = db.Column(db.Float(53), server_default=db.text("0"))
    C2H4 = db.Column(db.Float(53), server_default=db.text("0"))
    C2H6 = db.Column(db.Float(53), server_default=db.text("0"))
    CO = db.Column(db.Float(53), server_default=db.text("0"))
    CO2 = db.Column(db.Float(53), server_default=db.text("0"))
    O2 = db.Column(db.Float(53), server_default=db.text("0"))
    N2 = db.Column(db.Float(53), server_default=db.text("0"))

    # ppmError. Calculated ppm error by comparing lab ppm from sample with sensor reading at sampling time
    ppmError = db.Column(db.Integer, server_default=db.text("0"))

    # percentError. Calculated error in percent
    percentError = db.Column(db.Float(53), server_default=db.text("0"))

    def __repr__(self):
        return self.__tablename__


class Transformer(db.Model):
    __tablename__ = u'transformer'

    id = db.Column(db.Integer(), primary_key=True, nullable=False)

    # Assigned name given by production.
    # Production name never change but equipment may moved around. Must be careful applying a diagnostic related to a
    # Production because equipment can changed over the years and associate wrong diagnostic
    Name = db.Column(db.String(50))

    # EquipmentSerialNum: Equipment ID given by manufacturer.
    # Index key, along with Equipment number to uniquely identify equipment
    Serial = db.Column(db.String(50), nullable=False, index=True, unique=True)

    Manufacturer = db.Column(
        'manufacturer_id',
        db.ForeignKey("manufacturer.id"),
        nullable=False
    )

    GasSensor = db.Column(
        'gas_sensor_id',
        db.ForeignKey("gas_sensor.id"),
        nullable=False
    )

    Frequency = db.Column(db.Integer)  # Frequency. Operating frequency
    Windings = db.Column(db.Integer)  # Windings. Number of windings in transformer
    Sealed = db.Column(db.Boolean)  # Sealed. Is equipment sealed.
    PhaseNumber = db.Column(db.Boolean)  # PhaseNum. 1=single phase, 3=triphase, 6=hexaphase

    # FluidVolume. Quantity of insulating fluid in equipment in litre
    FluidVolume = db.Column(db.Float(53))

    Description = db.Column(db.String(50))  # Description. Describe the equipment function

    # WeldedCover. Is cover welded. Important to planned work as it is much longer to remove cover
    WeldedCover = db.Column(db.Boolean)

    PrimaryTension = db.Column(db.Float(53))  # Volt1. Primary voltage in kV
    SecondaryTension = db.Column(db.Float(53))  # Volt2. Secondary voltage in kV
    TertiaryTension = db.Column(db.Float(53))  # Volt3. Tertiary voltage in kV

    BasedTransformerPower = db.Column(db.Float(53))  # MVA1. Based transformer power
    FirstCoolingStagePower = db.Column(db.Float(53))  # MVA2. First cooling stage power
    SecondCoolingStagePower = db.Column(db.Float(53))  # MVA3. second cooling stage power

    AutoTransformer = db.Column(db.Boolean)  # Autotransformer. True if it is

    # is a separate device
    PrimaryWindingConnection = db.Column(
        db.Integer)  # PrimConnection. Primary windings connection on a multi phase transformer
    SecondaryWindingConnection = db.Column(
        db.Integer)  # SecConnection. Secondary windings connection on a multi phase transformer
    TertiaryWindingConnection = db.Column(
        db.Integer)  # TertConnection. Tertiary windings connection on a multi phase transformer

    # winding metal is a property of winding
    WindindMetal = db.Column(db.Integer)  # WindingMetal. Copper or aluminium

    BIL1 = db.Column(db.Float(53))  # BIL1. Primary Insulation level in kV
    BIL2 = db.Column(db.Float(53))  # BIL2. Secondary Insulation level in kV
    BIL3 = db.Column(db.Float(53))  # BIL3. Tertiary Insulation level in kV

    StaticShield1 = db.Column(db.Boolean)  # StaticShield1. true with primary electrostatic shield is present
    StaticShield2 = db.Column(db.Boolean)  # StaticShield2. true with secondary electrostatic shield is present
    StaticShield3 = db.Column(db.Boolean)  # StaticShield3. true with tertiary electrostatic shield is present

    # it's tranformer property
    BushingNeutral1 = db.Column(db.Float(53))
    BushingNeutral2 = db.Column(db.Float(53))
    BushingNeutral3 = db.Column(db.Float(53))
    BushingNeutral4 = db.Column(db.Float(53))

    LTC1 = db.Column(db.Float(53))  # LTC1.
    LTC2 = db.Column(db.Float(53))  # LTC2
    LTC3 = db.Column(db.Float(53))  # LTC3

    TemperatureRise = db.Column(db.Integer)  # TemperatureRise. Transformer temperature rise

    # it can be a property and also can be tested
    Impedance1 = db.Column(db.Float(53))  # Impedance1. Impedance at base MVA
    Imp_Base1 = db.Column(db.Float(53))  # ImpBasedMVA1

    Impedance2 = db.Column(db.Float(53))  # Impedance2. Impedance at first forced cooling MVA
    Imp_Base2 = db.Column(db.Float(53))  # ImpBasedMVA2

    MVAForced11 = db.Column(db.Float(53))  # MVAForced11
    MVAForced12 = db.Column(db.Float(53))  # MVAForced12
    MVAForced13 = db.Column(db.Float(53))  # MVAForced13
    MVAForced14 = db.Column(db.Float(53))  # MVAForced14
    MVAForced21 = db.Column(db.Float(53))  # MVAForced21
    MVAForced22 = db.Column(db.Float(53))  # MVAForced22
    MVAForced23 = db.Column(db.Float(53))  # MVAForced23
    MVAForced24 = db.Column(db.Float(53))  # MVAForced24

    Impedance3 = db.Column(db.Float(53))  # Impedance3. Impedance at third forced cooling MVA
    ImpBasedMVA3 = db.Column(db.Float(53))  # ImpBasedMVA3

    # it belongs to transformer , tap voltage, it s a part of the test process
    FormulaRatio2 = db.Column(db.Integer)  # RatioFormula2. Formula used for TTR

    # it belongs to transformer , tap voltage, it s a part of the test process
    FormulaRatio = db.Column(db.Integer)  # RatioFormula. Formula used for TTR
    RatioTag1 = db.Column(db.String(20))  # RatioTag1. Tag use for TTR
    RatioTag2 = db.Column(db.String(20))  # RatioTag2. Tag use for TTR
    RatioTag3 = db.Column(db.String(20))  # RatioTag3. Tag use for TTR
    RatioTag4 = db.Column(db.String(20))  # RatioTag4. Tag use for TTR
    RatioTag5 = db.Column(db.String(20))  # RatioTag5. Tag use for TTR
    RatioTag6 = db.Column(db.String(20))  # RatioTag6. Tag use for TTR

    # FluidType. Insulating fluid used in equipment
    FluidType = db.Column(
        'fluid_type_id',
        db.ForeignKey("fluid_type.id"),
        nullable=False
    )

    # it's a relation to bushing table column "serial number"
    BushingSerial1 = db.Column(db.String(15))  # BushingSerial1.
    BushingSerial2 = db.Column(db.String(15))  # BushingSerial2.
    BushingSerial3 = db.Column(db.String(15))  # BushingSerial3.
    BushingSerial4 = db.Column(db.String(15))  # BushingSerial4.
    BushingSerial5 = db.Column(db.String(15))  # BushingSerial5.
    BushingSerial6 = db.Column(db.String(15))  # BushingSerial6.
    BushingSerial7 = db.Column(db.String(15))  # BushingSerial7.
    BushingSerial8 = db.Column(db.String(15))  # BushingSerial8.
    BushingSerial9 = db.Column(db.String(15))  # BushingSerial9.
    BushingSerial10 = db.Column(db.String(15))  # BushingSerial10.
    BushingSerial11 = db.Column(db.String(15))  # BushingSerial11.
    BushingSerial12 = db.Column(db.String(15))  # BushingSerial12.

    # device property ,  for  transformer
    MVAActual = db.Column(db.Float(53))  # MVAActual. Actual MVA used
    MVARActual = db.Column(db.Float(53))  # MVARActual. Actual MVA used
    MWReserve = db.Column(db.Float(53))  # MWReserve. How much MW in reserve for backup
    MVARReserve = db.Column(db.Float(53))  # MVARReserve. How much MVAR in reserve for backup
    MWUltime = db.Column(db.Float(53))  # MWUltima. How much MW can ultimately be used in emergency
    MVARUltime = db.Column(db.Float(53))  # MVARUltima. How much MVAR can ultimately be used in emergency

    # transformer device property
    MVA4 = db.Column(db.Float(53))  # MVA4

    # it transformer property
    # QuatConnection. Quaternary windings connection on a multi phase transformer
    QuaternaryWindingConnection = db.Column(db.Float(53))

    # tranformer property
    BIL4 = db.Column(db.Float(53))  # BIL4. Tertiary Insulation level in kV
    # tranformer property
    StaticShield4 = db.Column(db.Float(53))  # StaticShield4. true with tertiary electrostatic shield is present

    # tranformer property
    RatioTag7 = db.Column(db.Float(53))  # RatioTag7. Tag use for TTR
    RatioTag8 = db.Column(db.Float(53))  # RatioTag8. Tag use for TTR
    FormulaRatio3 = db.Column(db.Float(53))  # RatioFormula3

    def __repr__(self):
        return self.__tablename__


class Breaker(db.Model):
    __tablename__ = u'breaker'

    id = db.Column(db.Integer(), primary_key=True, nullable=False)

    # Assigned name given by production.
    # Production name never change but equipment may moved around. Must be careful applying a diagnostic related to a
    # Production because equipment can changed over the years and associate wrong diagnostic
    Name = db.Column(db.String(50))

    # EquipmentSerialNum: Equipment ID given by manufacturer.
    # Index key, along with Equipment number to uniquely identify equipment
    Serial = db.Column(db.String(50), nullable=False, index=True, unique=True)

    Manufacturer = db.Column(
        'manufacturer_id',
        db.ForeignKey("manufacturer.id"),
        nullable=False
    )

    PhaseNumber = db.Column(db.Boolean)  # PhaseNum. 1=single phase, 3=triphase, 6=hexaphase
    Frequency = db.Column(db.Integer)  # Frequency. Operating frequency
    Sealed = db.Column(db.Boolean)  # Sealed. Is equipment sealed.
    Manufactured = db.Column(db.Integer)  # ManuYear. Year manufactured
    Description = db.Column(db.String(50))  # Description. Describe the equipment function

    # WeldedCover. Is cover welded. Important to planned work as it is much longer to remove cover
    WeldedCover = db.Column(db.Boolean)

    def __repr__(self):
        return self.__tablename__


class LoadTapChanger(db.Model):
    __tablename__ = u'tap_changer'

    id = db.Column(db.Integer(), primary_key=True, nullable=False)

    # Assigned name given by production.
    # Production name never change but equipment may moved around. Must be careful applying a diagnostic related to a
    # Production because equipment can changed over the years and associate wrong diagnostic
    Name = db.Column(db.String(50))
    Serial = db.Column(db.String(50), nullable=False, index=True, unique=True)

    Manufacturer = db.Column(
        'manufacturer_id',
        db.ForeignKey("manufacturer.id"),
        nullable=False
    )
    Manufactured = db.Column(db.Integer)  # ManuYear. Year manufactured
    Frequency = db.Column(db.Integer)  # Frequency. Operating frequency
    PhaseNumber = db.Column(db.Boolean)  # PhaseNum. 1=single phase, 3=triphase, 6=hexaphase
    Sealed = db.Column(db.Boolean)  # Sealed. Is equipment sealed.
    Description = db.Column(db.String(50))  # Description. Describe the equipment function
    # WeldedCover. Is cover welded. Important to planned work as it is much longer to remove cover
    WeldedCover = db.Column(db.Boolean)

    # it should be a test value
    # Filter. What condition is the filter. We must make this field a selection choice such Good, bad, replace etc..
    Filter = db.Column(db.String(30))

    # so this is test value (inspection)
    Counter = db.Column(db.Integer)  # Counter. Used for load tap changer or arrester (ligthning)

    # tap changer property property
    LTC4 = db.Column(db.Float(53))  # LTC4

    def __repr__(self):
        return self.__tablename__


class Bushing(db.Model):
    __tablename__ = u'bushing'

    id = db.Column(db.Integer(), primary_key=True, nullable=False)
    Type = ['phase', 'Neutral']
    Name = db.Column(db.String(50))
    Serial = db.Column(db.String(50), nullable=False, index=True, unique=True)

    Manufacturer = db.Column(
        'manufacturer_id',
        db.ForeignKey("manufacturer.id"),
        nullable=False
    )
    Manufactured = db.Column(db.Integer)  # ManuYear. Year manufactured
    Frequency = db.Column(db.Integer)  # Frequency. Operating frequency
    PhaseNumber = db.Column(db.Boolean)  # PhaseNum. 1=single phase, 3=triphase, 6=hexaphase
    Description = db.Column(db.String(50))  # Description. Describe the equipment function
    BushingManufacturerH1 = db.Column(db.String(25))  # Bushing manufacturer for H1
    BushingManufacturerH2 = db.Column(db.String(25))  # Bushing manufacturer for H2
    BushingManufacturerH3 = db.Column(db.String(25))  # Bushing manufacturer for H3
    BushingManufacturerHN = db.Column(db.String(25))  # Bushing manufacturer for HN
    BushingManufacturerX1 = db.Column(db.String(25))  # Bushing manufacturer for X1
    BushingManufacturerX2 = db.Column(db.String(25))  # Bushing manufacturer for X2
    BushingManufacturerX3 = db.Column(db.String(25))  # Bushing manufacturer for X3
    BushingManufacturerXN = db.Column(db.String(25))  # Bushing manufacturer for XN
    BushingManufacturerT1 = db.Column(db.String(25))  # Bushing manufacturer for T1
    BushingManufacturerT2 = db.Column(db.String(25))  # Bushing manufacturer for T2
    BushingManufacturerT3 = db.Column(db.String(25))  # Bushing manufacturer for T3
    BushingManufacturerTN = db.Column(db.String(25))  # Bushing manufacturer for TN
    BushingManufacturerQ1 = db.Column(db.String(25))  # Bushing manufacturer for Q1
    BushingManufacturerQ2 = db.Column(db.String(25))  # Bushing manufacturer for Q2
    BushingManufacturerQ3 = db.Column(db.String(25))  # Bushing manufacturer for Q3
    BushingManufacturerQN = db.Column(db.String(25))  # Bushing manufacturer for QN
    BushingType_H = db.Column(db.String(25))  # Bushing type for H
    BushingType_HN = db.Column(db.String(25))  # Bushing type for HN
    BushingType_X = db.Column(db.String(25))  # Bushing type for X
    BushingType_XN = db.Column(db.String(25))  # Bushing type for XN
    BushingType_T = db.Column(db.String(25))  # Bushing type for T
    BushingType_TN = db.Column(db.String(25))  # Bushing type for TN
    BushingType_Q = db.Column(db.String(25))  # Bushing type for Q
    BushingType_QN = db.Column(db.String(25))  # Bushing type for QN

    def __repr__(self):
        return self.__tablename__


class Upstream(db.Model):
    __tablename__ = u'upstream'

    id = db.Column(db.Integer(), primary_key=True, nullable=False)
    Name = db.Column(db.String(50), index=True)


class Downstream(db.Model):
    __tablename__ = u'downstream'

    id = db.Column(db.Integer(), primary_key=True, nullable=False)
    Name = db.Column(db.String(50), index=True)


class NeutralResistance(db.Model):

    __tablename__ = u'resistance'

    id = db.Column(db.Integer(), primary_key=True, nullable=False)
    Name = db.Column(db.String(50))
    Serial = db.Column(db.String(50), nullable=False, index=True, unique=True)

    Manufacturer = db.Column(
        'manufacturer_id',
        db.ForeignKey("manufacturer.id"),
        nullable=False
    )
    # its a separate device should be splitted into another table
    NeutralResistance = db.Column(db.Float(53))   # NeutralResistance1.
    NeutralResistance1 = db.Column(db.Float(53))  # NeutralResistance1.
    NeutralResistance0 = db.Column(db.Boolean)    # NeutralResistance0
    NeutralResistance2 = db.Column(db.Float(53))  # NeutralResistance2
    NeutralResistance3 = db.Column(db.Float(53))  # NeutralResistance3

    # it's status or mode  of a resistance
    NeutralResistanceOpen1 = db.Column(db.Boolean)  # NeutralResistanceOpen1
    NeutralResistanceOpen2 = db.Column(db.Boolean)  # NeutralResistanceOpen2
    # property of resistence, it's status
    NeutralResistanceOpen3 = db.Column(db.Float(53))  # NeutralResistanceOpen3

    def __repr__(self):
        return self.__tablename__


class AirCircuitBreaker(db.Model):

    __tablename__ = u'air_breaker'

    id = db.Column(db.Integer(), primary_key=True, nullable=False)

    # Assigned name given by production.
    # Production name never change but equipment may moved around. Must be careful applying a diagnostic related to a
    # Production because equipment can changed over the years and associate wrong diagnostic
    Name = db.Column(db.String(50))

    # EquipmentSerialNum: Equipment ID given by manufacturer.
    # Index key, along with Equipment number to uniquely identify equipment
    Serial = db.Column(db.String(50), nullable=False, index=True, unique=True)

    Manufacturer = db.Column(
        'manufacturer_id',
        db.ForeignKey("manufacturer.id"),
        nullable=False
    )

    PhaseNumber = db.Column(db.Boolean)  # PhaseNum. 1=single phase, 3=triphase, 6=hexaphase
    Frequency = db.Column(db.Integer)  # Frequency. Operating frequency
    Sealed = db.Column(db.Boolean)  # Sealed. Is equipment sealed.
    Manufactured = db.Column(db.Integer)  # ManuYear. Year manufactured
    Description = db.Column(db.String(50))  # Description. Describe the equipment function

    # WeldedCover. Is cover welded. Important to planned work as it is much longer to remove cover
    WeldedCover = db.Column(db.Boolean)

    def __repr__(self):
        return self.__tablename__


class Capacitor(db.Model):

    __tablename__ = u'capacitor'

    id = db.Column(db.Integer(), primary_key=True, nullable=False)

    # Assigned name given by production.
    # Production name never change but equipment may moved around. Must be careful applying a diagnostic related to a
    # Production because equipment can changed over the years and associate wrong diagnostic
    Name = db.Column(db.String(50))

    # EquipmentSerialNum: Equipment ID given by manufacturer.
    # Index key, along with Equipment number to uniquely identify equipment
    Serial = db.Column(db.String(50), nullable=False, index=True, unique=True)

    Manufacturer = db.Column(
        'manufacturer_id',
        db.ForeignKey("manufacturer.id"),
        nullable=False
    )

    PhaseNumber = db.Column(db.Boolean)  # PhaseNum. 1=single phase, 3=triphase, 6=hexaphase
    Frequency = db.Column(db.Integer)  # Frequency. Operating frequency
    Sealed = db.Column(db.Boolean)  # Sealed. Is equipment sealed.
    Manufactured = db.Column(db.Integer)  # ManuYear. Year manufactured
    Description = db.Column(db.String(50))  # Description. Describe the equipment function

    # WeldedCover. Is cover welded. Important to planned work as it is much longer to remove cover
    WeldedCover = db.Column(db.Boolean)

    def __repr__(self):
        return self.__tablename__


class PowerSource(db.Model):
    __tablename__ = u'powersource'

    id = db.Column(db.Integer(), primary_key=True, nullable=False)

    # Assigned name given by production.
    # Production name never change but equipment may moved around. Must be careful applying a diagnostic related to a
    # Production because equipment can changed over the years and associate wrong diagnostic
    Name = db.Column(db.String(50))

    # EquipmentSerialNum: Equipment ID given by manufacturer.
    # Index key, along with Equipment number to uniquely identify equipment
    Serial = db.Column(db.String(50), nullable=False, index=True, unique=True)

    Manufacturer = db.Column(
        'manufacturer_id',
        db.ForeignKey("manufacturer.id"),
        nullable=False
    )

    PhaseNumber = db.Column(db.Boolean)  # PhaseNum. 1=single phase, 3=triphase, 6=hexaphase
    Frequency = db.Column(db.Integer)  # Frequency. Operating frequency
    Sealed = db.Column(db.Boolean)  # Sealed. Is equipment sealed.
    Manufactured = db.Column(db.Integer)  # ManuYear. Year manufactured
    Description = db.Column(db.String(50))  # Description. Describe the equipment function

    # WeldedCover. Is cover welded. Important to planned work as it is much longer to remove cover
    WeldedCover = db.Column(db.Boolean)

    def __repr__(self):
        return self.__tablename__


class SwitchGear(db.Model):
    __tablename__ = u'switchgear'

    id = db.Column(db.Integer(), primary_key=True, nullable=False)

    # Assigned name given by production.
    # Production name never change but equipment may moved around. Must be careful applying a diagnostic related to a
    # Production because equipment can changed over the years and associate wrong diagnostic
    Name = db.Column(db.String(50))

    # EquipmentSerialNum: Equipment ID given by manufacturer.
    # Index key, along with Equipment number to uniquely identify equipment
    Serial = db.Column(db.String(50), nullable=False, index=True, unique=True)

    Manufacturer = db.Column(
        'manufacturer_id',
        db.ForeignKey("manufacturer.id"),
        nullable=False
    )

    Sealed = db.Column(db.Boolean)  # Sealed. Is equipment sealed.
    Manufactured = db.Column(db.Integer)  # ManuYear. Year manufactured
    Description = db.Column(db.String(50))  # Description. Describe the equipment function

    # WeldedCover. Is cover welded. Important to planned work as it is much longer to remove cover
    WeldedCover = db.Column(db.Boolean)

    def __repr__(self):
        return self.__tablename__


class InductionMachine(db.Model):
    __tablename__ = u'induction_machine'

    id = db.Column(db.Integer(), primary_key=True, nullable=False)

    # Assigned name given by production.
    # Production name never change but equipment may moved around. Must be careful applying a diagnostic related to a
    # Production because equipment can changed over the years and associate wrong diagnostic
    Name = db.Column(db.String(50))

    # EquipmentSerialNum: Equipment ID given by manufacturer.
    # Index key, along with Equipment number to uniquely identify equipment
    Serial = db.Column(db.String(50), nullable=False, index=True, unique=True)

    Manufacturer = db.Column(
        'manufacturer_id',
        db.ForeignKey("manufacturer.id"),
        nullable=False
    )

    Sealed = db.Column(db.Boolean)  # Sealed. Is equipment sealed.
    Manufactured = db.Column(db.Integer)  # ManuYear. Year manufactured
    Description = db.Column(db.String(50))  # Description. Describe the equipment function

    # WeldedCover. Is cover welded. Important to planned work as it is much longer to remove cover
    WeldedCover = db.Column(db.Boolean)

    def __repr__(self):
        return self.__tablename__

class SynchronousMachine(db.Model):
    __tablename__ = u'synchronous_machine'

    id = db.Column(db.Integer(), primary_key=True, nullable=False)

    # Assigned name given by production.
    # Production name never change but equipment may moved around. Must be careful applying a diagnostic related to a
    # Production because equipment can changed over the years and associate wrong diagnostic
    Name = db.Column(db.String(50))

    # EquipmentSerialNum: Equipment ID given by manufacturer.
    # Index key, along with Equipment number to uniquely identify equipment
    Serial = db.Column(db.String(50), nullable=False, index=True, unique=True)

    Manufacturer = db.Column(
        'manufacturer_id',
        db.ForeignKey("manufacturer.id"),
        nullable=False
    )

    Sealed = db.Column(db.Boolean)  # Sealed. Is equipment sealed.
    Manufactured = db.Column(db.Integer)  # ManuYear. Year manufactured
    Description = db.Column(db.String(50))  # Description. Describe the equipment function

    # WeldedCover. Is cover welded. Important to planned work as it is much longer to remove cover
    WeldedCover = db.Column(db.Boolean)

    def __repr__(self):
        return self.__tablename__


class Rectifier(db.Model):
    __tablename__ = u'rectifier'

    id = db.Column(db.Integer(), primary_key=True, nullable=False)

    # Assigned name given by production.
    # Production name never change but equipment may moved around. Must be careful applying a diagnostic related to a
    # Production because equipment can changed over the years and associate wrong diagnostic
    Name = db.Column(db.String(50))

    # EquipmentSerialNum: Equipment ID given by manufacturer.
    # Index key, along with Equipment number to uniquely identify equipment
    Serial = db.Column(db.String(50), nullable=False, index=True, unique=True)

    Manufacturer = db.Column(
        'manufacturer_id',
        db.ForeignKey("manufacturer.id"),
        nullable=False
    )

    Sealed = db.Column(db.Boolean)  # Sealed. Is equipment sealed.
    Manufactured = db.Column(db.Integer)  # ManuYear. Year manufactured
    Description = db.Column(db.String(50))  # Description. Describe the equipment function

    # WeldedCover. Is cover welded. Important to planned work as it is much longer to remove cover
    WeldedCover = db.Column(db.Boolean)

    def __repr__(self):
        return self.__tablename__

class Tank(db.Model):
    __tablename__ = u'tank'

    id = db.Column(db.Integer(), primary_key=True, nullable=False)

    # Assigned name given by production.
    # Production name never change but equipment may moved around. Must be careful applying a diagnostic related to a
    # Production because equipment can changed over the years and associate wrong diagnostic
    Name = db.Column(db.String(50))

    # EquipmentSerialNum: Equipment ID given by manufacturer.
    # Index key, along with Equipment number to uniquely identify equipment
    Serial = db.Column(db.String(50), nullable=False, index=True, unique=True)

    Manufacturer = db.Column(
        'manufacturer_id',
        db.ForeignKey("manufacturer.id"),
        nullable=False
    )

    Sealed = db.Column(db.Boolean)  # Sealed. Is equipment sealed.
    Manufactured = db.Column(db.Integer)  # ManuYear. Year manufactured
    Description = db.Column(db.String(50))  # Description. Describe the equipment function

    # WeldedCover. Is cover welded. Important to planned work as it is much longer to remove cover
    WeldedCover = db.Column(db.Boolean)

    def __repr__(self):
        return self.__tablename__

class Switch(db.Model):
    __tablename__ = u'switch'

    id = db.Column(db.Integer(), primary_key=True, nullable=False)

    # Assigned name given by production.
    # Production name never change but equipment may moved around. Must be careful applying a diagnostic related to a
    # Production because equipment can changed over the years and associate wrong diagnostic
    Name = db.Column(db.String(50))

    # EquipmentSerialNum: Equipment ID given by manufacturer.
    # Index key, along with Equipment number to uniquely identify equipment
    Serial = db.Column(db.String(50), nullable=False, index=True, unique=True)

    Manufacturer = db.Column(
        'manufacturer_id',
        db.ForeignKey("manufacturer.id"),
        nullable=False
    )

    Sealed = db.Column(db.Boolean)  # Sealed. Is equipment sealed.
    Manufactured = db.Column(db.Integer)  # ManuYear. Year manufactured
    Description = db.Column(db.String(50))  # Description. Describe the equipment function

    # WeldedCover. Is cover welded. Important to planned work as it is much longer to remove cover
    WeldedCover = db.Column(db.Boolean)

    def __repr__(self):
        return self.__tablename__


class Cable(db.Model):

    __tablename__ = u'cable'

    id = db.Column(db.Integer(), primary_key=True, nullable=False)

    # Assigned name given by production.
    # Production name never change but equipment may moved around. Must be careful applying a diagnostic related to a
    # Production because equipment can changed over the years and associate wrong diagnostic
    Name = db.Column(db.String(50))

    # EquipmentSerialNum: Equipment ID given by manufacturer.
    # Index key, along with Equipment number to uniquely identify equipment
    Serial = db.Column(db.String(50), nullable=False, index=True, unique=True)

    Manufacturer = db.Column(
        'manufacturer_id',
        db.ForeignKey("manufacturer.id"),
        nullable=False
    )

    Sealed = db.Column(db.Boolean)  # Sealed. Is equipment sealed.
    Manufactured = db.Column(db.Integer)  # ManuYear. Year manufactured
    Description = db.Column(db.String(50))  # Description. Describe the equipment function

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
    Code = db.Column(db.Integer, nullable=False, index=True)

    # EquipmentType. Define equipment by a single letter code. T:transformer, D; breaker etc...
    Type = db.Column(
        'equipment_type_id',
        db.ForeignKey("equipment_type.id"),
        nullable=False
    )

    # Location. Indicate the named placed where the equipement is.
    # Example, a main transformer is at site Budapest, and at localisation Church street.
    # Its the equivalent of the substation name.
    Location = db.Column(
        'location_id',
        db.ForeignKey("location.id"),
        nullable=False
    )

    # EditedInfo. False no changes.  True Indicates the equipment info have changed and should update information
    # while importing data from Lab.
    Modifier = db.Column(db.Boolean)

    Comments = db.Column(db.Text)  # Comments relation

    # these fields should be related to every components test , it's not a preperty of the device its a test
    VisualDate = db.Column(db.DateTime)  # VisualDate.  Date where was done the last visual inspection.
    # VisualInspectionBy. Who made the visual inspection. user relation
    VisualInspectionBy = db.Column(
        'visual_inspection_by',
        sqla.ForeignKey("users_user.id"),
        nullable=False
    )
    VisualInspectionComments = db.Column(db.Text)  # VisualInspectionComments. Visual inspection comments,

    # test inspection of tap changer or characteristic ?
    NbrOfTapChangeLTC = db.Column(db.Integer)  # NbrTapChange.  Number of tap change on LTC

    # its a separate norms table for all devices
    Norm = db.Column(
        'norm_id',
        db.ForeignKey("norm.id"),
        nullable=False
    )

    # its a state of a transformer / breaker /switch /motor / cable  not
    Upstream1 = db.Column(db.String(100))  # Upstream1. Upstream device name
    Upstream2 = db.Column(db.String(100))  # Upstream2. Upstream device name
    Upstream3 = db.Column(db.String(100))  # Upstream3. Upstream device name
    Upstream4 = db.Column(db.String(100))  # Upstream4. Upstream device name
    Upstream5 = db.Column(db.String(100))  # Upstream5. Upstream device name

    Downstream1 = db.Column(db.String(100))  # Downstream1. Downstream device name
    Downstream2 = db.Column(db.String(100))  # Downstream2. Downstream device name
    Downstream3 = db.Column(db.String(100))  # Downstream3. Downstream device name
    Downstream4 = db.Column(db.String(100))  # Downstream4. Downstream device name
    Downstream5 = db.Column(db.String(100))  # Downstream5. Downstream device name

    TieLocation = db.Column(db.Boolean)          # TieLocation. Tie device location
    TieMaintenanceState = db.Column(db.Integer)  # TieMaintenanceState. Tie is open or closed during maintenance
    TieStatus = db.Column(db.Integer)     # TieAnalysisState.

    PhysPosition = db.Column(db.Integer)

    # device property for all equipment
    Tension4 = db.Column(db.Float(53))  # Voltage4

    # Validated. Indicate equipment info has been validated and can be imported.
    Validated = db.Column(db.Boolean)

    # InValidation. If true, equipment information from lab must be updated before get imported into the main DB
    InValidation = db.Column(db.Boolean)

    # PrevSerielNum. If InValidation is true, indicate what was the previous value to retreive the correct equipment
    # information from Lab
    PrevSerialNumber = db.Column(db.String(50))

    # PrevEquipmentNum. If InValidation is true, indicate what was the previous value to retreive the correct equipment information from Lab
    PrevEquipmentNumber = db.Column(db.String(50))

    # Sibling. Unique Common Index with the other siblings.  If 0 then no sibling
    # id of a similar equipment
    Sibling = db.Column(db.Integer)


class NormType(db.Model):
    __tablename__ = u'norm_type'

    id = db.Column(db.Integer(), primary_key=True, nullable=False)
    Name = db.Column(db.String(50), index=True)

    # NormPHY.  Fluid physical properties norms
    # NormDissolvedGas. Fluid dissolved gas norms
    # NormFluid# NormFur. Fluid furan norms


class Recommendation(db.Model):
    __tablename__ = u'recommendation'

    id = db.Column(db.Integer(), primary_key=True, nullable=False)
    Name = db.Column(db.String(50), index=True)
    Code = db.Column(db.String(50), index=True)
    Description = db.Column(db.Text)


class Norm(db.Model):
    __tablename__ = u'norm'

    id = db.Column(db.Integer(), primary_key=True, nullable=False)
    Name = db.Column(db.String(50), index=True)
    NormType = db.Column(
        'norm_type_id',
        db.ForeignKey("norm_type.id"),
        nullable=False
    )

    # NormPHY.  Fluid physical properties norms
    # NormDissolvedGas. Fluid dissolved gas norms
    # NormFluid# NormFur. Fluid furan norms


class NormParameter(db.Model):
    __tablename__ = u'norm_parameter'

    id = db.Column(db.Integer(), primary_key=True, nullable=False)
    Name = db.Column(db.String(50), index=True)


class NormParameterValue(db.Model):

    __tablename__ = u'norm_parameter_value'

    id = db.Column(db.Integer(), primary_key=True, nullable=False)
    parameter = db.Column(
        'param_id',
        db.ForeignKey('norm_parameter.id'),
        nullable=False
    )

    Norm = db.Column(
        'norm_id',
        db.ForeignKey("norm.id"),
        nullable=False
    )

    equipment_type_id = db.Column(
        'equipment_type_id',
        db.ForeignKey('equipment_type.id'),
        nullable=False
    )

    value_type = db.Column(db.String(50), index=True)
    value = db.Column(db.String(50), index=True)


