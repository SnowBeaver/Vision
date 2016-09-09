"""empty message

Revision ID: 1d36ba7a913e
Revises: 176da92988af
Create Date: 2016-09-05 12:10:33.512820

"""

# revision identifiers, used by Alembic.
revision = '1d36ba7a913e'
down_revision = '176da92988af'

from alembic import op
import sqlalchemy as sa


def upgrade():
    sql = """
        ALTER TABLE public.visual_inspection_test RENAME COLUMN tank_ampling_valve_id TO tank_sampling_valve_id;
        ALTER TABLE public.visual_inspection_test RENAME COLUMN tap_changer_ampling_valve_id TO tap_changer_sampling_valve_id;
        ALTER TABLE public.visual_inspection_test DROP CONSTRAINT visual_inspection_test_tank_ampling_valve_id_fkey;
        ALTER TABLE public.visual_inspection_test DROP CONSTRAINT visual_inspection_test_tap_changer_ampling_valve_id_fkey;
        ALTER TABLE public.visual_inspection_test
        ADD CONSTRAINT visual_inspection_test_tank_sampling_valve_id_fkey
        FOREIGN KEY (tank_sampling_valve_id) REFERENCES valve_condition (id);
        ALTER TABLE public.visual_inspection_test
        ADD CONSTRAINT visual_inspection_test_tap_changer_sampling_valve_id_fkey
        FOREIGN KEY (tap_changer_sampling_valve_id) REFERENCES valve_condition (id);
    """
    op.execute(sql=sql)


def downgrade():
    sql = """
        ALTER TABLE public.visual_inspection_test RENAME COLUMN tank_sampling_valve_id TO tank_ampling_valve_id;
        ALTER TABLE public.visual_inspection_test RENAME COLUMN tap_changer_sampling_valve_id TO tap_changer_ampling_valve_id;
        ALTER TABLE public.visual_inspection_test DROP CONSTRAINT visual_inspection_test_tank_sampling_valve_id_fkey;
        ALTER TABLE public.visual_inspection_test DROP CONSTRAINT visual_inspection_test_tap_changer_sampling_valve_id_fkey;
        ALTER TABLE public.visual_inspection_test
        ADD CONSTRAINT visual_inspection_test_tank_ampling_valve_id_fkey
        FOREIGN KEY (tank_ampling_valve_id) REFERENCES valve_condition (id);
        ALTER TABLE public.visual_inspection_test
        ADD CONSTRAINT visual_inspection_test_tap_changer_ampling_valve_id_fkey
        FOREIGN KEY (tap_changer_ampling_valve_id) REFERENCES valve_condition (id);
    """
    op.execute(sql=sql)
