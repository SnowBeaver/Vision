"""empty message

Revision ID: 2ef9d4063a0c
Revises: 323c1c10024b
Create Date: 2017-02-22 08:05:49.268782

"""

# revision identifiers, used by Alembic.
revision = '2ef9d4063a0c'
down_revision = '323c1c10024b'

from alembic import op
import sqlalchemy as sa


def upgrade():
    sql = """
        INSERT INTO "public".material(name) VALUES ('Aluminium');
    """
    op.execute(sql=sql)


def downgrade():
    sql = """
        DELETE FROM "public".material WHERE name = 'Aluminium';
    """
    op.execute(sql=sql)
