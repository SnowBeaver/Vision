import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import DescriptionForm from './DescriptionForm';
import ElectricalProfileForm from './ElectricalProfileForm';
import FluidProfileForm from './FluidProfileForm';
import TestProfileForm from './TestProfileForm';


var SaveButton = React.createClass({

    render : function () {
        return(
            <Button>save</Button>
        );
    }
});



const NaviTestForm = React.createClass ({

    getInitialState: function () {
        return {
            loading: false,
            errors: {}
        }
    },

    _create: function () {
        return $.ajax({
            url: '/api/v1.0/campaign/',
            type: 'POST',
            data: {
                'test_reason': this.refs.testreasn.state.test_reas,
                'lab_id': this.refs.lab_analyser.state.lab_an,
                'equipment_number': findDOMNode(this.refs.equip_no).value,

                'fluid_type': findDOMNode(this.refs.ins_flu).value,
                'contract': findDOMNode(this.refs.contract).value,
                'lab_contract_id ': findDOMNode(this.refs.lab_no).value,

                'bushing': findDOMNode(this.refs.bush_cap).value,
                'insulation_resistance_test': findDOMNode(this.refs.ins_res).value,
                'polymerisation_degree_test': findDOMNode(this.refs.polymer).value,
                'winding_resistance_test': findDOMNode(this.refs.wind_cap).value,
                'visual_inspection_by': findDOMNode(this.refs.vis_insp).value,
                'transformer_turn_ratio_test': findDOMNode(this.refs.ratio).value,

                'dissolved_gas_test': findDOMNode(this.refs.dis_gas).value,
                'furan_test' : findDOMNode(this.refs.furan_syr).value,
                'pcb': findDOMNode(this.refs.pcb_jar).value,
                'water_test': findDOMNode(this.refs.water).value,
                'inhibitor_test': findDOMNode(this.refs.inhibit_syr).value,
                
                

                'sampling':this.refs.sampl1.state.sam1,
                'sampling_jar':this.refs.sampl2.state.sam2,
                'sampling_vial':this.refs.sampl3.state.sam3,
            },
            beforeSend: function () {
                this.setState({loading: true});
            }
        }).bind(this);
    },
    _onSubmit: function (e) {
        e.preventDefault();
        // var errors = this._validate();
        // if(Object.keys(errors).length != 0) {
        //   this.setState({
        //     errors: errors
        //   });
        //    return;
        // }
        var xhr = this._create();
        xhr.done(this._onSuccess)
            .fail(this._onError)
            .always(this.hideLoading)
    },
    hideLoading: function () {
        this.setState({loading: false});
    },
    _onSuccess: function (data) {
        this.refs.eqtype_form.getDOMNode().reset();
        this.setState(this.getInitialState());
        // show success message
    },
    _onError: function (data) {
        var message = "Failed to create";
        var res = data.responseJSON;
        if(res.message) {
            message = data.responseJSON.message;
        }
        if(res.errors) {
            this.setState({
                errors: res.errors
            });
        }
    },
    _onChange: function (e) {
        console.log(e.target.name);
        var state = {};
        state[e.target.name] =  $.trim(e.target.value);
        this.setState(state);
    },
    _validate: function () {
        var errors = {};
        // if(this.state.username == "") {
        //   errors.username = "Username is required";
        // }
        // if(this.state.email == "") {
        //   errors.email = "Email is required";
        // }
        // if(this.state.password == "") {
        //   errors.password = "Password is required";
        // }
        // return errors;
    },
    _formGroupclassName: function (field) {
        var className = "form-group ";
        if(field) {
            className += " has-error"
        }
        return className;
    },


    render: function() {
        return (
            <div className="row-fluid" id="addForm" tabIndex="-1"  role="dialog" aria-labelledby="addLabel" aria-hidden="false">
                <div>
                    <div className="modal-content">
                        <form className="" method="post" action="#" >
                            { this.state.csrf_token }
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4 className="modal-title"> Insertion of a new sampling compaign </h4>
                            </div>

                            <div className="modal-body">
                                    <ul id="tabs" className="nav nav-tabs " data-tabs="tabs">
                                        <li className="active"> <a href="#new-tabs-1" data-toggle="tab"> Description </a> </li>
                                        <li> <a href="#new-tabs-2" data-toggle="tab"> Electrical: as per user </a> </li>
                                        <li> <a href="#new-tabs-3" data-toggle="tab"> Fluid: as per user </a> </li>
                                        <li> <a href="#new-tabs-4" data-toggle="tab"> Test profile </a> </li>
                                    </ul>

                                    <div className="form-container">
                                            <div id="my-tab-content" className="tab-content maxwidth">

                                                <div id="new-tabs-1" role="tabpanel" className="tab-pane active ">
                                                    <DescriptionForm/>
                                                </div>

                                                <div id="new-tabs-2" role="tabpanel" className="tab-pane">
                                                    <ElectricalProfileForm/>
                                                </div>

                                                <div id="new-tabs-3" role="tabpanel" className="tab-pane">
                                                    <FluidProfileForm/>
                                                </div>

                                                <div id="new-tabs-4" role="tabpanel" className="tab-pane">
                                                    <TestProfileForm/>
                                                </div>
                                            </div>
                                    </div>

                                    <SaveButton className="btn btn-default pull-right margin-right-xs" type="submit"/>

                                <div className="clearfix"></div>
                            </div>
                            <div className="modal-footer"> </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

});

export default NaviTestForm;


