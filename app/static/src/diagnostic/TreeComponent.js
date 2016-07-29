import React from 'react';
import ReactDOM from 'react-dom';


var nodes = null;


var TreeComponent = React.createClass({
    
    getInitialState: function(){
      return {
          struct: this.props.struct
      };
    },
    onChange: function(){
        this.setState({
            struct: this.state.struct
        });
    },
    handleNodeClick: function(e, data) {
        console.log(e.target);
        console.log(data);
        // console.log(event.target.getAttribute('data-jstree'));

        // ReactDOM.unmountComponentAtNode(this)function (e, data) {
        //
        // $("#treeView #node_id").val(data.node.id);
        //
        // $.post(url.treeGetView, { 'node_id' : data.node.id } ,function(res){
        //     if(res.view){
        //         $("#treeView #view").val(res.view);
        //         $("#treeView #tooltip").val(res.tooltip);
        //     }
        // }).fail(function () {
        // });
    }, 
    
    componentDidMount: function() {
        
        $(ReactDOM.findDOMNode(this)).jstree({
            //  for admin "contextmenu"
            "plugins" : [ "search" , "json_data" , "types"  , "contextmenu" , 'dnd' , 'state' , 'changed' ]
            ,"core" : {
                "icons":false,
                "animation" : 0
                ,"check_callback" : function (operation, node, node_parent, node_position, more) {
                    // operation can be 'create_node', 'rename_node', 'delete_node', 'move_node' or 'copy_node'
                    // in case of 'rename_node' node_position is filled with the new node name
                    var res = true;
                    if(operation === 'delete_node'){
                        if(node.hasOwnProperty('immediate') == true){
                        } else {
                            if(confirm("Are you sure you want to delete the element?")){}
                            else {
                                res = false;
                            }
                        }
                    }
                    return res;
                    //return operation === 'rename_node' ? true : false;
                }
            }
            ,"types": types
        }).on('delete_node.jstree', function (e, data ) {
            $.post(url.treeDelete, { 'id' : data.node.id } ,function(data ){
                //alert(data.id == true );
            }).fail(function () {
                data.instance.refresh();
            });
        }).on('rename_node.jstree', function (e, data) {
            $.post(url.treeRename, { 'id' : data.node.id, 'text' : data.text } ,function(data){
                //alert(data.success == true );
            }).fail(function () {
                data.instance.refresh();
            });
        }).on('move_node.jstree', function (e, data) {
            console.log(data.node.id, data.parent)
            $.post(url.treeMove, { 'node_id' : data.node.id, 'parent_id' : data.parent }, function(data ){
                // alert(data.success == true );
            }).fail(function () {
                data.instance.refresh();
            });
        }).on('select_node.jstree',this.handleNodeClick ).on('ready.jstree', function (e, data){
            $("#tree li").each(function(){
                var title = $(this).attr('title');
                if(title != 'undefined'){
                    var id = $(this).attr('id');
                    $("#tree #" + id + "_anchor .jstree-icon").attr({ 'title' : title }).tooltip({
                        track: true
                    });
                    $(this).removeAttr('title');
                }
            });
        });
    },
    
    componentWillUnmount: function() {
        $(ReactDOM.findDOMNode(this)).trigger('destroy.jstree');
    },
    
    render: function(){
        var struct = this.props.struct;
        nodes = struct.map(function(n){
            return <TreeNode node={n} children={n.children} key={n.id}/>
        });
        return(
            <div id="tree" className={this.props.className}>
                <ul>
                    {nodes}
                </ul>
            </div>
        );
    }
});

var TreeNode = React.createClass({
    // toggle: function(e){
    //     AppDispatcher.dispatch({
    //         eventName: 'expand-collapse',
    //         node: this.props.node
    //     });
    // },
    render: function(){
        
        var cnodes = null; 
        
        if (this.props.children) {
            cnodes = this.props.children.map(function (n) {
                if (n.disabled != true) {
                    return <TreeNode node={n} forceRender={true} children={n.children} key={n.id}/>
                }
            });
        }
        
        var opts= null; 
        var opts = '{ \"icon\":\"' + this.props.node.icon + '\"';
        opts += ', \"opened\":\"' + this.props.node.opened + '\"';
        // opts += ', \"disabled\":\"' + this.props.node.disabled + '\"'; // this will disable whole tree
        opts += ', \"view\":\"' + this.props.node.view + '\"';
        opts += ', \"type\":\"' + this.props.node.type + '\"';
        opts += ', \"eqid\":\"' + this.props.node.equipment_id + '\"';
        opts += ', \"status\":\"' + this.props.node.status + '\"}';
        return (
            <li key={this.props.node.id} data-jstree={opts}>
                {this.props.node.text}
                { cnodes ? <ul>{cnodes}</ul> : null }
            </li>
        );
    }
});

