"""empty message

Revision ID: 164d5b1c6d44
Revises: 466a2d924677
Create Date: 2016-07-14 17:44:17.651922

"""

# revision identifiers, used by Alembic.
revision = '164d5b1c6d44'
down_revision = '466a2d924677'

from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

def upgrade():
    sql = """
    ALTER TABLE public.polymerisation_degree_test ADD lead_a NUMERIC(4) NULL;
    ALTER TABLE public.polymerisation_degree_test ADD lead_b NUMERIC(4) NULL;
    ALTER TABLE public.polymerisation_degree_test ADD lead_c NUMERIC(4) NULL;
    ALTER TABLE public.polymerisation_degree_test ADD lead_n NUMERIC(4) NULL;
    ALTER TABLE public.polymerisation_degree_test ADD winding NUMERIC(4) NULL;
    """
    op.execute(sql=sql)


def downgrade():
    pass
