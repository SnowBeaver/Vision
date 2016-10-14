"""empty message

Revision ID: 2129fab41318
Revises: 3ca82e77999c
Create Date: 2016-10-11 17:05:10.133197

"""

# revision identifiers, used by Alembic.
revision = '2129fab41318'
down_revision = '31572aec4659'

from alembic import op
import sqlalchemy as sa


def upgrade():
    sql = """
        SELECT setval('equipment_type_id_seq', (SELECT max(id) FROM equipment_type));
        SELECT setval('test_type_id_seq', (SELECT max(id) FROM test_type));

        CREATE SEQUENCE breaker_mechanism_id_seq START 1;
        SELECT setval('breaker_mechanism_id_seq', (SELECT max(id) FROM public.breaker_mechanism));
        ALTER TABLE public.breaker_mechanism ALTER COLUMN id SET DEFAULT nextval('breaker_mechanism_id_seq');

        CREATE SEQUENCE insulation_id_seq START 1;
        SELECT setval('insulation_id_seq', (SELECT max(id) FROM public.insulation));
        ALTER TABLE public.insulation ALTER COLUMN id SET DEFAULT nextval('insulation_id_seq');

        CREATE SEQUENCE interrupting_medium_id_seq START 1;
        SELECT setval('interrupting_medium_id_seq', (SELECT max(id) FROM public.interrupting_medium));
        ALTER TABLE public.interrupting_medium ALTER COLUMN id SET DEFAULT nextval('interrupting_medium_id_seq');

        CREATE SEQUENCE tree_translation_id_seq START 1;
        SELECT setval('tree_translation_id_seq', (SELECT max(id) FROM public.tree_translation));
        ALTER TABLE public.tree_translation ALTER COLUMN id SET DEFAULT nextval('tree_translation_id_seq');
    """
    op.execute(sql=sql)


def downgrade():
    sql = """
        ALTER TABLE visual_inspection_test ALTER COLUMN id DROP DEFAULT;
        DROP SEQUENCE visual_inspection_test_id_seq;

        ALTER TABLE public.breaker_mechanism ALTER COLUMN id DROP DEFAULT;
        DROP SEQUENCE breaker_mechanism_id_seq;

        ALTER TABLE public.insulation ALTER COLUMN id DROP DEFAULT;
        DROP SEQUENCE insulation_id_seq;

        ALTER TABLE public.interrupting_medium ALTER COLUMN id DROP DEFAULT;
        DROP SEQUENCE interrupting_medium_id_seq;

        ALTER TABLE public.tree_translation ALTER COLUMN id DROP DEFAULT;
        DROP SEQUENCE tree_translation_id_seq;
    """
    op.execute(sql=sql)
