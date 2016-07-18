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
    """
    op.execute(sql=sql)


def downgrade():
    pass
