from flask.ext.wtf import Form
from wtforms import SelectField, HiddenField, TextField, DateField, IntegerField, FloatField, TextAreaField, \
    BooleanField
from wtforms.validators import Required, Length, Optional
from app.pages.models import Pages
from app.tree.storage import get_locale

# myChoices = [ ('' , '...') ] + [ (page.translations[page.get_locale()].title , page.translations[get_locale()].title) for page in Pages.query.order_by(Pages.updated_on.desc()).all() ]
myChoices = []


class MenuViewForm(Form):
    page_view = SelectField(u'Select Page', choices=myChoices, validators=[Required()])
    node_id = HiddenField("node_id", validators=[Required()])


# front page forms
reason_choice = [('Preventive', 'Preventive'), ]
stage_choice = [('Completed', 'Completed'), ]
sampling_choice = [('Main tank-Bottom', 'Main tank-Bottom'), ]
order_status_choice = [('Paid', 'Paid'), ]
laboratory_choice = [('* Aucun', '* Aucun'), ]

class IdentificationViewForm(Form):
    analysis_type = TextField('Analysis Type', validators=[Required()])
    initials = TextField('Initials', validators=[Required()])
    acq_date = DateField('Acquisition date', validators=[Optional()], format='%m/%d/%Y %H:%M A')
    reason = SelectField('Reason for analysis', choices=reason_choice, validators=[Required()])
    stage = SelectField('Analysis stage', choices=stage_choice, validators=[Required()])
    temp = IntegerField('Fluid temp.(*C)', validators=[Required()])
    insulating = IntegerField('Insulating fluid', validators=[Required()])
    contract = TextField('Contract No.', validators=[Required()])
    grouping = TextField('Test grouping', validators=[Required()])
    sampling = SelectField('Sampling point', choices=sampling_choice, validators=[Required()])
    syringe = TextField('Syringe No. / jar No. ', validators=[Required()])
    analysis_no = IntegerField('Analysis No.', validators=[Required()])
    lab_date = DateField('Lab analysis date', validators=[Optional()], format='%m/%d/%Y %H:%M:%S')
    load_mva = FloatField('Load(MVA)', validators=[Required()])
    equipment = TextField('Test equipment', validators=[Required()])
    order_status = SelectField('Lad order status', choices=order_status_choice, validators=[Required()])
    lab_no = TextField('Lab P.O. No.', validators=[Required()])
    laboratory = SelectField('Laboratory', choices=laboratory_choice, validators=[Required()])


class TestRepairViewForm(Form):
    comments = TextAreaField('Test or sampling comments', validators=[Required()])
    notes = TextAreaField('Notes on equipment: repairs, additions, etc.', validators=[Required()])
    sampled = TextField('Sampled by', validators=[Required()])
    date = DateField('Date of repairs or degassing', validators=[Optional()], format='%m/%d/%Y %H:%M A')


class RecordsDiagnosticViewForm(Form):
    diagnosis = TextAreaField('Diagnosis', validators=[Required()])
    recommendations = TextAreaField('Recommendations', validators=[Required()])
    predefined_diag = TextField('Predefined diagnosis', validators=[Required()])
    predefined_rec = TextField('Predefined Recommendations', validators=[Required()])
    date = DateField('Date of recommendation', validators=[Optional()], format='%m/%d/%Y')


class EquipmentDiagnosisViewForm(Form):
    diagnosis = TextAreaField('Equipment diagnosis', validators=[Required()])
    indicator = TextField('Condition indicator', validators=[Required()])
    condition = BooleanField('Equipment in questionable condition or out of service', validators=[Optional()])

# Create new test
lab_choice = [ ( 'Lab-1' , 'Lab-1' ) , ( 'Lab-2' , 'Lab-2' ) ]
testing_choice = [ ( 'Preventive' , 'Preventive' ) ,( 'Reception' , 'Reception' ) ,( 'Commissioning' , 'Commissioning' ) ,( 'Study' , 'Study' )
    ,( 'Fault' , 'Fault' ) ,( 'After degassing' , 'After degassing' ) ,( 'After Fuller earth' , 'After Fuller earth' ) ,( 'New oil' , 'New oil' )
    ,( 'Replace the oil' , 'Replace the oil' ) ,( 'Other' , 'Other' ) ]


point_choice = [ ( 'Main tank-Bottom' , 'Main tank-Bottom' ) ,( 'Undetermined' , 'Undetermined' ) ,( 'Main tank-Top' , 'Main tank-Top' )
                 ,( 'Gas relay' , 'Gas relay' ) ,( 'Other' , 'Other' ) ]

profile_choice = [ ( 'EEVAL' , 'EEVAL' ) ,  ]

