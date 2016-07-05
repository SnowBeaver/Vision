"""empty message

Revision ID: 5f8452af433
Revises: 2f6416a498e8
Create Date: 2016-07-04 14:50:09.909594

"""

# revision identifiers, used by Alembic.
revision = '5f8452af433'
down_revision = '2f6416a498e8'

from alembic import op
import sqlalchemy as sa


def upgrade():
    # op.execute(sql='DROP TABLE norm_type CASCADE;')

    sql = """
INSERT INTO public.norm (id, name, "table") VALUES (2, 'Norms gas', 'norm_gas');
INSERT INTO public.norm (id, name, "table") VALUES (3, 'Norms isolation', 'norm_isolation');
INSERT INTO public.norm (id, name, "table") VALUES (4, 'Norms physic', 'norm_physic');
INSERT INTO public.norm (id, name, "table") VALUES (1, 'Norms furan ', 'norm_furan');
    """
    op.execute(sql=sql)


def downgrade():
    op.execute(sql='TRUNCATE TABLE norm CASCADE;')
