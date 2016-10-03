"""empty message

Revision ID: 319bb34acaa2
Revises: 57da31719767
Create Date: 2016-09-30 15:08:46.380132

"""

# revision identifiers, used by Alembic.
revision = '319bb34acaa2'
down_revision = '57da31719767'

from alembic import op
import sqlalchemy as sa


def upgrade():
    sql = """
        ALTER TABLE public.schedule DROP COLUMN equipment_id;
        ALTER TABLE public.schedule ALTER COLUMN "order" DROP DEFAULT;
        DROP SEQUENCE IF EXISTS schedule_order_seq;

        ALTER TABLE public.schedule DROP CONSTRAINT schedule_pkey;
        ALTER TABLE public.schedule ADD COLUMN id SERIAL PRIMARY KEY NOT NULL;

        ALTER TABLE public.schedule RENAME COLUMN "order" TO priority;
        ALTER TABLE public.schedule RENAME COLUMN start_date TO date_start;
        ALTER TABLE public.schedule RENAME COLUMN tests_to_perform TO test_recommendation_id;
        ALTER TABLE public.schedule ALTER COLUMN test_recommendation_id SET NOT NULL;
        ALTER TABLE public.schedule DROP CONSTRAINT schedule_tests_to_perform_fkey;

        ALTER TABLE public.schedule ADD COLUMN date_updated TIMESTAMP;
        ALTER TABLE public.schedule ADD COLUMN date_created TIMESTAMP DEFAULT (now() at time zone 'utc');
        ALTER TABLE public.schedule ADD COLUMN status_id INT;

        ALTER TABLE public.schedule ADD CONSTRAINT schedule_test_recommendation_id_fkey
        FOREIGN KEY (test_recommendation_id) REFERENCES test_recommendation (id)
        ON DELETE SET NULL ON UPDATE SET NULL;
        ALTER TABLE public.schedule ADD CONSTRAINT schedule_task_status_id_fkey
        FOREIGN KEY (status_id) REFERENCES task_status (id) ON DELETE SET NULL ON UPDATE SET NULL;
    """
    op.execute(sql=sql)


def downgrade():
    sql = """
        ALTER TABLE public.schedule ADD COLUMN equipment_id INT;
        ALTER TABLE public.schedule ADD CONSTRAINT schedule_equipment_id_fkey
        FOREIGN KEY(equipment_id) REFERENCES equipment(id) ON UPDATE SET NULL ON DELETE SET NULL;

        CREATE SEQUENCE schedule_order_seq;
        ALTER TABLE public.schedule ALTER COLUMN priority SET DEFAULT NEXTVAL('schedule_order_seq'::regclass);

        ALTER TABLE public.schedule RENAME COLUMN priority TO "order";
        ALTER TABLE public.schedule RENAME COLUMN date_start TO start_date;

        ALTER TABLE public.schedule RENAME COLUMN test_recommendation_id TO tests_to_perform;
        ALTER TABLE public.schedule ALTER COLUMN tests_to_perform DROP NOT NULL;
        ALTER TABLE public.schedule DROP CONSTRAINT schedule_test_recommendation_id_fkey;
        ALTER TABLE public.schedule ADD CONSTRAINT schedule_tests_to_perform_fkey
        FOREIGN KEY(tests_to_perform) REFERENCES test_type (id) ON UPDATE SET NULL ON DELETE SET NULL;

        ALTER TABLE public.schedule DROP CONSTRAINT schedule_task_status_id_fkey;

        ALTER TABLE public.schedule DROP COLUMN status_id;
        ALTER TABLE public.schedule DROP COLUMN date_updated;
        ALTER TABLE public.schedule DROP COLUMN date_created;
    """
    op.execute(sql=sql)
