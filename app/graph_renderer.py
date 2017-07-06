from abc import ABCMeta, abstractmethod

import matplotlib as mpl
mpl.use('Agg')      # Force matplotlib to not use any Xwindows backend. Do this before loading any plotting lib
import holoviews as hv
from holoviews import Store
import holoviews.plotting.mpl       # Enable matplotlib renderer in the store


class AbstractGraph:
    __metaclass__ = ABCMeta

    def __init__(self):
        self.mpl_obj = None

    @abstractmethod
    def data(self):
        raise NotImplementedError

    @abstractmethod
    def fetch_mpl_obj(self):
        raise NotImplementedError

    @abstractmethod
    def html(self):
        raise NotImplementedError


class GraphRenderer:
    def __init__(self, obj, renderer_backend='matplotlib'):
        self.obj = obj
        self.renderer = Store.renderers[renderer_backend]

    def html(self):
        b = self.renderer.html(self.obj)
        return b


class DGAGraph(AbstractGraph):
    @staticmethod
    def data():
        # TODO: Sample data
        data = [.20, .20, .21, .23, .23, .23, .23, .24, .26, .27,
                    .28, .28, .29, .32, .33, .34, .35]
        return data

    def fetch_mpl_obj(self, data):
        group = "Gas Concentration vs Time"
        graph = hv.Curve(data, vdims=['Gas Concentration'], kdims=['Time'], label='DGA', group=group)
        plot = dict(interpolation='steps-mid', width=1000, height=1000)
        style = dict(line_dash=hv.Cycle(values=['dashed', 'solid']))
        legend = dict(legend_position='top_left')
        opts = {'Curve': {'style': style, 'plot': plot},
                'Overlay': {'plot': legend}}
        self.mpl_obj = graph(opts)

    def html(self):
        data = DGAGraph.data()
        self.fetch_mpl_obj(data)
        return GraphRenderer(obj=self.mpl_obj).html()


class GraphGenerator:
    def __init__(self, graph_type='gas_concentration_vs_time'):
        self.graph_type = graph_type

    def render(self):
        html = GRAPH_TYPE_FUNCTIONALITY.get(self.graph_type)().html()
        return html


GRAPH_TYPE_FUNCTIONALITY = {
    'gas_concentration_vs_time': DGAGraph,      # DGA
}
