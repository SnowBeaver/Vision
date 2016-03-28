from flask.ext.wtf import Form
from wtforms import SelectField , HiddenField , TextField , DateField , IntegerField , FloatField
from wtforms.validators import Required , Length , Optional
from app.pages.models import Pages
from app.tree.storage import get_locale

#myChoices = [ ('' , '...') ] + [ (page.translations[page.get_locale()].title , page.translations[get_locale()].title) for page in Pages.query.order_by(Pages.updated_on.desc()).all() ]
myChoices = [  ]

class MenuViewForm(Form):
    page_view = SelectField(u'Select Page', choices = myChoices, validators = [Required()])
    node_id = HiddenField("node_id" , validators = [Required()])

#front page forms
reason_choice = [ ( 'Preventive' , 'Preventive' ) ,]
stage_choice = [ ( 'Completed' ,'Completed' ) , ]
sampling_choice = [ ( 'Main tank-Bottom', 'Main tank-Bottom') ,  ]
order_status_choice = [ ( 'Paid' , 'Paid' ) , ]
laboratory_choice = [ ('* Aucun' , '* Aucun') , ]


class IdentificatioViewForm(Form):
    analysis_type = TextField('Analysis Type', validators=[ Required() ]  )
    initials = TextField('Initials' , validators=[ Required() ]  )
    acq_date = DateField('Acquisition date' , validators=[ Optional() ] , format = '%m/%d/%Y %H:%M:%S'  )
    reason = SelectField('Reason for analysis' , choices = reason_choice , validators = [Required()] )
    stage = SelectField('Analysis stage' , choices = stage_choice , validators = [Required()] )
    temp = IntegerField('Fluid temp.(*C)', validators=[ Required() ] )
    insulating = IntegerField('Insulating fluid', validators=[ Required() ] )
    contract = TextField('Contract No.' , validators=[ Required() ] )
    grouping = TextField('Test grouping' , validators=[ Required() ])
    sampling = SelectField('Sampling point' , choices = sampling_choice , validators = [Required()] )
    syringe = TextField('Syringe No. / jar No. ', validators=[ Required() ] )
    analysis_no = IntegerField('Analysis No.' , validators=[ Required() ] )
    lab_date = DateField('Lab analysis date' , validators=[ Optional() ] , format = '%m/%d/%Y %H:%M:%S' )
    load_mva = FloatField('Load(MVA)' , validators=[ Required() ]  )
    equipment = TextField('Test equipment' , validators=[ Required() ])
    order_status = SelectField('Lad order status' , choices = order_status_choice , validators = [Required()])
    lab_no = TextField('Lab P.O. No.' , validators=[ Required() ])
    laboratory = SelectField('Laboratory' , choices = laboratory_choice , validators = [Required()])
