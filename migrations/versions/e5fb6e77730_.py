"""empty message

Revision ID: e5fb6e77730
Revises: 2ef9d4063a0c
Create Date: 2017-03-30 12:43:24.100702

"""

# revision identifiers, used by Alembic.
revision = 'e5fb6e77730'
down_revision = '2ef9d4063a0c'

from alembic import op
import sqlalchemy as sa


def upgrade():
    sql = """
    -- manufacturer_id to gasSensor
    ALTER TABLE public.gas_sensor ADD manufacturer_id INT NULL;
    ALTER TABLE public.gas_sensor ADD CONSTRAINT gas_sensor_manufacturer_id_fk FOREIGN KEY (manufacturer_id) REFERENCES manufacturer(id);

    -- add bushing flds from Equipment (mfr_h1_id...type_qn)
    ALTER TABLE public.bushing ADD mfr_h1_id INT NULL;
    ALTER TABLE public.bushing ADD CONSTRAINT gas_sensor_mfr_h1_id_fk FOREIGN KEY (mfr_h1_id) REFERENCES manufacturer(id);
    ALTER TABLE public.bushing ADD mfr_h2_id INT NULL;
    ALTER TABLE public.bushing ADD CONSTRAINT gas_sensor_mfr_h2_id_fk FOREIGN KEY (mfr_h2_id) REFERENCES manufacturer(id);
    ALTER TABLE public.bushing ADD mfr_h3_id INT NULL;
    ALTER TABLE public.bushing ADD CONSTRAINT gas_sensor_mfr_h3_id_fk FOREIGN KEY (mfr_h3_id) REFERENCES manufacturer(id);
    ALTER TABLE public.bushing ADD mfr_hn_id INT NULL;
    ALTER TABLE public.bushing ADD CONSTRAINT gas_sensor_mfr_hn_id_fk FOREIGN KEY (mfr_hn_id) REFERENCES manufacturer(id);
    ALTER TABLE public.bushing ADD mfr_x1_id INT NULL;
    ALTER TABLE public.bushing ADD CONSTRAINT gas_sensor_mfr_x1_id_fk FOREIGN KEY (mfr_x1_id) REFERENCES manufacturer(id);
    ALTER TABLE public.bushing ADD mfr_x2_id INT NULL;
    ALTER TABLE public.bushing ADD CONSTRAINT gas_sensor_mfr_x2_id_fk FOREIGN KEY (mfr_x2_id) REFERENCES manufacturer(id);
    ALTER TABLE public.bushing ADD mfr_x3_id INT NULL;
    ALTER TABLE public.bushing ADD CONSTRAINT gas_sensor_mfr_x3_id_fk FOREIGN KEY (mfr_x3_id) REFERENCES manufacturer(id);
    ALTER TABLE public.bushing ADD mfr_xn_id INT NULL;
    ALTER TABLE public.bushing ADD CONSTRAINT gas_sensor_mfr_xn_id_fk FOREIGN KEY (mfr_xn_id) REFERENCES manufacturer(id);
    ALTER TABLE public.bushing ADD mfr_t1_id INT NULL;
    ALTER TABLE public.bushing ADD CONSTRAINT gas_sensor_mfr_t1_id_fk FOREIGN KEY (mfr_t1_id) REFERENCES manufacturer(id);
    ALTER TABLE public.bushing ADD mfr_t2_id INT NULL;
    ALTER TABLE public.bushing ADD CONSTRAINT gas_sensor_mfr_t2_id_fk FOREIGN KEY (mfr_t2_id) REFERENCES manufacturer(id);
    ALTER TABLE public.bushing ADD mfr_t3_id INT NULL;
    ALTER TABLE public.bushing ADD CONSTRAINT gas_sensor_mfr_t3_id_fk FOREIGN KEY (mfr_t3_id) REFERENCES manufacturer(id);
    ALTER TABLE public.bushing ADD mfr_tn_id INT NULL;
    ALTER TABLE public.bushing ADD CONSTRAINT gas_sensor_mfr_tn_id_fk FOREIGN KEY (mfr_tn_id) REFERENCES manufacturer(id);
    ALTER TABLE public.bushing ADD mfr_q1_id INT NULL;
    ALTER TABLE public.bushing ADD CONSTRAINT gas_sensor_mfr_q1_id_fk FOREIGN KEY (mfr_q1_id) REFERENCES manufacturer(id);
    ALTER TABLE public.bushing ADD mfr_q2_id INT NULL;
    ALTER TABLE public.bushing ADD CONSTRAINT gas_sensor_mfr_q2_id_fk FOREIGN KEY (mfr_q2_id) REFERENCES manufacturer(id);
    ALTER TABLE public.bushing ADD mfr_q3_id INT NULL;
    ALTER TABLE public.bushing ADD CONSTRAINT gas_sensor_mfr_q3_id_fk FOREIGN KEY (mfr_q3_id) REFERENCES manufacturer(id);
    ALTER TABLE public.bushing ADD mfr_qn_id INT NULL;
    ALTER TABLE public.bushing ADD CONSTRAINT gas_sensor_mfr_qn_id_fk FOREIGN KEY (mfr_qn_id) REFERENCES manufacturer(id);

    ALTER TABLE public.bushing ADD type_h VARCHAR(25) NULL;
    ALTER TABLE public.bushing ADD type_hn VARCHAR(25) NULL;
    ALTER TABLE public.bushing ADD type_x VARCHAR(25) NULL;
    ALTER TABLE public.bushing ADD type_xn VARCHAR(25) NULL;
    ALTER TABLE public.bushing ADD type_t VARCHAR(25) NULL;
    ALTER TABLE public.bushing ADD type_tn VARCHAR(25) NULL;
    ALTER TABLE public.bushing ADD type_q VARCHAR(25) NULL;
    ALTER TABLE public.bushing ADD type_qn VARCHAR(25) NULL;


    -- add current_rating to: Capacitor, Cable, LoadTapChanger
    ALTER TABLE public.capacitor ADD current_rating NUMERIC(6,0) NULL;
    ALTER TABLE public.cable ADD current_rating NUMERIC(6,0) NULL;
    ALTER TABLE public.tap_changer ADD current_rating NUMERIC(6,0) NULL;

    -- rename current to current_rating in Bushing
    ALTER TABLE public.bushing RENAME COLUMN current TO current_rating;

    -- rename ratiot_ag8 to ratio_tag8 in Bushing
    ALTER TABLE public.transformer RENAME COLUMN ratiot_ag8 TO ratio_tag8;

    -- add impedance4 and impbasedmva4 to Transformer
    ALTER TABLE public.transformer ADD impedance4 DOUBLE PRECISION NULL;
    ALTER TABLE public.transformer ADD impbasedmva4 DOUBLE PRECISION NULL;

    -- rename windind_metal to winding_metal1
    ALTER TABLE public.transformer RENAME COLUMN windind_metal TO winding_metal1;

    -- add winding_metal2  winding_metal3  winding_metal4 to transformer
    ALTER TABLE public.transformer ADD winding_metal2 INT NULL;
    ALTER TABLE public.transformer ADD winding_metal3 INT NULL;
    ALTER TABLE public.transformer ADD winding_metal4 INT NULL;
"""
    op.execute(sql=sql)


