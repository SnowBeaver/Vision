"""empty message

Revision ID: 26943dd3eb2d
Revises: 231fe9affb67
Create Date: 2016-09-15 11:55:43.502958

"""

# revision identifiers, used by Alembic.
revision = '26943dd3eb2d'
down_revision = '231fe9affb67'

from alembic import op
import sqlalchemy as sa


def upgrade():
    sql = """
        ALTER TABLE visual_inspection_test ALTER COLUMN id DROP DEFAULT;
        DROP SEQUENCE IF EXISTS visual_inspection_test_id_seq;
        CREATE SEQUENCE visual_inspection_test_id_seq;
        ALTER TABLE visual_inspection_test ALTER id SET DEFAULT NEXTVAL('visual_inspection_test_id_seq'::regclass);
    """
    op.execute(sql=sql)


def downgrade():
    sql = """
        ALTER TABLE visual_inspection_test ALTER COLUMN id DROP DEFAULT;
        DROP SEQUENCE visual_inspection_test_id_seq;
    """
    op.execute(sql=sql)
