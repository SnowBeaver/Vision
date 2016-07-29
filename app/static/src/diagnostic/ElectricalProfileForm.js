import React from 'react';
import Checkbox from 'react-bootstrap/lib/Checkbox';

const ElectricalProfileForm = React.createClass({

    render:function (){
        return(
            <div className="maxwidth">
                <div className="scheduler-border">
                    <div className="scheduler-border">Tests requested</div>
                    <div className="control-group">
                        <div className="maxwidth">
                            <div className="col-md-4 nopadding padding-right-xs">
                                <Checkbox ref="bush_cap">Bushing Cap and PF</Checkbox>
                            </div>
                            <div className="col-md-4 nopadding padding-right-xs">
                                <Checkbox ref="ins_res">Insulation Resistance</Checkbox>
                            </div>
                            <div className="col-md-4 nopadding">
                                <Checkbox ref="polymer">Degree of Polymerization(DP)</Checkbox>
                            </div>
                        </div>
                        <div className="maxwidth">
                            <div className="col-md-4 nopadding padding-right-xs">
                                <Checkbox ref="wind_cap">Winding Cap an PF</Checkbox>
                            </div>
                            <div className="col-md-4 nopadding padding-right-xs">
                                <Checkbox ref="vis_insp">Visual Inspection</Checkbox>
                            </div>
                            <div className="col-md-4 nopadding">
                                <Checkbox ref="ratio">Turns Ration Test (TTR)</Checkbox>
                            </div>
                        </div>
                        <div className="maxwidth">
                            <div className="col-md-4 nopadding padding-right-xs">
                                <Checkbox ref="wind_cap">Winding Cap and PF Doble</Checkbox>
                            </div>
                            <div className="col-md-4 nopadding padding-right-xs">
                                <Checkbox ref="res_win_con">Resistance; winding/contact</Checkbox>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

export default ElectricalProfileForm;