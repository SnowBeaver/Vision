"""empty message

Revision ID: 3127729f48db
Revises: 2c566df74613
Create Date: 2016-08-03 16:20:42.749635

"""

# revision identifiers, used by Alembic.
revision = '3127729f48db'
down_revision = '2c566df74613'

from alembic import op
import sqlalchemy as sa


def upgrade():
    sql = """
    ALTER TABLE public.downstream ADD equipment_id INT NULL;
    ALTER TABLE public.downstream ADD CONSTRAINT downstream_equipment_id_fk
    FOREIGN KEY (equipment_id) REFERENCES equipment (id);

    ALTER TABLE public.upstream ADD equipment_id INT NULL;
    ALTER TABLE public.upstream ADD CONSTRAINT upstream_equipment_id_fk
    FOREIGN KEY (equipment_id) REFERENCES equipment (id);

    ALTER TABLE public.test_result ADD equipment_id INT NULL;
    ALTER TABLE public.test_result ADD CONSTRAINT test_result_equipment_id_fk
    FOREIGN KEY (equipment_id) REFERENCES equipment (id);
    """

    sql = """
    ALTER TABLE public.campaign DROP equipment_id;

    """
    op.execute(sql=sql)


def downgrade():
    pass
