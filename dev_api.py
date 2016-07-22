#!/usr/bin/env python
# -*- coding: utf-8 -*-

from app.api import api as app

app.run(host='dev.vision.local', port=8001, debug=True)