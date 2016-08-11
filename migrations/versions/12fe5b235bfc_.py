"""empty message

Revision ID: 12fe5b235bfc
Revises: 87dec7c7646
Create Date: 2016-08-11 15:52:49.174784

"""

# revision identifiers, used by Alembic.
revision = '12fe5b235bfc'
down_revision = '87dec7c7646'

from alembic import op
import sqlalchemy as sa


def upgrade():
    sql = """CREATE TABLE public.test_sampling_card
        (
            id SERIAL PRIMARY KEY NOT NULL,
            test_result_id INT,
            date_created TIMESTAMP,
            printed BOOLEAN,
            CONSTRAINT test_sampling_card_test_result_id_fk FOREIGN KEY (test_result_id) REFERENCES test_result (id) ON DELETE SET NULL ON UPDATE SET NULL
        );
        """
    op.execute(sql=sql)


def downgrade():
    pass
