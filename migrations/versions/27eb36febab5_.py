"""empty message

Revision ID: 27eb36febab5
Revises: 3c8462ba73e9
Create Date: 2016-08-10 16:07:07.476895

"""

# revision identifiers, used by Alembic.
revision = '27eb36febab5'
down_revision = '3c8462ba73e9'

from alembic import op
import sqlalchemy as sa


def upgrade():
    sql = """
          ALTER TABLE public.campaign DROP analysis_number;
        """
    op.execute(sql=sql)


def downgrade():
    pass
