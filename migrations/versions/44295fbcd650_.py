"""empty message

Revision ID: 44295fbcd650
Revises: 2bd864ade540
Create Date: 2017-09-25 08:40:42.132149

"""

# revision identifiers, used by Alembic.
revision = '44295fbcd650'
down_revision = '2bd864ade540'

from alembic import op
import sqlalchemy as sa


def upgrade():
    sql = """
        ALTER TABLE public.tree DROP CONSTRAINT tree_equipment_id_fk;
        ALTER TABLE public.tree
        ADD CONSTRAINT tree_equipment_id_fk
        FOREIGN KEY (equipment_id) REFERENCES equipment (id) ON DELETE CASCADE;

        ALTER TABLE public.test_result DROP CONSTRAINT test_result_equipment_id_fk;
        ALTER TABLE public.test_result
        ADD CONSTRAINT test_result_equipment_id_fk
        FOREIGN KEY (equipment_id) REFERENCES equipment (id) ON DELETE CASCADE;


        ALTER TABLE public.test_recommendation DROP CONSTRAINT test_recommendation_test_result_id_fk;
        ALTER TABLE public.test_recommendation
        ADD CONSTRAINT test_recommendation_test_result_id_fk
        FOREIGN KEY (test_result_id) REFERENCES test_result (id) ON DELETE CASCADE;

        ALTER TABLE public.norm_physic_data DROP CONSTRAINT norm_physic_data_equipment_id_fk;
        ALTER TABLE public.norm_physic_data
        ADD CONSTRAINT norm_physic_data_equipment_id_fk
        FOREIGN KEY (equipment_id) REFERENCES equipment (id) ON DELETE CASCADE;
    """

    op.execute(sql=sql)


def downgrade():
    sql = """
        ALTER TABLE public.tree DROP CONSTRAINT tree_equipment_id_fk;
        ALTER TABLE public.tree
        ADD CONSTRAINT tree_equipment_id_fk
        FOREIGN KEY (equipment_id) REFERENCES equipment (id);

        ALTER TABLE public.test_result DROP CONSTRAINT test_result_equipment_id_fk;
        ALTER TABLE public.test_result
        ADD CONSTRAINT test_result_equipment_id_fk
        FOREIGN KEY (equipment_id) REFERENCES equipment (id);


        ALTER TABLE public.test_recommendation DROP CONSTRAINT test_recommendation_test_result_id_fk;
        ALTER TABLE public.test_recommendation
        ADD CONSTRAINT test_recommendation_test_result_id_fk
        FOREIGN KEY (test_result_id) REFERENCES test_result (id);

        ALTER TABLE public.norm_physic_data DROP CONSTRAINT norm_physic_data_equipment_id_fk;
        ALTER TABLE public.norm_physic_data
        ADD CONSTRAINT norm_physic_data_equipment_id_fk
        FOREIGN KEY (equipment_id) REFERENCES equipment (id);
    """

    op.execute(sql=sql)