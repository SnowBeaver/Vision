#!/usr/bin/env python
# -*- coding: utf-8 -*-

from app.api import api as app

app.run(host='0.0.0.0', port=8001, debug=True)