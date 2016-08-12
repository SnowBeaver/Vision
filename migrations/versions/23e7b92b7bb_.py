"""empty message

Revision ID: 23e7b92b7bb
Revises: 463c6038d63
Create Date: 2016-08-12 17:59:18.481483

"""

# revision identifiers, used by Alembic.
revision = '23e7b92b7bb'
down_revision = '463c6038d63'

from alembic import op
import sqlalchemy as sa


def upgrade():
    sql = """
        ALTER TABLE public.users_user DROP country;
        ALTER TABLE public.users_user ADD country_id INT NULL;
        ALTER TABLE public.users_user ADD CONSTRAINT users_user_country_id_fk
        FOREIGN KEY (country_id) REFERENCES country (id);
    """
    op.execute(sql=sql)


def downgrade():
    sql = """
        ALTER TABLE public.users_user DROP country_id;
        ALTER TABLE public.users_user ADD country TEXT;
    """
    op.execute(sql=sql)
