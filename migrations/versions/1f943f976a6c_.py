"""empty message

Revision ID: 1f943f976a6c
Revises: 4b6647d0a365
Create Date: 2016-07-04 12:35:52.786509

"""

# revision identifiers, used by Alembic.
revision = '1f943f976a6c'
down_revision = '4b6647d0a365'

from alembic import op

def upgrade():
    sql = """INSERT INTO public."syringe" ("serial") VALUES ('Y2830');
INSERT INTO public."syringe" ("serial") VALUES ('Y2616');
INSERT INTO public."syringe" ("serial") VALUES ('X 8639');
INSERT INTO public."syringe" ("serial") VALUES ('X389');
INSERT INTO public."syringe" ("serial") VALUES ('X365');
INSERT INTO public."syringe" ("serial") VALUES ('W-982');
INSERT INTO public."syringe" ("serial") VALUES ('W-698');
INSERT INTO public."syringe" ("serial") VALUES ('W649');
INSERT INTO public."syringe" ("serial") VALUES ('W100');
INSERT INTO public."syringe" ("serial") VALUES ('V6939');
INSERT INTO public."syringe" ("serial") VALUES ('V4563');
INSERT INTO public."syringe" ("serial") VALUES ('V-1321');
INSERT INTO public."syringe" ("serial") VALUES ('S 0436');
INSERT INTO public."syringe" ("serial") VALUES ('S 0226');
"""
    op.execute(sql=sql)



def downgrade():
    op.execute("TRUNCATE syringe CASCADE")