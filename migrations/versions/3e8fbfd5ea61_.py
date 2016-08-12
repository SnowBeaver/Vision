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
        ALTER TABLE public.campaign RENAME COLUMN comments TO description;
        ALTER TABLE public.campaign DROP sampling_card_id;
        DROP TABLE public.sampling_card;
        CREATE TABLE campaign_status
        (
            id SERIAL PRIMARY KEY NOT NULL,
            code VARCHAR(50),
            name VARCHAR(50)
        );
        ALTER TABLE public.campaign ADD status_id INT NULL;
        ALTER TABLE public.campaign ADD CONSTRAINT campaign_campaign_status_id_fk
        FOREIGN KEY (status_id) REFERENCES campaign_status (id);
        ALTER TABLE public.campaign DROP material_id;
        ALTER TABLE public.campaign DROP fluid_type_id;
        ALTER TABLE public.campaign DROP performed_by_id;
        ALTER TABLE public.campaign DROP lab_id;
        ALTER TABLE public.campaign DROP lab_contract_id;
        ALTER TABLE public.campaign DROP seringe_num;
        ALTER TABLE public.campaign DROP mws;
        ALTER TABLE public.campaign DROP temperature;
        ALTER TABLE public.campaign DROP containers;
        ALTER TABLE public.campaign DROP transmission;
        ALTER TABLE public.campaign DROP charge;
        ALTER TABLE public.campaign DROP remark;
        ALTER TABLE public.campaign DROP modifier;
        ALTER TABLE public.campaign DROP repair_date;
        ALTER TABLE public.campaign DROP repair_description;
        ALTER TABLE public.campaign DROP ambient_air_temperature;

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
    pass
