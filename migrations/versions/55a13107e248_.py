"""empty message

Revision ID: 55a13107e248
Revises: 23e7b92b7bb
Create Date: 2016-08-15 18:18:32.112349

"""

# revision identifiers, used by Alembic.
revision = '55a13107e248'
down_revision = '23e7b92b7bb'

from alembic import op
import sqlalchemy as sa


def upgrade():
    sql = """ALTER TABLE public.campaign DROP date_application;"""
    op.execute(sql=sql)


def downgrade():
    sql = """ALTER TABLE public.campaign ADD date_application TIMESTAMP NULL;"""
    op.execute(sql=sql)
