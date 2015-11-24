from flask.ext.wtf import Form
from wtforms import SelectField , HiddenField
from wtforms.validators import Required

myChoices = [('home', 'Home'), ('form','Form') , ('text','Text') ]

class TreeView(Form):
    view = SelectField(u'Select View', choices = myChoices, validators = [Required()])
    node_id = HiddenField("tree_id" , validators = [Required()])