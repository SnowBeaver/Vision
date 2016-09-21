"""empty message

Revision ID: 36bc9ba66931
Revises: 34ffaa235b3f
Create Date: 2016-09-21 07:34:56.723544

"""

# revision identifiers, used by Alembic.
revision = '36bc9ba66931'
down_revision = '34ffaa235b3f'

from alembic import op
import sqlalchemy as sa


def upgrade():
    sql = """
        ALTER TABLE public.electrical_profile ADD COLUMN user_id INTEGER;
        ALTER TABLE public.electrical_profile ADD CONSTRAINT user_id_fkey
        FOREIGN KEY (user_id) REFERENCES users_user (id) ON UPDATE SET NULL ON DELETE SET NULL;

        ALTER TABLE public.fluid_profile ADD COLUMN user_id INTEGER;
        ALTER TABLE public.fluid_profile ADD CONSTRAINT user_id_fkey
        FOREIGN KEY (user_id) REFERENCES users_user (id) ON UPDATE SET NULL ON DELETE SET NULL;
    """
    op.execute(sql=sql)


def downgrade():
    sql = """
        ALTER TABLE public.electrical_profile DROP CONSTRAINT IF EXISTS user_id_fkey;
        ALTER TABLE public.electrical_profile DROP COLUMN user_id;

        ALTER TABLE public.fluid_profile DROP CONSTRAINT IF EXISTS user_id_fkey;
        ALTER TABLE public.fluid_profile DROP COLUMN user_id;
    """
    op.execute(sql=sql)
