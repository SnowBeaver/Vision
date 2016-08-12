"""empty message

Revision ID: 3e8fbfd5ea61
Revises: 12fe5b235bfc
Create Date: 2016-08-11 17:12:06.294212

"""

# revision identifiers, used by Alembic.
revision = '3e8fbfd5ea61'
down_revision = '12fe5b235bfc'

from alembic import op
import sqlalchemy as sa


def upgrade():
    sql = """
        ALTER TABLE IF EXISTS public.campaign RENAME COLUMN comments TO description;
        ALTER TABLE IF EXISTS public.campaign DROP sampling_card_id;
        DROP TABLE IF EXISTS public.sampling_card;
        ALTER TABLE IF EXISTS public.campaign_status RENAME TO campaign_status_old;
        CREATE TABLE  IF NOT EXISTS campaign_status
        (
            id SERIAL PRIMARY KEY NOT NULL,
            code VARCHAR(50),
            name VARCHAR(50)
        );
        ALTER TABLE public.campaign ADD status_id INT NULL;
        ALTER TABLE public.campaign ADD CONSTRAINT campaign_campaign_status_id_fk
        FOREIGN KEY (status_id) REFERENCES campaign_status (id);
        ALTER TABLE IF EXISTS public.campaign DROP material_id;
        ALTER TABLE IF EXISTS public.campaign DROP fluid_type_id;
        ALTER TABLE IF EXISTS public.campaign DROP performed_by_id;
        ALTER TABLE IF EXISTS public.campaign DROP lab_id;
        ALTER TABLE IF EXISTS public.campaign DROP lab_contract_id;
        ALTER TABLE IF EXISTS public.campaign DROP seringe_num;
        ALTER TABLE IF EXISTS public.campaign DROP mws;
        ALTER TABLE IF EXISTS public.campaign DROP temperature;
        ALTER TABLE IF EXISTS public.campaign DROP containers;
        ALTER TABLE IF EXISTS public.campaign DROP transmission;
        ALTER TABLE IF EXISTS public.campaign DROP charge;
        ALTER TABLE IF EXISTS public.campaign DROP remark;
        ALTER TABLE IF EXISTS public.campaign DROP modifier;
        ALTER TABLE IF EXISTS public.campaign DROP repair_date;
        ALTER TABLE IF EXISTS public.campaign DROP repair_description;
        ALTER TABLE IF EXISTS public.campaign DROP ambient_air_temperature;

        ALTER TABLE public.test_result ADD material_id INT NULL;
        ALTER TABLE public.test_result ADD CONSTRAINT test_result_material_id_fk
        FOREIGN KEY (material_id) REFERENCES material (id);
        ALTER TABLE public.test_result ADD fluid_type_id INT NULL;
        ALTER TABLE public.test_result ADD CONSTRAINT test_result_fluid_type_id_fk
        FOREIGN KEY (fluid_type_id) REFERENCES fluid_type (id);
        ALTER TABLE public.test_result ADD performed_by_id INT NULL;
        ALTER TABLE public.test_result ADD CONSTRAINT test_result_performed_by_id_fk
        FOREIGN KEY (performed_by_id) REFERENCES users_user (id);
        ALTER TABLE public.test_result ADD lab_id INT NULL;
        ALTER TABLE public.test_result ADD CONSTRAINT test_result_lab_id_fk
        FOREIGN KEY (lab_id) REFERENCES lab (id);
        ALTER TABLE public.test_result ADD lab_contract_id INT NULL;
        ALTER TABLE public.test_result ADD CONSTRAINT test_result_lab_contract_id_fk
        FOREIGN KEY (lab_contract_id) REFERENCES contract (id);
        ALTER TABLE public.test_result ADD seringe_num VARCHAR(50) NULL;
        ALTER TABLE public.test_result ADD mws FLOAT NULL;
        ALTER TABLE public.test_result ADD temperature FLOAT NULL;
        ALTER TABLE public.test_result ADD containers FLOAT NULL;
        ALTER TABLE public.test_result ADD transmission BOOLEAN NULL;
        ALTER TABLE public.test_result ADD charge FLOAT NULL;
        ALTER TABLE public.test_result ADD remark TEXT NULL;
        ALTER TABLE public.test_result ADD modifier BOOLEAN NULL;
        ALTER TABLE public.test_result ADD repair_date TIMESTAMP NULL;
        ALTER TABLE public.test_result ADD repair_description TEXT NULL;
        ALTER TABLE public.test_result ADD ambient_air_temperature FLOAT NULL;
    """
    op.execute(sql=sql)


