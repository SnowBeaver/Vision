"""empty message

Revision ID: 34ffaa235b3f
Revises: 26943dd3eb2d
Create Date: 2016-09-19 14:49:56.566141

"""

# revision identifiers, used by Alembic.
revision = '34ffaa235b3f'
down_revision = '55db9a5243fe'

from alembic import op
import sqlalchemy as sa


def upgrade():
    sql = """
        ALTER TABLE public.breaker DROP IF EXISTS frequency;
        ALTER TABLE public.breaker DROP IF EXISTS phase_number;
        ALTER TABLE public.breaker DROP IF EXISTS sealed;
        ALTER TABLE public.breaker DROP IF EXISTS welded_cover;
        ALTER TABLE public.breaker DROP IF EXISTS manufacturer_id;
        ALTER TABLE public.tap_changer DROP IF EXISTS ltc4;
    """
    op.execute(sql=sql)


def downgrade():
    pass
