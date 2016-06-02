from flask.ext.wtf import Form
from wtforms import SelectField, HiddenField, TextField, IntegerField
from wtforms.validators import Required, Length


class LabManagerView(Form):
    code = IntegerField(u'Code', validators=[Required()])
    analyser = TextField(u'Lab./On-line analyser', validators=[Required(), Length(min=1, max=256)])
