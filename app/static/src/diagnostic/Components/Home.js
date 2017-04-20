import {Component} from 'react';
import React from 'react';
import Select2 from 'react-select2-wrapper';

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
            isVisible: false,
            placeholder: 'Filter by campaign (Sample: 2017-04-10 18:07:51 | non detectable)'
        };
    },

    isVisible: function () {
        return this.state.isVisible;
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
            optionName.push(moment(data.date_created).utc().format(DATETIME_FORMAT));
        }
        if (data.description) {
            optionName.push(data.description.substr(0, 20));
        }
        return optionName.join(" | ") || "";
    },

    formatRepo: function (campaign) {
        if (campaign.loading) return campaign.text;
        var markup = "<div class='select2-result-repository__title' " +
            "title='" + campaign.description + "'>" + this.formatCampaignName(campaign) +
            "</div>";
        return markup;
    },

    formatRepoSelection: function (campaign) {
        return this.formatCampaignName(campaign) || campaign.text;
    },

    onSelect: function (e) {
        let current_state = this.state;
        current_state.placeholder = this.formatCampaignName(e.params.data);
        this.setState(current_state);
        this.props.onSelect(e);
    },

    render: function () {
        var className = (this.props.className != null) ? this.props.className : "";

        return (
            <FormGroup className={className}>
                <Select2
                    className="col-md-12"
                    onSelect={this.onSelect}
                    disabled={this.props.disabled}
                    options={
                    {
                      placeholder: this.state.placeholder,
                      dropdownAutoWidth: true,
                      language: { errorLoading:function(){ return "Searching..." }},
                      ajax: {
                            url: '/api/v1.0/' + this.props.source + '/',
                            dataType: 'json',
                            delay: 250,
                            data: function (params) {
                              return {
                                q: params.term, // search term
                                last_id: params.last_id
                              };
                            },
                            processResults: function (data, params) {
                              params.page = params.page || 1;
                              if (data.result.items.length) {
                                params.last_id = data.result.items[data.result.items.length - 1].id;
                              }
                              return {
                                results: data.result.items,
                                pagination: {
                                  more: (params.page * 20) < data.result.total_count
                                }
                              };
                            },
                            cache: true
                          },
                      escapeMarkup: function (markup) { return markup; },
                      minimumInputLength: 1,
                      templateResult: this.formatRepo,
                      templateSelection: this.formatRepoSelection
                    }
                  }
                />
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
            searchValue: "",
            selected_equipment_ids: []
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

    onTreeNodeClick: function (treeItem, selected_equipment_ids) {
        if (!localStorage.getItem('Id')) {
            NotificationManager.error('Please re-login to get actual information');
            return;
        }
        if (treeItem.text == 'Vision Diagnostic') {
            this.loadCreatedTasks(localStorage.getItem('Id'));
        } else {
            // null comes as string in case no equipment assigned to tree item, condition from below should be removed later
            var id = (treeItem.equipment_id != 'null') ? treeItem.equipment_id : 0;
            this.setState({
                equipmentId: id,
                campaignId: null,
                searchValue: "",
                selected_equipment_ids: selected_equipment_ids
            });
            this.loadEquipment(id);
        }
    },

    loadEquipment: function (equipmentId, campaignId) {
        var src = '/api/v1.0/test_result/?';

        if (campaignId) {
            src += 'campaign_id=' + campaignId;
        } else {
            src += 'equipment_id=' + equipmentId;
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
        var value = e.params.data.id;
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
                        <Link to={{ pathname: '/campaign',
                                    query: {
                                        equipment_ids: this.state.selected_equipment_ids } }}
                              className="btn btn-success btn-large">
                            New Campaign
                        </Link>
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
                                         onSelect={this.onCampaignFilterChange}/>
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
