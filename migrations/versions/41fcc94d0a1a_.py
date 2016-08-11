"""empty message

Revision ID: 41fcc94d0a1a
Revises: 27eb36febab5
Create Date: 2016-08-11 12:24:41.947919

"""

# revision identifiers, used by Alembic.
revision = '41fcc94d0a1a'
down_revision = '27eb36febab5'

from alembic import op
import sqlalchemy as sa


def upgrade():
    sql = """
        ALTER TABLE public.campaign DROP recommendation_id;
        ALTER TABLE public.campaign DROP "recommendationNotes";
        ALTER TABLE public.campaign DROP recommended_by;
        CREATE TABLE public.test_recommendation
        (
            id SERIAL PRIMARY KEY NOT NULL,
            recommendation_id INT,
            recommendation_notes TEXT,
            user_id INT,
            date_created TIMESTAMP,
            date_updated TIMESTAMP,
            CONSTRAINT test_recommendation_users_user_id_fk FOREIGN KEY (user_id) REFERENCES users_user (id) ON DELETE SET NULL ON UPDATE SET NULL,
            CONSTRAINT test_recommendation_recommendation_id_fk FOREIGN KEY (recommendation_id) REFERENCES recommendation (id) ON DELETE SET NULL ON UPDATE SET NULL
        );
      ALTER TABLE public.test_result ADD test_recommendation_id INT NULL;
      ALTER TABLE public.test_result ADD CONSTRAINT test_result_test_recommendation_id_fk
      FOREIGN KEY (test_recommendation_id) REFERENCES test_recommendation (id);
    """
    op.execute(sql=sql)


def downgrade():
    pass
