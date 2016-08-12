"""empty message

Revision ID: 3c8462ba73e9
Revises: 3cb4c9b91bf8
Create Date: 2016-08-09 14:14:45.532766

"""

# revision identifiers, used by Alembic.
revision = '3c8462ba73e9'
down_revision = '3cb4c9b91bf8'

from alembic import op
import sqlalchemy as sa


def upgrade():
    sql ="""
      ALTER TABLE public.campaign DROP gathered_test_type;
      ALTER TABLE public.campaign DROP sampling_card_gathered;
      ALTER TABLE public.campaign DROP sampling_card_print;
      CREATE TABLE public.sampling_card
        (
            id SERIAL PRIMARY KEY NOT NULL,
            card_print BOOLEAN,
            card_gathered INT
        );
      ALTER TABLE public.campaign ADD sampling_card_id INT NULL;
      ALTER TABLE public.campaign ADD CONSTRAINT campaign_sampling_card_id_fk
      FOREIGN KEY (sampling_card_id) REFERENCES sampling_card (id);
    """
    op.execute(sql=sql)


def downgrade():
    sql = """
        ALTER TABLE IF EXISTS public.campaign DROP sampling_card_id;
        DROP TABLE IF EXISTS public.sampling_card;
        ALTER TABLE public.campaign ADD gathered_test_type TEXT;
        ALTER TABLE public.campaign ADD sampling_card_gathered INT;
        ALTER TABLE public.campaign ADD sampling_card_print BOOLEAN;
        """
    op.execute(sql=sql)
