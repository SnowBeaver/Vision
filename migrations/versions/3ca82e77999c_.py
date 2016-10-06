"""empty message

Revision ID: 3ca82e77999c
Revises: 3dd3d934ec37
Create Date: 2016-10-06 07:45:06.359156

"""

# revision identifiers, used by Alembic.
revision = '3ca82e77999c'
down_revision = '3dd3d934ec37'

from alembic import op
import sqlalchemy as sa


def upgrade():
    sql = """
        UPDATE public.diagnosis SET id = 3 WHERE name = 'Other diagnosis (specify)';
    """
    op.execute(sql=sql)


def downgrade():
    pass
