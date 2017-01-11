import React from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';


const TextField = React.createClass({
    _onChange: function (e) {
        this.props.onChange(e);
    },

    render: function () {
        let tooltip = <Tooltip id={this.props.label}>{this.props.label}</Tooltip>;
        var label = (this.props.label != null) ? this.props.label : "";
        var name = (this.props.name != null) ? this.props.name : "";
        var normId = (this.props["data-normId"] != null) ? this.props["data-normId"]: undefined;
        var errorName = name + '_' + normId;
        var validationState = (this.props.errors[errorName]) ? 'error' : null;
        var error = this.props.errors[errorName];
        return (
            <OverlayTrigger overlay={tooltip} placement="top">
                <FormGroup validationState={validationState}>
                    <FormControl type="text"
                                 placeholder={label}
                                 name={name}
                                 data-normId={normId}
                                 onChange={this._onChange}
                    />
                    <HelpBlock className="warning">{error}</HelpBlock>
                    {/*<FormControl.Feedback />*/}
                </FormGroup>
            </OverlayTrigger>
        );
    }
});


export default TextField;