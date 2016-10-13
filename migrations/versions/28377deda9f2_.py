"""empty message

Revision ID: 28377deda9f2
Revises: 52dcef043fca
Create Date: 2016-09-29 08:33:19.721420

"""

# revision identifiers, used by Alembic.
revision = '28377deda9f2'
down_revision = '52dcef043fca'

from alembic import op
import sqlalchemy as sa


def upgrade():
    sql = """
        CREATE TABLE IF NOT EXISTS public.diagnosis
        (
            id SERIAL PRIMARY KEY NOT NULL,
            name VARCHAR (50),
            code VARCHAR (50),
            description TEXT,
            test_type_id INT,
            CONSTRAINT diagnosis_test_type_id_id_fk FOREIGN KEY (test_type_id) REFERENCES test_type (id) ON DELETE SET NULL ON UPDATE SET NULL
        );
    """
    op.execute(sql=sql)


def downgrade():
    sql = """
        DROP TABLE IF EXISTS public.diagnosis;
    """
    op.execute(sql=sql)