const types= {
    "#" : {
        "max_children" : 1,
        "max_depth" : 10,
        "valid_children" : ["Vision Diagnostic"]
    }
    ,"root" : {
        "icon" : "",
        "valid_children" : ["default","air_bkr","bkr","main","bushing","capacitor","induc,mcc","rect","source","switch","synch","tank","tc","transfo",'cable']
    }
    ,"default" : {
        "valid_children" : ["default","file","main","air_bkr","bkr","bushing","capacitor","induc","mcc","rect","source","switch","synch","tank","tc","transfo",'cable']
    }
    ,'main' : {
        "icon" : "../app/static/img/icons/main_b.ico"
        ,"valid_children" : ["default","file",'main',"air_bkr","bkr","bushing","capacitor","induc","mcc","rect","source","switch","synch","tank","tc","transfo",'cable']
    }
    ,'air_bkr' : {
        "icon" : "../app/static/img/icons/air_bkr_b.ico"
        ,"valid_children" : ["air_bkr","bkr","bushing","capacitor","induc","mcc","rect","source","switch","synch","tank","tc","transfo",'cable']
    }
    ,'bkr' : {
        "icon" : "../app/static/img/icons/bkr_b.ico"
        ,"valid_children" : ["air_bkr","bkr","bushing","capacitor","induc","mcc","rect","source","switch","synch","tank","tc","transfo",'cable']
    }
    ,'bushing' : {
        "icon" : "../app/static/img/icons/bushing_b.ico"
        ,"valid_children" : ["air_bkr","bkr","bushing","capacitor","induc","mcc","rect","source","switch","synch","tank","tc","transfo",'cable']
    }
    ,'capacitor' : {
        "icon" : "../app/static/img/icons/capacitor_b.ico"
        ,"valid_children" : ["air_bkr","bkr","bushing","capacitor","induc","mcc","rect","source","switch","synch","tank","tc","transfo",'cable']
    }
    ,'induc' : {
        "icon" : "../app/static/img/icons/induc_b.ico"
        ,"valid_children" : ["air_bkr","bkr","bushing","capacitor","induc","mcc","rect","source","switch","synch","tank","tc","transfo",'cable']
    }
    ,'mcc' : {
        "icon" : "../app/static/img/icons/mcc_b.ico"
        ,"valid_children" : ["air_bkr","bkr","bushing","capacitor","induc","mcc","rect","source","switch","synch","tank","tc","transfo",'cable']
    }
    ,'rect' : {
        "icon" : "../app/static/img/icons/rect_b.ico"
        ,"valid_children" : ["air_bkr","bkr","bushing","capacitor","induc","mcc","rect","source","switch","synch","tank","tc","transfo",'cable']
    }
    ,'source' :{
        "icon" : "../app/static/img/icons/source_b.ico"
        ,"valid_children" : ["air_bkr","bkr","bushing","capacitor","induc","mcc","rect","source","switch","synch","tank","tc","transfo",'cable']
    }
    ,'switch' :{
        "icon" : "../app/static/img/icons/switch_b.ico"
        ,"valid_children" : ["air_bkr","bkr","bushing","capacitor","induc","mcc","rect","source","switch","synch","tank","tc","transfo",'cable']
    }
    ,'synch' :{
        "icon" : "../app/static/img/icons/synch_b.ico"
        ,"valid_children" : ["air_bkr","bkr","bushing","capacitor","induc","mcc","rect","source","switch","synch","tank","tc","transfo",'cable']
    }
    ,'tank' :{
        "icon" : "../app/static/img/icons/tank_b.ico"
        ,"valid_children" : ["air_bkr","bkr","bushing","capacitor","induc","mcc","rect","source","switch","synch","tank","tc","transfo",'cable']
    }
    ,'tc' :{
        "icon" : "../app/static/img/icons/tc_b.ico"
        ,"valid_children" : ["air_bkr","bkr","bushing","capacitor","induc","mcc","rect","source","switch","synch","tank","tc","transfo",'cable']
    }
    ,'transfo' :{
        "icon" : "../app/static/img/icons/transfo_b.ico"
        ,"valid_children" : ["air_bkr","bkr","bushing","capacitor","induc","mcc","rect","source","switch","synch","tank","tc","transfo",'cable']
    }
    ,'cable' :{
        "icon" : "../app/static/img/icons/cable_b.ico"
        ,"valid_children" : ["air_bkr","bkr","bushing","capacitor","induc","mcc","rect","source","switch","synch","tank","tc","transfo",'cable']
    }
}


export default TreeComponent;


