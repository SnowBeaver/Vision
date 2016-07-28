import React from 'react';
import ReactDOM from 'react-dom';


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
        $(ReactDOM.findDOMNode(this)).jstree(this.props);
    },
    
    componentWillUnmount: function() {
        $(ReactDOM.findDOMNode(this)).trigger('destroy.jstree');
    },
    
    render: function(){
        var struct = this.props.struct;
        
        var nodes = struct.map(function(n){
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
        if (!this.props.children){
            return null;
        }
        var nodes = this.props.children.map(function(n){
            if(n.disabled != true){
                return <TreeNode node={n} children={n.children} key={n.id} />
            }
        });
        return (
            console.log(this.props.node.icon);
            <li key={this.props.node.id} data-jstree="{icon:{this.props.node.icon}}">
                <span>{this.props.node.text}</span>
                <ul>{nodes}</ul>
            </li>
        );
    }
});

// const TreeComponent = React.createClass({
//    
//     getInitialState: function(){
//        
//         return {
//             value: null,
//             isVisible: true,
//             struct: ''
//         };
//     },
//
//     buildTree: function(node) {
//         // Return undefined if there are no comments to process;
//         // alternatively, it /may/ be appropriate to return an empty UL.
//         if (!node || !node.length) {
//             return;
//         }
//
//         // Create the container UL for the comments in this level.
//         var list = React.createElement("ul", null);
//
//         for (var i = 0; i < node.length; i++) {
//            
//             var item = React.createElement("li", null, node.text); 
//            
//             // Add the LI to the UL parent
//             list.append(item);
//             // Add appropriate content to the item LI
//             // item.append($('<h1>').text(el.id));
//             // item.append($('<p>').text(el.text));
//
//             // And then do the same for each child level of comments..
//             var childrenList = this.buildTree(item.children);
//             if (childrenList) {
//                 // ..adding children (UL) container to the current item (LI)
//                 item.append(childrenList);
//             }
//         }
//         // Return container to be used by caller
//         return list;
//     },
//
//     componentDidMount: function() {
//         // console.log(this.props.struct);
//         var struct = this.buildTree(this.props.struct); 
//         this.setState({
//             struct: struct
//         });
//        
//         $(ReactDOM.findDOMNode(this)).jstree(this.props);
//     },
//
//     componentWillUnmount: function() {
//         $(ReactDOM.findDOMNode(this)).trigger('destroy.jstree');
//     },
//
//     onChange: function(e){
//         this.setState({
//             value: e.target.value
//         });
//     },
//    
//     render: function() {
//         return (
//                 <div>
//                     <div id="tree" className={this.props.className}>
//                         {this.state.struct}
//                     </div>
//                 </div>
//         )
//     }
// });
//

export default TreeComponent;

