"""empty message

Revision ID: c4279bd5651
Revises: 55a13107e248
Create Date: 2016-08-16 17:06:41.193754

"""

# revision identifiers, used by Alembic.
revision = 'c4279bd5651'
down_revision = '55a13107e248'

from alembic import op
import sqlalchemy as sa


def upgrade():
    sql = """
        ALTER TABLE public.fluid_profile ADD shared BOOLEAN NULL;
        ALTER TABLE public.electrical_profile ADD shared BOOLEAN NULL;
    """
    op.execute(sql=sql)


def downgrade():
    sql = """
        ALTER TABLE public.fluid_profile DROP shared;
        ALTER TABLE public.electrical_profile DROP shared;
    """
    op.execute(sql=sql)
