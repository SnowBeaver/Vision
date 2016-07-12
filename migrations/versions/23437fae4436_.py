"""empty message

Revision ID: 23437fae4436
Revises: 523e229fbb04
Create Date: 2016-07-08 18:17:18.310499

"""

# revision identifiers, used by Alembic.
revision = '23437fae4436'
down_revision = '523e229fbb04'

from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

def upgrade():
    sql = """TRUNCATE fluid_type CASCADE;
    INSERT INTO public.fluid_type (id, name) VALUES (1, 'Mineral oil');
    INSERT INTO public.fluid_type (id, name) VALUES (2, 'Silicone') ;
    INSERT INTO public.fluid_type (id, name) VALUES (3, 'HWMH');
    INSERT INTO public.fluid_type (id, name) VALUES (4, 'PCB');
    INSERT INTO public.fluid_type (id, name) VALUES (5, 'Soybean');
    INSERT INTO public.fluid_type (id, name) VALUES (6, 'Sunflower');
    INSERT INTO public.fluid_type (id, name) VALUES (7, 'Synthetic vegetable');
    """
    op.execute(sql=sql)

    sql = """
    ALTER TABLE public.equipment ADD frequency "Frequency" NULL;
    ALTER TABLE public.equipment ADD description TEXT NULL;
    ALTER TABLE public.equipment ADD manufactured INT NULL;
    ALTER TABLE public.equipment ADD serial VARCHAR(50) NULL;
    ALTER TABLE public.equipment ADD name VARCHAR(50) NULL;
    ALTER TABLE public.equipment ADD manufacturer_id INT NULL;
    ALTER TABLE public.equipment ADD CONSTRAINT equipment_manufacturer_id_fk FOREIGN KEY (manufacturer_id) REFERENCES manufacturer (id);
    ALTER TABLE public.bushing ADD winding INT NULL;
    """
    op.execute(sql=sql)

    sql = """
    ALTER TABLE public.breaker ADD open BOOLEAN DEFAULT TRUE NULL;
    ALTER TABLE public.breaker ADD fluid_type_id INT NULL;
    ALTER TABLE public.breaker ADD fluid_level_id INT NULL;
    ALTER TABLE public.breaker ADD CONSTRAINT breaker_fluid_type_id_fk FOREIGN KEY (fluid_type_id) REFERENCES fluid_type (id);
    ALTER TABLE public.breaker ADD CONSTRAINT breaker_fluid_level_id_fk FOREIGN KEY (fluid_level_id) REFERENCES fluid_level (id);
    """
    op.execute(sql=sql)

    sql = """
    ALTER TABLE public.tank ADD fluid_type_id INT NULL;
    ALTER TABLE public.tank ADD fluid_level_id INT NULL;
    ALTER TABLE public.tank ADD CONSTRAINT tank_fluid_type_id_fk FOREIGN KEY (fluid_type_id) REFERENCES fluid_type (id);
    ALTER TABLE public.tank ADD CONSTRAINT tank_fluid_level_id_fk FOREIGN KEY (fluid_level_id) REFERENCES fluid_level (id);
    """
    op.execute(sql=sql)

    sql = """
    ALTER TABLE public.transformer ADD fluid_type_id INT NULL;
    ALTER TABLE public.transformer ADD fluid_level_id INT NULL;
    ALTER TABLE public.transformer ADD CONSTRAINT transformer_fluid_type_id_fk FOREIGN KEY (fluid_type_id) REFERENCES fluid_type (id);
    ALTER TABLE public.transformer ADD CONSTRAINT transformer_fluid_level_id_fk FOREIGN KEY (fluid_level_id) REFERENCES fluid_level (id);
    """
    op.execute(sql=sql)

    sql = """
    ALTER TABLE public.tap_changer ADD fluid_type_id INT NULL;
    ALTER TABLE public.tap_changer ADD fluid_level_id INT NULL;
    ALTER TABLE public.tap_changer ADD CONSTRAINT tap_changer_fluid_type_id_fk FOREIGN KEY (fluid_type_id) REFERENCES fluid_type (id);
    ALTER TABLE public.tap_changer ADD CONSTRAINT tap_changer_fluid_level_id_fk FOREIGN KEY (fluid_level_id) REFERENCES fluid_level (id);
    """
    op.execute(sql=sql)

    sql = """
    ALTER TABLE public.rectifier ADD fluid_type_id INT NULL;
    ALTER TABLE public.rectifier ADD fluid_level_id INT NULL;
    ALTER TABLE public.rectifier ADD CONSTRAINT rectifier_fluid_type_id_fk FOREIGN KEY (fluid_type_id) REFERENCES fluid_type (id);
    ALTER TABLE public.rectifier ADD CONSTRAINT rectifier_fluid_level_id_fk FOREIGN KEY (fluid_level_id) REFERENCES fluid_level (id);
        """
    op.execute(sql=sql)

    sql = """ALTER TABLE public.switch ADD threephase BOOLEAN NULL;"""
    op.execute(sql=sql)

def downgrade():
    pass
