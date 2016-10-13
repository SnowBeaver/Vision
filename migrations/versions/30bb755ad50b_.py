"""empty message

Revision ID: 30bb755ad50b
Revises: 559e83225470
Create Date: 2016-09-30 11:12:53.173204

"""

# revision identifiers, used by Alembic.
revision = '30bb755ad50b'
down_revision = '559e83225470'

from alembic import op
import sqlalchemy as sa


def upgrade():
    sql = """
        ALTER TABLE IF EXISTS public.test_recommendation ALTER COLUMN date_created SET DEFAULT (now() at time zone 'utc');
    """
    op.execute(sql=sql)


def downgrade():
    sql = """
        ALTER TABLE IF EXISTS public.test_recommendation ALTER COLUMN date_created DROP DEFAULT;
    """
    op.execute(sql=sql)
