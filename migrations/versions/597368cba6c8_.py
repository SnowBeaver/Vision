"""empty message

Revision ID: 597368cba6c8
Revises: 568327b5fcd0
Create Date: 2016-09-28 13:58:05.420227

"""

# revision identifiers, used by Alembic.
revision = '597368cba6c8'
down_revision = '568327b5fcd0'

from alembic import op
import sqlalchemy as sa


def upgrade():
    sql = """
        ALTER TABLE public.recommendation ALTER COLUMN code TYPE varchar (50);
    """
    op.execute(sql=sql)


def downgrade():
    pass
