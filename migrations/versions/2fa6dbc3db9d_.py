"""empty message

Revision ID: 2fa6dbc3db9d
Revises: 84147d2528c
Create Date: 2016-11-04 10:54:48.112528

"""

# revision identifiers, used by Alembic.
revision = '2fa6dbc3db9d'
down_revision = '84147d2528c'

from alembic import op
import sqlalchemy as sa


def upgrade():
    sql = """
        CREATE SEQUENCE visual_inspection_test_id_seq START 1;
        SELECT setval('visual_inspection_test_id_seq', COALESCE((SELECT MAX(id) FROM public.visual_inspection_test), 1));
        ALTER TABLE public.visual_inspection_test ALTER id SET DEFAULT nextval('visual_inspection_test_id_seq');
    """
    op.execute(sql=sql)


def downgrade():
    sql = """
        ALTER TABLE public.visual_inspection_test ALTER COLUMN id DROP DEFAULT;
        DROP SEQUENCE visual_inspection_test_id_seq;
    """
    op.execute(sql=sql)
