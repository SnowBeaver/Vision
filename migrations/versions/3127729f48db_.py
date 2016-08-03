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

    sql += """
    ALTER TABLE public.campaign DROP equipment_id;

    ALTER TABLE public.campaign DROP bushing;
    ALTER TABLE public.campaign DROP winding;
    ALTER TABLE public.campaign DROP insulation_pf;
    ALTER TABLE public.campaign DROP insulation;
    ALTER TABLE public.campaign DROP visual_inspection;
    ALTER TABLE public.campaign DROP resistance;
    ALTER TABLE public.campaign DROP degree;
    ALTER TABLE public.campaign DROP turns;

    ALTER TABLE public.campaign DROP gas;
    ALTER TABLE public.campaign DROP water;
    ALTER TABLE public.campaign DROP furans;
    ALTER TABLE public.campaign DROP inhibitor;
    ALTER TABLE public.campaign DROP pcb;
    ALTER TABLE public.campaign DROP qty;
    ALTER TABLE public.campaign DROP sampling;

    ALTER TABLE public.campaign DROP dielec;
    ALTER TABLE public.campaign DROP acidity;
    ALTER TABLE public.campaign DROP density;
    ALTER TABLE public.campaign DROP pcb_jar;
    ALTER TABLE public.campaign DROP inhibitor_jar;
    ALTER TABLE public.campaign DROP point;
    ALTER TABLE public.campaign DROP dielec_2;
    ALTER TABLE public.campaign DROP color;
    ALTER TABLE public.campaign DROP pf;
    ALTER TABLE public.campaign DROP particles;
    ALTER TABLE public.campaign DROP metals;
    ALTER TABLE public.campaign DROP viscosity;
    ALTER TABLE public.campaign DROP dielec_d;
    ALTER TABLE public.campaign DROP ift;
    ALTER TABLE public.campaign DROP pf_100;
    ALTER TABLE public.campaign DROP furans_f;
    ALTER TABLE public.campaign DROP water_w;
    ALTER TABLE public.campaign DROP corr;
    ALTER TABLE public.campaign DROP dielec_i;
    ALTER TABLE public.campaign DROP visual;
    ALTER TABLE public.campaign DROP qty_jar;
    ALTER TABLE public.campaign DROP sampling_jar;

    ALTER TABLE public.campaign DROP pcb_vial;
    ALTER TABLE public.campaign DROP antioxidant;
    ALTER TABLE public.campaign DROP qty_vial;
    ALTER TABLE public.campaign DROP sampling_vial;

    """

    sql += """
    ALTER TABLE public.test_result ADD bushing BOOLEAN DEFAULT FALSE NULL;
    ALTER TABLE public.test_result ADD winding BOOLEAN DEFAULT FALSE NULL;
    ALTER TABLE public.test_result ADD insulation_pf BOOLEAN DEFAULT FALSE NULL;
    ALTER TABLE public.test_result ADD insulation BOOLEAN DEFAULT FALSE NULL;
    ALTER TABLE public.test_result ADD visual_inspection BOOLEAN DEFAULT FALSE NULL;
    ALTER TABLE public.test_result ADD resistance BOOLEAN DEFAULT FALSE NULL;
    ALTER TABLE public.test_result ADD degree BOOLEAN DEFAULT FALSE NULL;
    ALTER TABLE public.test_result ADD turns BOOLEAN DEFAULT FALSE NULL;

    ALTER TABLE public.test_result ADD gas BOOLEAN DEFAULT FALSE NULL;
    ALTER TABLE public.test_result ADD water BOOLEAN DEFAULT FALSE NULL;
    ALTER TABLE public.test_result ADD furans BOOLEAN DEFAULT FALSE NULL;
    ALTER TABLE public.test_result ADD inhibitor BOOLEAN DEFAULT FALSE NULL;
    ALTER TABLE public.test_result ADD pcb BOOLEAN DEFAULT FALSE NULL;
    ALTER TABLE public.test_result ADD qty INT DEFAULT 0 NULL;
    ALTER TABLE public.test_result ADD sampling INT DEFAULT 0 NULL;

    ALTER TABLE public.test_result ADD dielec BOOLEAN DEFAULT FALSE NULL;
    ALTER TABLE public.test_result ADD acidity BOOLEAN DEFAULT FALSE NULL;
    ALTER TABLE public.test_result ADD density BOOLEAN DEFAULT FALSE NULL;
    ALTER TABLE public.test_result ADD pcb_jar BOOLEAN DEFAULT FALSE NULL;
    ALTER TABLE public.test_result ADD inhibitor_jar BOOLEAN DEFAULT FALSE NULL;
    ALTER TABLE public.test_result ADD point BOOLEAN DEFAULT FALSE NULL;
    ALTER TABLE public.test_result ADD dielec_2 BOOLEAN DEFAULT FALSE NULL;
    ALTER TABLE public.test_result ADD color BOOLEAN DEFAULT FALSE NULL;
    ALTER TABLE public.test_result ADD pf BOOLEAN DEFAULT FALSE NULL;
    ALTER TABLE public.test_result ADD particles BOOLEAN DEFAULT FALSE NULL;
    ALTER TABLE public.test_result ADD metals BOOLEAN DEFAULT FALSE NULL;
    ALTER TABLE public.test_result ADD viscosity BOOLEAN DEFAULT FALSE NULL;
    ALTER TABLE public.test_result ADD dielec_d BOOLEAN DEFAULT FALSE NULL;
    ALTER TABLE public.test_result ADD ift BOOLEAN DEFAULT FALSE NULL;
    ALTER TABLE public.test_result ADD pf_100 BOOLEAN DEFAULT FALSE NULL;
    ALTER TABLE public.test_result ADD furans_f BOOLEAN DEFAULT FALSE NULL;
    ALTER TABLE public.test_result ADD water_w BOOLEAN DEFAULT FALSE NULL;
    ALTER TABLE public.test_result ADD corr BOOLEAN DEFAULT FALSE NULL;
    ALTER TABLE public.test_result ADD dielec_i BOOLEAN DEFAULT FALSE NULL;
    ALTER TABLE public.test_result ADD visual BOOLEAN DEFAULT FALSE NULL;
    ALTER TABLE public.test_result ADD qty_jar INT DEFAULT 0 NULL;
    ALTER TABLE public.test_result ADD sampling_jar INT DEFAULT 0 NULL;

    ALTER TABLE public.test_result ADD pcb_vial BOOLEAN DEFAULT FALSE NULL;
    ALTER TABLE public.test_result ADD antioxidant BOOLEAN DEFAULT FALSE NULL;
    ALTER TABLE public.test_result ADD qty_vial INT DEFAULT 0 NULL;
    ALTER TABLE public.test_result ADD sampling_vial INT DEFAULT 0 NULL;
    """
    op.execute(sql=sql)


def downgrade():
    pass