def downgrade():
    sql = """
    -- manufacturer_id to gasSensor
    ALTER TABLE public.gas_sensor DROP manufacturer_id;

    -- add bushing flds from Equipment (mfr_h1_id...type_qn)
    ALTER TABLE public.bushing DROP mfr_h1_id;
    ALTER TABLE public.bushing DROP mfr_h2_id;
    ALTER TABLE public.bushing DROP mfr_h3_id;
    ALTER TABLE public.bushing DROP mfr_hn_id;
    ALTER TABLE public.bushing DROP mfr_x1_id;
    ALTER TABLE public.bushing DROP mfr_x2_id;
    ALTER TABLE public.bushing DROP mfr_x3_id;
    ALTER TABLE public.bushing DROP mfr_xn_id;
    ALTER TABLE public.bushing DROP mfr_t1_id;
    ALTER TABLE public.bushing DROP mfr_t2_id;
    ALTER TABLE public.bushing DROP mfr_t3_id;
    ALTER TABLE public.bushing DROP mfr_tn_id;
    ALTER TABLE public.bushing DROP mfr_q1_id;
    ALTER TABLE public.bushing DROP mfr_q2_id;
    ALTER TABLE public.bushing DROP mfr_q3_id;
    ALTER TABLE public.bushing DROP mfr_qn_id;
    ALTER TABLE public.bushing DROP type_h;
    ALTER TABLE public.bushing DROP type_hn;
    ALTER TABLE public.bushing DROP type_x;
    ALTER TABLE public.bushing DROP type_xn;
    ALTER TABLE public.bushing DROP type_t;
    ALTER TABLE public.bushing DROP type_tn;
    ALTER TABLE public.bushing DROP type_q;
    ALTER TABLE public.bushing DROP type_qn;

    -- add current_rating to: Capacitor, Cable, LoadTapChanger
    ALTER TABLE public.capacitor DROP current_rating;
    ALTER TABLE public.cable DROP current_rating;
    ALTER TABLE public.tap_changer DROP current_rating;

    -- rename current to current_rating in Bushing
    ALTER TABLE public.bushing RENAME COLUMN current_rating TO current;

    -- rename ratiot_ag8 to ratio_tag8 in Bushing
    ALTER TABLE public.transformer RENAME COLUMN ratio_tag8 TO ratiot_ag8;

    -- add impedance4 and impbasedmva4 to Transformer
    ALTER TABLE public.transformer DROP impedance4;
    ALTER TABLE public.transformer DROP impbasedmva4;

    -- rename windind_metal to winding_metal1
    ALTER TABLE public.transformer RENAME COLUMN winding_metal1 TO windind_metal;

    -- add winding_metal2  winding_metal3  winding_metal4 to transformer
    ALTER TABLE public.transformer DROP winding_metal2;
    ALTER TABLE public.transformer DROP winding_metal3;
    ALTER TABLE public.transformer DROP winding_metal4;
"""
    op.execute(sql=sql)

