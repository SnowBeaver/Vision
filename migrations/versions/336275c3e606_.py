"""empty message

Revision ID: 336275c3e606
Revises: 2129fab41318
Create Date: 2016-10-14 09:01:10.230084

"""

# revision identifiers, used by Alembic.
revision = '336275c3e606'
down_revision = '3570808dcede'

from alembic import op
import sqlalchemy as sa


def upgrade():
    sql = """
        INSERT INTO public.role VALUES (7, 'performer', 'sampling guy');
    """
    op.execute(sql=sql)


def downgrade():
    sql = """
        DELETE FROM public.users_roles WHERE role_id = 7;
        DELETE FROM public.role WHERE id = 7;
    """
    op.execute(sql=sql)

