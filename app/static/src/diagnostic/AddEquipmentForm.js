import React from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import {Link} from 'react-router';
import {hashHistory} from 'react-router';
import {NotificationContainer, NotificationManager} from 'react-notifications';

var EquipmentSelectField = React.createClass({

    getInitialState: function () {
        return {
            items: []
        };
    },

    handleChange: function (event, index, value) {

        this.setState({
            value: event.target.value
        })
    },

    componentDidMount: function () {
        this.serverRequest = $.get(this.props.source, function (result) {
            var items = (result['result']);
            this.setState({
                items: items
            });
        }.bind(this), 'json');
    },

    componentWillUnmount: function () {
        this.serverRequest.abort();
    },

    removeSelect: function () {
        this.props.removeSelect(this.props.index);
    },

    getSelected: function () {
        return this.state.selected || this.state.value;
    },

    setSelected: function (selected) {
        this.setState({
            selected: selected
        })
    },

    render: function () {
        var menuItems = [];
        var previousValues = (this.props.previousValues) ? this.props.previousValues : [];
        for (var key in this.state.items) {
            menuItems.push(
                <option key={this.state.items[key].id}
                        value={this.state.items[key].id}
                        disabled={previousValues.indexOf(this.state.items[key].id) > -1 ? true : false}>
                    {`${this.state.items[key].name} ${this.state.items[key].serial}`}
                </option>
            );
        }
        var index = this.props.index.toString();
        var id = 'index-' + index;

        return (
            <div className="row" id={id}>
                <div className="col-md-1">
                    {this.props.index + 1}
                </div>
                <div className="col-md-6">
                    <span>
                        <FormGroup controlId={index}>
                            <FormControl
                                componentClass="select"
                                placeholder="equipment"
                                name="equipment_id"
                                onChange={this.handleChange}
                                value={this.props.value}
                            >
                                <option key="0" value="select">Select equipment {this.props.index + 1}</option>
                                {menuItems}
                            </FormControl>
                        </FormGroup>
                    </span>
                </div>
                <div className="col-md-1">
                    <a href="javascript:void(0)"
                       className="glyphicon glyphicon-remove text-danger"
                       onClick={this.removeSelect}
                       aria-hidden="true">
                    </a>
                </div>
            </div>
        );
    }
});


var AddEquipmentForm = React.createClass({

    getInitialState: function () {
        return {
            loading: false,
            errors: {},
            numberOfSelects: 1,
            equipment: []
        }
    },

    _create: function () {

        return $.ajax({
            url: '/api/v1.0/test_result/equipment',
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify({
                // comes as url argument
                'campaign_id': parseInt(this.props.params['campaign']),
                'equipment_id': this.state.equipment
            }),
            success: function (data, textStatus) {
            },
            beforeSend: function () {
                this.setState({loading: true});
            }.bind(this)
        })
    },

    _onSubmit: function (e) {
        e.preventDefault();
        if (!this.is_valid()){
			NotificationManager.error('Please correct the errors');
            e.stopPropagation();
			return false;
		}
        var xhr = this._create();
        xhr.done(this._onSuccess)
            .fail(this._onError)
            .always(this.hideLoading)
    },

    hideLoading: function () {
        this.setState({loading: false});
    },

    _onSuccess: function (data) {
        this.setState(this.getInitialState());
        NotificationManager.success('Campaign equipment successfully saved.', null, 3000);

        var campaign = this.props.params['campaign'];
        setTimeout(function(){ hashHistory.push('/campaign/' + campaign); }, 3000);
    },

    _onError: function (data) {
        var message = "Failed to create";
        var res = data.responseJSON;
        if (res.message) {
            message = data.responseJSON.message;
        }

        if (res.error) {
            // Join multiple error messages
            for (var field in res.error){
                var errorMessage = res.error[field];
                if (Array.isArray(errorMessage)){
                     errorMessage = errorMessage.join(". ");
                }
                res.error[field] = errorMessage;
            }
            this.setState({
                errors: res.error
            });
        }
        NotificationManager.error(message);
    },
    _validate: function () {
        return  {};
    },
    is_valid: function () {
        return (Object.keys(this.state.errors).length <= 0);
    },
    _formGroupClass: function (field) {
        var className = "form-group ";
        if (field) {
            className += " has-error"
        }
        return className;
    },

    onClickCancel: function () {
        if (confirm('Are you sure you want to cancel campaign? All campaign data will be lost')) {
            //@todo redirect to cancel or call cancel campaign function
        }
    },

    _onChange: function (e) {
        var state = {};
        var eq = this.state.equipment;
        eq[e.target.id] = parseInt(e.target.value);
        state[e.target.name] = e.target.value;
        state['equipment'] = Array.from(new Set(eq));
        this.setState(state);
    },

    onClickSelectAdd: function () {

        var numberOfSelects = this.state.numberOfSelects + 1;
        this.setState({
            numberOfSelects: numberOfSelects
        });
    },

    removeSelect: function (index) {
        var numberOfSelects = this.state.numberOfSelects - 1;
        this.setState({
            numberOfSelects: numberOfSelects
        });
        var arr = this.state.equipment;
        arr.splice(index, 1);

        this.setState({
            equipment: arr
        });
    },

    getItems: function () {

        var items = [];
        var previousValues = [];
        var numberOfSelects = this.state.numberOfSelects;

        for (var i = 0; i < numberOfSelects; i++) {
            var value = null || this.state.equipment[i];
            previousValues.push(value);
            items.push(
                <EquipmentSelectField
                    key={i}
                    index={i}
                    source="/api/v1.0/equipment"
                    removeSelect={this.removeSelect}
                    value={value}
                    previousValues={previousValues}
                />
            );
        }

        return items;
    },

    render: function () {

        return (
            <div className="form-container">
                <form className="" method="post" action="#" onSubmit={this._onSubmit} onChange={this._onChange}>
                    <Panel header="Add equipment">
                        <HelpBlock className="warning">{this.state.errors.equipment_id}</HelpBlock>
                        {this.getItems()}
                        <div className="row">
                            <div className="col-md-10">
                                <a href="javascript:void(0)"
                                   className="glyphicon glyphicon-plus"
                                   onClick={this.onClickSelectAdd}
                                   aria-hidden="true">&nbsp;</a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 ">
                                <Button bsStyle="success" type="submit"
                                        className="pull-right"
                                >Next</Button>
                                <Button bsStyle="danger" onClick={this.onClickCancel}
                                        className="pull-right margin-right-xs"
                                >Cancel</Button>
                            </div>
                        </div>
                    </Panel>
                </form>
            </div>
        );
    }
});


export default AddEquipmentForm;