#!/usr/bin/env python
# -*- coding: utf-8 -*-

from config import ROOT_DIR

# User role
ADMIN = 0
STAFF = 1
USER = 2
ROLE = {
    ADMIN: 'admin',
    STAFF: 'staff',
    USER: 'user',
}

# user status
INACTIVE = 0
NEW = 1
ACTIVE = 2
STATUS = {
    INACTIVE: 'inactive',
    NEW: 'new',
    ACTIVE: 'active',
}

ALLOWED_IMAGE_EXTENSIONS = set(['png', 'jpg', 'jpeg'])

UPLOAD_FOLDER = ROOT_DIR + '/var/uploads/'
