"""empty message

Revision ID: 3c5f4068b833
Revises: 111c39141a8a
Create Date: 2017-04-04 09:10:45.718344

"""

# revision identifiers, used by Alembic.
revision = '3c5f4068b833'
down_revision = '111c39141a8a'

from alembic import op
import sqlalchemy as sa


def upgrade():
    sql = """
    -- based_transformerp_ower' - those are correct, except for a typo on the first one
    ALTER TABLE "public".transformer RENAME COLUMN based_transformerp_ower TO based_transformer_power;

    -- mva4: should really be third_cooling_stage_power = Puissance4
    ALTER TABLE public.transformer RENAME COLUMN mva4 TO third_cooling_stage_power;

    -- We should add this field (open) to switch table
    ALTER TABLE public.switch ADD COLUMN open BOOLEAN NULL;
"""
    op.execute(sql=sql)


def downgrade():
    sql = """
    -- based_transformerp_ower' - those are correct, except for a typo on the first one
    ALTER TABLE "public".transformer RENAME COLUMN based_transformer_power TO based_transformerp_ower;

    -- mva4: should really be third_cooling_stage_power = Puissance4
    ALTER TABLE public.transformer RENAME COLUMN third_cooling_stage_power TO mva4;

    -- We should add this field (open) to switch table
    ALTER TABLE public.switch DROP COLUMN open;
"""
    op.execute(sql=sql)
