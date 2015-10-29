# check if current user has write options
def _is_blogger(current_user,blogger_permission):
    authenticated = current_user.is_authenticated() if \
        callable(current_user.is_authenticated) \
        else current_user.is_authenticated
    is_blogger = authenticated and \
        blogger_permission.require().can()
    return is_blogger
