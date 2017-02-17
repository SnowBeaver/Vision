"""empty message

Revision ID: 323c1c10024b
Revises: 3ff81a37ac53
Create Date: 2017-02-17 10:23:32.308360

"""

# revision identifiers, used by Alembic.
revision = '323c1c10024b'
down_revision = '3ff81a37ac53'

from alembic import op
import sqlalchemy as sa


def upgrade():
    sql = """
        -- not to get key already exists error
        SELECT setval('"public"."fluid_type_id_seq"'::regclass, (select MAX("id") FROM "public"."fluid_type"));
        INSERT INTO public.fluid_type (name) VALUES ('Oil');
        INSERT INTO public.fluid_type (name) VALUES ('Water');
        INSERT INTO public.fluid_type (name) VALUES ('Solid');
        INSERT INTO public.fluid_type (name) VALUES ('Gaz');
        INSERT INTO public.fluid_type (name) VALUES ('Other');

        -- not to get key already exists error
        SELECT setval('"public"."test_reason_id_seq"'::regclass, (select MAX("id") FROM "public"."test_reason"));
        INSERT INTO public.test_reason (name) VALUES ('Urgent');

        -- not to get key already exists error
        SELECT setval('"public"."test_status_id_seq"'::regclass, (select MAX("id") FROM "public"."test_status"));
        INSERT INTO public.test_status (code, name) VALUES ('sampled','Been sampled');
    """
    op.execute(sql=sql)


def downgrade():
    sql = """
        DELETE FROM public.fluid_type WHERE name IN ('Oil', 'Water', 'Solid', 'Gaz', 'Other');
        DELETE FROM public.test_reason WHERE name IN ('Urgent');
        DELETE FROM public.test_status WHERE name IN ('Been sampled');
    """
    op.execute(sql=sql)
