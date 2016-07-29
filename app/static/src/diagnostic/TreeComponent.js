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
    
    componentDidMount: function() {
        $(ReactDOM.findDOMNode(this)).jstree({
            "plugins" : [ "search" , "json_data" , "types"  , "contextmenu" , 'dnd' , 'state' ]
            ,"core" : {
                "animation" : 0
                ,"check_callback" : true
                ,"themes":{
                }
            }
            ,"types" : {
                "#" : {
                    "max_children" : 1
                    ,"max_depth" : 6
                    ,"valid_children" : ["root"]
                },
                "root" : {
                    "valid_children" : ["node"]
                }
            }}
        );
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
        opts += ', \"disabled\":\"' + this.props.node.disabled + '\"';
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

export default TreeComponent;

