"""empty message

Revision ID: 2bd864ade540
Revises: 3c5f4068b833
Create Date: 2017-05-03 14:22:55.392226

"""

# revision identifiers, used by Alembic.
revision = '2bd864ade540'
down_revision = '3c5f4068b833'

from alembic import op
import sqlalchemy as sa


def upgrade():
    sql = """
    ALTER TABLE public.users_user ALTER COLUMN name TYPE VARCHAR(300) USING name::VARCHAR(300);
    ALTER TABLE public.equipment ALTER COLUMN serial TYPE VARCHAR(300) USING serial::VARCHAR(300);
    ALTER TABLE public.syringe ALTER COLUMN serial TYPE VARCHAR(300) USING serial::VARCHAR(300);
    ALTER TABLE public.equipment ALTER COLUMN prev_serial_number TYPE VARCHAR(300) USING serial::VARCHAR(300);
"""
    op.execute(sql=sql)


def downgrade():
    sql = """
    ALTER TABLE public.users_user ALTER COLUMN name TYPE VARCHAR(50) USING name::VARCHAR(50);
    ALTER TABLE public.equipment ALTER COLUMN serial TYPE VARCHAR(50) USING serial::VARCHAR(50);
    ALTER TABLE public.syringe ALTER COLUMN serial TYPE VARCHAR(50) USING serial::VARCHAR(50);
    ALTER TABLE public.equipment ALTER COLUMN prev_serial_number TYPE VARCHAR(50) USING serial::VARCHAR(50);
"""
    op.execute(sql=sql)
