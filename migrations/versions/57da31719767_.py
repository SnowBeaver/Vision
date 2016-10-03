"""empty message

Revision ID: 57da31719767
Revises: 46ea29e9fba1
Create Date: 2016-09-30 14:46:20.096530

"""

# revision identifiers, used by Alembic.
revision = '57da31719767'
down_revision = '46ea29e9fba1'

from alembic import op
import sqlalchemy as sa


def upgrade():
    sql = """
        CREATE TABLE IF NOT EXISTS public.task_status
        (
            id SERIAL PRIMARY KEY NOT NULL,
            name VARCHAR (20)
        );
        INSERT INTO public.task_status(name) VALUES ('New'), ('In progress'), ('Completed');
    """
    op.execute(sql=sql)


def downgrade():
    sql = """
        DROP TABLE IF EXISTS public.task_status;
    """
    op.execute(sql=sql)

