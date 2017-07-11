from abc import ABCMeta, abstractmethod

import matplotlib as mpl
mpl.use('Agg')      # Force matplotlib to not use any Xwindows backend. Do this before loading any plotting lib
import holoviews as hv
import holoviews.plotting.mpl       # Enable matplotlib renderer in the store
from sqlalchemy.sql import func

from app.diagnostic.models import DissolvedGasTest, TestResult
from app import db


class AbstractGraph:
    __metaclass__ = ABCMeta

    def __init__(self, equipment_id):
        self.mpl_obj = None
        self.graph_data = []
        self.query = None
        self.equipment_id = equipment_id

    @abstractmethod
    def load_from_db(self):
        raise NotImplementedError

    @abstractmethod
    def fetch_mpl_data(self):
        raise NotImplementedError

    @abstractmethod
    def fetch_mpl_obj(self):
        raise NotImplementedError

    @abstractmethod
    def html(self):
        raise NotImplementedError


class GraphRenderer:
    def __init__(self, obj, renderer_backend='matplotlib', size=1000, fig='svg'):
        self.obj = obj
        self.renderer = hv.Store.renderers[renderer_backend].instance(size=size, fig=fig)

    def html(self):
        return self.renderer.html(self.obj)


class DGAGraph(AbstractGraph):
    def load_from_db(self):
        self.query = db.session.query(DissolvedGasTest). \
            join(DissolvedGasTest.test_result) .\
            filter(TestResult.equipment_id == self.equipment_id). \
            order_by(TestResult.date_analyse)

    def fetch_mpl_data(self):
        gases = ('h2', 'o2', 'n2', 'co', 'ch4', 'co2', 'c2h2', 'c2h4', 'c2h6', 'cap_gaz', 'content_gaz',)
        for gas in gases:
            records = []
            for record in self.query:
                if record.test_result.date_analyse:
                    records.append((record.test_result.date_analyse.year, getattr(record, gas) or 0))
            self.graph_data.append({'data': records, 'label': gas.upper()})

    def fetch_mpl_obj(self):
        group = "Gas Concentration vs Time"
        plot = dict(aspect=2)
        legend = dict(legend_position='top_left', aspect=2)
        graph = None
        for data in self.graph_data:
            graph_inter = hv.Curve(data['data'],
                                   vdims=['Gas Concentration'],
                                   kdims=['Time'],
                                   label=data['label'],
                                   group=group)
            if graph:
                graph *= graph_inter
            else:
                graph = graph_inter
        opts = {'Curve': {'plot': plot}, 'Overlay': {'plot': legend}}
        self.mpl_obj = graph(opts)

    def html(self):
        self.load_from_db()
        self.fetch_mpl_data()
        self.fetch_mpl_obj()
        return GraphRenderer(obj=self.mpl_obj).html()


class GraphGenerator:
    def __init__(self, equipment_id, graph_type='gas_concentration_vs_time'):
        self.graph_type = graph_type
        self.equipment_id = equipment_id

    def render(self):
        html = GRAPH_TYPE_FUNCTIONALITY.get(self.graph_type)(equipment_id=self.equipment_id).html()
        return html


# Map graph type to the class which loads data and renders the graph
GRAPH_TYPE_FUNCTIONALITY = {
    'gas_concentration_vs_time': DGAGraph,      # DGA
}
