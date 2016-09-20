"""empty message

Revision ID: 55db9a5243fe
Revises: 26943dd3eb2d
Create Date: 2016-09-19 07:27:43.723324

"""

# revision identifiers, used by Alembic.
revision = '55db9a5243fe'
down_revision = '26943dd3eb2d'

from alembic import op
import sqlalchemy as sa


def upgrade():
    sql = """
        ALTER TABLE inductance ALTER COLUMN id DROP DEFAULT;
        DROP SEQUENCE IF EXISTS inductance_id_seq;
        CREATE SEQUENCE inductance_id_seq;
        ALTER TABLE inductance ALTER id SET DEFAULT NEXTVAL('inductance_id_seq'::regclass);
    """
    op.execute(sql=sql)


def downgrade():
    sql = """
        ALTER TABLE inductance ALTER COLUMN id DROP DEFAULT;
        DROP SEQUENCE inductance_id_seq;
    """
    op.execute(sql=sql)
