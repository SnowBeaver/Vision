"""empty message

Revision ID: 46ea29e9fba1
Revises: 2835ee0980f6
Create Date: 2016-09-30 13:24:14.141280

"""

# revision identifiers, used by Alembic.
revision = '46ea29e9fba1'
down_revision = '2835ee0980f6'

from alembic import op
import sqlalchemy as sa


def upgrade():
    sql = """
        ALTER TABLE IF EXISTS public.test_type ADD COLUMN type_category_id INT;
        ALTER TABLE public.test_type ADD CONSTRAINT test_type_type_category_id_fk FOREIGN KEY (type_category_id) REFERENCES test_type (id);
        UPDATE public.test_type SET type_category_id = 1 WHERE id >=2 AND id <=9;
        UPDATE public.test_type SET type_category_id = 10 WHERE id > 10 AND test_type.is_group IS FALSE;
    """
    op.execute(sql=sql)


def downgrade():
    sql = """
        ALTER TABLE IF EXISTS public.test_type DROP CONSTRAINT test_type_type_category_id_fk;
        ALTER TABLE IF EXISTS public.test_type DROP COLUMN type_category_id;
    """
    op.execute(sql=sql)
