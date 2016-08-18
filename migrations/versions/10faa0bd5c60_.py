"""empty message

Revision ID: 10faa0bd5c60
Revises: c4279bd5651
Create Date: 2016-08-18 12:08:37.173582

"""

# revision identifiers, used by Alembic.
revision = '10faa0bd5c60'
down_revision = 'c4279bd5651'

from alembic import op
import sqlalchemy as sa


def upgrade():
    sql = """
        INSERT INTO public.test_status (id, code, name) VALUES (1, 'acquisition', 'Acquisition');
        INSERT INTO public.test_status (id, code, name) VALUES (2, 'laboratory', 'Laboratory');
        INSERT INTO public.test_status (id, code, name) VALUES (3, 'diagnosis', 'Diagnosis');
        INSERT INTO public.test_status (id, code, name) VALUES (4, 'recommendation', 'Recommendation');
        INSERT INTO public.test_status (id, code, name) VALUES (5, 'completed', 'Completed');
        ALTER TABLE public.test_result ALTER COLUMN status_id SET DEFAULT 1;
        ALTER TABLE public.test_result DROP CONSTRAINT IF EXISTS test_result_status_id_fkey;
        ALTER TABLE public.test_result ADD CONSTRAINT test_result_status_id_fkey
        FOREIGN KEY (status_id) REFERENCES test_status (id) ON DELETE SET NULL ON UPDATE SET NULL;
    """
    op.execute(sql=sql)


def downgrade():
    sql = """
        ALTER TABLE public.test_result DROP CONSTRAINT IF EXISTS test_result_status_id_fkey;
        TRUNCATE TABLE public.test_status CONTINUE IDENTITY RESTRICT;
    """
    op.execute(sql=sql)
