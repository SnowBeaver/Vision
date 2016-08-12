# from flask.ext.wtf import Form
# from wtforms import SelectField, TextField, IntegerField, BooleanField, DateField
# from wtforms.validators import Required, Length, Optional
# from app.diagnostic.models import *
# from app.users.models import User
#
#
# lab_choice = [(x.id, x.name) for x in db.session.query(Lab).all()]
# initials_choice = [(x.id, x.name) for x in db.session.query(User).all()]
# testing_choice = [(x.id, x.name) for x in db.session.query(TestReason).all()]
# point_choice = [(x.id, x.name) for x in db.session.query(SamplingPoint).all()]
# profile_choice = [(x.id, x.selection) for x in db.session.query(ElectricalProfile).all()]
# fluid_choice = [(x.id, x.selection) for x in db.session.query(FluidProfile).all()]
# equipment_choice = [(x.id, x.equipment_number) for x in db.session.query(Equipment).all()]
# contract_choice = [(x.id, x.code) for x in db.session.query(Contract).all()]
#
#
# class LabManagerView(Form):
#     code = IntegerField(u'Code', validators=[Required()])
#     analyser = TextField(u'Lab./On-line analyser', validators=[Required(), Length(min=1, max=256)])
#
#
# class NewCampaignView(Form):
#     position = TextField('Position No.', validators=[Required()])
#     fluid = SelectField('Insulating fluid.', coerce=int, choices=fluid_choice, validators=[Required()])
#     testing = SelectField('Reason for testing', coerce=int, choices=testing_choice, validators=[Required()])
#
#     # fields for Campaign
#     created_by = SelectField('Initials', coerce=int, choices=initials_choice, validators=[Required()])
#     equipment = SelectField('Equipment No.', coerce=int, choices=equipment_choice, validators=[Required()])
#     lab = SelectField('Lab./On-line analyser', coerce=int, choices=lab_choice, validators=[Required()])
#     lab_no = TextField('Lab P.O No.', validators=[Required()]) # must be filled from lab?
#     date = DateField('Acquisition date', validators=[Optional()], format='%m/%d/%Y %H:%M:%S')
#     contract_id = SelectField('Contract No.', coerce=int, choices=contract_choice, validators=[Required()])
#     # NewTestElectrical
#     bushing = BooleanField('Bushing Cap. and PF', validators=[Optional()])
#     winding = BooleanField('Winding Cap. and PF', validators=[Optional()])
#     winding_double = BooleanField('Winding Cap. and PF Doble', validators=[Optional()])
#     insulation = BooleanField('Insulation resistance', validators=[Optional()])
#     visual = BooleanField('Visual inspection', validators=[Optional()])
#     resistance = BooleanField('Resistance; winding/contact', validators=[Optional()])
#     degree = BooleanField('Degree of Polymerization (DP)', validators=[Optional()])
#     turns = BooleanField('Turns ratio test (TTR)', validators=[Optional()])
#     # NewTestFluid
#     # syringe
#     gas = BooleanField('Dissolved gas', validators=[Optional()])
#     water = BooleanField('Water', validators=[Optional()])
#     furans = BooleanField('Furans', validators=[Optional()])
#     inhibitor = BooleanField('Inhibitor', validators=[Optional()])
#     pcb = BooleanField('PCB', validators=[Optional()])
#     qty = IntegerField('Qty', validators=[Optional()])
#     sampling = SelectField('Sampling point', coerce=int, choices=point_choice, validators=[Required()])
#     # jar
#     dielec = BooleanField('Dielec.D1816(1mm)(kV)', validators=[Optional()])
#     acidity = BooleanField('Acidity(D974)', validators=[Optional()])
#     density = BooleanField('Density(D1298)', validators=[Optional()])
#     pcb_jar = BooleanField('PCB', validators=[Optional()])
#     inhibitor_jar = BooleanField('Inhibitor', validators=[Optional()])
#     point = BooleanField('Pour point', validators=[Optional()])
#     dielec_2 = BooleanField('Dielec.D1816(2mm)(kV)', validators=[Optional()])
#     color = BooleanField('Color(D1500)', validators=[Optional()])
#     pf = BooleanField('PF 25C(D924)', validators=[Optional()])
#     particles = BooleanField('Particles', validators=[Optional()])
#     metals = BooleanField('Metals in oil', validators=[Optional()])
#     viscosity = BooleanField('Viscosity', validators=[Optional()])
#     dielec_d = BooleanField('Dielec. D877(kV)', validators=[Optional()])
#     ift = BooleanField('IFT (D971)', validators=[Optional()])
#     pf_100 = BooleanField('PF 100C (D924)', validators=[Optional()])
#     furans_f = BooleanField('Furans', validators=[Optional()])
#     water_w = BooleanField('Water', validators=[Optional()])
#     corr = BooleanField('Corr. sulfur', validators=[Optional()])
#     dielec_i = BooleanField('Dielec. IEC-156(kV)', validators=[Optional()])
#     fluid_visual = BooleanField('Visual (D1524)', validators=[Optional()])
#     qty_jar = IntegerField('Qty', validators=[Optional()])
#     sampling_jar = SelectField('Sampling point', coerce=int, choices=point_choice, validators=[Required()])
#     # vial
#     pcb_vial = BooleanField('PCB', validators=[Optional()])
#     antioxidant = BooleanField('Antioxidant', validators=[Optional()])
#     qty_vial = IntegerField('Qty', validators=[Optional()])
#     sampling_vial = SelectField('Sampling point', coerce=int, choices=point_choice, validators=[Required()])
#     # NewTestProfile(Form):
#     # electrical
#     enable_elc = BooleanField('Enable the selection of test according to profile', validators=[Optional()])
#     profile_elc = SelectField('Profile selection', coerce=int, choices=profile_choice, default=None)
#     description_elc = TextField('Description', validators=[Optional()])
#     # fluid
#     enable_fl = BooleanField('Enable the selection of test according to profile', validators=[Optional()])
#     profile_fl = SelectField('Profile selection', coerce=int, choices=fluid_choice, validators=[Optional()])
#     description_fl = TextField('Description', validators=[Optional()])
