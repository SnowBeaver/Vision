"""empty message

Revision ID: 131926f0bc2b
Revises: 425d457e8385
Create Date: 2016-06-06 17:39:08.335248

"""

# revision identifiers, used by Alembic.
revision = '131926f0bc2b'
down_revision = '425d457e8385'

from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql
from sqlalchemy.sql import table, column
from sqlalchemy import String, Integer, Date

sampling_point = table(
    'sampling_point',
    column('id', Integer),
    column('name', String)
)

campaign_status = table(
    'campaign_status',
    column('id', Integer),
    column('code', String),
    column('name', String)
)

test_reason = table(
    'test_reason',
    column('id', Integer),
    column('name', String)
)

contract_status = table(
    'contract_status',
    column('id', Integer),
    column('name', String)
)

lab = table(
    'lab',
    column('id', Integer),
    column('code', Integer),
    column('name', String)
)

material = table(
    'material',
    column('id', Integer),
    column('code', Integer),
    column('name', String)
)

fluid_type = table(
    'fluid_type',
    column('id', Integer),
    column('name', String)
)


def upgrade():
    ### commands auto generated by Alembic - please adjust! ###
    ### end Alembic commands ###
    op.bulk_insert(
        sampling_point, [
            {'id': 1, 'name': 'Undetermined'},
            {'id': 2, 'name': 'Main tank-Bottom'},
            {'id': 3, 'name': 'Main tank-Top'},
            {'id': 4, 'name': 'Gas relay'},
            {'id': 5, 'name': 'Other'},
        ]
    )

    op.bulk_insert(
        material, [
            {'id': 1, 'code': 1, 'name': 'Copper'},
            {'id': 2, 'code': 2, 'name': 'Sand'},
            {'id': 3, 'code': 3, 'name': 'Paper'},
        ]
    )

    op.bulk_insert(
        fluid_type, [
            {'id': 1, 'code': 1, 'name': 'Mineral oil'},
            {'id': 2, 'code': 2, 'name': 'Silicone'},
            {'id': 3, 'code': 3, 'name': 'Vegetable oil'},
        ]
    )
    op.bulk_insert(
        lab, [
            {'id': 1, 'code': 1, 'name': 'Aucun / None'},
            {'id': 2, 'code': 2, 'name': 'Morgan Schaffer'},
            {'id': 3, 'code': 3, 'name': 'GE Syprotec'},
            {'id': 4, 'code': 4, 'name': 'General Electric'},
        ]
    )
    op.bulk_insert(
        campaign_status, [
            {'id': 1, 'name': 'Acquisition', 'code': 'acquisition'},
            {'id': 2, 'name': 'Laboratory', 'code': 'laboratory'},
            {'id': 3, 'name': 'Diagnosis', 'code': 'diagnosis'},
            {'id': 4, 'name': 'Recommendation', 'code': 'recommendation'},
            {'id': 5, 'name': 'Completed', 'code': 'completed'}
        ]
    )

    op.bulk_insert(
        test_reason, [
            {'id': 1, 'name': 'Undetermined'},
            {'id': 2, 'name': 'Preventive'},
            {'id': 3, 'name': 'Reception'},
            {'id': 4, 'name': 'Commissioning'},
            {'id': 5, 'name': 'Study'},
            {'id': 6, 'name': 'Fault'},
            {'id': 7, 'name': 'After degassing'},
            {'id': 8, 'name': 'After Fuller earth'},
            {'id': 9, 'name': 'New oil'},
            {'id': 10, 'name': 'Replace the oil'},
            {'id': 11, 'name': 'Other'}
        ]
    )

def delete_old():
    op.drop_table('air_breaker')
    op.drop_table('breaker')
    op.drop_table('bushing')
    op.drop_table('cable')
    op.drop_table('campaign_status')
    op.drop_table('campaign')
    op.drop_table('capacitor')
    op.drop_table('contract_status')
    op.drop_table('contract')
    op.drop_table('downstream')
    op.drop_table('equipment')
    op.drop_table('equipment_type')
    op.drop_table('fluid_type')
    op.drop_table('gas_sensor')
    op.drop_table('induction_machine')
    op.drop_table('lab')
    op.drop_table('manufacturer')
    op.drop_table('material')
    op.drop_table('norm')
    op.drop_table('norm_parameter')
    op.drop_table('norm_parameter_value')
    op.drop_table('norm_type')
    op.drop_table('powersource')
    op.drop_table('recommendation')
    op.drop_table('rectifier')
    op.drop_table('resistance')
    op.drop_table('sampling_point')
    op.drop_table('schedule')
    op.drop_table('switch')
    op.drop_table('switchgear')
    op.drop_table('synchronous_machine')
    op.drop_table('syringe')
    op.drop_table('tap_changer')
    op.drop_table('transformer')
    op.drop_table('upstream')


def downgrade():
    op.execute(sql='TRUNCATE TABLE campaign_status CASCADE;')
    op.execute(sql='TRUNCATE TABLE test_reason CASCADE;')
    op.execute(sql='TRUNCATE TABLE sampling_point CASCADE;')
    op.execute(sql='TRUNCATE TABLE campaign_status CASCADE;')
    op.execute(sql='TRUNCATE TABLE contract_status CASCADE;')
    op.execute(sql='TRUNCATE TABLE lab CASCADE;')
    op.execute(sql='TRUNCATE TABLE material CASCADE;')
    op.execute(sql='TRUNCATE TABLE fluid_type CASCADE;')