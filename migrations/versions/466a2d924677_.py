"""empty message

Revision ID: 466a2d924677
Revises: 23437fae4436
Create Date: 2016-07-12 17:14:08.990435

"""

# revision identifiers, used by Alembic.
revision = '466a2d924677'
down_revision = '23437fae4436'

from alembic import op


def upgrade():
    sql = """
    ALTER TABLE public.rectifier ADD gas_sensor_id INT NULL;
    ALTER TABLE public.rectifier ADD CONSTRAINT rectifier_gas_sensor_id_fk FOREIGN KEY (gas_sensor_id) REFERENCES gas_sensor (id);
    """
    # op.execute(sql=sql)

    sql = """ALTER TABLE public.electrical_profile ADD insulation_pf BOOLEAN NULL;"""
    # op.execute(sql=sql)

    sql = """CREATE TABLE public.particles (
    id VARCHAR(50) PRIMARY KEY NOT NULL,
    equipment_id INT,
    "2um" DOUBLE PRECISION,
    "5um" DOUBLE PRECISION,
    "10um" DOUBLE PRECISION,
    "15um" DOUBLE PRECISION,
    "25um" DOUBLE PRECISION,
    "50um" DOUBLE PRECISION,
    "100um" DOUBLE PRECISION,
    iso4406_1 DOUBLE PRECISION,
    iso4406_2 DOUBLE PRECISION,
    iso4406_3 DOUBLE PRECISION,
    nas1638 DOUBLE PRECISION,
    CONSTRAINT particles_equipment_id_fk FOREIGN KEY (equipment_id) REFERENCES equipment (id)
    );
    """
    # op.execute(sql=sql)

    sql = """
    INSERT INTO public.particles (id, equipment_id, "2um", "5um", "10um", "15um", "25um", "50um", "100um", iso4406_1, iso4406_2, iso4406_3, nas1638)
    VALUES ('ALUSEPMS 000042', NULL, 19919, 7664.5, 2834.5, 1181.5, 316, 38.5, 4.5, 17, 16, 13, 0);
    """
    # op.execute(sql=sql)

    sql = """
    INSERT INTO public.norm (id, name, table_name, code) VALUES (5, 'Norms particles', 'particles', null);
    """
    # op.execute(sql=sql)

    sql = """
    ALTER TABLE public.tap_changer ADD number_of_taps INT NULL;
    ALTER TABLE public.tap_changer ADD model VARCHAR(50) NULL;
    """
    # op.execute(sql=sql)

    sql = """CREATE TABLE public.interrupting_medium (
    id INT PRIMARY KEY NOT NULL,
    name VARCHAR(50) NULL
    );

    INSERT INTO public.interrupting_medium (id, name) VALUES (1, 'oil');
    INSERT INTO public.interrupting_medium (id, name) VALUES (2, 'vacuum bottle');
    INSERT INTO public.interrupting_medium (id, name) VALUES (3, 'SF6');
    INSERT INTO public.interrupting_medium (id, name) VALUES (4, 'air');

    ALTER TABLE public.tap_changer ADD interrupting_medium_id INT NULL;
    ALTER TABLE public.tap_changer ADD CONSTRAINT tap_changer_interrupting_medium_id_fk FOREIGN KEY (interrupting_medium_id) REFERENCES interrupting_medium (id);
    ALTER TABLE public.switch ADD interrupting_medium_id INT NULL;
    ALTER TABLE public.switch ADD CONSTRAINT switch_interrupting_medium_id_fk FOREIGN KEY (interrupting_medium_id) REFERENCES interrupting_medium (id);
    ALTER TABLE public.breaker ADD interrupting_medium_id INT NULL;
    ALTER TABLE public.breaker ADD CONSTRAINT breaker_interrupting_medium_id_fk FOREIGN KEY (interrupting_medium_id) REFERENCES interrupting_medium (id);
    """
    # op.execute(sql=sql)

    sql = """
    ALTER TABLE public.switch ADD current_rating INT NULL;
    ALTER TABLE public.breaker ADD current_rating INT NULL;
    ALTER TABLE public.switchgear ADD current_rating INT NULL;
    ALTER TABLE public.air_breaker ADD current_rating INT NULL;
    ALTER TABLE public.synchronous_machine ADD current_rating INT NULL;
    ALTER TABLE public.induction_machine ADD current_rating INT NULL;
    """
    # op.execute(sql=sql)

    sql = """
    ALTER TABLE public.gas_sensor ADD model VARCHAR(50) NULL;
    ALTER TABLE public.cable ADD model VARCHAR(50) NULL;
    ALTER TABLE public.bushing ADD model VARCHAR(50) NULL;
    """
    # op.execute(sql=sql)

    sql = """CREATE TABLE public.insulation (
    id INT PRIMARY KEY NOT NULL,
    name VARCHAR(50) NULL
    );

    INSERT INTO public.insulation (id, name) VALUES (1, 'air');
    INSERT INTO public.insulation (id, name) VALUES (2, 'sf6');
    INSERT INTO public.insulation (id, name) VALUES (3, 'oil');

    CREATE TABLE public.breaker_mechanism (
    id INT PRIMARY KEY NOT NULL,
    name VARCHAR(50) NULL
    );

    INSERT INTO public.breaker_mechanism (id, name) VALUES (1, 'air');
    INSERT INTO public.breaker_mechanism (id, name) VALUES (2, 'coil');

    ALTER TABLE public.breaker ADD breaker_mechanism_id INT NULL;
    ALTER TABLE public.breaker ADD CONSTRAINT breaker_breaker_mechanism_id_fk FOREIGN KEY (breaker_mechanism_id) REFERENCES breaker_mechanism (id);
    ALTER TABLE public.switchgear ADD insulation_id INT NULL;
    ALTER TABLE public.switchgear ADD CONSTRAINT switchgear_insulation_id_fk FOREIGN KEY (insulation_id) REFERENCES insulation (id);
    """
    # op.execute(sql=sql)

    sql = """
    ALTER TABLE public.synchronous_machine ADD hp VARCHAR(50) NULL;
    ALTER TABLE public.synchronous_machine ADD kw VARCHAR(50) NULL;
    ALTER TABLE public.induction_machine ADD hp VARCHAR(50) NULL;
    ALTER TABLE public.induction_machine ADD kva VARCHAR(50) NULL;
    ALTER TABLE public.induction_machine ADD pf VARCHAR(50) NULL;

    ALTER TABLE public.rectifier ADD fluid_volume DOUBLE PRECISION NULL;
    ALTER TABLE public.rectifier ADD cooling_rating INT NULL;
    ALTER TABLE public.transformer ADD cooling_rating INT NULL;
    ALTER TABLE public.transformer ADD threephase BOOLEAN NULL;
    """
    # op.execute(sql=sql)

    sql = """
    CREATE TABLE public.inductance (
    id INT PRIMARY KEY NOT NULL,
    name VARCHAR(50) NULL,
    serial VARCHAR(50) NULL,
    fluid_volume FLOAT NULL,
    sealed BOOLEAN NULL,
    welded_cover BOOLEAN NULL,
    cooling_rating INT,
    fluid_type_id INT,
    fluid_level_id INT,
    gas_sensor_id INT,
    CONSTRAINT inductance_fluid_type_id_fk FOREIGN KEY (fluid_type_id) REFERENCES fluid_type (id),
    CONSTRAINT inductance_fluid_level_id_fk FOREIGN KEY (fluid_level_id) REFERENCES fluid_level (id),
    CONSTRAINT inductance_gas_sensor_id_fk FOREIGN KEY (gas_sensor_id) REFERENCES gas_sensor (id)
    );
    """
    # op.execute(sql=sql)

    sql = """
    ALTER TABLE public.resistance ADD kv FLOAT NULL;
    ALTER TABLE public.resistance ADD bil INT NULL;
    ALTER TABLE public.resistance ADD open BOOLEAN NULL;
    """
    # op.execute(sql=sql)

    sql = """
    ALTER TABLE public.cable ADD threephase BOOLEAN NULL;
    ALTER TABLE public.cable ADD insulation_id INT NULL;
    ALTER TABLE public.cable ADD CONSTRAINT cable_insulation_id_fk FOREIGN KEY (insulation_id) REFERENCES insulation (id);
    """
    op.execute(sql=sql)

def downgrade():
    pass