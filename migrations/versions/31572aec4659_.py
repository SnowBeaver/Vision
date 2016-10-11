"""empty message

Revision ID: 31572aec4659
Revises: 3ca82e77999c
Create Date: 2016-10-07 14:27:29.643997

"""

# revision identifiers, used by Alembic.
revision = '31572aec4659'
down_revision = '3ca82e77999c'

from alembic import op
import sqlalchemy as sa


def upgrade():
    sql = """
        TRUNCATE recommendation CASCADE;
        ALTER SEQUENCE recommendation_id_seq RESTART WITH 1;
        INSERT INTO public.recommendation (name, code, description, test_type_id) VALUES ('Less than 50 ppm --> Not contaminated', '1', null, 16);
        INSERT INTO public.recommendation (name, code, description, test_type_id) VALUES ('More than 50 ppm --> Contaminated', '2', null, 16);
        INSERT INTO public.recommendation (name, code, description, test_type_id) VALUES ('No action', '1', 'Less than 200 ppm --> Sample one litre for physical and verify for oil degradation. Process oil if necessary and add DBPC.Less than 200 ppm --> Sample one litre for physical and verify for oil degradation. Process oil if necessary and add DBPC.Less than 200 ppm --> Sample one litre for physical and verify for oil degradation. Process oil if necessary and add DBPC.Less than 200 ppm --> Sample one litre for physical and verify for oil degradation. Process oil if necessary and add DBPC.Less than 200 ppm --> Sample one litre for physical and verify for oil degradation. Process oil if necessary and add DBPC.Less than 200 ppm --> Sample one litre for physical and verify for oil degradation. Process oil if necessary and add DBPC.Less than 200 ppm --> Sample one litre for physical and verify for oil degradation. Process oil if necessary and add DBPC.Less than 200 ppm --> Sample one litre for physical and verify for oil degradation. Process oil if necessary and add DBPC.Less than 200 ppm --> Sample one litre for physical and verify for oil degradation. Process oil if necessary and add DBPC.Less than 200 ppm --> Sample one litre for physical and verify for oil degradation. Process oil if necessary and add DBPC.Less than 200 ppm --> Sample one litre for physical and verify for oil degradation. Process oil if necessary and add DBPC.', 22);
        INSERT INTO public.recommendation (name, code, description, test_type_id) VALUES ('Between 200 and 500 ppm --> Sample one litre for physical and schedule addition of DBPC', '2', null, 22);
        INSERT INTO public.recommendation (name, code, description, test_type_id) VALUES ('Less than 200 ppm --> Sample one litre for physical and verify for oil degradation. Process oil if necessary and add DBPC.', '3', null, 22);
        INSERT INTO public.recommendation (name, code, description, test_type_id) VALUES ('Other recommendations (specify)', '4', null, 22);
        INSERT INTO public.recommendation (name, code, description, test_type_id) VALUES ('Future, do not use', '5', null, 22);
        INSERT INTO public.recommendation (name, code, description, test_type_id) VALUES ('Resample 4 ml for BPC up to scheduled date', '2', null, 12);
        INSERT INTO public.recommendation (name, code, description, test_type_id) VALUES ('Resample 4 ml for BPC and one syringe for dissolved gases up to scheduled date', '3', null, 12);
        INSERT INTO public.recommendation (name, code, description, test_type_id) VALUES ('Resample one syringe for dissolved gases and dissolved water up to scheduled date', '4', null, 12);
        INSERT INTO public.recommendation (name, code, description, test_type_id) VALUES ('Resample one syringe for dissolved gases within 24 hours and send immediately to lab', '5', null, 12);
        INSERT INTO public.recommendation (name, code, description, test_type_id) VALUES ('Resample one syringe for dissolved gases up to scheduled date', '6', null, 12);
        INSERT INTO public.recommendation (name, code, description, test_type_id) VALUES ('Leave in service and resample one syringe for dissolved gases up to schedule date and schedule internal inspection', '7', null, 12);
        INSERT INTO public.recommendation (name, code, description, test_type_id) VALUES ('Deenergize immediately and schedule internal inspection.  Reenergize in extreme cases only', '8', null, 12);
        INSERT INTO public.recommendation (name, code, description, test_type_id) VALUES ('Deenergize immediately and schedule internal inspection', '9', null, 12);
        INSERT INTO public.recommendation (name, code, description, test_type_id) VALUES ('Sample a syringe for furfurals analysis', '10', null, 12);
        INSERT INTO public.recommendation (name, code, description, test_type_id) VALUES ('Sample 48 hours after equipment has been loaded', '11', null, 12);
        INSERT INTO public.recommendation (name, code, description, test_type_id) VALUES ('Verify tap changer contacts in main tank and/or leaks from tap changer compartment and resample after repair', '12', null, 12);
        INSERT INTO public.recommendation (name, code, description, test_type_id) VALUES ('Resample one syringe for dissolved gases, water and DBPC up to scheduled date', '13', null, 12);
        INSERT INTO public.recommendation (name, code, description, test_type_id) VALUES ('Resample one syringe for water up to scheduled date', '14', null, 12);
        INSERT INTO public.recommendation (name, code, description, test_type_id) VALUES ('Resample one syringe for dissolved water and DBPC up to scheduled date', '15', null, 12);
        INSERT INTO public.recommendation (name, code, description, test_type_id) VALUES ('Resample 4 ml for DBPC up to scheduled date', '16', null, 12);
        INSERT INTO public.recommendation (name, code, description, test_type_id) VALUES ('Resample 4 ml for BPC and one litre for physical up to scheduled date', '3', null, 10);
        INSERT INTO public.recommendation (name, code, description, test_type_id) VALUES ('Resample one litre for power factor up to schedule date', '4', null, 10);
        INSERT INTO public.recommendation (name, code, description, test_type_id) VALUES ('Resample 2 litres for physical and power factor up to scheduled date', '5', null, 10);
        INSERT INTO public.recommendation (name, code, description, test_type_id) VALUES ('Resample one litre for physical up to scheduled date', '6', null, 10);
        INSERT INTO public.recommendation (name, code, description, test_type_id) VALUES ('Leave in service and schedule coil dryout within one year and resample for water content after 1 month of normal and constant operation', '7', null, 10);
        INSERT INTO public.recommendation (name, code, description, test_type_id) VALUES ('Leave in service and schedule a complete oil treatment (degassing and fuller earth) within scheduled date', '8', null, 10);
        INSERT INTO public.recommendation (name, code, description, test_type_id) VALUES ('Leave in service and schedule replacement of oil at scheduled date.  Process used oil', '9', null, 10);
        INSERT INTO public.recommendation (name, code, description, test_type_id) VALUES ('Leave in service and schedule oil replacement immediately. Discard old oil', '10', null, 10);
        INSERT INTO public.recommendation (name, code, description, test_type_id) VALUES ('Take out of service and process oil in the equipment', '11', null, 10);
        INSERT INTO public.recommendation (name, code, description, test_type_id) VALUES ('Take out of service and replace oil.  Process old oil', '12', null, 10);
        INSERT INTO public.recommendation (name, code, description, test_type_id) VALUES ('Take out of service and replace oil. Discard old oil', '13', null, 10);
        INSERT INTO public.recommendation (name, code, description, test_type_id) VALUES ('Resample one syringe  for water and BPC within scheduled date', '14', null, 10);
        INSERT INTO public.recommendation (name, code, description, test_type_id) VALUES ('Resample one syringe for water only within scheduled date', '15', null, 10);
        INSERT INTO public.recommendation (name, code, description, test_type_id) VALUES ('Resample 4 ml of oil for DBPC  within scheduled date', '16', null, 10);
        INSERT INTO public.recommendation (name, code, description, test_type_id) VALUES ('Resample one litre for physical and 4 ml for DBPC within scheduled date', '17', null, 10);
        INSERT INTO public.recommendation (name, code, description, test_type_id) VALUES ('Resample one litre for physical and one syringe for water within scheduled date', '18', null, 10);
        INSERT INTO public.recommendation (name, code, description, test_type_id) VALUES ('Resample one litre for metal in oil and one litre for physical within scheduled date', '19', null, 10);
        INSERT INTO public.recommendation (name, code, description, test_type_id) VALUES ('Resample one litre for metal in oil within scheduled date', '20', null, 10);
        INSERT INTO public.recommendation (name, code, description, test_type_id) VALUES ('Resample one syringe for furfurals within scheduled date', '21', null, 10);
    """
    op.execute(sql=sql)


def downgrade():
    pass
