import {Component} from 'react';
import React from 'react';
// import EquipmentList from '../EquipmentList';
import TestResultForm from '../TestResultForm';
import EquipmentTestForm from '../EquipmentTestForm';
import TreeComponent from '../TreeComponent';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import {Link} from 'react-router'
import {DATETIME_FORMAT} from '../appConstants.js';
import {NotificationContainer, NotificationManager} from 'react-notifications';


var CampaignSelectField = React.createClass({
    getInitialState: function () {
        return {
            items: [],
            isVisible: false
        };
    },

    isVisible: function () {
        return this.state.isVisible;
    },

    componentDidMount: function () {
        var source = '/api/v1.0/' + this.props.source + '/';
        this.serverRequest = $.authorizedGet(source, function (result) {
            this.setState({items: (this.sortItemsByKey(result['result'], 'date_created'))});
        }.bind(this), 'json');
    },

    sortItemsByKey: function (array, key){
        return array.sort(function(a, b) {
            var a = a[key];
            var b = b[key];
            if (a === null) {
                return 1;
            } else if (b === null) {
                return -1;
            } else if (a === b) {
                return 0;
            } else {
                return a < b ? 1 : -1;
            }
        });
    },

    componentWillUnmount: function () {
        this.serverRequest.abort();
    },

    setVisible: function () {
        this.state.isVisible = true;
    },

    formatCampaignName: function (data) {
        var optionName = [];
        if (data.date_created) {
            optionName.push(moment(data.date_created).format(DATETIME_FORMAT));
        }
        if (data.description) {
            optionName.push(data.description.substr(0, 20));
        }
        return optionName.join(" | ") || "";
    },

    render: function () {
        var label = (this.props.label != null) ? this.props.label : "";
        var name = (this.props.name != null) ? this.props.name : "";
        var value = (this.props.value != null) ? this.props.value : "";
        var className = (this.props.className != null) ? this.props.className : "";
        var menuItems = [];
        for (var key in this.state.items) {
            menuItems.push(<option key={this.state.items[key].id}
                                   value={this.state.items[key].id}>{`${this.formatCampaignName(this.state.items[key])}`}</option>);
        }
        return (
            <FormGroup className={className}>
                <FormControl componentClass="select"
                             onChange={this.props.onChange}
                             name={name}
                             value={value}
                             disabled={this.props.disabled}
                >
                    <option value="">{label}</option>
                    {menuItems}
                    <FormControl.Feedback />
                </FormControl>
            </FormGroup>
        );
    }
});

const TextField = React.createClass({
    render: function () {
        var label = (this.props.label != null) ? this.props.label : "";
        var name = (this.props.name != null) ? this.props.name : "";
        var value = (this.props.value != null) ? this.props.value : "";
        var className = (this.props.className != null) ? this.props.className : "";
        var showLabel = (this.props.showLabel != null) ? this.props.showLabel : true;
        return (
            <FormGroup className={className}>
                {showLabel ? <ControlLabel>{label}</ControlLabel> : null}
                <FormControl type="text"
                             placeholder={label}
                             name={name}
                             value={value}
                             onChange={this.props.onChange}
                             disabled={this.props.disabled}
                />
                <FormControl.Feedback />
            </FormGroup>
        );
    }
});

var Home = React.createClass({

    getInitialState: function () {
        return {
            source: '/api/v1.0/campaign/',
            text: '',
            equipmentId: null,
            campaignId: null,
            searchValue: ""
        }
    },

    componentDidMount: function (){
        var equipmentId = this.props.params.equipmentId;
        if (/^\d+$/.test(equipmentId)) {
            this.loadEquipment(equipmentId);
        }
    },

    onTreeSearch: function (e) {
        this.setState({
            searchValue: e.target.value
        });
        this.refs.tree.handleTreeSearch(e.target.value);
    },

    onTreeNodeClick: function (treeItem) {
        if (!localStorage.getItem('Id')) {
            NotificationManager.error('Please re-login to get actual information');
            return;
        }
        if (treeItem.text == 'Vision Diagnostic') {
            this.loadCreatedTasks(localStorage.getItem('Id'));
        } else {
            // null comes as string in case no equipment assigned to tree item, condition from below should be removed later
            var id = (treeItem.equipment_id != 'null') ? treeItem.equipment_id : 0;
            this.setState({equipmentId: id, campaignId: null, searchValue: ""});
            this.loadEquipment(id);
        }
    },

    loadEquipment: function (equipmentId, campaignId) {
        var src = '/api/v1.0/test_result/?equipment_id=' + equipmentId;

        if (campaignId) {
            src += '&campaign_id=' + campaignId;
        }

        this.setState({
            source: src
        });
        this.refs.testResultList.updateSource(src);
    },

    loadCreatedTasks: function (createdById) {
        var src = '/api/v1.0/test_result/?campaign__created_by_id=' + createdById;
        this.setState({
            source: src
        });
        this.refs.testResultList.updateSource(src);
    },

    onCampaignFilterChange: function (e) {
        var value = e.target.value;
        this.setState({campaignId: value});
        this.loadEquipment(this.state.equipmentId || 0, value);
    },

    searchTests: function (e) {
        this.setState({searchValue: e.target.value});
        this.refs.testResultList.searchTests(e);
    },

    render: function () {
        return (
            <div>
                <div className="row">
                    <div className="col-md-3 equal_col">
                        <Link to='/campaign' className="btn btn-success btn-large">New Campaign</Link>
                    </div>
                </div>
                <br/>
                <div className="col-md-3 equal_col">
                    <div className="maxwidth">
                        <FormGroup>
                            <FormControl
                                type="text"
                                placeholder="Search equipment"
                                ref="search"
                                id="plugins4_q"
                                className="input col-md-12"
                                onKeyUp={this.onTreeSearch}/>
                        </FormGroup>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <TreeComponent
                            ref="tree"
                            struct={treeStruct}
                            onTreeNodeClick={this.onTreeNodeClick}
                        />
                    </div>
                </div>
                <div className="col-md-9">
                    <CampaignSelectField source="campaign"
                                         label="Filter by campaign"
                                         name='campaign_id'
                                         className="col-md-6 nopadding"
                                         value={this.state.campaignId}
                                         onChange={this.onCampaignFilterChange}/>
                    <div className="col-md-6">
                        <TextField label="Search"
                                   showLabel={false}
                                   value={this.state.searchValue}
                                   onChange={this.searchTests}/>
                    </div>
                    <br/>
                    <TestResultForm ref="testResultList"
                                    source={this.state.source}/>
                </div>
            </div>
        )
    }
});
export default Home;
