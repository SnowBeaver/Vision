"""empty message

Revision ID: 461a4f170888
Revises: 164d5b1c6d44
Create Date: 2016-07-18 12:18:47.629234

"""

# revision identifiers, used by Alembic.
revision = '461a4f170888'
down_revision = '164d5b1c6d44'

from alembic import op
import sqlalchemy as sa


def upgrade():
    sql = """
    TRUNCATE public.role CASCADE;
    INSERT INTO public.role (id, name, description) VALUES (1, 'admin', 'admin');
    INSERT INTO public.role (id, name, description) VALUES (2, 'user', 'user');
    INSERT INTO public.role (id, name, description) VALUES (3, 'guest', 'guest');
    INSERT INTO public.role (id, name, description) VALUES (4, 'blogger', 'editor');
    INSERT INTO public.role (id, name, description) VALUES (5, 'user_translator', 'edit diagnostic and translation');
    INSERT INTO public.role (id, name, description) VALUES (6, 'expert', 'Can edit norm tables');
    INSERT INTO public.users_roles (user_id, role_id) VALUES (1, 1);
    INSERT INTO public.users_roles (user_id, role_id) VALUES (2, 1);
    INSERT INTO public.users_roles (user_id, role_id) VALUES (3, 1);
    INSERT INTO public.users_roles (user_id, role_id) VALUES (4, 2);
    INSERT INTO public.users_roles (user_id, role_id) VALUES (2, 4);
    INSERT INTO public.users_roles (user_id, role_id) VALUES (1, 4);
    INSERT INTO public.users_roles (user_id, role_id) VALUES (4, 1);
    INSERT INTO public.users_roles (user_id, role_id) VALUES (3, 1);
    INSERT INTO public.users_roles (user_id, role_id) VALUES (5, 2);
    INSERT INTO public.users_roles (user_id, role_id) VALUES (4, 4);
    INSERT INTO public.users_roles (user_id, role_id) VALUES (3, 4);
    INSERT INTO public.users_roles (user_id, role_id) VALUES (6, 1);
    INSERT INTO public.users_roles (user_id, role_id) VALUES (6, 4);
    INSERT INTO public.users_roles (user_id, role_id) VALUES (7, 2);
    INSERT INTO public.users_roles (user_id, role_id) VALUES (1, 2);
    INSERT INTO public.users_roles (user_id, role_id) VALUES (2, 5);
    INSERT INTO public.users_roles (user_id, role_id) VALUES (7, 1);
    INSERT INTO public.users_roles (user_id, role_id) VALUES (7, 4);
    """
    # op.execute(sql=sql)

    sql = """
    ALTER TABLE public.campaign ADD bushing BOOLEAN DEFAULT False NULL;
    ALTER TABLE public.campaign ADD winding BOOLEAN DEFAULT False NULL;
    ALTER TABLE public.campaign ADD insulation_pf BOOLEAN DEFAULT False NULL;
    ALTER TABLE public.campaign ADD insulation BOOLEAN DEFAULT False NULL;
    ALTER TABLE public.campaign ADD visual_inspection BOOLEAN DEFAULT False NULL;
    ALTER TABLE public.campaign ADD resistance BOOLEAN DEFAULT False NULL;
    ALTER TABLE public.campaign ADD degree BOOLEAN DEFAULT False NULL;
    ALTER TABLE public.campaign ADD turns BOOLEAN DEFAULT False NULL;
    ALTER TABLE public.campaign ADD gas BOOLEAN DEFAULT False NULL;
    ALTER TABLE public.campaign ADD water BOOLEAN DEFAULT False NULL;
    ALTER TABLE public.campaign ADD furans BOOLEAN DEFAULT False NULL;
    ALTER TABLE public.campaign ADD inhibitor BOOLEAN DEFAULT False NULL;
    ALTER TABLE public.campaign ADD pcb BOOLEAN DEFAULT False NULL;
    ALTER TABLE public.campaign ADD qty INT NULL;
    ALTER TABLE public.campaign ADD sampling INT NULL;
    ALTER TABLE public.campaign ADD dielec BOOLEAN DEFAULT False NULL;
    ALTER TABLE public.campaign ADD acidity BOOLEAN DEFAULT False NULL;
    ALTER TABLE public.campaign ADD density BOOLEAN DEFAULT False NULL;
    ALTER TABLE public.campaign ADD pcb_jar BOOLEAN DEFAULT False NULL;
    ALTER TABLE public.campaign ADD inhibitor_jar BOOLEAN DEFAULT False NULL;
    ALTER TABLE public.campaign ADD point BOOLEAN DEFAULT False NULL;
    ALTER TABLE public.campaign ADD dielec_2 BOOLEAN DEFAULT False NULL;
    ALTER TABLE public.campaign ADD color BOOLEAN DEFAULT False NULL;
    ALTER TABLE public.campaign ADD pf BOOLEAN DEFAULT False NULL;
    ALTER TABLE public.campaign ADD particles BOOLEAN DEFAULT False NULL;
    ALTER TABLE public.campaign ADD metals BOOLEAN DEFAULT False NULL;
    ALTER TABLE public.campaign ADD viscosity BOOLEAN DEFAULT False NULL;
    ALTER TABLE public.campaign ADD dielec_d BOOLEAN DEFAULT False NULL;
    ALTER TABLE public.campaign ADD ift BOOLEAN DEFAULT False NULL;
    ALTER TABLE public.campaign ADD pf_100 BOOLEAN DEFAULT False NULL;
    ALTER TABLE public.campaign ADD furans_f BOOLEAN DEFAULT False NULL;
    ALTER TABLE public.campaign ADD water_w BOOLEAN DEFAULT False NULL;
    ALTER TABLE public.campaign ADD corr BOOLEAN DEFAULT False NULL;
    ALTER TABLE public.campaign ADD dielec_i BOOLEAN DEFAULT False NULL;
    ALTER TABLE public.campaign ADD visual BOOLEAN DEFAULT False NULL;
    ALTER TABLE public.campaign ADD qty_jar INT NULL;
    ALTER TABLE public.campaign ADD sampling_jar INT NULL;
    ALTER TABLE public.campaign ADD pcb_vial BOOLEAN DEFAULT False NULL;
    ALTER TABLE public.campaign ADD antioxidant BOOLEAN DEFAULT False NULL;
    ALTER TABLE public.campaign ADD qty_vial INT NULL;
    ALTER TABLE public.campaign ADD sampling_vial INT NULL;
    """
    op.execute(sql=sql)


def downgrade():
    pass
