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
    def __init__(self, obj, renderer_backend='matplotlib', size=400, fig='svg'):
        self.obj = obj
        self.renderer = hv.Store.renderers[renderer_backend].instance(size=int(size), fig=fig)

    def html(self):
        return self.renderer.html(self.obj)


class DGAGraph(AbstractGraph):
    def set_gases(self):
        self.gases = {'h2':'red', 'o2':'green', 'n2':'orange', 'co':'black', 'ch4':'yellow', 'co2':'blue', 'c2h2':'pink', 'c2h4':'cyan', 'c2h6':'purple', 'cap_gaz':'grey', 'content_gaz':'magenta'}
        
    def load_from_db(self):
        self.query = db.session.query(DissolvedGasTest). \
            join(DissolvedGasTest.test_result) .\
            filter(TestResult.equipment_id.in_(self.equipment_id)). \
            order_by(TestResult.date_analyse)

    def fetch_mpl_data(self):
        tests = self.group_by_equipment()
        self.group_by_gases(tests=tests)

    def group_by_equipment(self):
        tests = {}
        for record in self.query:
            equipment = record.test_result.equipment
            if equipment.id not in tests:
                tests[equipment.id] = {
                    'obj': [],
                    'equipment': '{} {}'.format(equipment.equipment_number, equipment.serial)
                }
            tests[equipment.id]['obj'].append(record)
        return tests

    def group_by_gases(self, tests):
        self.set_gases()
        labels = []
        for equipment_id, data in tests.items():
            test_objs = data['obj']
            equipment = data['equipment']
            for gas in self.gases.keys():
                records = []
                i = 0
                for record in test_objs:
                    if record.test_result.date_analyse:
                        i += 1
                        records.append({"day":record.test_result.date_analyse.strftime('%d.%m.%Y %H:%M'), "count":getattr(record, gas) or 0})
                        if i > 0:
                            labels.append({
                                'key':record.test_result.date_analyse.strftime('%Y%m%d') ,
                                'date':record.test_result.date_analyse.strftime('%m-%d-%Y'), 
                                'value':getattr(record, gas)})
                self.graph_data.append({"data": records, "label": "{} {}".format(gas.upper(), equipment)})
        self.text_labels = labels

    def fetch_mpl_obj(self):
        group = "Gas Concentration vs Time"
        plot = dict(aspect=2)
        legend = dict(legend_position='best', aspect=2)
        graph = None

        options = hv.Store.options(backend='matplotlib')
        options.Curve = hv.Options('style', color=hv.Cycle(values=self.gases.values()), linewidth=2)
        
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
        for data in self.text_labels:
            graph *= hv.Text(data['key'], data['value'], data['date'],fontsize=10)

        opts = {'Curve': {'plot': plot}, 'Overlay': {'plot': legend}}
        self.mpl_obj = graph(opts) if graph else None

    def html(self, size):
        self.load_from_db()
        self.fetch_mpl_data()
        self.fetch_mpl_obj()
        return GraphRenderer(obj=self.mpl_obj, size=size).html() if self.mpl_obj else None
    def json(self):
        self.load_from_db()
        self.fetch_mpl_data()
        return self.graph_data

class GraphGenerator:
    def __init__(self, equipment_id, graph_type='gas_concentration_vs_time'):
        self.graph_type = graph_type
        self.equipment_id = equipment_id

    def render(self, size=400):
        #html = GRAPH_TYPE_FUNCTIONALITY.get(self.graph_type)(equipment_id=self.equipment_id).html(size)
        json = GRAPH_TYPE_FUNCTIONALITY.get(self.graph_type)(equipment_id=self.equipment_id).json()
        return json


# Map graph type to the class which loads data and renders the graph
GRAPH_TYPE_FUNCTIONALITY = {
    'gas_concentration_vs_time': DGAGraph,      # DGA
}
