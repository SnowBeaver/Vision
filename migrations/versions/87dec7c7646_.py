"""empty message

Revision ID: 87dec7c7646
Revises: 41fcc94d0a1a
Create Date: 2016-08-11 13:36:41.078695

"""

# revision identifiers, used by Alembic.
revision = '87dec7c7646'
down_revision = '41fcc94d0a1a'

from alembic import op
import sqlalchemy as sa


def upgrade():
    sql = """
        ALTER TABLE public.campaign RENAME COLUMN date_prelevement TO date_sampling;
        ALTER TABLE public.campaign RENAME COLUMN date TO date_created;
    """
    op.execute(sql=sql)


def downgrade():
    sql = """
        ALTER TABLE public.campaign RENAME COLUMN date_sampling TO date_prelevement;
        ALTER TABLE public.campaign RENAME COLUMN date_created TO date;
    """
    op.execute(sql=sql)
