"""empty message

Revision ID: 5d35074ce84
Revises: 16ba09ca4d95
Create Date: 2017-01-16 12:30:08.398535

"""

# revision identifiers, used by Alembic.
revision = '5d35074ce84'
down_revision = '16ba09ca4d95'

from alembic import op
import sqlalchemy as sa


def upgrade():
    sql = """
    ALTER TABLE public.norm_physic ADD COLUMN equipment_type_id INTEGER;
    ALTER TABLE public.norm_physic ADD CONSTRAINT norm_physic_equipment_type_id_fkey
    FOREIGN KEY(equipment_type_id) REFERENCES equipment_type(id) ON UPDATE SET NULL ON DELETE SET NULL;
    ALTER TABLE public.norm_physic ADD COLUMN date_created TIMESTAMP DEFAULT (now() at time zone 'utc');

    ALTER TABLE public.norm_gas ADD COLUMN equipment_type_id INTEGER;
    ALTER TABLE public.norm_gas ADD CONSTRAINT norm_gas_equipment_type_id_fkey
    FOREIGN KEY(equipment_type_id) REFERENCES equipment_type(id) ON UPDATE SET NULL ON DELETE SET NULL;
    ALTER TABLE public.norm_gas ADD COLUMN date_created TIMESTAMP DEFAULT (now() at time zone 'utc');

    ALTER TABLE public.norm_particles ADD COLUMN equipment_type_id INTEGER;
    ALTER TABLE public.norm_particles ADD CONSTRAINT norm_particles_equipment_type_id_fkey
    FOREIGN KEY(equipment_type_id) REFERENCES equipment_type(id) ON UPDATE SET NULL ON DELETE SET NULL;
    ALTER TABLE public.norm_particles ADD COLUMN date_created TIMESTAMP DEFAULT (now() at time zone 'utc');

    ALTER TABLE public.norm_isolation ADD COLUMN equipment_type_id INTEGER;
    ALTER TABLE public.norm_isolation ADD CONSTRAINT norm_isolation_equipment_type_id_fkey
    FOREIGN KEY(equipment_type_id) REFERENCES equipment_type(id) ON UPDATE SET NULL ON DELETE SET NULL;
    ALTER TABLE public.norm_isolation ADD COLUMN date_created TIMESTAMP DEFAULT (now() at time zone 'utc');

    ALTER TABLE public.norm_furan ADD COLUMN equipment_type_id INTEGER;
    ALTER TABLE public.norm_furan ADD CONSTRAINT norm_furan_equipment_type_id_fkey
    FOREIGN KEY(equipment_type_id) REFERENCES equipment_type(id) ON UPDATE SET NULL ON DELETE SET NULL;
    ALTER TABLE public.norm_furan ADD COLUMN date_created TIMESTAMP DEFAULT (now() at time zone 'utc');



    ALTER TABLE public.norm_physic_data DROP CONSTRAINT IF EXISTS norm_physic_data_campaign_id_fk;
    ALTER TABLE public.norm_physic_data DROP COLUMN IF EXISTS campaign_id;
    ALTER TABLE public.norm_physic_data ADD COLUMN user_id INTEGER;
    ALTER TABLE public.norm_physic_data ADD CONSTRAINT norm_physic_data_user_id_fkey
    FOREIGN KEY(user_id) REFERENCES users_user(id) ON UPDATE SET NULL ON DELETE SET NULL;
    ALTER TABLE public.norm_physic_data ADD COLUMN date_created TIMESTAMP DEFAULT (now() at time zone 'utc');

    ALTER TABLE public.norm_gas_data DROP CONSTRAINT IF EXISTS norm_gas_data_campaign_id_fk;
    ALTER TABLE public.norm_gas_data DROP COLUMN IF EXISTS campaign_id;
    ALTER TABLE public.norm_gas_data ADD COLUMN user_id INTEGER;
    ALTER TABLE public.norm_gas_data ADD CONSTRAINT norm_gas_data_user_id_fkey
    FOREIGN KEY(user_id) REFERENCES users_user(id) ON UPDATE SET NULL ON DELETE SET NULL;
    ALTER TABLE public.norm_gas_data ADD COLUMN date_created TIMESTAMP DEFAULT (now() at time zone 'utc');

    ALTER TABLE public.norm_particles_data DROP CONSTRAINT IF EXISTS norm_particles_data_campaign_id_fk;
    ALTER TABLE public.norm_particles_data DROP COLUMN IF EXISTS campaign_id;
    ALTER TABLE public.norm_particles_data ADD COLUMN user_id INTEGER;
    ALTER TABLE public.norm_particles_data ADD CONSTRAINT norm_particles_data_user_id_fkey
    FOREIGN KEY(user_id) REFERENCES users_user(id) ON UPDATE SET NULL ON DELETE SET NULL;
    ALTER TABLE public.norm_particles_data ADD COLUMN date_created TIMESTAMP DEFAULT (now() at time zone 'utc');

    ALTER TABLE public.norm_isolation_data DROP CONSTRAINT IF EXISTS norm_isolation_data_campaign_id_fk;
    ALTER TABLE public.norm_isolation_data DROP COLUMN IF EXISTS campaign_id;
    ALTER TABLE public.norm_isolation_data ADD COLUMN user_id INTEGER;
    ALTER TABLE public.norm_isolation_data ADD CONSTRAINT norm_isolation_data_user_id_fkey
    FOREIGN KEY(user_id) REFERENCES users_user(id) ON UPDATE SET NULL ON DELETE SET NULL;
    ALTER TABLE public.norm_isolation_data ADD COLUMN date_created TIMESTAMP DEFAULT (now() at time zone 'utc');

    ALTER TABLE public.norm_furan_data DROP CONSTRAINT IF EXISTS norm_furan_data_campaign_id_fk;
    ALTER TABLE public.norm_furan_data DROP COLUMN IF EXISTS campaign_id;
    ALTER TABLE public.norm_furan_data ADD COLUMN user_id INTEGER;
    ALTER TABLE public.norm_furan_data ADD CONSTRAINT norm_furan_data_user_id_fkey
    FOREIGN KEY(user_id) REFERENCES users_user(id) ON UPDATE SET NULL ON DELETE SET NULL;
    ALTER TABLE public.norm_furan_data ADD COLUMN date_created TIMESTAMP DEFAULT (now() at time zone 'utc');

    ALTER TABLE "public".norm_isolation_data ADD COLUMN name CHARACTER VARYING(50);
    ALTER TABLE "public".norm_particles_data ADD COLUMN name CHARACTER VARYING(50);
"""
    op.execute(sql=sql)


