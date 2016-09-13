"""empty message

Revision ID: 231fe9affb67
Revises: 11f19b50c56d
Create Date: 2016-09-13 17:36:44.829487

"""

# revision identifiers, used by Alembic.
revision = '231fe9affb67'
down_revision = '11f19b50c56d'

from alembic import op
import sqlalchemy as sa


def upgrade():
    sql = """
        ALTER TABLE public.air_breaker ADD equipment_id INTEGER NOT NULL;
        ALTER TABLE public.breaker ADD equipment_id INTEGER NOT NULL;
        ALTER TABLE public.bushing ADD equipment_id INTEGER NOT NULL;
        ALTER TABLE public.cable ADD equipment_id INTEGER NOT NULL;
        ALTER TABLE public.capacitor ADD equipment_id INTEGER NOT NULL;
        ALTER TABLE public.gas_sensor ADD equipment_id INTEGER NOT NULL;
        ALTER TABLE public.inductance ADD equipment_id INTEGER NOT NULL;
        ALTER TABLE public.induction_machine ADD equipment_id INTEGER NOT NULL;
        ALTER TABLE public.powersource ADD equipment_id INTEGER NOT NULL;
        ALTER TABLE public.rectifier ADD equipment_id INTEGER NOT NULL;
        ALTER TABLE public.resistance ADD equipment_id INTEGER NOT NULL;
        ALTER TABLE public.switch ADD equipment_id INTEGER NOT NULL;
        ALTER TABLE public.switchgear ADD equipment_id INTEGER NOT NULL;
        ALTER TABLE public.synchronous_machine ADD equipment_id INTEGER NOT NULL;
        ALTER TABLE public.tank ADD equipment_id INTEGER NOT NULL;
        ALTER TABLE public.tap_changer ADD equipment_id INTEGER NOT NULL;
        ALTER TABLE public.transformer ADD equipment_id INTEGER NOT NULL;


        ALTER TABLE public.air_breaker
        ADD CONSTRAINT air_breaker_equipment_id_fk
        FOREIGN KEY (equipment_id) REFERENCES equipment (id) ON DELETE SET NULL ON UPDATE SET NULL;
        ALTER TABLE public.breaker
        ADD CONSTRAINT breaker_equipment_id_fk
        FOREIGN KEY (equipment_id) REFERENCES equipment (id) ON DELETE SET NULL ON UPDATE SET NULL;
        ALTER TABLE public.bushing
        ADD CONSTRAINT bushing_equipment_id_fk
        FOREIGN KEY (equipment_id) REFERENCES equipment (id) ON DELETE SET NULL ON UPDATE SET NULL;
        ALTER TABLE public.cable
        ADD CONSTRAINT cable_equipment_id_fk
        FOREIGN KEY (equipment_id) REFERENCES equipment (id) ON DELETE SET NULL ON UPDATE SET NULL;
        ALTER TABLE public.capacitor
        ADD CONSTRAINT capacitor_equipment_id_fk
        FOREIGN KEY (equipment_id) REFERENCES equipment (id) ON DELETE SET NULL ON UPDATE SET NULL;
        ALTER TABLE public.gas_sensor
        ADD CONSTRAINT gas_sensor_equipment_id_fk
        FOREIGN KEY (equipment_id) REFERENCES equipment (id) ON DELETE SET NULL ON UPDATE SET NULL;
        ALTER TABLE public.inductance
        ADD CONSTRAINT inductance_equipment_id_fk
        FOREIGN KEY (equipment_id) REFERENCES equipment (id) ON DELETE SET NULL ON UPDATE SET NULL;
        ALTER TABLE public.induction_machine
        ADD CONSTRAINT induction_machine_equipment_id_fk
        FOREIGN KEY (equipment_id) REFERENCES equipment (id) ON DELETE SET NULL ON UPDATE SET NULL;
        ALTER TABLE public.powersource
        ADD CONSTRAINT powersource_equipment_id_fk
        FOREIGN KEY (equipment_id) REFERENCES equipment (id) ON DELETE SET NULL ON UPDATE SET NULL;
        ALTER TABLE public.rectifier
        ADD CONSTRAINT rectifier_equipment_id_fk
        FOREIGN KEY (equipment_id) REFERENCES equipment (id) ON DELETE SET NULL ON UPDATE SET NULL;
        ALTER TABLE public.resistance
        ADD CONSTRAINT resistance_equipment_id_fk
        FOREIGN KEY (equipment_id) REFERENCES equipment (id) ON DELETE SET NULL ON UPDATE SET NULL;
        ALTER TABLE public.switch
        ADD CONSTRAINT switch_equipment_id_fk
        FOREIGN KEY (equipment_id) REFERENCES equipment (id) ON DELETE SET NULL ON UPDATE SET NULL;
        ALTER TABLE public.switchgear
        ADD CONSTRAINT switchgear_equipment_id_fk
        FOREIGN KEY (equipment_id) REFERENCES equipment (id) ON DELETE SET NULL ON UPDATE SET NULL;
        ALTER TABLE public.synchronous_machine
        ADD CONSTRAINT synchronous_machine_equipment_id_fk
        FOREIGN KEY (equipment_id) REFERENCES equipment (id) ON DELETE SET NULL ON UPDATE SET NULL;
        ALTER TABLE public.tank
        ADD CONSTRAINT tank_equipment_id_fk
        FOREIGN KEY (equipment_id) REFERENCES equipment (id) ON DELETE SET NULL ON UPDATE SET NULL;
        ALTER TABLE public.tap_changer
        ADD CONSTRAINT tap_changer_equipment_id_fk
        FOREIGN KEY (equipment_id) REFERENCES equipment (id) ON DELETE SET NULL ON UPDATE SET NULL;
        ALTER TABLE public.transformer
        ADD CONSTRAINT transformer_equipment_id_fk
        FOREIGN KEY (equipment_id) REFERENCES equipment (id) ON DELETE SET NULL ON UPDATE SET NULL;
    """
    op.execute(sql=sql)


