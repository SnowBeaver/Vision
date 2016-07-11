"""empty message

Revision ID: 23b0da054e4e
Revises: 3f56c40057b7
Create Date: 2016-07-08 17:55:36.636702

"""

# revision identifiers, used by Alembic.
revision = '23b0da054e4e'
down_revision = '3f56c40057b7'

from alembic import op
import sqlalchemy as sa
from sqlalchemy import Integer

def upgrade():
    op.add_column(
        'inhibitor_test',
        sa.Column('inhibitor_type_id', Integer)
    )
    # sql = """
    #     ALTER TABLE public.inhibitor_test ADD COLUMN inhibitor_type_id INTEGER;
    #         """
    # op.execute(sql=sql)

def downgrade():
    op.execute(sql='ALTER TABLE public.inhibitor_test DROP COLUMN inhibitor_type_id;')