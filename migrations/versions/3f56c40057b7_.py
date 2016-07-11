"""empty message

Revision ID: 3f56c40057b7
Revises: 2f6416a498e8
Create Date: 2016-07-08 16:39:42.230191

"""

# revision identifiers, used by Alembic.
revision = '3f56c40057b7'
down_revision = '2f6416a498e8'

from alembic import op
import sqlalchemy as sa
from sqlalchemy import String, Integer

def upgrade():
    op.create_table(
        'inhibitor_type',
        sa.Column('id', Integer, primary_key=True),
        sa.Column('name', String)
    )
    sql = """
    INSERT INTO public.inhibitor_type (id, name) VALUES (1, 'DBP');
    INSERT INTO public.inhibitor_type (id, name) VALUES (2, 'DBPC');
        """
    op.execute(sql=sql)

def downgrade():
    op.execute(sql='DROP TABLE public.inhibitor_type CASCADE;')