def downgrade():
    sql = """
    ALTER TABLE public.norm_physic DROP CONSTRAINT IF EXISTS norm_physic_equipment_type_id_fkey;
    ALTER TABLE public.norm_physic DROP COLUMN IF EXISTS equipment_type_id;
    ALTER TABLE public.norm_physic DROP COLUMN IF EXISTS date_created;

    ALTER TABLE public.norm_gas DROP CONSTRAINT IF EXISTS norm_gas_equipment_type_id_fkey;
    ALTER TABLE public.norm_gas DROP COLUMN IF EXISTS equipment_type_id;
    ALTER TABLE public.norm_gas DROP COLUMN IF EXISTS date_created;

    ALTER TABLE public.norm_particles DROP CONSTRAINT IF EXISTS norm_particles_equipment_type_id_fkey;
    ALTER TABLE public.norm_particles DROP COLUMN IF EXISTS equipment_type_id;
    ALTER TABLE public.norm_particles DROP COLUMN IF EXISTS date_created;

    ALTER TABLE public.norm_isolation DROP CONSTRAINT IF EXISTS norm_isolation_equipment_type_id_fkey;
    ALTER TABLE public.norm_isolation DROP COLUMN IF EXISTS equipment_type_id;
    ALTER TABLE public.norm_isolation DROP COLUMN IF EXISTS date_created;

    ALTER TABLE public.norm_furan DROP CONSTRAINT IF EXISTS norm_furan_equipment_type_id_fkey;
    ALTER TABLE public.norm_furan DROP COLUMN IF EXISTS equipment_type_id;
    ALTER TABLE public.norm_furan DROP COLUMN IF EXISTS date_created;


    ALTER TABLE public.norm_physic_data DROP CONSTRAINT IF EXISTS norm_physic_data_user_id_fkey;
    ALTER TABLE public.norm_physic_data DROP COLUMN IF EXISTS user_id;
    ALTER TABLE public.norm_physic_data DROP COLUMN IF EXISTS date_created;

    ALTER TABLE public.norm_gas_data DROP CONSTRAINT IF EXISTS norm_gas_data_user_id_fkey;
    ALTER TABLE public.norm_gas_data DROP COLUMN IF EXISTS user_id;
    ALTER TABLE public.norm_gas_data DROP COLUMN IF EXISTS date_created;

    ALTER TABLE public.norm_particles_data DROP CONSTRAINT IF EXISTS norm_particles_data_user_id_fkey;
    ALTER TABLE public.norm_particles_data DROP COLUMN IF EXISTS user_id;
    ALTER TABLE public.norm_particles_data DROP COLUMN IF EXISTS date_created;

    ALTER TABLE public.norm_isolation_data DROP CONSTRAINT IF EXISTS norm_isolation_data_user_id_fkey;
    ALTER TABLE public.norm_isolation_data DROP COLUMN IF EXISTS user_id;
    ALTER TABLE public.norm_isolation_data DROP COLUMN IF EXISTS date_created;

    ALTER TABLE public.norm_furan_data DROP CONSTRAINT IF EXISTS norm_furan_data_user_id_fkey;
    ALTER TABLE public.norm_furan_data DROP COLUMN IF EXISTS user_id;
    ALTER TABLE public.norm_furan_data DROP COLUMN IF EXISTS date_created;

    ALTER TABLE "public".norm_isolation_data DROP COLUMN name;
    ALTER TABLE "public".norm_particles_data DROP COLUMN name;
"""
    op.execute(sql=sql)
