from flask.ext.wtf import Form
from wtforms import SelectField , HiddenField , TextField
from wtforms.validators import Required , Length
from app.pages.models import Pages
from app.tree.storage import get_locale

#myChoices = [ ('' , '...') ] + [ (page.translations[page.get_locale()].title , page.translations[get_locale()].title) for page in Pages.query.order_by(Pages.updated_on.desc()).all() ]
myChoices = [  ]

class MenuViewForm(Form):
    page_view = SelectField(u'Select Page', choices = myChoices, validators = [Required()])
    node_id = HiddenField("node_id" , validators = [Required()])