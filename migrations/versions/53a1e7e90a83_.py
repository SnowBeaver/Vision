"""empty message

Revision ID: 53a1e7e90a83
Revises: 2129fab41318
Create Date: 2016-10-17 15:06:18.728176

"""

# revision identifiers, used by Alembic.
revision = '53a1e7e90a83'
down_revision = '2129fab41318'

from alembic import op
import sqlalchemy as sa


def upgrade():
    sql = """
            ALTER TABLE public.equipment DROP tie_maintenance_state;
            ALTER TABLE public.equipment DROP tie_location;
            ALTER TABLE public.equipment RENAME tie_status TO status;
          """
    op.execute(sql=sql)


def downgrade():
    sql = """
            ALTER TABLE public.equipment ADD tie_maintenance_state INTEGER;
            ALTER TABLE public.equipment ADD tie_location BOOLEAN;
            ALTER TABLE public.equipment RENAME status TO tie_status;
          """
    op.execute(sql=sql)
