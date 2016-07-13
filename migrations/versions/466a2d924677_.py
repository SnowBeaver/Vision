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
    op.execute(sql=sql)


def downgrade():
    pass