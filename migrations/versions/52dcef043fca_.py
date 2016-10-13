"""empty message

Revision ID: 52dcef043fca
Revises: 597368cba6c8
Create Date: 2016-09-28 15:32:39.074186

"""

# revision identifiers, used by Alembic.
revision = '52dcef043fca'
down_revision = '597368cba6c8'

from alembic import op
import sqlalchemy as sa


def upgrade():
    sql = """
        CREATE TABLE IF NOT EXISTS public.test_repair_note
        (
            id SERIAL PRIMARY KEY NOT NULL,
            description TEXT,
            remark TEXT,
            sample TEXT,
            date_created TIMESTAMP,
            user_id INT,
            test_result_id INT,
            test_type_id INT,
            CONSTRAINT test_repair_note_user_id_fk FOREIGN KEY (user_id) REFERENCES users_user (id) ON DELETE SET NULL ON UPDATE SET NULL,
            CONSTRAINT test_repair_note_test_result_id_fk FOREIGN KEY (test_result_id) REFERENCES test_result (id) ON DELETE SET NULL ON UPDATE SET NULL,
            CONSTRAINT test_repair_note_test_type_id_id_fk FOREIGN KEY (test_type_id) REFERENCES test_type (id) ON DELETE SET NULL ON UPDATE SET NULL
        );
    """
    op.execute(sql=sql)


def downgrade():
    sql = """
        DROP TABLE IF EXISTS public.test_repair_note;
    """
    op.execute(sql=sql)

