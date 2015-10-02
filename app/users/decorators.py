from functools import wraps
from flask import g, flash, redirect, url_for, request, render_template
from flask import jsonify


def login_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if g.user is None:
            if 'X-Requested-With' in request.headers:
                #'XMLHttpRequest'
                return jsonify(
                    error_code=1,
                    error=u'You need to be logged in.')
            else:
                flash(u'You need to be signed in for this page.')
                return redirect(url_for('users.login', next=request.path))
        if not g.user.is_confirmed():
            return redirect(url_for('users.pleaseconfirm', next=request.path))

        print(g.user.is_confirmed())
        return f(*args, **kwargs)
    return decorated_function


def templated(template=None):
    def decorator(f):
        @wraps(f)
        def decorated_function(*args, **kwargs):
            template_name = template
            if template_name is None:
                template_name = request.endpoint \
                    .replace('.', '/') + '.html'
            ctx = f(*args, **kwargs)
            if ctx is None:
                ctx = {}
            elif not isinstance(ctx, dict):
                return ctx
            return render_template(template_name, **ctx)
        return decorated_function
    return decorator
