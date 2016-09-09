"""empty message

Revision ID: 11f19b50c56d
Revises: 1d36ba7a913e
Create Date: 2016-09-06 18:00:05.504348

"""

# revision identifiers, used by Alembic.
revision = '11f19b50c56d'
down_revision = '1d36ba7a913e'

from alembic import op
import sqlalchemy as sa


def upgrade():
    sql = """
        CREATE TABLE IF NOT EXISTS public.inhibitor_type
        (
            id SERIAL PRIMARY KEY NOT NULL,
            name VARCHAR(50) NOT NULL
        );
        ALTER TABLE public.inhibitor_test
        ADD CONSTRAINT inhibitor_test_inhibitor_type_id_fk
        FOREIGN KEY (inhibitor_type_id) REFERENCES inhibitor_type (id) ON DELETE SET NULL ON UPDATE SET NULL;
    """
    op.execute(sql=sql)


def downgrade():
    sql = """ALTER TABLE public.inhibitor_test DROP CONSTRAINT inhibitor_test_inhibitor_type_id_fk;"""
    op.execute(sql=sql)
