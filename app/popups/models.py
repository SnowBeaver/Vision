#!/usr/bin/env python
# -*- coding: utf-8 -*-
from sqlalchemy import Index, ForeignKey, Column, Integer, String, Text, DateTime, Boolean, Float
from sqlalchemy.orm import relationship
import sqlalchemy as sqla
from sqlalchemy_i18n import (
    make_translatable
, translation_base
, Translatable
)
from app import db

from sqlalchemy.ext.declarative import declarative_base

BaseManager = declarative_base()


class LabManager(BaseManager):
    __tablename__ = 'lab_manager'

    id = sqla.Column(sqla.Integer, primary_key=True)
    code = sqla.Column(db.Integer)
    analyser = sqla.Column(sqla.Unicode(256))

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
        return "LabManager(id=%r, code=%r, analyser=%r)" % (
            self.id,
            self.code,
            self.analyser
        )


class ElectricalProfile(BaseManager):
    __tablename__ = 'electrical_profile'

    id = sqla.Column(sqla.Integer, primary_key=True)

    selection = sqla.Column(sqla.Unicode(256))
    description = sqla.Column(sqla.Unicode(1024))
    bushing = sqla.Column(sqla.Boolean(False))
    winding = sqla.Column(sqla.Boolean(False))
    winding_double = sqla.Column(sqla.Boolean(False))
    insulation = sqla.Column(sqla.Boolean(False))
    visual = sqla.Column(sqla.Boolean(False))
    resistance = sqla.Column(sqla.Boolean(False))
    degree = sqla.Column(sqla.Boolean(False))
    turns = sqla.Column(sqla.Boolean(False))

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


class FluidProfile(BaseManager):
    __tablename__ = 'fluid_profile'

    id = sqla.Column(sqla.Integer, primary_key=True)

    selection = sqla.Column(sqla.Unicode(256))
    description = sqla.Column(sqla.Unicode(1024))

    # syringe
    gas = sqla.Column(sqla.Boolean(False))
    water = sqla.Column(sqla.Boolean(False))
    furans = sqla.Column(sqla.Boolean(False))
    inhibitor = sqla.Column(sqla.Boolean(False))
    pcb = sqla.Column(sqla.Boolean(False))
    qty = sqla.Column(sqla.Integer)
    sampling = sqla.Column(sqla.Integer)
    # jar
    dielec = sqla.Column(sqla.Boolean(False))
    acidity = sqla.Column(sqla.Boolean(False))
    density = sqla.Column(sqla.Boolean(False))
    pcb_jar = sqla.Column(sqla.Boolean(False))
    inhibitor_jar = sqla.Column(sqla.Boolean(False))
    point = sqla.Column(sqla.Boolean(False))
    dielec_2 = sqla.Column(sqla.Boolean(False))
    color = sqla.Column(sqla.Boolean(False))
    pf = sqla.Column(sqla.Boolean(False))
    particles = sqla.Column(sqla.Boolean(False))
    metals = sqla.Column(sqla.Boolean(False))
    viscosity = sqla.Column(sqla.Boolean(False))
    dielec_d = sqla.Column(sqla.Boolean(False))
    ift = sqla.Column(sqla.Boolean(False))
    pf_100 = sqla.Column(sqla.Boolean(False))
    furans_f = sqla.Column(sqla.Boolean(False))
    water_w = sqla.Column(sqla.Boolean(False))
    corr = sqla.Column(sqla.Boolean(False))
    dielec_i = sqla.Column(sqla.Boolean(False))
    visual = sqla.Column(sqla.Boolean(False))
    qty_jar = sqla.Column(sqla.Integer)
    sampling_jar = sqla.Column(sqla.Integer)
    # vial
    pcb_vial = sqla.Column(sqla.Boolean(False))
    antioxidant = sqla.Column(sqla.Boolean(False))
    qty_vial = sqla.Column(sqla.Integer)
    sampling_vial = sqla.Column(sqla.Integer)

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

