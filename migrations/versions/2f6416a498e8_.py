"""empty message

Revision ID: 2f6416a498e8
Revises: 1f943f976a6c
Create Date: 2016-07-04 14:59:55.002040

"""

# revision identifiers, used by Alembic.
revision = '2f6416a498e8'
down_revision = '1f943f976a6c'

from alembic import op
from sqlalchemy.dialects import postgresql
import sqlalchemy as sa
from datetime import date
from sqlalchemy.sql import table, column
from sqlalchemy import String, Integer, Date

def upgrade():

    op.create_table(
        'norm',
        sa.Column('id', Integer, primary_key=True),
        sa.Column('name', String),
        sa.Column('table_name', String),
        sa.Column('code', String)
    )


    sql = """
INSERT INTO public.norm (id, name, table_name) VALUES (2, 'Norms gas', 'norm_gas');
INSERT INTO public.norm (id, name, table_name) VALUES (3, 'Norms isolation', 'norm_isolation');
INSERT INTO public.norm (id, name, table_name) VALUES (4, 'Norms physic', 'norm_physic');
INSERT INTO public.norm (id, name, table_name) VALUES (1, 'Norms furan ', 'norm_furan');
    """
    op.execute(sql=sql)


def downgrade():
    op.execute(sql='DROP TABLE norm CASCADE;')
