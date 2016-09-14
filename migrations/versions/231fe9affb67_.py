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
        ALTER TABLE public.air_breaker ADD equipment_id INTEGER;
        ALTER TABLE public.breaker ADD equipment_id INTEGER;
        ALTER TABLE public.bushing ADD equipment_id INTEGER;
        ALTER TABLE public.cable ADD equipment_id INTEGER;
        ALTER TABLE public.capacitor ADD equipment_id INTEGER;
        ALTER TABLE public.gas_sensor ADD equipment_id INTEGER;
        ALTER TABLE public.inductance ADD equipment_id INTEGER;
        ALTER TABLE public.induction_machine ADD equipment_id INTEGER;
        ALTER TABLE public.powersource ADD equipment_id INTEGER;
        ALTER TABLE public.rectifier ADD equipment_id INTEGER;
        ALTER TABLE public.resistance ADD equipment_id INTEGER;
        ALTER TABLE public.switch ADD equipment_id INTEGER;
        ALTER TABLE public.switchgear ADD equipment_id INTEGER;
        ALTER TABLE public.synchronous_machine ADD equipment_id INTEGER;
        ALTER TABLE public.tank ADD equipment_id INTEGER;
        ALTER TABLE public.tap_changer ADD equipment_id INTEGER;
        ALTER TABLE public.transformer ADD equipment_id INTEGER;


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

        ALTER TABLE public.air_breaker DROP IF EXISTS name;
        ALTER TABLE public.air_breaker DROP IF EXISTS serial;
        ALTER TABLE public.air_breaker DROP IF EXISTS manufacturer_id;
        ALTER TABLE public.air_breaker DROP IF EXISTS manufactured;
        ALTER TABLE public.air_breaker DROP IF EXISTS frequency;
        ALTER TABLE public.air_breaker DROP IF EXISTS description;
        ALTER TABLE public.air_breaker DROP IF EXISTS phase_number;
        ALTER TABLE public.air_breaker DROP IF EXISTS sealed;
        ALTER TABLE public.air_breaker DROP IF EXISTS welded_cover;

        ALTER TABLE public.breaker DROP IF EXISTS name;
        ALTER TABLE public.breaker DROP IF EXISTS serial;
        ALTER TABLE public.breaker DROP IF EXISTS manufactured;
        ALTER TABLE public.breaker DROP IF EXISTS description;

        ALTER TABLE public.bushing DROP IF EXISTS name;
        ALTER TABLE public.bushing DROP IF EXISTS serial;
        ALTER TABLE public.bushing DROP IF EXISTS manufacturer_id;
        ALTER TABLE public.bushing DROP IF EXISTS manufactured;
        ALTER TABLE public.bushing DROP IF EXISTS frequency;
        ALTER TABLE public.bushing DROP IF EXISTS description;
        ALTER TABLE public.bushing DROP IF EXISTS phase_number;
        ALTER TABLE public.bushing DROP IF EXISTS bushing_manufacturer_h1;
        ALTER TABLE public.bushing DROP IF EXISTS bushing_manufacturer_h2;
        ALTER TABLE public.bushing DROP IF EXISTS bushing_manufacturer_h3;
        ALTER TABLE public.bushing DROP IF EXISTS bushing_manufacturer_hn;
        ALTER TABLE public.bushing DROP IF EXISTS bushing_manufacturer_x1;
        ALTER TABLE public.bushing DROP IF EXISTS bushing_manufacturer_x2;
        ALTER TABLE public.bushing DROP IF EXISTS bushing_manufacturer_x3;
        ALTER TABLE public.bushing DROP IF EXISTS bushing_manufacturer_xn;
        ALTER TABLE public.bushing DROP IF EXISTS bushing_manufacturer_t1;
        ALTER TABLE public.bushing DROP IF EXISTS bushing_manufacturer_t2;
        ALTER TABLE public.bushing DROP IF EXISTS bushing_manufacturer_t3;
        ALTER TABLE public.bushing DROP IF EXISTS bushing_manufacturer_tn;
        ALTER TABLE public.bushing DROP IF EXISTS bushing_manufacturer_q1;
        ALTER TABLE public.bushing DROP IF EXISTS bushing_manufacturer_q2;
        ALTER TABLE public.bushing DROP IF EXISTS bushing_manufacturer_q3;
        ALTER TABLE public.bushing DROP IF EXISTS bushing_manufacturer_qn;
        ALTER TABLE public.bushing DROP IF EXISTS bushing_type_h;
        ALTER TABLE public.bushing DROP IF EXISTS bushing_type_hn;
        ALTER TABLE public.bushing DROP IF EXISTS bushing_type_x;
        ALTER TABLE public.bushing DROP IF EXISTS bushing_type_xn;
        ALTER TABLE public.bushing DROP IF EXISTS bushing_type_t;
        ALTER TABLE public.bushing DROP IF EXISTS bushing_type_tn;
        ALTER TABLE public.bushing DROP IF EXISTS bushing_type_q;
        ALTER TABLE public.bushing DROP IF EXISTS bushing_type_qn;
        ALTER TABLE public.bushing DROP IF EXISTS winding_id;
        ALTER TABLE public.bushing DROP IF EXISTS winding;

        ALTER TABLE public.cable DROP IF EXISTS name;
        ALTER TABLE public.cable DROP IF EXISTS serial;
        ALTER TABLE public.cable DROP IF EXISTS manufacturer_id;
        ALTER TABLE public.cable DROP IF EXISTS manufactured;
        ALTER TABLE public.cable DROP IF EXISTS description;

        ALTER TABLE public.capacitor DROP IF EXISTS name;
        ALTER TABLE public.capacitor DROP IF EXISTS serial;
        ALTER TABLE public.capacitor DROP IF EXISTS manufacturer_id;
        ALTER TABLE public.capacitor DROP IF EXISTS manufactured;
        ALTER TABLE public.capacitor DROP IF EXISTS description;
        ALTER TABLE public.capacitor DROP IF EXISTS frequency;
        ALTER TABLE public.capacitor DROP IF EXISTS phase_number;
        ALTER TABLE public.capacitor DROP IF EXISTS sealed;
        ALTER TABLE public.capacitor DROP IF EXISTS welded_cover;

        ALTER TABLE public.gas_sensor DROP IF EXISTS name;
        ALTER TABLE public.gas_sensor DROP IF EXISTS serial;
        ALTER TABLE public.gas_sensor DROP IF EXISTS manufacturer_id;
        ALTER TABLE public.gas_sensor DROP IF EXISTS manufactured;

        ALTER TABLE public.inductance DROP IF EXISTS name;
        ALTER TABLE public.inductance DROP IF EXISTS serial;
        ALTER TABLE public.inductance DROP IF EXISTS winding;

        ALTER TABLE public.induction_machine DROP IF EXISTS name;
        ALTER TABLE public.induction_machine DROP IF EXISTS serial;
        ALTER TABLE public.induction_machine DROP IF EXISTS sealed;
        ALTER TABLE public.induction_machine DROP IF EXISTS welded_cover;
        ALTER TABLE public.induction_machine DROP IF EXISTS manufacturer_id;
        ALTER TABLE public.induction_machine DROP IF EXISTS manufactured;
        ALTER TABLE public.induction_machine DROP IF EXISTS description;

        ALTER TABLE public.powersource DROP IF EXISTS name;
        ALTER TABLE public.powersource DROP IF EXISTS serial;
        ALTER TABLE public.powersource DROP IF EXISTS sealed;
        ALTER TABLE public.powersource DROP IF EXISTS welded_cover;
        ALTER TABLE public.powersource DROP IF EXISTS manufacturer_id;
        ALTER TABLE public.powersource DROP IF EXISTS manufactured;
        ALTER TABLE public.powersource DROP IF EXISTS description;
        ALTER TABLE public.powersource DROP IF EXISTS frequency;
        ALTER TABLE public.powersource DROP IF EXISTS phase_number;

        ALTER TABLE public.rectifier DROP IF EXISTS name;
        ALTER TABLE public.rectifier DROP IF EXISTS serial;
        ALTER TABLE public.rectifier DROP IF EXISTS manufacturer_id;
        ALTER TABLE public.rectifier DROP IF EXISTS manufactured;
        ALTER TABLE public.rectifier DROP IF EXISTS description;

        ALTER TABLE public.resistance DROP IF EXISTS name;
        ALTER TABLE public.resistance DROP IF EXISTS serial;
        ALTER TABLE public.resistance DROP IF EXISTS manufacturer_id;
        ALTER TABLE public.resistance DROP IF EXISTS manufactured;

        ALTER TABLE public.switch DROP IF EXISTS name;
        ALTER TABLE public.switch DROP IF EXISTS serial;
        ALTER TABLE public.switch DROP IF EXISTS manufacturer_id;
        ALTER TABLE public.switch DROP IF EXISTS manufactured;
        ALTER TABLE public.switch DROP IF EXISTS sealed;
        ALTER TABLE public.switch DROP IF EXISTS description;
        ALTER TABLE public.switch DROP IF EXISTS welded_cover;

        ALTER TABLE public.switchgear DROP IF EXISTS name;
        ALTER TABLE public.switchgear DROP IF EXISTS serial;
        ALTER TABLE public.switchgear DROP IF EXISTS manufacturer_id;
        ALTER TABLE public.switchgear DROP IF EXISTS manufactured;
        ALTER TABLE public.switchgear DROP IF EXISTS sealed;
        ALTER TABLE public.switchgear DROP IF EXISTS description;
        ALTER TABLE public.switchgear DROP IF EXISTS welded_cover;

        ALTER TABLE public.synchronous_machine DROP IF EXISTS name;
        ALTER TABLE public.synchronous_machine DROP IF EXISTS serial;
        ALTER TABLE public.synchronous_machine DROP IF EXISTS manufacturer_id;
        ALTER TABLE public.synchronous_machine DROP IF EXISTS manufactured;
        ALTER TABLE public.synchronous_machine DROP IF EXISTS sealed;
        ALTER TABLE public.synchronous_machine DROP IF EXISTS description;
        ALTER TABLE public.synchronous_machine DROP IF EXISTS welded_cover;

        ALTER TABLE public.tank DROP IF EXISTS name;
        ALTER TABLE public.tank DROP IF EXISTS serial;
        ALTER TABLE public.tank DROP IF EXISTS manufacturer_id;
        ALTER TABLE public.tank DROP IF EXISTS manufactured;
        ALTER TABLE public.tank DROP IF EXISTS sealed;
        ALTER TABLE public.tank DROP IF EXISTS description;

        ALTER TABLE public.tap_changer DROP IF EXISTS name;
        ALTER TABLE public.tap_changer DROP IF EXISTS serial;
        ALTER TABLE public.tap_changer DROP IF EXISTS manufacturer_id;
        ALTER TABLE public.tap_changer DROP IF EXISTS manufactured;
        ALTER TABLE public.tap_changer DROP IF EXISTS sealed;
        ALTER TABLE public.tap_changer DROP IF EXISTS description;
        ALTER TABLE public.tap_changer DROP IF EXISTS phase_number;
        ALTER TABLE public.tap_changer DROP IF EXISTS welded_cover;
        ALTER TABLE public.tap_changer DROP IF EXISTS frequency;

        ALTER TABLE public.transformer DROP IF EXISTS name;
        ALTER TABLE public.transformer DROP IF EXISTS serial;
        ALTER TABLE public.transformer DROP IF EXISTS manufacturer_id;
        ALTER TABLE public.transformer DROP IF EXISTS manufactured;
        ALTER TABLE public.transformer DROP IF EXISTS description;

    """
    op.execute(sql=sql)


def downgrade():
    sql = """
        ALTER TABLE public.air_breaker DROP CONSTRAINT IF EXISTS air_breaker_equipment_id_fk;
        ALTER TABLE public.breaker DROP CONSTRAINT IF EXISTS breaker_equipment_id_fk;
        ALTER TABLE public.bushing DROP CONSTRAINT IF EXISTS bushing_equipment_id_fk;
        ALTER TABLE public.cable DROP CONSTRAINT IF EXISTS cable_equipment_id_fk;
        ALTER TABLE public.capacitor DROP CONSTRAINT IF EXISTS capacitor_equipment_id_fk;
        ALTER TABLE public.gas_sensor DROP CONSTRAINT IF EXISTS gas_sensor_equipment_id_fk;
        ALTER TABLE public.inductance DROP CONSTRAINT IF EXISTS inductance_equipment_id_fk;
        ALTER TABLE public.induction_machine DROP CONSTRAINT IF EXISTS induction_machine_equipment_id_fk;
        ALTER TABLE public.powersource DROP CONSTRAINT IF EXISTS powersource_equipment_id_fk;
        ALTER TABLE public.rectifier DROP CONSTRAINT IF EXISTS rectifier_equipment_id_fk;
        ALTER TABLE public.resistance DROP CONSTRAINT IF EXISTS resistance_equipment_id_fk;
        ALTER TABLE public.switch DROP CONSTRAINT IF EXISTS switch_equipment_id_fk;
        ALTER TABLE public.switchgear DROP CONSTRAINT IF EXISTS switchgear_equipment_id_fk;
        ALTER TABLE public.synchronous_machine DROP CONSTRAINT IF EXISTS synchronous_machine_equipment_id_fk;
        ALTER TABLE public.tank DROP CONSTRAINT IF EXISTS tank_equipment_id_fk;
        ALTER TABLE public.tap_changer DROP CONSTRAINT IF EXISTS tap_changer_equipment_id_fk;
        ALTER TABLE public.transformer DROP CONSTRAINT IF EXISTS transformer_equipment_id_fk;

        ALTER TABLE public.air_breaker DROP IF EXISTS equipment_id;
        ALTER TABLE public.breaker DROP IF EXISTS equipment_id;
        ALTER TABLE public.bushing DROP IF EXISTS equipment_id;
        ALTER TABLE public.cable DROP IF EXISTS equipment_id;
        ALTER TABLE public.capacitor DROP IF EXISTS equipment_id;
        ALTER TABLE public.gas_sensor DROP IF EXISTS equipment_id;
        ALTER TABLE public.inductance DROP IF EXISTS equipment_id;
        ALTER TABLE public.induction_machine DROP IF EXISTS equipment_id;
        ALTER TABLE public.powersource DROP IF EXISTS equipment_id;
        ALTER TABLE public.rectifier DROP IF EXISTS equipment_id;
        ALTER TABLE public.resistance DROP IF EXISTS equipment_id;
        ALTER TABLE public.switch DROP IF EXISTS equipment_id;
        ALTER TABLE public.switchgear DROP IF EXISTS equipment_id;
        ALTER TABLE public.synchronous_machine DROP IF EXISTS equipment_id;
        ALTER TABLE public.tank DROP IF EXISTS equipment_id;
        ALTER TABLE public.tap_changer DROP IF EXISTS equipment_id;
        ALTER TABLE public.transformer DROP IF EXISTS equipment_id;

        ALTER TABLE public.air_breaker ADD name VARCHAR(50);
        ALTER TABLE public.air_breaker ADD serial VARCHAR(50);

        ALTER TABLE public.breaker ADD name VARCHAR(50);
        ALTER TABLE public.breaker ADD serial VARCHAR(50);

        ALTER TABLE public.bushing ADD name VARCHAR(50);
        ALTER TABLE public.bushing ADD serial VARCHAR(50);

        ALTER TABLE public.cable ADD name VARCHAR(50);
        ALTER TABLE public.cable ADD serial VARCHAR(50);

        ALTER TABLE public.capacitor ADD name VARCHAR(50);
        ALTER TABLE public.capacitor ADD serial VARCHAR(50);

        ALTER TABLE public.gas_sensor ADD name VARCHAR(50);
        ALTER TABLE public.gas_sensor ADD serial VARCHAR(50);

        ALTER TABLE public.inductance ADD name VARCHAR(50);
        ALTER TABLE public.inductance ADD serial VARCHAR(50);

        ALTER TABLE public.induction_machine ADD name VARCHAR(50);
        ALTER TABLE public.induction_machine ADD serial VARCHAR(50);

        ALTER TABLE public.powersource ADD name VARCHAR(50);
        ALTER TABLE public.powersource ADD serial VARCHAR(50);

        ALTER TABLE public.rectifier ADD name VARCHAR(50);
        ALTER TABLE public.rectifier ADD serial VARCHAR(50);

        ALTER TABLE public.resistance ADD name VARCHAR(50);
        ALTER TABLE public.resistance ADD serial VARCHAR(50);

        ALTER TABLE public.switch ADD name VARCHAR(50);
        ALTER TABLE public.switch ADD serial VARCHAR(50);

        ALTER TABLE public.switchgear ADD name VARCHAR(50);
        ALTER TABLE public.switchgear ADD serial VARCHAR(50);

        ALTER TABLE public.synchronous_machine ADD name VARCHAR(50);
        ALTER TABLE public.synchronous_machine ADD serial VARCHAR(50);

        ALTER TABLE public.tank ADD name VARCHAR(50);
        ALTER TABLE public.tank ADD serial VARCHAR(50);

        ALTER TABLE public.tap_changer ADD name VARCHAR(50);
        ALTER TABLE public.tap_changer ADD serial VARCHAR(50);

        ALTER TABLE public.transformer ADD name VARCHAR(50);
        ALTER TABLE public.transformer ADD serial VARCHAR(50);
    """
    op.execute(sql=sql)
