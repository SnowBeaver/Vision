"""empty message

Revision ID: 239b5ebee38c
Revises: 319bb34acaa2
Create Date: 2016-10-03 09:39:15.638130

"""

# revision identifiers, used by Alembic.
revision = '239b5ebee38c'
down_revision = '319bb34acaa2'

from alembic import op
import sqlalchemy as sa


def upgrade():
    sql = """
        INSERT INTO diagnosis (name) VALUES ('Other diagnosis (specify)');
    """
    op.execute(sql=sql)


def downgrade():
    sql = """
        DELETE FROM diagnosis WHERE name = 'Other diagnosis (specify)';
    """
    op.execute(sql=sql)
