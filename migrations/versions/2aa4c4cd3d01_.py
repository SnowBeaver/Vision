"""empty message

Revision ID: 2aa4c4cd3d01
Revises: 3e8fbfd5ea61
Create Date: 2016-08-12 13:03:42.657568

"""

# revision identifiers, used by Alembic.
revision = '2aa4c4cd3d01'
down_revision = '3e8fbfd5ea61'

from alembic import op
import sqlalchemy as sa


def upgrade():
    sql = """
        ALTER TABLE public.electrical_profile RENAME COLUMN selection TO name;
        ALTER TABLE public.fluid_profile RENAME COLUMN selection TO name;
    """

    op.execute(sql=sql)


def downgrade():
    sql = """
        ALTER TABLE public.electrical_profile RENAME COLUMN name TO selection;
        ALTER TABLE public.fluid_profile RENAME COLUMN name TO selection;
    """

    op.execute(sql=sql)
