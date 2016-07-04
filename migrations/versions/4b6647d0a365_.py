"""empty message

Revision ID: 4b6647d0a365
Revises: 3988ab56982f
Create Date: 2016-07-01 18:15:00.553566

"""

# revision identifiers, used by Alembic.
revision = '4b6647d0a365'
down_revision = '3988ab56982f'

from alembic import op

def upgrade():
    sql = """INSERT INTO public."recommendation" ("test_type_id", "code", "name") VALUES (16, 1, 'Less than 50 ppm --> Not contaminated');
INSERT INTO public."recommendation" ("test_type_id", "code", "name") VALUES (16, 2, 'More than 50 ppm --> Contaminated');
INSERT INTO public."recommendation" ("test_type_id", "code", "name") VALUES (22, 1, 'No action');
INSERT INTO public."recommendation" ("test_type_id", "code", "name") VALUES (22, 2, 'Between 200 and 500 ppm --> Sample one litre for physical and schedule addition of DBPC');
INSERT INTO public."recommendation" ("test_type_id", "code", "name") VALUES (22, 3, 'Less than 200 ppm --> Sample one litre for physical and verify for oil degradation. Process oil if necessary and add DBPC.');
INSERT INTO public."recommendation" ("test_type_id", "code", "name") VALUES (22, 4, 'Other recommendations (specify)');
INSERT INTO public."recommendation" ("test_type_id", "code", "name") VALUES (22, 5, 'Future, do not use');
INSERT INTO public."recommendation" ("test_type_id", "code", "name") VALUES (14, 1, 'No action');
INSERT INTO public."recommendation" ("test_type_id", "code", "name") VALUES (14, 2, 'Other recommendations (specify)');
INSERT INTO public."recommendation" ("test_type_id", "code", "name") VALUES (14, 3, 'Future, do not use');
INSERT INTO public."recommendation" ("test_type_id", "code", "name") VALUES (14, 4, 'Future, do not use');
INSERT INTO public."recommendation" ("test_type_id", "code", "name") VALUES (12, 1, 'No action');
INSERT INTO public."recommendation" ("test_type_id", "code", "name") VALUES (12, 2, 'Resample 4 ml for BPC up to scheduled date');
INSERT INTO public."recommendation" ("test_type_id", "code", "name") VALUES (12, 3, 'Resample 4 ml for BPC and one syringe for dissolved gases up to scheduled date');
INSERT INTO public."recommendation" ("test_type_id", "code", "name") VALUES (12, 4, 'Resample one syringe for dissolved gases and dissolved water up to scheduled date');
INSERT INTO public."recommendation" ("test_type_id", "code", "name") VALUES (12, 5, 'Resample one syringe for dissolved gases within 24 hours and send immediately to lab');
INSERT INTO public."recommendation" ("test_type_id", "code", "name") VALUES (12, 6, 'Resample one syringe for dissolved gases up to scheduled date');
INSERT INTO public."recommendation" ("test_type_id", "code", "name") VALUES (12, 7, 'Leave in service and resample one syringe for dissolved gases up to schedule date and schedule internal inspection');
INSERT INTO public."recommendation" ("test_type_id", "code", "name") VALUES (12, 8, 'Deenergize immediately and schedule internal inspection.  Reenergize in extreme cases only');
INSERT INTO public."recommendation" ("test_type_id", "code", "name") VALUES (12, 9, 'Deenergize immediately and schedule internal inspection');
INSERT INTO public."recommendation" ("test_type_id", "code", "name") VALUES (12, 10, 'Sample a syringe for furfurals analysis');
INSERT INTO public."recommendation" ("test_type_id", "code", "name") VALUES (12, 11, 'Sample 48 hours after equipment has been loaded');
INSERT INTO public."recommendation" ("test_type_id", "code", "name") VALUES (12, 12, 'Verify tap changer contacts in main tank and/or leaks from tap changer compartment and resample after repair');
INSERT INTO public."recommendation" ("test_type_id", "code", "name") VALUES (12, 13, 'Resample one syringe for dissolved gases, water and DBPC up to scheduled date');
INSERT INTO public."recommendation" ("test_type_id", "code", "name") VALUES (12, 14, 'Resample one syringe for water up to scheduled date');
INSERT INTO public."recommendation" ("test_type_id", "code", "name") VALUES (12, 15, 'Resample one syringe for dissolved water and DBPC up to scheduled date');
INSERT INTO public."recommendation" ("test_type_id", "code", "name") VALUES (12, 16, 'Resample 4 ml for DBPC up to scheduled date');
INSERT INTO public."recommendation" ("test_type_id", "code", "name") VALUES (12, 20, 'Other recommendations (specify)');
INSERT INTO public."recommendation" ("test_type_id", "code", "name") VALUES (12, 21, 'Future, do not use');
INSERT INTO public."recommendation" ("test_type_id", "code", "name") VALUES (12, 22, 'Future, do not use');
INSERT INTO public."recommendation" ("test_type_id", "code", "name") VALUES (1, 1, 'No action');
INSERT INTO public."recommendation" ("test_type_id", "code", "name") VALUES (1, 2, 'Other recommendations (specify)');
INSERT INTO public."recommendation" ("test_type_id", "code", "name") VALUES (1, 3, 'Future, do not use');
INSERT INTO public."recommendation" ("test_type_id", "code", "name") VALUES (1, 4, 'Future, do not use');
INSERT INTO public."recommendation" ("test_type_id", "code", "name") VALUES (1, 1, 'No action');
INSERT INTO public."recommendation" ("test_type_id", "code", "name") VALUES (1, 2, 'Other recommendations (specify)');
INSERT INTO public."recommendation" ("test_type_id", "code", "name") VALUES (1, 3, 'Future, do not use');
INSERT INTO public."recommendation" ("test_type_id", "code", "name") VALUES (1, 4, 'Future, do not use');
INSERT INTO public."recommendation" ("test_type_id", "code", "name") VALUES (10, 1, 'No action');
INSERT INTO public."recommendation" ("test_type_id", "code", "name") VALUES (10, 2, 'Resample 4 ml for BPC up to scheduled date');
INSERT INTO public."recommendation" ("test_type_id", "code", "name") VALUES (10, 3, 'Resample 4 ml for BPC and one litre for physical up to scheduled date');
INSERT INTO public."recommendation" ("test_type_id", "code", "name") VALUES (10, 4, 'Resample one litre for power factor up to schedule date');
INSERT INTO public."recommendation" ("test_type_id", "code", "name") VALUES (10, 5, 'Resample 2 litres for physical and power factor up to scheduled date');
INSERT INTO public."recommendation" ("test_type_id", "code", "name") VALUES (10, 6, 'Resample one litre for physical up to scheduled date');
INSERT INTO public."recommendation" ("test_type_id", "code", "name") VALUES (10, 7, 'Leave in service and schedule coil dryout within one year and resample for water content after 1 month of normal and constant operation');
INSERT INTO public."recommendation" ("test_type_id", "code", "name") VALUES (10, 8, 'Leave in service and schedule a complete oil treatment (degassing and fuller earth) within scheduled date');
INSERT INTO public."recommendation" ("test_type_id", "code", "name") VALUES (10, 9, 'Leave in service and schedule replacement of oil at scheduled date.  Process used oil');
INSERT INTO public."recommendation" ("test_type_id", "code", "name") VALUES (10, 10, 'Leave in service and schedule oil replacement immediately. Discard old oil');
INSERT INTO public."recommendation" ("test_type_id", "code", "name") VALUES (10, 11, 'Take out of service and process oil in the equipment');
INSERT INTO public."recommendation" ("test_type_id", "code", "name") VALUES (10, 12, 'Take out of service and replace oil.  Process old oil');
INSERT INTO public."recommendation" ("test_type_id", "code", "name") VALUES (10, 13, 'Take out of service and replace oil. Discard old oil');
INSERT INTO public."recommendation" ("test_type_id", "code", "name") VALUES (10, 14, 'Resample one syringe  for water and BPC within scheduled date');
INSERT INTO public."recommendation" ("test_type_id", "code", "name") VALUES (10, 15, 'Resample one syringe for water only within scheduled date');
INSERT INTO public."recommendation" ("test_type_id", "code", "name") VALUES (10, 16, 'Resample 4 ml of oil for DBPC  within scheduled date');
INSERT INTO public."recommendation" ("test_type_id", "code", "name") VALUES (10, 17, 'Resample one litre for physical and 4 ml for DBPC within scheduled date');
INSERT INTO public."recommendation" ("test_type_id", "code", "name") VALUES (10, 18, 'Resample one litre for physical and one syringe for water within scheduled date');
INSERT INTO public."recommendation" ("test_type_id", "code", "name") VALUES (10, 19, 'Resample one litre for metal in oil and one litre for physical within scheduled date');
INSERT INTO public."recommendation" ("test_type_id", "code", "name") VALUES (10, 20, 'Resample one litre for metal in oil within scheduled date');
INSERT INTO public."recommendation" ("test_type_id", "code", "name") VALUES (10, 21, 'Resample one syringe for furfurals within scheduled date');
INSERT INTO public."recommendation" ("test_type_id", "code", "name") VALUES (10, 24, 'Other recommendations (specify)');
INSERT INTO public."recommendation" ("test_type_id", "code", "name") VALUES (10, 25, 'Future, do not use');
INSERT INTO public."recommendation" ("test_type_id", "code", "name") VALUES (10, 26, 'Future, do not use');
"""
    op.execute(sql=sql)

def downgrade():
    op.execute("TRUNCATE recomendation CASCADE")