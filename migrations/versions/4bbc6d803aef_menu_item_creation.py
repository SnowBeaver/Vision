"""menu_item creation

Revision ID: 4bbc6d803aef
Revises: 4bf2996e07b3
Create Date: 2016-01-13 23:40:27.072013

"""

# revision identifiers, used by Alembic.
revision = '4bbc6d803aef'
down_revision = '4bf2996e07b3'

from alembic import op
import sqlalchemy as sa
from sqlalchemy.schema import CreateSequence, DropSequence


def upgrade():

    op.execute(CreateSequence(sa.Sequence(name = 'menu_items_id_seq')))
    op.create_table('menu_items',
        sa.Column('id', sa.INTEGER() , server_default = sa.Sequence(name = 'menu_items_id_seq').next_value() , nullable = False ),

        sa.Column('parent_id', sa.INTEGER(), autoincrement = False, nullable = True),
        sa.Column('icon', sa.VARCHAR(length = 126), autoincrement = False, nullable = True),
        sa.Column('opened', sa.BOOLEAN(), autoincrement = False, nullable = True),
        sa.Column('disabled', sa.BOOLEAN(), autoincrement = False, nullable = True),
        sa.Column('selected', sa.BOOLEAN(), autoincrement = False, nullable = True),
        sa.Column('type', sa.VARCHAR(length = 58), autoincrement = False, nullable = True),

        sa.Column('tag', sa.VARCHAR(length = 255), autoincrement = False, nullable = True),
        sa.Column('slug', sa.VARCHAR(length = 255), autoincrement = False, nullable = True),
        sa.Column('page_id', sa.INTEGER() , autoincrement = False, nullable = True),

        sa.ForeignKeyConstraint(['parent_id'], [u'menu_items.id'], name=u'menu_items_parent_id_fkey'),
        sa.PrimaryKeyConstraint(u'id', name = u'menu_items_pkey')
    )

    op.create_table('menu_items_translation',
        sa.Column('id', sa.INTEGER(), autoincrement = False, nullable = False),
        sa.Column('locale', sa.VARCHAR(length = 10), autoincrement = False, nullable = False),
        sa.Column('text', sa.TEXT() , autoincrement = False, nullable = True),
        sa.ForeignKeyConstraint(['id'], [u'menu_items.id'], name = u'menu_items_translation_id_fkey', ondelete = u'CASCADE'),
        sa.PrimaryKeyConstraint('id', 'locale' , name = u'menu_items_translation_pkey')
    )


def downgrade():
    op.drop_table('menu_items_translation')
    op.drop_table('menu_items')
    op.execute(DropSequence(sa.Sequence(name='menu_items_id_seq')))
