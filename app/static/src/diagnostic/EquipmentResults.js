import React from 'react';
import ReactDOM from 'react-dom';
import * as d3 from "d3";

function clone(obj) {
    if (null == obj || "object" != typeof obj) return obj;
    var copy = obj.constructor();
    for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }
    return copy;
}
function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

var EquipmentResults = React.createClass({
    getInitialState: function () {
        return {
            equipmentId : 0,
            tests : [],
            tests_data : {},
            pdfId : makeid(),
            download_url : ''
        }
    },

    componentDidMount: function () { 
        var _self = this;
        
        var equipmentId = this.props.params['equipmentId'];
        $.get(url.info.replace(":id", equipmentId), function(data){
            _self.setState({"equipment" : data.equipment , "equipment_item" : data.equipment_item, equipmentId : equipmentId})
        }, "json");
        $.get("/api/v1.0/test_result/item_id/" + equipmentId + "/all", function(data){
            _self.setState({"tests" : data.result})
        }, "json");
        $.get(url.graph + '?id=' + equipmentId, function (data) {
            for (var k in data){
                var small_key = k.toLowerCase().replace(" ", "_");
                data[k].map(function(data_obj, index){
                    data[k][index].label = data[k][index].label.replace(_self.state.equipment.equipment_number, ""); 
                })
            }
            _self.setState({"tests_data" : data})
        }, 'json')
    },

    render: function () {
        var _self = this;
        if (!this.state.equipment) {
            return null
        }
        //this.props.params['equipmentId']
        var test_results = [];
        for (var test_type in this.state.tests_data){
            var obj = this.state.tests_data[test_type];
            var dates = [];
            var uid = makeid();
            dates.push(<th key={uid}>Date</th>);
            var items = [];
            var total_dates = 0;
            for (var k in obj){
                var uid = makeid();
                dates.push(<th key={uid}>{obj[k].label}</th>)
            }

            for (var k in obj[0].data){
                var results = [];
                var uid = makeid();
                total_dates++;
                results.push(<td key={uid}>{moment(d3.timeParse("%Y.%m.%d")(obj[0].data[k].day)).format("MM.DD.YYYY")}</td>);
                for (var kk in obj){

                    var item_data = obj[kk];
                
                    var uid = makeid();
                    if(item_data.data[k])
                        results.push(<td key={uid}>{Math.round(item_data.data[k].count * 100000)/100000}</td>)
                }
                var uid = makeid();
                items.push(<tr key={uid}>
                    {results}
                </tr>)
            }
            var last_report = {'test_reason' : {'name' : ''}};
            this.state.tests.map(function(one_test){
                if (one_test.test_type.name == test_type){
                    if (!last_report.date_analyse)
                        last_report = one_test;
                    else{
                        if (new Date(last_report.date_analyse) < new Date(one_test.date_analyse))
                            last_report = one_test;
                    }
                }
            })
            last_report.date_analyse = moment(last_report.date_analyse).format("MM.DD.YYYY");
            obj.map(function(obj_item, index){
                var split_label = obj_item.label.split(" ");
                if (split_label[0] == "O2" || split_label[0] == "N2"){
                    obj.splice(index, 1);
                }
            })
            test_results.push(
                <div>    
                    <h2>{test_type}</h2>
                    <table width="100%" className="grapth_table" style={{marginBottom : '10px'}}>
                        <thead>
                            <tr>
                                <th colSpan="6">Last result</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Date</td>
                                <td>{last_report.date_analyse}</td>
                                <td>Analysis number</td>
                                <td>{last_report.analysis_number}</td>
                                <td>Test Reason</td>
                                <td>{last_report.test_reason.name}</td>
                            </tr>
                            <tr>
                                <td>Remark</td>
                                <td colSpan="5">{last_report.remark}</td>
                            </tr>
                        </tbody>
                    </table>
                    <table width="100%" className="grapth_table">
                        <thead>
                            <tr>
                                {dates}
                            </tr>
                        </thead>
                        <tbody>
                            {items}
                        </tbody>
                    </table>
                </div>
            );
        }

        return (
            <div className={"col-md-12"} >
                <h2>Equipment Results</h2>
                <a href={this.state.download_url} style={{display : this.state.download_url != '' ? 'inline' : 'none'}} className="no_print" target='_blank'>Download</a>

                <table width="100%" className="grapth_table">
                    <thead>
                        <tr>
                            <th colSpan="6">Equipment Information</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td width="130px">Id:</td>
                            <td>{this.state.equipment.id}</td>
                            <td width="130px">Serial No:</td>
                            <td>{this.state.equipment.serial}</td>
                            <td width="130px">Name:</td>
                            <td>{this.state.equipment.equipment_number}</td>
                        </tr>
                        <tr>
                            <td >Type:</td>
                            <td>{this.state.equipment.equipment_type.name}</td>
                            <td >Description:</td>
                            <td>{this.state.equipment.description}</td>
                            <td >Comments:</td>
                            <td>{this.state.equipment.comments}</td>
                        </tr>
                        <tr>
                            <td >Location:</td>
                            <td>{this.state.equipment.location.name}</td>
                            <td >Manufacturer:</td>
                            <td>{this.state.equipment.manufacturer.name}</td>
                            <td >Year:</td>
                            <td>{this.state.equipment.manufactured}</td>
                        </tr>
                    </tbody>
                </table>
                {/*
                {this.state.tests.map(function(obj){
                    return(<div>
                        <p>{obj.date_analyse}</p>
                        <p><b>Overall Diagnostic:</b></p>
                        <p><b>Overall Recommendations: {obj.test_recommendations[0].recommendation_notes}</b></p>
                        <p><b>Comments: {obj.remark}</b></p>
                        <p><b>Analysis performed by:</b></p>
                        <hr />
                    </div>)

                })}
                */}

                {test_results}
            </div>
        );
    }
});



export default EquipmentResults;
