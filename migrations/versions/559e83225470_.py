"""empty message

Revision ID: 559e83225470
Revises: 28377deda9f2
Create Date: 2016-09-29 08:40:15.618907

"""

# revision identifiers, used by Alembic.
revision = '559e83225470'
down_revision = '28377deda9f2'

from alembic import op
import sqlalchemy as sa


def upgrade():
    sql = """
        CREATE TABLE IF NOT EXISTS public.test_diagnosis
        (
            id SERIAL PRIMARY KEY NOT NULL,
            diagnosis_notes TEXT,
            date_created TIMESTAMP DEFAULT (now() at time zone 'utc'),
            date_updated TIMESTAMP,
            diagnosis_id INT,
            user_id INT,
            test_result_id INT,
            test_type_id INT,
            CONSTRAINT test_diagnosis_diagnosis_id_fk FOREIGN KEY (diagnosis_id) REFERENCES diagnosis (id) ON DELETE SET NULL ON UPDATE SET NULL,
            CONSTRAINT test_diagnosis_user_id_fk FOREIGN KEY (user_id) REFERENCES users_user (id) ON DELETE SET NULL ON UPDATE SET NULL,
            CONSTRAINT test_diagnosis_test_result_id_fk FOREIGN KEY (test_result_id) REFERENCES test_result (id) ON DELETE SET NULL ON UPDATE SET NULL,
            CONSTRAINT test_diagnosis_test_type_id_id_fk FOREIGN KEY (test_type_id) REFERENCES test_type (id) ON DELETE SET NULL ON UPDATE SET NULL
        );
        ALTER TABLE IF EXISTS public.test_repair_note ALTER COLUMN date_created SET DEFAULT (now() at time zone 'utc');
    """
    op.execute(sql=sql)


def downgrade():
    sql = """
        DROP TABLE IF EXISTS public.test_diagnosis;
    """
    op.execute(sql=sql)
