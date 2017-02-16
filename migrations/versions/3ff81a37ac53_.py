"""empty message

Revision ID: 3ff81a37ac53
Revises: 49636bc02475
Create Date: 2017-02-16 16:20:52.761840

"""

# revision identifiers, used by Alembic.
revision = '3ff81a37ac53'
down_revision = '49636bc02475'

from alembic import op
import sqlalchemy as sa


def upgrade():
    sql = """
        INSERT INTO public.contract_status (name) VALUES ('Planned');
        INSERT INTO public.contract_status (name) VALUES ('Requisition');
        INSERT INTO public.contract_status (name) VALUES ('Contracted');
        INSERT INTO public.contract_status (name) VALUES ('Results Approved');
        INSERT INTO public.contract_status (name) VALUES ('Payed');
    """
    op.execute(sql=sql)


def downgrade():
    pass
