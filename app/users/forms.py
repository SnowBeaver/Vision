from flask.ext.wtf import Form, RecaptchaField
from wtforms import TextField, PasswordField, BooleanField, ValidationError
from wtforms import TextAreaField, FileField, HiddenField
from wtforms.validators import Required, EqualTo, Email, Length, Optional
from app.users.utils import check_password


class LoginForm(Form):
    email = TextField('Email address', [Required(), Email()])
    password = PasswordField('Password', [Required()])


class RegisterForm(Form):
    name = TextField('Full Name', [Required()])
    email = TextField('Email address', [Required(), Email()])
    password = PasswordField('Password', [Required()])
    confirm = PasswordField('Repeat Password', [
        Required(),
        EqualTo('password', message='Passwords must match')
    ])
    accept_tos = BooleanField('', [Required()])
    # recaptcha = RecaptchaField()

    @staticmethod
    def validate_password(form, field):
        """docstring for validate_password"""
        strength = check_password(field.data)
        if strength not in ['Medium', 'Strong', 'Very Strong']:
            raise ValidationError(
                'Your password is %s, it should be > 6 '
                'chars and contain at least one digit' % strength)


class ForgotForm(Form):
    email = TextField(
        'Please enter your e-mail address', [Required(), Email()])
    # recaptcha = RecaptchaField()


class ProfileForm(Form):

    name = TextField('Full Name', [
        Required(),
        Length(min=4, max=50),
    ])

    mobile = TextField(
        'Mobile',
        description="example: +1 899 3036120")

    website = TextField(
        'Your homepage',
        [
            Optional(),
            Length(min=4, max=250)
        ],
        description="example: http://www.example.com"
    )
    description = TextAreaField(
        'Description',
        [Length(min=4, max=950)],
        description='Describe yourself, bio, interests'
    )

    description = TextAreaField()

    photo = FileField(
        'Your photo',
        description='Upload your photo, best size is 245X245 pixels and of type PNG'
    )
