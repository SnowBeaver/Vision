"""empty message

Revision ID: 2c566df74613
Revises: 65c369a3d9
Create Date: 2016-07-27 13:59:37.080951

"""

# revision identifiers, used by Alembic.
revision = '2c566df74613'
down_revision = '65c369a3d9'

from alembic import op
import sqlalchemy as sa


def upgrade():
    sql = """
    ALTER TABLE public.equipment ALTER COLUMN equipment_number TYPE VARCHAR(50) USING equipment_number::VARCHAR(50);
    """
    op.execute(sql=sql)

def downgrade():
    pass
