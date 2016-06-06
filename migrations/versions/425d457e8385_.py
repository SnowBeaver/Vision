"""empty message

Revision ID: 425d457e8385
Revises: 4bbc6d803aef
Create Date: 2016-06-02 14:05:46.102059

"""

# revision identifiers, used by Alembic.
revision = '425d457e8385'
down_revision = '4bbc6d803aef'

from alembic import op
import sqlalchemy as sa
from datetime import date
from sqlalchemy.sql import table, column
from sqlalchemy import String, Integer, Date



def upgrade():

    # Create an ad-hoc table to use for the insert statement.
    equipment_type = table(
        'equipment_type',
        column('id', Integer),
        column('Name', String),
        column('Code', String)
    )
    norm_type_table = table(
        'norm_type',
        column('id', Integer),
        column('Name', String),
    )

    norm_table = table(
        'norm',
        column('id', Integer),
        column('norm_type_id', String),
        column('Name', String),
        column('Code', String)
    )

    parameter_table = table(
        'norm_parameter',
        column('id', Integer),
        column('norm_id', Integer),
        column('Name', String),
    )

    parameter_value_table = table(
        'norm_parameter_value',
        column('id', Integer),
        column('param_id', Integer),
        column('equipment_type_id', Integer),
        column('value_type', String),
        column('value', String)
    )
    op.bulk_insert(
        equipment_type, [
            {'id': 1, 'Name': 'Air circuit breaker', 'Code': 'A'},
            {'id': 2, 'Name': 'Bushing', 'Code': 'B'},
            {'id': 3, 'Name': 'Capacitor', 'Code': 'C'},
            {'id': 4, 'Name': 'Breaker', 'Code': 'D'},
            {'id': 5, 'Name': 'Power Source', 'Code': 'E'},
            {'id': 6, 'Name': 'Cable', 'Code': 'G'},
            {'id': 7, 'Name': 'Switchgear', 'Code': 'H'},
            {'id': 8, 'Name': 'Induction machine', 'Code': 'I'},
            {'id': 9, 'Name': 'Synchronous machine', 'Code': 'J'},
            {'id': 10, 'Name': 'Localization', 'Code': 'L'},
            {'id': 11, 'Name': 'Tap changer', 'Code': 'P'},
            {'id': 12, 'Name': 'Rectifier', 'Code': 'R'},
            {'id': 13, 'Name': 'Site', 'Code': 'S'},
            {'id': 14, 'Name': 'Transformer', 'Code': 'T'},
            {'id': 15, 'Name': 'Tank', 'Code': 'Y'},
            {'id': 16, 'Name': 'Switch', 'Code': 'Z'},
        ])

    op.bulk_insert(
        norm_type_table, [
            {'id': 1, 'Name': 'Isolation', 'Code': 'Isolation'},
            {'id': 2, 'Name': 'Physical', 'Code': 'Physical'},
            {'id': 3, 'Name': 'Furann', 'Code': 'Furann'},
            {'id': 4, 'Name': 'Gas', 'Code': 'Gas'},
        ]
    )

    isolation = []  # key is temperature in celsius
    i = 0
    for i in range(1, 81):
        isolation.append({'id': i, 'Name': "%s" % i, 'norm_type_id': 1})

    isolation.append({'id': i + 1, 'Name': "0", 'norm_type_id': 1})

    op.bulk_insert(
        norm_table, isolation
    )

    op.bulk_insert(
        norm_table, [
            {'id': 82, 'Name': 'DEFAULT D', 'norm_type_id': 2},
            {'id': 83, 'Name': 'DEFAULT P', 'norm_type_id': 2},
            {'id': 84, 'Name': 'DEFAULT-H T', 'norm_type_id': 2},
            {'id': 85, 'Name': 'DEFAULT-R T', 'norm_type_id': 2},
            {'id': 86, 'Name': 'DEFAULT-S T', 'norm_type_id': 2},
            {'id': 87, 'Name': 'NONE/AUCUN', 'norm_type_id': 2},
            {'id': 88, 'Name': 'NONE/AUCUN-R', 'norm_type_id': 2},
            {'id': 89, 'Name': 'NONE/AUCUN-S', 'norm_type_id': 2},
            {'id': 90, 'Name': 'S.D.MYERS', 'norm_type_id': 2},

            # furann norms
            {'id': 91, 'Name': 'DOBLE', 'norm_type_id': 3},
            {'id': 92, 'Name': 'NONE/AUCUN', 'norm_type_id': 3},

            # gas norms
            {'id': 93, 'Name': 'C57104', 'norm_type_id': 4},
            {'id': 94, 'Name': 'C57104-R', 'norm_type_id': 4},
            {'id': 95, 'Name': 'CNONE/AUCUN', 'norm_type_id': 4},
        ],
    )

    op.bulk_insert(
        parameter_table, [
            {'id': 1, 'Name': 'Celcius'},
            {'id': 2, 'Name': 'Fahrenheit'},
            {'id': 3, 'Name': 'NotSeal'},
            {'id': 4, 'Name': 'Seal'},
            {'id': 5, 'Name': 'Name'},
            {'id': 6, 'Name': 'Acid Min'},
            {'id': 7, 'Name': 'Acid Max'},
            {'id': 8, 'Name': 'IFT Min'},
            {'id': 9, 'Name': 'IFT Max'},
            {'id': 10, 'Name': 'D1816 Min'},
            {'id': 11, 'Name': 'D1816 Max'},
            {'id': 12, 'Name': 'D877 Min'},
            {'id': 13, 'Name': 'D877 Max'},
            {'id': 14, 'Name': 'Color Min'},
            {'id': 15, 'Name': 'Color Max'},
            {'id': 16, 'Name': 'Density Min'},
            {'id': 17, 'Name': 'Density Max'},
            {'id': 18, 'Name': 'PF20 Min'},
            {'id': 19, 'Name': 'PF20 Max'},
            {'id': 20, 'Name': 'Water Min'},
            {'id': 21, 'Name': 'Water Max'},
            {'id': 22, 'Name': 'FlashPoint Min'},
            {'id': 23, 'Name': 'FlashPoint Max'},
            {'id': 24, 'Name': 'PourPoint Min'},
            {'id': 25, 'Name': 'PourPoint Max'},
            {'id': 26, 'Name': 'Viscosity Min'},
            {'id': 27, 'Name': 'Viscosity Max'},
            {'id': 28, 'Name': 'D1816_2 MIN'},
            {'id': 29, 'Name': 'D1816_2 MAX'},
            {'id': 30, 'Name': 'P100 MIN'},
            {'id': 31, 'Name': 'P100 MAX'},
            {'id': 32, 'Name': 'FluidType'},
            {'id': 33, 'Name': 'CEI156 Min'},
            {'id': 34, 'Name': 'CEI156 Max'},
            {'id': 35, 'Name': 'Name'},
            {'id': 36, 'Name': 'C1'},
            {'id': 37, 'Name': 'C2'},
            {'id': 38, 'Name': 'C3'},
            {'id': 39, 'Name': 'C4'},
            {'id': 40, 'Name': 'Name'},
            {'id': 41, 'Name': 'H2'},
            {'id': 42, 'Name': 'C2H2'},
            {'id': 43, 'Name': 'C2H4'},
            {'id': 44, 'Name': 'C2H6'},
            {'id': 45, 'Name': 'CO'},
            {'id': 46, 'Name': 'CO2'},
            {'id': 47, 'Name': 'TDCG'},
            {'id': 48, 'Name': 'H2'},
            {'id': 49, 'Name': 'CH4'},
            # Level. Any gas above listed level indicate this condition
            {'id': 50, 'Name': 'Level'},
            # FluidType. A different sets of levels exist for different type of insulating fluid
            {'id': 51, 'Name': 'Fluid Type'},
            {'id': 52, 'Name': 'Name'}
        ],
    )


def downgrade():
    op.execute(sql='TRUNCATE TABLE norm CASCADE;')
    op.execute(sql='TRUNCATE TABLE norm_parameter CASCADE;')