def downgrade():
    sql = """
        ALTER TABLE public.air_breaker DROP CONSTRAINT air_breaker_equipment_id_fk;
        ALTER TABLE public.breaker DROP CONSTRAINT breaker_equipment_id_fk;
        ALTER TABLE public.bushing DROP CONSTRAINT bushing_equipment_id_fk;
        ALTER TABLE public.cable DROP CONSTRAINT cable_equipment_id_fk;
        ALTER TABLE public.capacitor DROP CONSTRAINT capacitor_equipment_id_fk;
        ALTER TABLE public.gas_sensor DROP CONSTRAINT gas_sensor_equipment_id_fk;
        ALTER TABLE public.inductance DROP CONSTRAINT inductance_equipment_id_fk;
        ALTER TABLE public.induction_machine DROP CONSTRAINT induction_machine_equipment_id_fk;
        ALTER TABLE public.powersource DROP CONSTRAINT powersource_equipment_id_fk;
        ALTER TABLE public.rectifier DROP CONSTRAINT rectifier_equipment_id_fk;
        ALTER TABLE public.resistance DROP CONSTRAINT resistance_equipment_id_fk;
        ALTER TABLE public.switch DROP CONSTRAINT switch_equipment_id_fk;
        ALTER TABLE public.switchgear DROP CONSTRAINT switchgear_equipment_id_fk;
        ALTER TABLE public.synchronous_machine DROP CONSTRAINT synchronous_machine_equipment_id_fk;
        ALTER TABLE public.tank DROP CONSTRAINT tank_equipment_id_fk;
        ALTER TABLE public.tap_changer DROP CONSTRAINT tap_changer_equipment_id_fk;
        ALTER TABLE public.transformer DROP CONSTRAINT transformer_equipment_id_fk;

        ALTER TABLE public.air_breaker DROP equipment_id;
        ALTER TABLE public.breaker DROP equipment_id;
        ALTER TABLE public.bushing DROP equipment_id;
        ALTER TABLE public.cable DROP equipment_id;
        ALTER TABLE public.capacitor DROP equipment_id;
        ALTER TABLE public.gas_sensor DROP equipment_id;
        ALTER TABLE public.inductance DROP equipment_id;
        ALTER TABLE public.induction_machine DROP equipment_id;
        ALTER TABLE public.powersource DROP equipment_id;
        ALTER TABLE public.rectifier DROP equipment_id;
        ALTER TABLE public.resistance DROP equipment_id;
        ALTER TABLE public.switch DROP equipment_id;
        ALTER TABLE public.switchgear DROP equipment_id;
        ALTER TABLE public.synchronous_machine DROP equipment_id;
        ALTER TABLE public.tank DROP equipment_id;
        ALTER TABLE public.tap_changer DROP equipment_id;
        ALTER TABLE public.transformer DROP equipment_id;
    """
    op.execute(sql=sql)
