"""empty message

Revision ID: 84147d2528c
Revises: bd8f639392e
Create Date: 2016-10-24 12:08:21.830816

"""

# revision identifiers, used by Alembic.
revision = '84147d2528c'
down_revision = 'bd8f639392e'

from alembic import op
import sqlalchemy as sa


def upgrade():
    sql = """CREATE TABLE public.sibling
        (
            id SERIAL PRIMARY KEY NOT NULL,
            equipment_id INT,
            sibling_id INT,
            CONSTRAINT sibling_equipment_id_fk FOREIGN KEY (equipment_id) REFERENCES equipment (id),
            CONSTRAINT sibling_sibling_id_fk FOREIGN KEY (sibling_id) REFERENCES equipment (id)
        );
        """
    op.execute(sql=sql)


def downgrade():
    sql = """DROP TABLE public.sibling;"""
    op.execute(sql=sql)
