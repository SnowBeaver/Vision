"""empty message

Revision ID: 37c761e3ba3
Revises: a04e1321619
Create Date: 2017-10-17 15:53:53.521691

"""

# revision identifiers, used by Alembic.
revision = '37c761e3ba3'
down_revision = 'a04e1321619'

from alembic import op
import sqlalchemy as sa

def upgrade():
    sql = """
        CREATE OR REPLACE VIEW public.data_view AS 
 SELECT ds.h2,
    ds.o2,
    ds.n2,
    ds.co,
    ds.ch4,
    ds.co2,
    ds.c2h2,
    ds.c2h4,
    ds.c2h6,
    fl.dielectric_1816,
    fl.dielectric_1816_2,
    fl.dielectric_877,
    fl.dielectric_iec_156,
    fl.acidity,
    fl.color,
    fl.ift,
    fl.density,
    fl.pf20c,
    fl.pf100c,
    fl.sludge,
    fl.aniline_point,
    fl.viscosity,
    fl.flash_point,
    fl.pour_point,
    inh.inhibitor,
    w.water,
    pcb.aroclor_1242,
    pcb.aroclor_1254,
    pcb.aroclor_1260,
    fu.hmf,
    fu.fol,
    fu.fal,
    fu.acf,
    fu.mef,
    ts.id,
    ts.equipment_id,
    ts.date_analyse,
    ds.cap_gaz,
    ds.content_gaz,
    tt.name AS test_name
   FROM test_result ts
     LEFT JOIN dissolved_gas_test ds ON ds.test_result_id = ts.id
     LEFT JOIN fluid_test fl ON fl.test_result_id = ts.id
     LEFT JOIN inhibitor_test inh ON inh.test_result_id = ts.id
     LEFT JOIN water_test w ON w.test_result_id = ts.id
     LEFT JOIN pcb_test pcb ON pcb.test_result_id = ts.id
     LEFT JOIN furan_test fu ON fu.test_result_id = ts.id
     LEFT JOIN test_type tt ON tt.id = ts.test_type_id;

ALTER TABLE public.data_view
  OWNER TO vision;
COMMENT ON VIEW public.data_view
  IS 'aS';

    """
    op.execute(sql=sql)


def downgrade():
    sql = """
        CREATE OR REPLACE VIEW public.data_view AS 
 SELECT ds.h2,
    ds.o2,
    ds.n2,
    ds.co,
    ds.ch4,
    ds.co2,
    ds.c2h2,
    ds.c2h4,
    ds.c2h6,
    fl.dielectric_1816,
    fl.dielectric_1816_2,
    fl.dielectric_877,
    fl.dielectric_iec_156,
    fl.acidity,
    fl.color,
    fl.ift,
    fl.density,
    fl.pf20c,
    fl.pf100c,
    fl.sludge,
    fl.aniline_point,
    fl.viscosity,
    fl.flash_point,
    fl.pour_point,
    inh.inhibitor,
    w.water,
    pcb.aroclor_1242,
    pcb.aroclor_1254,
    pcb.aroclor_1260,
    fu.hmf,
    fu.fol,
    fu.fal,
    fu.acf,
    fu.mef,
    ts.id,
    ts.equipment_id,
    ts.date_analyse,
    ds.cap_gaz,
    ds.content_gaz
   FROM test_result ts
     LEFT JOIN dissolved_gas_test ds ON ds.test_result_id = ts.id
     LEFT JOIN fluid_test fl ON fl.test_result_id = ts.id
     LEFT JOIN inhibitor_test inh ON inh.test_result_id = ts.id
     LEFT JOIN water_test w ON w.test_result_id = ts.id
     LEFT JOIN pcb_test pcb ON pcb.test_result_id = ts.id
     LEFT JOIN furan_test fu ON fu.test_result_id = ts.id;

ALTER TABLE public.data_view
  OWNER TO vision;
COMMENT ON VIEW public.data_view
  IS 'aS';

    """
    op.execute(sql=sql)
