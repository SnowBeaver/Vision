"""empty message

Revision ID: 111c39141a8a
Revises: e5fb6e77730
Create Date: 2017-04-04 06:41:28.585267

"""

# revision identifiers, used by Alembic.
revision = '111c39141a8a'
down_revision = 'e5fb6e77730'

from alembic import op
import sqlalchemy as sa


def upgrade():
    sql = """
    -- in test_result tabel, we should rename qty for qty_ser in TestResult
    -- we should rename qty for qty_ser in FluidProfile
    ALTER TABLE public.test_result RENAME COLUMN qty TO qty_ser;
    ALTER TABLE public.fluid_profile RENAME COLUMN qty TO qty_ser;
"""
    op.execute(sql=sql)


def downgrade():
    sql = """
    -- in test_result tabel, we should rename qty for qty_ser in TestResult
    -- we should rename qty for qty_ser in FluidProfile
    ALTER TABLE public.test_result RENAME COLUMN qty_ser TO qty;
    ALTER TABLE public.fluid_profile RENAME COLUMN qty_ser TO qty;
"""
    op.execute(sql=sql)

