"""tag to pages

Revision ID: 4bf2996e07b3
Revises: 44ca2d5017b8
Create Date: 2016-01-05 19:07:09.186318

"""

# revision identifiers, used by Alembic.
revision = '4bf2996e07b3'
down_revision = '44ca2d5017b8'

from alembic import op
import sqlalchemy as sa


def upgrade():
    op.add_column(
         'pages'
        ,sa.Column('tag', sa.Unicode(256), nullable = True)
    )

def downgrade():
    op.drop_column('pages' , 'tag')