#campaign
class Analysis(BaseManager):
    """Analysis:
    Contain current analysis results, who did it and why.
    It also contain analysis management and statuses
    If a test is done on the equipment, then an Analysis record is created
    """

    __tablename__ = u'Analyse'
    __table_args__ = (
        Index(u'Analyse_SamplingDate_EquipmentID_TypeAnal_key'    , u'SamplingDate', u'EquipmentID', u'AnalysisType', u'AnalysisKey', unique=True),
        Index(u'Analyse_EquipmentID_SamplingDate_ClefAnal_key'    , u'EquipmentID', u'SamplingDate', u'AnalysisKey', u'AnalysisType', unique=True),
        Index(u'Analyse_SerieDate'                                , u'EquipmentID', u'SamplingDate', u'AnalysisKey', u'AnalysisType'),
        Index(u'Analyse_AnalysisType_EquipmentID_DatePrelevem_key', u'AnalysisType', u'EquipmentID', u'SamplingDate', u'AnalysisKey', unique=True),
        Index(u'Analyse_EquipmentID_AnalysisType_DatePrelevem_key', u'EquipmentID', u'AnalysisType', u'SamplingDate', u'AnalysisKey', unique=True),
        Index(u'Analyse_DateSerie'                                , u'SamplingDate', u'EquipmentID', u'AnalysisType', u'AnalysisKey'),
        # Index(u'Analyse_Condition_douteuse'                       , u'EquipmentID', u'If_OK', u'SamplingDate'),
        Index(u'Analyse_Condition_douteuse'                       , u'EquipmentID', u'SamplingDate')
    )

    AnalysisKey           = Column(String(50), primary_key=True, index=True) # AnalysisKey: Index key for all tests results
    AnalysisDate          = Column(DateTime, index=True)                     # AnalysisDate: Date the analysis was performed
    AnalysisType          = Column(String(4),index=True)                     # AnalysisType: Analysis type performed on equipment: chemical , electrical etc...
    AnalysisNo            = Column(String(15), index=True)                   # AnalysisNo: Auto increment number assigne when record is created
    MaterialCode          = Column(Integer)                                  # MaterialCode: Define the type of material analysed: copper, sand, paper, etc..
    MotiveCode            = Column(Integer, server_default=sqla.text("0"))   # MotiveCode: Code indicating why the analysis was performed. Mainly use for oil sampling. We should add a table that defines these code.
    PointCode             = Column(Integer, server_default=sqla.text("0"))   # PointCode: Code indicating where the oil sample was done
    PercentRatio          = Column(Boolean)                                  # PercentRatio: Indicate if the TTR was done using Percent ratio or Ratio. Used with TTR table
    OilType               = Column(Integer, server_default=sqla.text("0"))   # OilType: What type of insulating material is used: Mineral oil, Silicone, Vegetable oil, etc..
    Load                  = Column(Float(53))                                # Load: what was the equipment loading at the time of sampling
    SamplingDate          = Column(DateTime, index=True)                     # SamplingDate: Date of sampling
    Remark                = Column(Text)                                     # Remark: Any pertiment remark related to sampling or equipment status
    SampledBy             = Column(String(50))                               # SampledBy: Who did the sampling
    Modify                = Column(Boolean)                                  # Modify: Bolean field to indicate record has changed, and foreign database need updates
    Transmission          = Column(Boolean)                                  # Transmission: Sampled information and material has been sent to the laboratory
    Laboratory            = Column(String(20), index=True)                   # Laboratory: Company that perform the analysis.  Used with Laboratory table
    DateRepair            = Column(DateTime)                                 # DateRepair: What date was repair done last time
    RepairDescription     = Column(Text)                                     # RepairDescription: Describe what was doen during repair
    # If_REM                = Column(String(5))                                # Bolean field that may no longer be required
    # If_OK                 = Column(String(5))                                # Bolean field that may no longer be required
    RecommendationCode    = Column(Integer)                                  # RecommendationCode: Used with Recommendation Table, where a list of recomended action are suggested
    RecommendationWritten = Column(Text)                                     # RecommendationWritten: The analyser gather all his though in this field to explain what should be done in plain that
    DateApplication       = Column(DateTime)                                 # DateApplication: When recommendation was written
    Comments              = Column(Text)                                     # Comments: Any comments other than recommendations.
    AnalysisStateCode     = Column(Integer)                                  # AnalysisStateCode: Code indicating the Analysis status.  Analysis is a process with several steps and each one has a code.
    MWs                   = Column(Float(53), server_default=sqla.text("0")) # MWs: Equipment loading in MWatt
    Temperature           = Column(Float(53))                                # Temperature: Equipement temperature at sampling time
    TestEquipNum          = Column(String(25))                               # TestEquipNum: What is the serial number of the test equipement.  Sometimes it is mandatory to enter the test equipment information so same one can be used next time
    SamplingCardPrint     = Column(Boolean)                                  # SamplingcardPrint: Indicate if the sampling cart need to be printed to fill in the field information
    ContainerNbr          = Column(Float(53), server_default=sqla.text("1")) # ContainerNbr: How many containers are required
    SamplingCardGathered  = Column(Integer)                                  # SamplingCardGathered: Used for printing the card in batch
    GatheredTestType      = Column(String(50))                               # GatheredTestType: Indicates the tests that are grouped for each equipment that need work on
    ContractLabNum        = Column(String(50))                               # ContractLabNum: What is the contract number with laboratory
    SeringeNum            = Column(String(50))                               # SeringeNum: Seringe number as printed
    DataValid             = Column(Integer, server_default=sqla.text("0"))   # DataValid: Need to look into
    Status1               = Column(Integer, server_default=sqla.text("0"))   # Status1: Need to look into
    Status2               = Column(Integer, server_default=sqla.text("0"))   # Status2:	 Need to look into
    ErrorState            = Column(Integer, server_default=sqla.text("0"))   # ErrorState: Need to look into
    ErrorCode             = Column(Integer, server_default=sqla.text("0"))   # ErrorCode: Need to look into
    AmbientAirTemperature = Column(Float(53), server_default=sqla.text("0")) # AmbientAirTemperature: Ambient air temperature at sampling time
    ContractID            = Column(Integer, ForeignKey("contracts.id"))
    EquipmentID           = Column(Integer, ForeignKey("equipment.id"))

    contract  = relationship("Contract", foreign_keys=[ContractID])
    equipment = relationship("Equipment", foreign_keys=[EquipmentID])

class Equipment(BaseManager):
    """
    Class Equipment
    """
    __tablename__ = u'equipment'
    __table_args__ = (
        Index(u'Analysis_EquipmentNumber', u'EquipmentNumber', u'EquipmentSerialNum'),
    )
    id                 = Column(Integer, primary_key=True)
    EquipmentSerialNum = Column(String(50),index=True)              # EquipmentSerialNum: Equipment ID given by manufacturer. Index key, along with Equipment number to uniquely identify equipment
    EquipmentNumber    = Column(String(50))                         # EquipmentNumber: Equipment ID given by equipment owner. Index key, along with Equipment number to uniquely identify equipment

class Contract(BaseManager):
    """
    Class Contract
    """
    __tablename__ = u'contracts'

    id             = Column(Integer, primary_key=True)
    ContractNum    = Column(String(25))                         # ContractNum: What is the contract number within the company
    ContractStatus = Column(Integer)                            # ContractStatus: What is the status of the contract
