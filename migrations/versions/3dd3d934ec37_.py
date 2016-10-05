"""empty message

Revision ID: 3dd3d934ec37
Revises: 239b5ebee38c
Create Date: 2016-10-05 07:56:00.999781

"""

# revision identifiers, used by Alembic.
revision = '3dd3d934ec37'
down_revision = '239b5ebee38c'

from alembic import op
import sqlalchemy as sa


def upgrade():
    sql = """
          DELETE FROM public.recommendation
          WHERE id BETWEEN 75 AND 136
                AND id IN (SELECT id
                      FROM (SELECT   id
                                   , ROW_NUMBER() OVER (partition BY "name" ORDER BY id) AS rnum
                            FROM public.recommendation) t
                      WHERE t.rnum > 1
                            AND id BETWEEN 75 AND 136);
    """
    op.execute(sql=sql)


def downgrade():
    sql = """
        INSERT INTO public.recommendation (id, name, code, description, test_type_id) SELECT 75, 'Less than 50 ppm --> Not contaminated', '1', null, 16 WHERE NOT EXISTS (SELECT 1 FROM public.recommendation WHERE id=75);
        INSERT INTO public.recommendation (id, name, code, description, test_type_id) SELECT 76, 'More than 50 ppm --> Contaminated', '2', null, 16  WHERE NOT EXISTS (SELECT 1 FROM public.recommendation WHERE id=76);
        INSERT INTO public.recommendation (id, name, code, description, test_type_id) SELECT 77, 'No action', '1', 'Less than 200 ppm --> Sample one litre for physical and verify for oil degradation. Process oil if necessary and add DBPC.Less than 200 ppm --> Sample one litre for physical and verify for oil degradation. Process oil if necessary and add DBPC.Less than 200 ppm --> Sample one litre for physical and verify for oil degradation. Process oil if necessary and add DBPC.Less than 200 ppm --> Sample one litre for physical and verify for oil degradation. Process oil if necessary and add DBPC.Less than 200 ppm --> Sample one litre for physical and verify for oil degradation. Process oil if necessary and add DBPC.Less than 200 ppm --> Sample one litre for physical and verify for oil degradation. Process oil if necessary and add DBPC.Less than 200 ppm --> Sample one litre for physical and verify for oil degradation. Process oil if necessary and add DBPC.Less than 200 ppm --> Sample one litre for physical and verify for oil degradation. Process oil if necessary and add DBPC.Less than 200 ppm --> Sample one litre for physical and verify for oil degradation. Process oil if necessary and add DBPC.Less than 200 ppm --> Sample one litre for physical and verify for oil degradation. Process oil if necessary and add DBPC.Less than 200 ppm --> Sample one litre for physical and verify for oil degradation. Process oil if necessary and add DBPC.', 22 WHERE NOT EXISTS (SELECT 1 FROM public.recommendation WHERE id=77);
        INSERT INTO public.recommendation (id, name, code, description, test_type_id) SELECT 78, 'Between 200 and 500 ppm --> Sample one litre for physical and schedule addition of DBPC', '2', null, 22  WHERE NOT EXISTS (SELECT 1 FROM public.recommendation WHERE id=78);
        INSERT INTO public.recommendation (id, name, code, description, test_type_id) SELECT 79, 'Less than 200 ppm --> Sample one litre for physical and verify for oil degradation. Process oil if necessary and add DBPC.', '3', null, 22  WHERE NOT EXISTS (SELECT 1 FROM public.recommendation WHERE id=79);
        INSERT INTO public.recommendation (id, name, code, description, test_type_id) SELECT 80, 'Other recommendations (specify)', '4', null, 22  WHERE NOT EXISTS (SELECT 1 FROM public.recommendation WHERE id=80);
        INSERT INTO public.recommendation (id, name, code, description, test_type_id) SELECT 81, 'Future, do not use', '5', null, 22  WHERE NOT EXISTS (SELECT 1 FROM public.recommendation WHERE id=81);
        INSERT INTO public.recommendation (id, name, code, description, test_type_id) SELECT 82, 'No action', '1', null, 14  WHERE NOT EXISTS (SELECT 1 FROM public.recommendation WHERE id=82);
        INSERT INTO public.recommendation (id, name, code, description, test_type_id) SELECT 83, 'Other recommendations (specify)', '2', null, 14  WHERE NOT EXISTS (SELECT 1 FROM public.recommendation WHERE id=83);
        INSERT INTO public.recommendation (id, name, code, description, test_type_id) SELECT 84, 'Future, do not use', '3', null, 14  WHERE NOT EXISTS (SELECT 1 FROM public.recommendation WHERE id=84);
        INSERT INTO public.recommendation (id, name, code, description, test_type_id) SELECT 85, 'Future, do not use', '4', null, 14  WHERE NOT EXISTS (SELECT 1 FROM public.recommendation WHERE id=85);
        INSERT INTO public.recommendation (id, name, code, description, test_type_id) SELECT 86, 'No action', '1', null, 12  WHERE NOT EXISTS (SELECT 1 FROM public.recommendation WHERE id=86);
        INSERT INTO public.recommendation (id, name, code, description, test_type_id) SELECT 87, 'Resample 4 ml for BPC up to scheduled date', '2', null, 12  WHERE NOT EXISTS (SELECT 1 FROM public.recommendation WHERE id=87);
        INSERT INTO public.recommendation (id, name, code, description, test_type_id) SELECT 88, 'Resample 4 ml for BPC and one syringe for dissolved gases up to scheduled date', '3', null, 12 WHERE NOT EXISTS (SELECT 1 FROM public.recommendation WHERE id=88);
        INSERT INTO public.recommendation (id, name, code, description, test_type_id) SELECT 89, 'Resample one syringe for dissolved gases and dissolved water up to scheduled date', '4', null, 12 WHERE NOT EXISTS (SELECT 1 FROM public.recommendation WHERE id=89);
        INSERT INTO public.recommendation (id, name, code, description, test_type_id) SELECT 90, 'Resample one syringe for dissolved gases within 24 hours and send immediately to lab', '5', null, 12  WHERE NOT EXISTS (SELECT 1 FROM public.recommendation WHERE id=90);
        INSERT INTO public.recommendation (id, name, code, description, test_type_id) SELECT 91, 'Resample one syringe for dissolved gases up to scheduled date', '6', null, 12 WHERE NOT EXISTS (SELECT 1 FROM public.recommendation WHERE id=91);
        INSERT INTO public.recommendation (id, name, code, description, test_type_id) SELECT 92, 'Leave in service and resample one syringe for dissolved gases up to schedule date and schedule internal inspection', '7', null, 12 WHERE NOT EXISTS (SELECT 1 FROM public.recommendation WHERE id=92);
        INSERT INTO public.recommendation (id, name, code, description, test_type_id) SELECT 93, 'Deenergize immediately and schedule internal inspection.  Reenergize in extreme cases only', '8', null, 12 WHERE NOT EXISTS (SELECT 1 FROM public.recommendation WHERE id=93);
        INSERT INTO public.recommendation (id, name, code, description, test_type_id) SELECT 94, 'Deenergize immediately and schedule internal inspection', '9', null, 12  WHERE NOT EXISTS (SELECT 1 FROM public.recommendation WHERE id=94);
        INSERT INTO public.recommendation (id, name, code, description, test_type_id) SELECT 95, 'Sample a syringe for furfurals analysis', '10', null, 12 WHERE NOT EXISTS (SELECT 1 FROM public.recommendation WHERE id=95);
        INSERT INTO public.recommendation (id, name, code, description, test_type_id) SELECT 96, 'Sample 48 hours after equipment has been loaded', '11', null, 12 WHERE NOT EXISTS (SELECT 1 FROM public.recommendation WHERE id=96);
        INSERT INTO public.recommendation (id, name, code, description, test_type_id) SELECT 97, 'Verify tap changer contacts in main tank and/or leaks from tap changer compartment and resample after repair', '12', null, 12 WHERE NOT EXISTS (SELECT 1 FROM public.recommendation WHERE id=97);
        INSERT INTO public.recommendation (id, name, code, description, test_type_id) SELECT 98, 'Resample one syringe for dissolved gases, water and DBPC up to scheduled date', '13', null, 12 WHERE NOT EXISTS (SELECT 1 FROM public.recommendation WHERE id=98);
        INSERT INTO public.recommendation (id, name, code, description, test_type_id) SELECT 99, 'Resample one syringe for water up to scheduled date', '14', null, 12 WHERE NOT EXISTS (SELECT 1 FROM public.recommendation WHERE id=99);
        INSERT INTO public.recommendation (id, name, code, description, test_type_id) SELECT 100, 'Resample one syringe for dissolved water and DBPC up to scheduled date', '15', null, 12 WHERE NOT EXISTS (SELECT 1 FROM public.recommendation WHERE id=100);
        INSERT INTO public.recommendation (id, name, code, description, test_type_id) SELECT 101, 'Resample 4 ml for DBPC up to scheduled date', '16', null, 12 WHERE NOT EXISTS (SELECT 1 FROM public.recommendation WHERE id=101);
        INSERT INTO public.recommendation (id, name, code, description, test_type_id) SELECT 102, 'Other recommendations (specify)', '20', null, 12 WHERE NOT EXISTS (SELECT 1 FROM public.recommendation WHERE id=102);
        INSERT INTO public.recommendation (id, name, code, description, test_type_id) SELECT 103, 'Future, do not use', '21', null, 12 WHERE NOT EXISTS (SELECT 1 FROM public.recommendation WHERE id=103);
        INSERT INTO public.recommendation (id, name, code, description, test_type_id) SELECT 104, 'Future, do not use', '22', null, 12 WHERE NOT EXISTS (SELECT 1 FROM public.recommendation WHERE id=104);
        INSERT INTO public.recommendation (id, name, code, description, test_type_id) SELECT 105, 'No action', '1', null, 1 WHERE NOT EXISTS (SELECT 1 FROM public.recommendation WHERE id=105);
        INSERT INTO public.recommendation (id, name, code, description, test_type_id) SELECT 106, 'Other recommendations (specify)', '2', null, 1 WHERE NOT EXISTS (SELECT 1 FROM public.recommendation WHERE id=106);
        INSERT INTO public.recommendation (id, name, code, description, test_type_id) SELECT 107, 'Future, do not use', '3', null, 1 WHERE NOT EXISTS (SELECT 1 FROM public.recommendation WHERE id=107);
        INSERT INTO public.recommendation (id, name, code, description, test_type_id) SELECT 108, 'Future, do not use', '4', null, 1 WHERE NOT EXISTS (SELECT 1 FROM public.recommendation WHERE id=108);
        INSERT INTO public.recommendation (id, name, code, description, test_type_id) SELECT 109, 'No action', '1', null, 1  WHERE NOT EXISTS (SELECT 1 FROM public.recommendation WHERE id=109);
        INSERT INTO public.recommendation (id, name, code, description, test_type_id) SELECT 110, 'Other recommendations (specify)', '2', null, 1  WHERE NOT EXISTS (SELECT 1 FROM public.recommendation WHERE id=110);
        INSERT INTO public.recommendation (id, name, code, description, test_type_id) SELECT 111, 'Future, do not use', '3', null, 1 WHERE NOT EXISTS (SELECT 1 FROM public.recommendation WHERE id=111);
        INSERT INTO public.recommendation (id, name, code, description, test_type_id) SELECT 112, 'Future, do not use', '4', null, 1 WHERE NOT EXISTS (SELECT 1 FROM public.recommendation WHERE id=112);
        INSERT INTO public.recommendation (id, name, code, description, test_type_id) SELECT 113, 'No action', '1', null, 10 WHERE NOT EXISTS (SELECT 1 FROM public.recommendation WHERE id=113);
        INSERT INTO public.recommendation (id, name, code, description, test_type_id) SELECT 114, 'Resample 4 ml for BPC up to scheduled date', '2', null, 10 WHERE NOT EXISTS (SELECT 1 FROM public.recommendation WHERE id=114);
        INSERT INTO public.recommendation (id, name, code, description, test_type_id) SELECT 115, 'Resample 4 ml for BPC and one litre for physical up to scheduled date', '3', null, 10 WHERE NOT EXISTS (SELECT 1 FROM public.recommendation WHERE id=115);
        INSERT INTO public.recommendation (id, name, code, description, test_type_id) SELECT 116, 'Resample one litre for power factor up to schedule date', '4', null, 10 WHERE NOT EXISTS (SELECT 1 FROM public.recommendation WHERE id=116);
        INSERT INTO public.recommendation (id, name, code, description, test_type_id) SELECT 117, 'Resample 2 litres for physical and power factor up to scheduled date', '5', null, 10 WHERE NOT EXISTS (SELECT 1 FROM public.recommendation WHERE id=117);
        INSERT INTO public.recommendation (id, name, code, description, test_type_id) SELECT 118, 'Resample one litre for physical up to scheduled date', '6', null, 10 WHERE NOT EXISTS (SELECT 1 FROM public.recommendation WHERE id=118);
        INSERT INTO public.recommendation (id, name, code, description, test_type_id) SELECT 119, 'Leave in service and schedule coil dryout within one year and resample for water content after 1 month of normal and constant operation', '7', null, 10 WHERE NOT EXISTS (SELECT 1 FROM public.recommendation WHERE id=119);
        INSERT INTO public.recommendation (id, name, code, description, test_type_id) SELECT 120, 'Leave in service and schedule a complete oil treatment (degassing and fuller earth) within scheduled date', '8', null, 10 WHERE NOT EXISTS (SELECT 1 FROM public.recommendation WHERE id=120);
        INSERT INTO public.recommendation (id, name, code, description, test_type_id) SELECT 121, 'Leave in service and schedule replacement of oil at scheduled date.  Process used oil', '9', null, 10 WHERE NOT EXISTS (SELECT 1 FROM public.recommendation WHERE id=121);
        INSERT INTO public.recommendation (id, name, code, description, test_type_id) SELECT 122, 'Leave in service and schedule oil replacement immediately. Discard old oil', '10', null, 10 WHERE NOT EXISTS (SELECT 1 FROM public.recommendation WHERE id=122);
        INSERT INTO public.recommendation (id, name, code, description, test_type_id) SELECT 123, 'Take out of service and process oil in the equipment', '11', null, 10 WHERE NOT EXISTS (SELECT 1 FROM public.recommendation WHERE id=123);
        INSERT INTO public.recommendation (id, name, code, description, test_type_id) SELECT 124, 'Take out of service and replace oil.  Process old oil', '12', null, 10 WHERE NOT EXISTS (SELECT 1 FROM public.recommendation WHERE id=124);
        INSERT INTO public.recommendation (id, name, code, description, test_type_id) SELECT 125, 'Take out of service and replace oil. Discard old oil', '13', null, 10 WHERE NOT EXISTS (SELECT 1 FROM public.recommendation WHERE id=125);
        INSERT INTO public.recommendation (id, name, code, description, test_type_id) SELECT 126, 'Resample one syringe  for water and BPC within scheduled date', '14', null, 10 WHERE NOT EXISTS (SELECT 1 FROM public.recommendation WHERE id=126);
        INSERT INTO public.recommendation (id, name, code, description, test_type_id) SELECT 127, 'Resample one syringe for water only within scheduled date', '15', null, 10 WHERE NOT EXISTS (SELECT 1 FROM public.recommendation WHERE id=127);
        INSERT INTO public.recommendation (id, name, code, description, test_type_id) SELECT 128, 'Resample 4 ml of oil for DBPC  within scheduled date', '16', null, 10 WHERE NOT EXISTS (SELECT 1 FROM public.recommendation WHERE id=128);
        INSERT INTO public.recommendation (id, name, code, description, test_type_id) SELECT 129, 'Resample one litre for physical and 4 ml for DBPC within scheduled date', '17', null, 10 WHERE NOT EXISTS (SELECT 1 FROM public.recommendation WHERE id=129);
        INSERT INTO public.recommendation (id, name, code, description, test_type_id) SELECT 130, 'Resample one litre for physical and one syringe for water within scheduled date', '18', null, 10 WHERE NOT EXISTS (SELECT 1 FROM public.recommendation WHERE id=130);
        INSERT INTO public.recommendation (id, name, code, description, test_type_id) SELECT 131, 'Resample one litre for metal in oil and one litre for physical within scheduled date', '19', null, 10 WHERE NOT EXISTS (SELECT 1 FROM public.recommendation WHERE id=131);
        INSERT INTO public.recommendation (id, name, code, description, test_type_id) SELECT 132, 'Resample one litre for metal in oil within scheduled date', '20', null, 10 WHERE NOT EXISTS (SELECT 1 FROM public.recommendation WHERE id=132);
        INSERT INTO public.recommendation (id, name, code, description, test_type_id) SELECT 133, 'Resample one syringe for furfurals within scheduled date', '21', null, 10 WHERE NOT EXISTS (SELECT 1 FROM public.recommendation WHERE id=133);
        INSERT INTO public.recommendation (id, name, code, description, test_type_id) SELECT 134, 'Other recommendations (specify)', '24', null, 10 WHERE NOT EXISTS (SELECT 1 FROM public.recommendation WHERE id=134);
        INSERT INTO public.recommendation (id, name, code, description, test_type_id) SELECT 135, 'Future, do not use', '25', null, 10 WHERE NOT EXISTS (SELECT 1 FROM public.recommendation WHERE id=135);
        INSERT INTO public.recommendation (id, name, code, description, test_type_id) SELECT 136, 'Future, do not use', '26', null, 10 WHERE NOT EXISTS (SELECT 1 FROM public.recommendation WHERE id=136);
        """
    op.execute(sql=sql)
