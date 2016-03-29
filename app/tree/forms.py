from flask.ext.wtf import Form
from wtforms import SelectField, HiddenField, TextField
from wtforms.validators import Required, Length

myChoices = [('home', 'Home'), ('form', 'Form'), ('text', 'Text')]


class TreeView(Form):
    view = SelectField(u'Select View', choices=myChoices, validators=[Required()])
    tooltip = TextField(u'Update Tooltip', validators=[Required(), Length(min=1, max=512)])
    node_id = HiddenField("tree_id", validators=[Required()])
