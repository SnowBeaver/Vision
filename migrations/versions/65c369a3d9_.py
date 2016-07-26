"""empty message

Revision ID: 65c369a3d9
Revises: 461a4f170888
Create Date: 2016-07-26 18:11:37.793682

"""

# revision identifiers, used by Alembic.
revision = '65c369a3d9'
down_revision = '461a4f170888'

from alembic import op
import sqlalchemy as sa


def upgrade():
    sql = """
          ALTER TABLE public.tree ADD equipment_id INT NULL;
          ALTER TABLE public.tree ADD CONSTRAINT tree_equipment_id_fk FOREIGN KEY(equipment_id) REFERENCES equipment(id);
          """
    op.execute(sql=sql)


def downgrade():
    pass
