"""empty message

Revision ID: 23437fae4436
Revises: 523e229fbb04
Create Date: 2016-07-08 18:17:18.310499

"""

# revision identifiers, used by Alembic.
revision = '23437fae4436'
down_revision = '523e229fbb04'

from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

def upgrade():
    sql = """ALTER TABLE public.equipment ADD frequency "Frequency" NULL;
ALTER TABLE public.equipment ADD description TEXT NULL;
ALTER TABLE public.equipment ADD manufactured INT NULL;
ALTER TABLE public.equipment ADD serial VARCHAR(50) NULL;
ALTER TABLE public.equipment ADD name VARCHAR(50) NULL;
ALTER TABLE public.equipment ADD manufacturer_id INT NULL;
CONSTRAINT equipment_manufacturer_id_fk FOREIGN KEY (manufacturer_id) REFERENCES manufacturer (id),
ALTER TABLE public.bushing ADD winding INT NULL;
        """
    op.execute(sql=sql)


def downgrade():
    pass
