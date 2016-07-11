"""empty message

Revision ID: 7d5bac15902
Revises: 23437fae4436
Create Date: 2016-07-11 12:09:38.211945

"""

# revision identifiers, used by Alembic.
revision = '7d5bac15902'
down_revision = '23437fae4436'

from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

def upgrade():
    sql = """
INSERT INTO public.fluid_type (id, name) VALUES (1, 'Mineral oil');
INSERT INTO public.fluid_type (id, name) VALUES (2, 'Silicone') ;
INSERT INTO public.fluid_type (id, name) VALUES (3, 'HWMH');
INSERT INTO public.fluid_type (id, name) VALUES (4, 'PCB');
INSERT INTO public.fluid_type (id, name) VALUES (5, 'Soybean');
INSERT INTO public.fluid_type (id, name) VALUES (6, 'Sunflower');
INSERT INTO public.fluid_type (id, name) VALUES (7, 'Synthetic vegetable');
            """
    op.execute(sql=sql)

def downgrade():
    pass