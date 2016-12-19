import React from 'react';
import injectTapEventPlugin from "react-tap-event-plugin";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Button from 'react-bootstrap/lib/Button';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import DateTimeField from 'react-bootstrap-datetimepicker/lib/DateTimeField'
import Panel from 'react-bootstrap/lib/Panel';
import NewNormForm from '../EquipmentForm_modules/NewNormForm';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';


const NormForm = React.createClass({
    getInitialState: function () {
        return {
            loading: false,
            errors: {},
            items: [],
        };
    },
    hideLoading: function () {
        this.setState({loading: false});
    },
    componentDidMount: function () {
        var source = '/api/v1.0/norm';
        this.serverRequest = $.authorizedGet(source, function (result) {
            this.setState({items: (result['result'])});
        }.bind(this), 'json');
    },
    componentWillUnmount: function () {
        this.serverRequest.abort();
    },
    render: function () {
        var tabs = [];
        var tabPanels = [];
        for (var key in this.state.items) {
            var tabId = this.state.items[key].id + 1;
            tabs.push(
                <li key={tabId}><a href={"#tabs-" + tabId} data-toggle="tab">{this.state.items[key].name}</a></li>
            );
            tabPanels.push(
                <div id={"tabs-" + tabId} key={"_" + tabId} role="tabpanel" className="tab-pane">
                    {this.state.items[key].name}
                </div>
            )
        }

        return (
            <div>
                <div className="maxwidth padding-top-lg margin-bottom-xs">
                    <ul id="tabs" className="nav nav-tabs " data-tabs="tabs">
                        <li className="active"><a href="#tabs-1" data-toggle="tab">Add new</a></li>
                        {tabs}
                    </ul>
                    <div id="my-tab-content" className="tab-content col-lg-12 nopadding">
                        <div id="tabs-1" role="tabpanel" className="tab-pane active">
                            <NewNormForm />
                        </div>
                        {tabPanels}
                    </div>
                </div>
            </div>
        );
    }
});

export default NormForm;
