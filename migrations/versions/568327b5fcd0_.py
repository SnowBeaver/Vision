"""empty message

Revision ID: 568327b5fcd0
Revises: 36bc9ba66931
Create Date: 2016-09-28 14:31:12.299264

"""

# revision identifiers, used by Alembic.
revision = '568327b5fcd0'
down_revision = '36bc9ba66931'

from alembic import op
import sqlalchemy as sa


def upgrade():
    sql = """
            ALTER TABLE public.test_type ADD COLUMN checkbox_name VARCHAR(100);

            ALTER TABLE public.test_recommendation ADD COLUMN test_type_id INTEGER;
            ALTER TABLE public.test_recommendation ADD CONSTRAINT test_recommendation_test_type_id_fkey
            FOREIGN KEY (test_type_id) REFERENCES test_type (id) ON UPDATE SET NULL ON DELETE SET NULL;

            UPDATE public.test_type SET checkbox_name='bushing' WHERE id=2;
            UPDATE public.test_type SET checkbox_name='winding' WHERE id=3;
            UPDATE public.test_type SET checkbox_name='winding_double' WHERE id=4;
            UPDATE public.test_type SET checkbox_name='insulation' WHERE id=5;
            UPDATE public.test_type SET checkbox_name='visual' WHERE id=6;
            UPDATE public.test_type SET checkbox_name='resistance' WHERE id=7;
            UPDATE public.test_type SET checkbox_name='degree' WHERE id=8;
            UPDATE public.test_type SET checkbox_name='turns' WHERE id=9;
            UPDATE public.test_type SET checkbox_name='gas' WHERE id=12;
            UPDATE public.test_type SET checkbox_name='water' WHERE id=13;
            UPDATE public.test_type SET checkbox_name='furans' WHERE id=14;
            UPDATE public.test_type SET checkbox_name='inhibitor' WHERE id=15;
            UPDATE public.test_type SET checkbox_name='pcb' WHERE id=16;
            UPDATE public.test_type SET checkbox_name='dielec' WHERE id=18;
            UPDATE public.test_type SET checkbox_name='acidity' WHERE id=19;
            UPDATE public.test_type SET checkbox_name='density' WHERE id=20;
            UPDATE public.test_type SET checkbox_name='pcb_jar' WHERE id=21;
            UPDATE public.test_type SET checkbox_name='inhibitor_jar' WHERE id=22;
            UPDATE public.test_type SET checkbox_name='point' WHERE id=23;
            UPDATE public.test_type SET checkbox_name='dielec_2' WHERE id=24;
            UPDATE public.test_type SET checkbox_name='color' WHERE id=25;
            UPDATE public.test_type SET checkbox_name='pf' WHERE id=26;
            UPDATE public.test_type SET checkbox_name='particles' WHERE id=27;
            UPDATE public.test_type SET checkbox_name='metals' WHERE id=28;
            UPDATE public.test_type SET checkbox_name='viscosity' WHERE id=29;
            UPDATE public.test_type SET checkbox_name='dielec_d' WHERE id=30;
            UPDATE public.test_type SET checkbox_name='ift' WHERE id=31;
            UPDATE public.test_type SET checkbox_name='pf_100' WHERE id=32;
            UPDATE public.test_type SET checkbox_name='furans_f' WHERE id=33;
            UPDATE public.test_type SET checkbox_name='water_w' WHERE id=34;
            UPDATE public.test_type SET checkbox_name='corr' WHERE id=35;
            UPDATE public.test_type SET checkbox_name='dielec_i' WHERE id=36;
            UPDATE public.test_type SET checkbox_name='visual' WHERE id=37;
            UPDATE public.test_type SET checkbox_name='pcb_vial' WHERE id=39;
            UPDATE public.test_type SET checkbox_name='antioxidant' WHERE id=40;
        """
    op.execute(sql=sql)


def downgrade():
    sql = """
            ALTER TABLE public.test_type DROP COLUMN IF EXISTS checkbox_name;
            ALTER TABLE public.test_recommendation DROP COLUMN IF EXISTS test_type_id;
        """
    op.execute(sql=sql)
