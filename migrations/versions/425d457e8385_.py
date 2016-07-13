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
        column('name', String),
        column('code', String)
    )
    norm_type_table = table(
        'norm_type',
        column('id', Integer),
        column('name', String),
    )

    norm_table = table(
        'norm',
        column('id', Integer),
        column('norm_type_id', String),
        column('name', String),
        column('code', String)
    )

    parameter_table = table(
        'norm_parameter',
        column('id', Integer),
        column('norm_id', Integer),
        column('name', String),
    )

    # parameter_value_table = table(
    #     'norm_parameter_value',
    #     column('id', Integer),
    #     column('param_id', Integer),
    #     column('equipment_type_id', Integer),
    #     column('value_type', String),
    #     column('value', String)
    # )

    op.create_table(
        'equipment_type',
        sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
        sa.Column('code', sa.VARCHAR(length=50),  nullable=False),
        sa.Column('name', sa.VARCHAR(length=255), nullable=False),
    )

    op.create_table(
        'norm_type',
        sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
        sa.Column('name', sa.VARCHAR(length=255), nullable=False),
    )

    op.create_table(
        'norm',
        sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
        sa.Column('norm_type_id', sa.VARCHAR(length=50),  nullable=False),
        sa.Column('code', sa.VARCHAR(length=50),  nullable=False),
        sa.Column('name', sa.VARCHAR(length=255), nullable=False),
    )

    op.bulk_insert(
        equipment_type, [
            {'id': 1, 'name': 'Air circuit breaker', 'code': 'A'},
            {'id': 2, 'name': 'Bushing', 'code': 'B'},
            {'id': 3, 'name': 'Capacitor', 'code': 'C'},
            {'id': 4, 'name': 'Breaker', 'code': 'D'},
            {'id': 5, 'name': 'Power Source', 'code': 'E'},
            {'id': 6, 'name': 'Cable', 'code': 'G'},
            {'id': 7, 'name': 'Switchgear', 'code': 'H'},
            {'id': 8, 'name': 'Induction machine', 'code': 'I'},
            {'id': 9, 'name': 'Synchronous machine', 'code': 'J'},
            {'id': 10, 'name': 'Localization', 'code': 'L'},
            {'id': 11, 'name': 'Tap changer', 'code': 'P'},
            {'id': 12, 'name': 'Rectifier', 'code': 'R'},
            {'id': 13, 'name': 'Site', 'code': 'S'},
            {'id': 14, 'name': 'Transformer', 'code': 'T'},
            {'id': 15, 'name': 'Tank', 'code': 'Y'},
            {'id': 16, 'name': 'Switch', 'code': 'Z'},
        ])

    op.bulk_insert(
        norm_type_table, [
            {'id': 1, 'name': 'Isolation', 'code': 'Isolation'},
            {'id': 2, 'name': 'Physical', 'code': 'Physical'},
            {'id': 3, 'name': 'Furann', 'code': 'Furann'},
            {'id': 4, 'name': 'Gas', 'code': 'Gas'},
        ]
    )

    isolation = []  # key is temperature in celsius
    i = 0
    for i in range(1, 81):
        isolation.append({'id': i, 'name': "%s" % i, 'norm_type_id': 1})

    isolation.append({'id': i + 1, 'name': "0", 'norm_type_id': 1})

    op.bulk_insert(
        norm_table, isolation
    )

    op.bulk_insert(
        norm_table, [
            {'id': 82, 'name': 'DEFAULT D', 'norm_type_id': 2},
            {'id': 83, 'name': 'DEFAULT P', 'norm_type_id': 2},
            {'id': 84, 'name': 'DEFAULT-H T', 'norm_type_id': 2},
            {'id': 85, 'name': 'DEFAULT-R T', 'norm_type_id': 2},
            {'id': 86, 'name': 'DEFAULT-S T', 'norm_type_id': 2},
            {'id': 87, 'name': 'NONE/AUCUN', 'norm_type_id': 2},
            {'id': 88, 'name': 'NONE/AUCUN-R', 'norm_type_id': 2},
            {'id': 89, 'name': 'NONE/AUCUN-S', 'norm_type_id': 2},
            {'id': 90, 'name': 'S.D.MYERS', 'norm_type_id': 2},

            # furann norms
            {'id': 91, 'name': 'DOBLE', 'norm_type_id': 3},
            {'id': 92, 'name': 'NONE/AUCUN', 'norm_type_id': 3},

            # gas norms
            {'id': 93, 'name': 'C57104', 'norm_type_id': 4},
            {'id': 94, 'name': 'C57104-R', 'norm_type_id': 4},
            {'id': 95, 'name': 'CNONE/AUCUN', 'norm_type_id': 4},
        ],
    )

    op.bulk_insert(
        parameter_table, [
            {'id': 1, 'name': 'Celcius'},
            {'id': 2, 'name': 'Fahrenheit'},
            {'id': 3, 'name': 'NotSeal'},
            {'id': 4, 'name': 'Seal'},
            {'id': 5, 'name': 'name'},
            {'id': 6, 'name': 'Acid Min'},
            {'id': 7, 'name': 'Acid Max'},
            {'id': 8, 'name': 'IFT Min'},
            {'id': 9, 'name': 'IFT Max'},
            {'id': 10, 'name': 'D1816 Min'},
            {'id': 11, 'name': 'D1816 Max'},
            {'id': 12, 'name': 'D877 Min'},
            {'id': 13, 'name': 'D877 Max'},
            {'id': 14, 'name': 'Color Min'},
            {'id': 15, 'name': 'Color Max'},
            {'id': 16, 'name': 'Density Min'},
            {'id': 17, 'name': 'Density Max'},
            {'id': 18, 'name': 'PF20 Min'},
            {'id': 19, 'name': 'PF20 Max'},
            {'id': 20, 'name': 'Water Min'},
            {'id': 21, 'name': 'Water Max'},
            {'id': 22, 'name': 'FlashPoint Min'},
            {'id': 23, 'name': 'FlashPoint Max'},
            {'id': 24, 'name': 'PourPoint Min'},
            {'id': 25, 'name': 'PourPoint Max'},
            {'id': 26, 'name': 'Viscosity Min'},
            {'id': 27, 'name': 'Viscosity Max'},
            {'id': 28, 'name': 'D1816_2 MIN'},
            {'id': 29, 'name': 'D1816_2 MAX'},
            {'id': 30, 'name': 'P100 MIN'},
            {'id': 31, 'name': 'P100 MAX'},
            {'id': 32, 'name': 'FluidType'},
            {'id': 33, 'name': 'CEI156 Min'},
            {'id': 34, 'name': 'CEI156 Max'},
            {'id': 35, 'name': 'name'},
            {'id': 36, 'name': 'C1'},
            {'id': 37, 'name': 'C2'},
            {'id': 38, 'name': 'C3'},
            {'id': 39, 'name': 'C4'},
            {'id': 40, 'name': 'name'},
            {'id': 41, 'name': 'H2'},
            {'id': 42, 'name': 'C2H2'},
            {'id': 43, 'name': 'C2H4'},
            {'id': 44, 'name': 'C2H6'},
            {'id': 45, 'name': 'CO'},
            {'id': 46, 'name': 'CO2'},
            {'id': 47, 'name': 'TDCG'},
            {'id': 48, 'name': 'H2'},
            {'id': 49, 'name': 'CH4'},
            # Level. Any gas above listed level indicate this condition
            {'id': 50, 'name': 'Level'},
            # FluidType. A different sets of levels exist for different type of insulating fluid
            {'id': 51, 'name': 'Fluid Type'},
            {'id': 52, 'name': 'name'}
        ],
    )


def downgrade():
    op.execute(sql='DROP TABLE norm CASCADE;')
    op.execute(sql='DROP TABLE norm_type CASCADE;')
    op.execute(sql='DROP TABLE equipment_type CASCADE;')
    # op.execute(sql='TRUNCATE TABLE norm_parameter CASCADE;')
