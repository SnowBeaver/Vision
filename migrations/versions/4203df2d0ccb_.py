"""empty message

Revision ID: 4203df2d0ccb
Revises: 37c761e3ba3
Create Date: 2017-10-30 12:43:45.895775

"""

# revision identifiers, used by Alembic.
revision = '4203df2d0ccb'
down_revision = '37c761e3ba3'

from alembic import op
import sqlalchemy as sa


def upgrade():
    sql = """
          ALTER TABLE public.transformer DROP COLUMN frequency;

          """
    op.execute(sql=sql)


def downgrade():
    sql = """
          ALTER TABLE public.transformer ADD COLUMN frequency integer;

          """
    op.execute(sql=sql)
    pass
