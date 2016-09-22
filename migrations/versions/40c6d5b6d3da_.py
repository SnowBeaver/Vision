"""empty message

Revision ID: 40c6d5b6d3da
Revises: 176da92988af
Create Date: 2016-09-02 11:39:48.770888

"""

# revision identifiers, used by Alembic.
revision = '40c6d5b6d3da'
down_revision = '26943dd3eb2d'

from alembic import op
import sqlalchemy as sa


def upgrade():

    #sql = """
    #CREATE SEQUENCE id_seq;
    #ALTER TABLE material ALTER id SET DEFAULT NEXTVAL('id_seq');
    #ALTER SEQUENCE id_seq RESTART WITH 3;
    #"""
    #op.execute(sql=sql)

    #sql = """
    #CREATE SEQUENCE ft_id_seq;
    #ALTER TABLE fluid_type ALTER id SET DEFAULT NEXTVAL('ft_id_seq');
    #ALTER SEQUENCE ft_id_seq RESTART WITH 7;
    #"""
    #op.execute(sql=sql)

    #sql = """
    #CREATE SEQUENCE sp_id_seq;
    #ALTER TABLE sampling_point ALTER id SET DEFAULT NEXTVAL('sp_id_seq');
    #--ALTER SEQUENCE sp_id_seq RESTART WITH 5;
    #"""
    #op.execute(sql=sql)


    #sql = """
    #CREATE SEQUENCE cs_id_seq;
    #ALTER TABLE campaign_status ALTER id SET DEFAULT NEXTVAL('cs_id_seq');
    #ALTER SEQUENCE cs_id_seq RESTART WITH 1;
    #"""

    #op.execute(sql=sql)

    #sql = """
    #CREATE SEQUENCE tr_id_seq;
    #ALTER TABLE test_reason ALTER id SET DEFAULT NEXTVAL('tr_id_seq');
    #ALTER SEQUENCE tr_id_seq RESTART WITH 11;
    #"""
    #op.execute(sql=sql)

    #sql = """
    #CREATE SEQUENCE ctr_id_seq;
    #ALTER TABLE contract_status ALTER id SET DEFAULT NEXTVAL('ctr_id_seq');
    #ALTER SEQUENCE ctr_id_seq RESTART WITH 2;
    #"""
    #op.execute(sql=sql)

    #sql = """
    #--CREATE SEQUENCE lab_id_seq;
    #ALTER TABLE lab ALTER id SET DEFAULT NEXTVAL('lab_id_seq');
    #ALTER SEQUENCE lab_id_seq RESTART WITH 4;
    #"""
    #op.execute(sql=sql)
    pass



def downgrade():
    pass
