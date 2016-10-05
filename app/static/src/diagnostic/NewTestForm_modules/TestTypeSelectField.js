import React from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';


var items = [];


var TestTypeSelectField = React.createClass({

	handleChange: function (event, index, value) {
		this.setState({
			value: event.target.value
		});
	},

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
		var items = [];
		if (this.props.selectedSubtests && this.props.selectedSubtests.length) {
			items = this.props.selectedSubtests;
		} else {
			if (this.props.testType && Object.keys(this.props.testType).length) {
				items.push(this.props.testType);
			}
		}
		this.setState({
			items: items
		});
	},

	componentWillUnmount: function () {
		if (this.serverRequest) {
			this.serverRequest.abort();
		}
	},

	setVisible: function () {
		this.state.isVisible = true;
	},

	render: function () {
		var menuItems = [];
		for (var key in this.state.items) {
			menuItems.push(<option key={this.state.items[key].id}
								   value={this.state.items[key].id}>{`${this.state.items[key].name}`}</option>);
		}

		return (
			<div>
				<FormGroup controlId="contract_status"
						   validationState={this.props.errors[name] ? 'error' : null}>
					<FormControl
						componentClass="select"
						placeholder="select"
						onChange={this.props.handleChange}
						name={this.props.name}
						required={this.props.required}
						disabled={this.props.disabled}
						value={this.props.value}>
						<option key="0" value="">Test Type{this.props.required ? " *" : ""}</option>
						{menuItems}
					</FormControl>
					<HelpBlock className="warning">{this.props.errors[name]}</HelpBlock>
				</FormGroup>
			</div>
		);
	}
});

export default TestTypeSelectField;
