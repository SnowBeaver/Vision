"""add tooltip and status

Revision ID: 44ca2d5017b8
Revises: 18d0b16020b6
Create Date: 2015-12-12 11:10:40.834008

"""

# revision identifiers, used by Alembic.
revision = '44ca2d5017b8'
down_revision = '37fe3c793660'

from alembic import op
import sqlalchemy as sa


def upgrade():
    pass
    #op.add_column(
    #     'tree_translation'
    #    ,sa.Column('tooltip', sa.TEXT(), autoincrement = False, nullable = True)
    #)
    #op.add_column(
    #     'tree'
    #    ,sa.Column('status' , sa.SmallInteger() , server_default = '1' , autoincrement = False, nullable = True)
    #)

def downgrade():
    op.drop_column('tree_translation' , 'tooltip')
    op.drop_column('tree' , 'status')
