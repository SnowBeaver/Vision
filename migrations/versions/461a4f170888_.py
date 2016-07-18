"""empty message

Revision ID: 461a4f170888
Revises: 164d5b1c6d44
Create Date: 2016-07-18 12:18:47.629234

"""

# revision identifiers, used by Alembic.
revision = '461a4f170888'
down_revision = '164d5b1c6d44'

from alembic import op
import sqlalchemy as sa


def upgrade():
    sql = """
    TRUNCATE public.role CASCADE;
    INSERT INTO public.role (id, name, description) VALUES (1, 'admin', 'admin');
    INSERT INTO public.role (id, name, description) VALUES (2, 'user', 'user');
    INSERT INTO public.role (id, name, description) VALUES (3, 'guest', 'guest');
    INSERT INTO public.role (id, name, description) VALUES (4, 'blogger', 'editor');
    INSERT INTO public.role (id, name, description) VALUES (5, 'user_translator', 'edit diagnostic and translation');
    INSERT INTO public.role (id, name, description) VALUES (6, 'expert', 'Can edit norm tables');
    INSERT INTO public.users_roles (user_id, role_id) VALUES (1, 1);
    INSERT INTO public.users_roles (user_id, role_id) VALUES (2, 1);
    INSERT INTO public.users_roles (user_id, role_id) VALUES (3, 1);
    INSERT INTO public.users_roles (user_id, role_id) VALUES (4, 2);
    INSERT INTO public.users_roles (user_id, role_id) VALUES (2, 4);
    INSERT INTO public.users_roles (user_id, role_id) VALUES (1, 4);
    INSERT INTO public.users_roles (user_id, role_id) VALUES (4, 1);
    INSERT INTO public.users_roles (user_id, role_id) VALUES (3, 1);
    INSERT INTO public.users_roles (user_id, role_id) VALUES (5, 2);
    INSERT INTO public.users_roles (user_id, role_id) VALUES (4, 4);
    INSERT INTO public.users_roles (user_id, role_id) VALUES (3, 4);
    INSERT INTO public.users_roles (user_id, role_id) VALUES (6, 1);
    INSERT INTO public.users_roles (user_id, role_id) VALUES (6, 4);
    INSERT INTO public.users_roles (user_id, role_id) VALUES (7, 2);
    INSERT INTO public.users_roles (user_id, role_id) VALUES (1, 2);
    INSERT INTO public.users_roles (user_id, role_id) VALUES (2, 5);
    INSERT INTO public.users_roles (user_id, role_id) VALUES (7, 1);
    INSERT INTO public.users_roles (user_id, role_id) VALUES (7, 4);
    """
    op.execute(sql=sql)


def downgrade():
    pass
