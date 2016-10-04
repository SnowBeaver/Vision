"""empty message

Revision ID: 2835ee0980f6
Revises: 30bb755ad50b
Create Date: 2016-09-30 12:04:29.102627

"""

# revision identifiers, used by Alembic.
revision = '2835ee0980f6'
down_revision = '30bb755ad50b'

from alembic import op
import sqlalchemy as sa


def upgrade():
    sql = """
        ALTER TABLE IF EXISTS public.test_diagnosis ALTER COLUMN date_created SET DEFAULT (now() at time zone 'utc');
    """
    op.execute(sql=sql)


def downgrade():
    sql = """
        ALTER TABLE IF EXISTS public.test_diagnosis ALTER COLUMN date_created DROP DEFAULT;
    """
    op.execute(sql=sql)
