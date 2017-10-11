"""empty message

Revision ID: 218da0de0144
Revises: 2fa6dbc3db9d
Create Date: 2016-11-29 20:54:05.627022

"""

# revision identifiers, used by Alembic.
revision = '218da0de0144'
down_revision = '2fa6dbc3db9d'

from alembic import op
import sqlalchemy as sa



def upgrade():
    sql ="""
      ALTER TABLE IF EXISTS public.equipment DROP CONSTRAINT equipment_visual_inspection_by_id_fkey;
      ALTER TABLE public.equipment DROP visual_inspection_by_id;
      ALTER TABLE public.equipment DROP visual_date;
      ALTER TABLE public.equipment DROP visual_inspection_comments;
    """
    op.execute(sql=sql)


def downgrade():
    sql = """
      ALTER TABLE public.equipment ADD visual_inspection_by_id INTEGER  NOT NULL;
      ALTER TABLE public.equipment ADD visual_date TIMESTAMP ;
      ALTER TABLE public.equipment ADD visual_inspection_comments TEXT;
      ALTER TABLE public.equipment ADD CONSTRAINT equipment_visual_inspection_by_id_fkey FOREIGN KEY (visual_inspection_by_id) REFERENCES users_user (id);
        """
    op.execute(sql=sql)

