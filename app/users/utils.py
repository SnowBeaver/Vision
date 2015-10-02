#!/usr/bin/env python
# -*- coding: utf-8 -*-
import re
from app.users import constants as USERS


def allowed_image_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1] in USERS.ALLOWED_IMAGE_EXTENSIONS


def check_password(password):
    strength = ['Blank', 'Very Weak', 'Weak',
                'Medium', 'Strong', 'Very Strong']
    score = 1
    if len(password) < 1:
        return strength[0]

    if len(password) < 4:
        return strength[1]

    if len(password) >= 8:
        score = score + 1

    if len(password) >= 10:
        score = score + 1

    if re.search('\d+', password):
        score = score + 1

    if re.search('[a-z]', password) and re.search('[A-Z]', password):
        score = score + 1

    if re.search('.[!,@,#,$,%,^,&,*,?,_,~,-,£,(,)]', password):
        score = score + 1

    return strength[score]
