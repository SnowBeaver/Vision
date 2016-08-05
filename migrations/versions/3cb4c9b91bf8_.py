"""empty message

Revision ID: 3cb4c9b91bf8
Revises: 3127729f48db
Create Date: 2016-08-05 17:34:46.024363

"""

# revision identifiers, used by Alembic.
revision = '3cb4c9b91bf8'
down_revision = '3127729f48db'

from alembic import op
import sqlalchemy as sa


def upgrade():
    sql = """
        ALTER TABLE public.test_result ADD fluid_profile_id INT NULL;
        ALTER TABLE public.test_result ADD electrical_profile_id INT NULL;
    """
    op.execute(sql=sql)


def downgrade():
    pass
