"""empty message

Revision ID: 176da92988af
Revises: 10faa0bd5c60
Create Date: 2016-08-29 17:31:51.320145

"""

# revision identifiers, used by Alembic.
revision = '176da92988af'
down_revision = '10faa0bd5c60'

from alembic import op
import sqlalchemy as sa


def upgrade():
    sql = """
            ALTER TABLE public.test_type ADD test_table_name VARCHAR(100) DEFAULT '' NOT NULL;
            UPDATE public.test_type SET test_table_name = '' WHERE id=1;
            UPDATE public.test_type SET test_table_name = 'bushing_test' WHERE id=2;
            UPDATE public.test_type SET test_table_name = 'winding_test' WHERE id=3;
            UPDATE public.test_type SET test_table_name = 'winding_test' WHERE id=4;
            UPDATE public.test_type SET test_table_name = 'insulation_resistance_test' WHERE id=5;
            UPDATE public.test_type SET test_table_name = 'visual_inspection_test' WHERE id=6;
            UPDATE public.test_type SET test_table_name = 'winding_resistance_test' WHERE id=7;
            UPDATE public.test_type SET test_table_name = 'polymerisation_degree_test' WHERE id=8;
            UPDATE public.test_type SET test_table_name = 'transformer_turn_ratio_test' WHERE id=9;
            UPDATE public.test_type SET test_table_name = '' WHERE id=10;
            UPDATE public.test_type SET test_table_name = '' WHERE id=11;
            UPDATE public.test_type SET test_table_name = 'dissolved_gas_test' WHERE id=12;
            UPDATE public.test_type SET test_table_name = 'water_test' WHERE id=13;
            UPDATE public.test_type SET test_table_name = 'furan_test' WHERE id=14;
            UPDATE public.test_type SET test_table_name = 'inhibitor_test' WHERE id=15;
            UPDATE public.test_type SET test_table_name = 'pcb_test' WHERE id=16;
            UPDATE public.test_type SET test_table_name = '' WHERE id=17;
            UPDATE public.test_type SET test_table_name = 'fluid_test' WHERE id=18;
            UPDATE public.test_type SET test_table_name = 'fluid_test' WHERE id=19;
            UPDATE public.test_type SET test_table_name = 'fluid_test' WHERE id=20;
            UPDATE public.test_type SET test_table_name = 'pcb_test' WHERE id=21;
            UPDATE public.test_type SET test_table_name = 'inhibitor_test' WHERE id=22;
            UPDATE public.test_type SET test_table_name = 'fluid_test' WHERE id=23;
            UPDATE public.test_type SET test_table_name = 'fluid_test' WHERE id=24;
            UPDATE public.test_type SET test_table_name = 'fluid_test' WHERE id=25;
            UPDATE public.test_type SET test_table_name = 'fluid_test' WHERE id=26;
            UPDATE public.test_type SET test_table_name = 'particle_test' WHERE id=27;
            UPDATE public.test_type SET test_table_name = 'metals_in_oil_test' WHERE id=28;
            UPDATE public.test_type SET test_table_name = 'fluid_test' WHERE id=29;
            UPDATE public.test_type SET test_table_name = 'fluid_test' WHERE id=30;
            UPDATE public.test_type SET test_table_name = 'fluid_test' WHERE id=31;
            UPDATE public.test_type SET test_table_name = 'fluid_test' WHERE id=32;
            UPDATE public.test_type SET test_table_name = 'furan_test' WHERE id=33;
            UPDATE public.test_type SET test_table_name = 'water_test' WHERE id=34;
            UPDATE public.test_type SET test_table_name = 'fluid_test' WHERE id=35;
            UPDATE public.test_type SET test_table_name = 'fluid_test' WHERE id=36;
            UPDATE public.test_type SET test_table_name = 'fluid_test' WHERE id=37;
            UPDATE public.test_type SET test_table_name = '' WHERE id=38;
            UPDATE public.test_type SET test_table_name = 'pcb_test' WHERE id=39;
            UPDATE public.test_type SET test_table_name = 'inhibitor_test' WHERE id=40;
            DROP TABLE public.test_type_result_table;
        """
    op.execute(sql=sql)


