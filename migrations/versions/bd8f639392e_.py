"""empty message

Revision ID: bd8f639392e
Revises: 336275c3e606
Create Date: 2016-10-17 09:25:22.946109

"""

# revision identifiers, used by Alembic.
revision = 'bd8f639392e'
down_revision = '336275c3e606'

from alembic import op
import sqlalchemy as sa


def upgrade():
    sql = """
        ALTER TABLE public.schedule ADD parent_id INT;
        ALTER TABLE public.schedule ADD CONSTRAINT parent_id_fkey
        FOREIGN KEY (parent_id) REFERENCES schedule (id) ON DELETE SET NULL ON UPDATE SET NULL;
    """
    op.execute(sql=sql)


def downgrade():
    sql = """
        ALTER TABLE public.schedule DROP CONSTRAINT IF EXISTS parent_id_fkey;
        ALTER TABLE public.schedule DROP parent_id;
    """
    op.execute(sql=sql)