class NewTestDescription(Form):
    equipment = TextField('Equipment No.' , validators=[ Required() ] )
    position = TextField('Position No.' , validators=[ Required() ] )
    fluid = TextField('Insulating fluid.' , validators=[ Required() ] )
    lab = SelectField('Lab./On-line analyser' , choices = lab_choice , validators = [Required()] )
    contract = TextField('Contract No.' , validators=[ Required() ] )
    lab_no = TextField('Lab P.O No.' , validators=[ Required() ] )
    date = DateField('Acquisition date' , validators=[ Optional() ] , format = '%m/%d/%Y %H:%M:%S' )
    testing = SelectField('Reason for testing' , choices = testing_choice , validators = [Required()] )
    initials = TextField('Initials' , validators=[ Required() ] )

class NewTestElectrical(Form):
    bushing = BooleanField( 'Bushing Cap. and PF' , validators=[ Optional() ])
    winding = BooleanField( 'Winding Cap. and PF' , validators=[ Optional() ])
    winding_doble = BooleanField( 'Winding Cap. and PF Doble' , validators=[ Optional() ])
    insulation = BooleanField( 'Insulation resistance' , validators=[ Optional() ])
    visual = BooleanField( 'Visual inspection' , validators=[ Optional() ])
    resistance = BooleanField( 'Resistance; winding/contact' , validators=[ Optional() ])
    degree = BooleanField( 'Degree of Polymerization (DP)' , validators=[ Optional() ])
    turns = BooleanField( 'Turns ratio test (TTR)' , validators=[ Optional() ])

class NewTestFluid(Form):
    # syringe
    gas = BooleanField( 'Dissolved gas' , validators=[ Optional() ])
    water = BooleanField( 'Water' , validators=[ Optional() ])
    furans = BooleanField( 'Furans' , validators=[ Optional() ])
    inhibitor = BooleanField( 'Inhibitor' , validators=[ Optional() ])
    pcb = BooleanField( 'PCB' , validators=[ Optional() ])
    qty = IntegerField('Qty' , validators=[ Optional() ])
    sampling = SelectField('Sampling point' , choices = point_choice , validators = [Required()] )
    # jar
    dielec = BooleanField( 'Dielec.D1816(1mm)(kV)' , validators=[ Optional() ])
    acidity = BooleanField( 'Acidity(D974)' , validators=[ Optional() ])
    pcb_jar = BooleanField( 'PCB' , validators=[ Optional() ])
    inhibitor_jar = BooleanField( 'Inhibitor' , validators=[ Optional() ])
    point = BooleanField( 'Pour point' , validators=[ Optional() ])
    dielec_2 = BooleanField( 'Dielec.D1816(2mm)(kV)' , validators=[ Optional() ])
    color = BooleanField( 'Color(D1500)' , validators=[ Optional() ])
    pf = BooleanField( 'PF 25C(D924)' , validators=[ Optional() ])
    particles = BooleanField( 'Particles' , validators=[ Optional() ])
    metals = BooleanField( 'Metals in oil' , validators=[ Optional() ])
    viscosity = BooleanField( 'Viscosity' , validators=[ Optional() ])
    dielec_d = BooleanField( 'Dielec. D877(kV)' , validators=[ Optional() ])
    ift = BooleanField( 'IFT (D971)' , validators=[ Optional() ])
    pf_100 = BooleanField( 'PF 100C (D924)' , validators=[ Optional() ])
    furans_f = BooleanField( 'Furans' , validators=[ Optional() ])
    water_w = BooleanField( 'Water' , validators=[ Optional() ])
    corr = BooleanField( 'Corr. sulfur' , validators=[ Optional() ])
    dielec_i = BooleanField( 'Dielec. IEC-156(kV)' , validators=[ Optional() ])
    visual = BooleanField( 'Visual (D1524)' , validators=[ Optional() ])
    qty_jar = IntegerField('Qty' , validators=[ Optional() ])
    ampling_jar = SelectField('Sampling point' , choices = point_choice , validators = [Required()] )
    # vial
    pcb_vial = BooleanField( 'PCB' , validators=[ Optional() ])
    antioxydant = BooleanField( 'Antioxidant' , validators=[ Optional() ])
    qty_vial = IntegerField('Qty' , validators=[ Optional() ])
    ampling_vial = SelectField('Sampling point' , choices = point_choice , validators = [Required()] )

class NewTestProfile(Form):
    # electrical
    enable_elc = BooleanField( 'Enable the selection of test according to profile' , validators=[ Optional() ])
    profile_elc = SelectField('Profile selection' , choices = profile_choice , validators = [Required()] )
    description_elc = TextField('Description' , validators=[ Required() ] )
    # fluid
    enable_fl = BooleanField( 'Enable the selection of test according to profile' , validators=[ Optional() ])
    profile_fl = SelectField('Profile selection' , choices = profile_choice , validators = [Required()] )
    description_fl = TextField('Description' , validators=[ Required() ] )
