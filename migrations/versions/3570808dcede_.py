"""empty message

Revision ID: 3570808dcede
Revises: 53a1e7e90a83
Create Date: 2016-10-18 09:32:13.104236

"""

# revision identifiers, used by Alembic.
revision = '3570808dcede'
down_revision = '53a1e7e90a83'

from alembic import op
import sqlalchemy as sa


def upgrade():
    sql = """
            ALTER TABLE public.equipment ADD tie_status INTEGER;
          """
    op.execute(sql=sql)


def downgrade():
    sql = """
            ALTER TABLE public.equipment DROP tie_status;
          """
    op.execute(sql=sql)