def downgrade():
    sql = """
            ALTER TABLE public.test_type DROP test_table_name;
            CREATE TABLE test_type_result_table
            (
                id INTEGER PRIMARY KEY NOT NULL,
                test_type_id INTEGER NOT NULL,
                test_result_table_name VARCHAR(100) NOT NULL,
                CONSTRAINT test_type_result_table_test_type_id_fkey FOREIGN KEY (test_type_id) REFERENCES test_type (id)
            );
            INSERT INTO public.test_type_result_table (id, test_type_id, test_result_table_name) VALUES (1, 2, 'bushing_test');
            INSERT INTO public.test_type_result_table (id, test_type_id, test_result_table_name) VALUES (9, 12, 'dissolved_gas_test');
            INSERT INTO public.test_type_result_table (id, test_type_id, test_result_table_name) VALUES (19, 23, 'fluid_test');
            INSERT INTO public.test_type_result_table (id, test_type_id, test_result_table_name) VALUES (14, 18, 'fluid_test');
            INSERT INTO public.test_type_result_table (id, test_type_id, test_result_table_name) VALUES (15, 19, 'fluid_test');
            INSERT INTO public.test_type_result_table (id, test_type_id, test_result_table_name) VALUES (16, 20, 'fluid_test');
            INSERT INTO public.test_type_result_table (id, test_type_id, test_result_table_name) VALUES (20, 24, 'fluid_test');
            INSERT INTO public.test_type_result_table (id, test_type_id, test_result_table_name) VALUES (21, 25, 'fluid_test');
            INSERT INTO public.test_type_result_table (id, test_type_id, test_result_table_name) VALUES (22, 26, 'fluid_test');
            INSERT INTO public.test_type_result_table (id, test_type_id, test_result_table_name) VALUES (25, 29, 'fluid_test');
            INSERT INTO public.test_type_result_table (id, test_type_id, test_result_table_name) VALUES (26, 30, 'fluid_test');
            INSERT INTO public.test_type_result_table (id, test_type_id, test_result_table_name) VALUES (27, 31, 'fluid_test');
            INSERT INTO public.test_type_result_table (id, test_type_id, test_result_table_name) VALUES (28, 32, 'fluid_test');
            INSERT INTO public.test_type_result_table (id, test_type_id, test_result_table_name) VALUES (31, 35, 'fluid_test');
            INSERT INTO public.test_type_result_table (id, test_type_id, test_result_table_name) VALUES (32, 36, 'fluid_test');
            INSERT INTO public.test_type_result_table (id, test_type_id, test_result_table_name) VALUES (33, 37, 'fluid_test');
            INSERT INTO public.test_type_result_table (id, test_type_id, test_result_table_name) VALUES (11, 14, 'furan_test');
            INSERT INTO public.test_type_result_table (id, test_type_id, test_result_table_name) VALUES (29, 33, 'furan_test');
            INSERT INTO public.test_type_result_table (id, test_type_id, test_result_table_name) VALUES (35, 40, 'inhibitor_test');
            INSERT INTO public.test_type_result_table (id, test_type_id, test_result_table_name) VALUES (12, 15, 'inhibitor_test');
            INSERT INTO public.test_type_result_table (id, test_type_id, test_result_table_name) VALUES (18, 22, 'inhibitor_test');
            INSERT INTO public.test_type_result_table (id, test_type_id, test_result_table_name) VALUES (4, 5, 'insulation_resistance_test');
            INSERT INTO public.test_type_result_table (id, test_type_id, test_result_table_name) VALUES (24, 28, 'metals_in_oil_test');
            INSERT INTO public.test_type_result_table (id, test_type_id, test_result_table_name) VALUES (23, 27, 'particle_test');
            INSERT INTO public.test_type_result_table (id, test_type_id, test_result_table_name) VALUES (17, 21, 'pcb_test');
            INSERT INTO public.test_type_result_table (id, test_type_id, test_result_table_name) VALUES (13, 16, 'pcb_test');
            INSERT INTO public.test_type_result_table (id, test_type_id, test_result_table_name) VALUES (34, 39, 'pcb_test');
            INSERT INTO public.test_type_result_table (id, test_type_id, test_result_table_name) VALUES (7, 8, 'polymerisation_degree_test');
            INSERT INTO public.test_type_result_table (id, test_type_id, test_result_table_name) VALUES (8, 9, 'transformer_turn_ratio_test');
            INSERT INTO public.test_type_result_table (id, test_type_id, test_result_table_name) VALUES (5, 6, 'visual_inspection_test');
            INSERT INTO public.test_type_result_table (id, test_type_id, test_result_table_name) VALUES (10, 13, 'water_test');
            INSERT INTO public.test_type_result_table (id, test_type_id, test_result_table_name) VALUES (30, 34, 'water_test');
            INSERT INTO public.test_type_result_table (id, test_type_id, test_result_table_name) VALUES (6, 7, 'winding_resistance_test');
            INSERT INTO public.test_type_result_table (id, test_type_id, test_result_table_name) VALUES (2, 3, 'winding_test');
            INSERT INTO public.test_type_result_table (id, test_type_id, test_result_table_name) VALUES (3, 4, 'winding_test');
        """
    op.execute(sql=sql)
