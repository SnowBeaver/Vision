"""empty message

Revision ID: 49636bc02475
Revises: 1f8e09ec3bfe
Create Date: 2017-02-14 09:26:32.656982

"""

# revision identifiers, used by Alembic.
revision = '49636bc02475'
down_revision = '1f8e09ec3bfe'

from alembic import op
import sqlalchemy as sa


def upgrade():
    sql = """
        ALTER TABLE "public".transformer ALTER COLUMN fluid_type_id DROP NOT NULL;
        ALTER TABLE "public".transformer ALTER COLUMN gas_sensor_id DROP NOT NULL;
    """
    op.execute(sql=sql)


def downgrade():
    sql = """
        ALTER TABLE public.transformer ALTER COLUMN fluid_type_id SET NOT NULL;
        ALTER TABLE public.transformer ALTER COLUMN gas_sensor_id SET NOT NULL;
    """
    op.execute(sql=sql)
