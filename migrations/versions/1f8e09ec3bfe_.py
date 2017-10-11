"""empty message

Revision ID: 1f8e09ec3bfe
Revises: 5d35074ce84
Create Date: 2017-01-20 11:04:42.217227

"""

# revision identifiers, used by Alembic.
revision = '1f8e09ec3bfe'
down_revision = '5d35074ce84'

from alembic import op
import sqlalchemy as sa


def upgrade():
    sql = """
        ALTER TABLE public.equipment DROP CONSTRAINT IF EXISTS norm_id_fkey;
        ALTER TABLE public.equipment DROP COLUMN norm_id;
    """
    op.execute(sql=sql)


def downgrade():
    sql = """
        ALTER TABLE public.equipment ADD COLUMN norm_id INTEGER;
        ALTER TABLE public.equipment ADD CONSTRAINT norm_id_fkey
        FOREIGN KEY (norm_id) REFERENCES norm (id) ON UPDATE SET NULL ON DELETE SET NULL;
    """
    op.execute(sql=sql)
