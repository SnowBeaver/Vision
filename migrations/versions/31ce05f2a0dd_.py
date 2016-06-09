"""empty message

Revision ID: 31ce05f2a0dd
Revises: 33bdcd4ac40e
Create Date: 2016-06-09 10:53:49.639226

"""

# revision identifiers, used by Alembic.
revision = '31ce05f2a0dd'
down_revision = '33bdcd4ac40e'

from alembic import op
# import sqlalchemy as sa
from sqlalchemy.sql import table, column
from sqlalchemy import String, Integer


def upgrade():
    # create tables with values
    gasket_condition_table = table('gasket_condition',
                                   column('id', Integer),
                                   column('name', String)
                                   )
    gas_relay_table = table('gas_relay',
                            column('id', Integer),
                            column('name', String)
                            )
    fluid_level_table = table('fluid_level',
                              column('id', Integer),
                              column('name', String)
                              )
    pressure_unit_table = table('pressure_unit',
                                column('id', Integer),
                                column('name', String)
                                )
    valve_condition_table = table('valve_condition',
                                  column('id', Integer),
                                  column('name', String)
                                  )
    pump_condition_table = table('pump_condition',
                                 column('id', Integer),
                                 column('name', String)
                                 )
    overall_condition_table = table('overall_condition',
                                    column('id', Integer),
                                    column('name', String)
                                    )
    paint_types_table = table('paint_types',
                              column('id', Integer),
                              column('name', String)
                              )
    tap_counter_status_table = table('tap_counter_status',
                                     column('id', Integer),
                                     column('name', String)
                                     )
    tap_filter_condition_table = table('tap_filter_condition',
                                       column('id', Integer),
                                       column('name', String)
                                       )
    fan_condition_table = table('fan_condition',
                                column('id', Integer),
                                column('name', String)
                                )
    connection_condition_table = table('connection_condition',
                                       column('id', Integer),
                                       column('name', String)
                                       )
    foundation_condition_table = table('foundation_condition',
                                       column('id', Integer),
                                       column('name', String)
                                       )
    heating_condition_table = table('heating_condition',
                                    column('id', Integer),
                                    column('name', String)
                                    )

    # create tables with values
    op.bulk_insert(gasket_condition_table, [
            {'id': 1, 'name': 'Good'},
            {'id': 2, 'name': 'Leak-wet'},
            {'id': 3, 'name': 'Leak-flowing'},
            {'id': 4, 'name': 'Not-visible'},
            {'id': 5, 'name': 'Not appl.'},
            {'id': 6, 'name': 'See notes'},
        ]
    )
    op.bulk_insert(gas_relay_table, [
            {'id': 1, 'name': 'Good'},
            {'id': 2, 'name': '100cc -1/2 full'},
            {'id': 3, 'name': '200cc - full'},
            {'id': 4, 'name': 'Not appl.'},
            {'id': 5, 'name': 'See notes'}
        ]
    )
    op.bulk_insert(fluid_level_table, [
            {'id': 1, 'name': 'Good'},
            {'id': 2, 'name': 'Very Low'},
            {'id': 3, 'name': 'Low'},
            {'id': 4, 'name': 'High'},
            {'id': 5, 'name': 'Unavailable'},
            {'id': 6, 'name': 'Not readable'},
            {'id': 7, 'name': 'Not-visible'},
            {'id': 8, 'name': 'Not appl.'},
            {'id': 9, 'name': 'See notes'},
        ]
    )
    op.bulk_insert(pressure_unit_table, [
            {'id': 1, 'name': 'kPa'},
            {'id': 2, 'name': 'psi'}
        ]
    )
    op.bulk_insert(valve_condition_table, [
            {'id': 1, 'name': 'Good'},
            {'id': 2, 'name': 'Leak-wet'},
            {'id': 3, 'name': 'Leak-flowing'},
            {'id': 4, 'name': 'Unavalable'},
            {'id': 5, 'name': 'Not-visible'},
            {'id': 6, 'name': 'Not appl.'},
            {'id': 7, 'name': 'See notes'},
        ]
    )
    op.bulk_insert(pump_condition_table, [
            {'id': 1, 'name': 'Working'},
            {'id': 2, 'name': 'Inoperable'},
            {'id': 3, 'name': 'Vibrating'},
            {'id': 4, 'name': 'Noisy'},
            {'id': 5, 'name': 'Leak-wet'},
            {'id': 6, 'name': 'Leak-flowing'},
            {'id': 7, 'name': 'Not appl'},
            {'id': 8, 'name': 'See notes'},
        ]
    )
    op.bulk_insert(overall_condition_table, [
            {'id': 1, 'name': 'Good'},
            {'id': 2, 'name': 'Dirty'},
            {'id': 3, 'name': 'Leak-wet'},
            {'id': 4, 'name': 'Rusted'},
            {'id': 5, 'name': 'Not appl'},
            {'id': 6, 'name': 'See notes'},
        ]
    )
    op.bulk_insert(paint_types_table, [
            {'id': 1, 'name': 'Good'},
            {'id': 2, 'name': 'White'},
            {'id': 3, 'name': 'Blue'},
            {'id': 4, 'name': 'Brown'},
            {'id': 5, 'name': 'Pink'},
            {'id': 6, 'name': 'Defective'},
            {'id': 7, 'name': 'Unavailable'},
            {'id': 8, 'name': 'Not appl'},
            {'id': 9, 'name': 'See notes'},
        ]
    )
    op.bulk_insert(tap_counter_status_table, [
            {'id': 1, 'name': 'Good'},
            {'id': 2, 'name': 'Defective'},
            {'id': 3, 'name': 'Not readable'},
            {'id': 4, 'name': 'Not appl'},
            {'id': 5, 'name': 'See notes'},
        ]
    )
    op.bulk_insert(tap_filter_condition_table, [
            {'id': 1, 'name': 'Good'},
            {'id': 2, 'name': 'Clogged'},
            {'id': 3, 'name': 'Defective'},
            {'id': 4, 'name': 'Leak-wet, Leak-flowing'},
            {'id': 5, 'name': 'Not appl'},
            {'id': 6, 'name': 'See notes'},
        ]
    )
    op.bulk_insert(fan_condition_table, [
            {'id': 1, 'name': 'Working'},
            {'id': 2, 'name': 'Inoperable'},
            {'id': 3, 'name': 'Vibrating'},
            {'id': 4, 'name': 'Noisy'},
            {'id': 5, 'name': 'Not appl'},
            {'id': 6, 'name': 'See notes'}
        ]
    )
    op.bulk_insert(connection_condition_table, [
            {'id': 1, 'name': 'Good'},
            {'id': 2, 'name': 'Sealed'},
            {'id': 3, 'name': 'Not appl'},
            {'id': 4, 'name': 'See notes'},
        ]
    )
    op.bulk_insert(foundation_condition_table, [
            {'id': 1, 'name': 'Good'},
            {'id': 2, 'name': 'Not to level'},
            {'id': 3, 'name': 'Dirty, Damaged'},
            {'id': 4, 'name': 'Not appl'},
            {'id': 5, 'name': 'See notes'},
        ]
    )
    op.bulk_insert(heating_condition_table, [
            {'id': 1, 'name': 'Good'},
            {'id': 2, 'name': 'Defective Res'},
            {'id': 3, 'name': 'Thermal_fault'},
            {'id': 4, 'name': 'Not appl'},
            {'id': 5, 'name': 'See notes'},
        ]
    )

def downgrade():
    op.execute(sql="TRUNCATE gasket_condition;")
    op.execute(sql="TRUNCATE gas_relay;")
    op.execute(sql="TRUNCATE fluid_level;")
    op.execute(sql="TRUNCATE pressure_unit;")
    op.execute(sql="TRUNCATE valve_condition;")
    op.execute(sql="TRUNCATE pump_condition;")
    op.execute(sql="TRUNCATE overall_condition;")
    op.execute(sql="TRUNCATE paint_types;")
    op.execute(sql="TRUNCATE tap_counter_status;")
    op.execute(sql="TRUNCATE tap_filter_condition;")
    op.execute(sql="TRUNCATE fan_condition;")
    op.execute(sql="TRUNCATE connection_condition;")
    op.execute(sql="TRUNCATE foundation_condition;")
    op.execute(sql="TRUNCATE heating_condition;")