def downgrade():
    sql = """
        ALTER TABLE IF EXISTS public.campaign RENAME COLUMN description TO comments;
        CREATE TABLE IF NOT EXISTS public.sampling_card
        (
            id SERIAL PRIMARY KEY NOT NULL,
            card_print BOOLEAN,
            card_gathered INT
        );
        ALTER TABLE IF EXISTS public.campaign DROP status_id;
        DROP TABLE IF EXISTS public.campaign_status;
        ALTER TABLE IF EXISTS public.campaign_status_old RENAME TO campaign_status;
        ALTER TABLE IF EXISTS public.campaign ADD sampling_card_id INT NULL;
        ALTER TABLE IF EXISTS public.campaign ADD CONSTRAINT campaign_sampling_card_id_fk
        FOREIGN KEY (sampling_card_id) REFERENCES sampling_card (id);

        ALTER TABLE IF EXISTS public.test_result DROP material_id;
        ALTER TABLE IF EXISTS public.test_result DROP fluid_type_id;
        ALTER TABLE IF EXISTS public.test_result DROP performed_by_id;
        ALTER TABLE IF EXISTS public.test_result DROP lab_id;
        ALTER TABLE IF EXISTS public.test_result DROP lab_contract_id;
        ALTER TABLE IF EXISTS public.test_result DROP seringe_num;
        ALTER TABLE IF EXISTS public.test_result DROP mws;
        ALTER TABLE IF EXISTS public.test_result DROP temperature;
        ALTER TABLE IF EXISTS public.test_result DROP containers;
        ALTER TABLE IF EXISTS public.test_result DROP transmission;
        ALTER TABLE IF EXISTS public.test_result DROP charge;
        ALTER TABLE IF EXISTS public.test_result DROP remark;
        ALTER TABLE IF EXISTS public.test_result DROP modifier;
        ALTER TABLE IF EXISTS public.test_result DROP repair_date;
        ALTER TABLE IF EXISTS public.test_result DROP repair_description;
        ALTER TABLE IF EXISTS public.test_result DROP ambient_air_temperature;

        ALTER TABLE public.campaign ADD material_id INT NULL;
        ALTER TABLE public.campaign ADD CONSTRAINT campaign_material_id_fk
        FOREIGN KEY (material_id) REFERENCES material (id);
        ALTER TABLE public.campaign ADD fluid_type_id INT NULL;
        ALTER TABLE public.campaign ADD CONSTRAINT campaign_fluid_type_id_fk
        FOREIGN KEY (fluid_type_id) REFERENCES fluid_type (id);
        ALTER TABLE public.campaign ADD performed_by_id INT NULL;
        ALTER TABLE public.campaign ADD CONSTRAINT campaign_performed_by_id_fk
        FOREIGN KEY (performed_by_id) REFERENCES users_user (id);
        ALTER TABLE public.campaign ADD lab_id INT NULL;
        ALTER TABLE public.campaign ADD CONSTRAINT campaign_lab_id_fk
        FOREIGN KEY (lab_id) REFERENCES lab (id);
        ALTER TABLE public.campaign ADD lab_contract_id INT NULL;
        ALTER TABLE public.campaign ADD CONSTRAINT campaign_lab_contract_id_fk
        FOREIGN KEY (lab_contract_id) REFERENCES contract (id);
        ALTER TABLE public.campaign ADD seringe_num VARCHAR(50) NULL;
        ALTER TABLE public.campaign ADD mws FLOAT NULL;
        ALTER TABLE public.campaign ADD temperature FLOAT NULL;
        ALTER TABLE public.campaign ADD containers FLOAT NULL;
        ALTER TABLE public.campaign ADD transmission BOOLEAN NULL;
        ALTER TABLE public.campaign ADD charge FLOAT NULL;
        ALTER TABLE public.campaign ADD remark TEXT NULL;
        ALTER TABLE public.campaign ADD modifier BOOLEAN NULL;
        ALTER TABLE public.campaign ADD repair_date TIMESTAMP NULL;
        ALTER TABLE public.campaign ADD repair_description TEXT NULL;
        ALTER TABLE public.campaign ADD ambient_air_temperature FLOAT NULL;
    """
    op.execute(sql=sql)