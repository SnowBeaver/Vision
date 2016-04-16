from app import db
from sqlalchemy_i18n import (make_translatable, translation_base, Translatable)
from sqlalchemy.ext.declarative import declarative_base
import sqlalchemy as sqla
from sqlalchemy.orm import relationship, backref
from sqlalchemy.orm.collections import attribute_mapped_collection


class File(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Unicode(64))
    path = db.Column(db.Unicode(128))

    def __unicode__(self):
        return self.name


class Image(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Unicode(64))
    path = db.Column(db.Unicode(128))

    def __unicode__(self):
        return self.name

    @property
    def serialize(self):
        return {
            'id': self.id
            ,'name': self.name
            ,'path': self.path
        }


Base = declarative_base()
make_translatable(options={'locales': ['en', 'fr', 'es']})


class MenuItemsNode(Translatable, Base):
    __tablename__ = 'menu_items'
    __translatable__ = {
        'locales': ['en', 'fr', 'es'],
        'dynamic_source_locale': True
    }

    locale = 'en'  # this defines the default locale

    id = sqla.Column(sqla.Integer, primary_key=True)
    parent_id = sqla.Column(sqla.Integer, sqla.ForeignKey(id))

    # icon = sqla.Column(sqla.String(126) , default="../app/static/img/folder.png")
    opened = sqla.Column(sqla.Boolean(), default=True)
    disabled = sqla.Column(sqla.Boolean(), default=False)
    selected = sqla.Column(sqla.Boolean(), default=False)
    type = sqla.Column(sqla.String(58), default='parent')

    tag = sqla.Column(sqla.String(255))
    slug = sqla.Column(sqla.String(255))
    page_id = sqla.Column(sqla.Integer, nullable=True)

    children = relationship("MenuItemsNode",
                            # cascade deletions
                            cascade="all, delete-orphan",
                            # many to one + adjacency list - remote_side
                            # is required to reference the 'remote'
                            # column in the join condition.
                            backref=backref("parent", remote_side=id),
                            # children will be represented as a dictionary
                            # on the "name" attribute.
                            collection_class=attribute_mapped_collection('text'),
                            )

    def get_locale(self):
        return self.locale

    def __init__(self, text='', parent=None, opened=True, disabled=False,
                 selected=False, type='parent', tag='', slug=''):
        self.text = text
        self.parent = parent
        # icon="glyphicon glyphicon-folder"
        # self.icon = icon
        self.opened = opened
        self.disabled = disabled
        self.selected = selected
        self.type = type
        self.tag = tag
        self.slug = slug

    def dump(self, _indent=0):
        return "   " * _indent + repr(self) + \
               "\n" + \
               "".join([
                           c.dump(_indent + 1)
                           for c in self.children.values()]
                       )


class MenuItemsNodeTranslation(translation_base(MenuItemsNode)):
    __tablename__ = 'menu_items_translation'

    text = sqla.Column(sqla.UnicodeText())
