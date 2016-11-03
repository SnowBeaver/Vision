import React from 'react';
import ReactDOM from 'react-dom';


var nodes = null;


var TreeComponent = React.createClass({

    //componentWillMount: function () {
    //  this.getSwitchers();
    //},

    getInitialState: function () {
        return {
            struct: this.props.struct
        };
    },
    onChange: function () {
        this.setState({
            struct: this.state.struct
        });
    },
    handleNodeClick: function (e, data) {
        var item = data.instance.get_node(data.node.id);
        this.props.onTreeNodeClick(item.state);
    },

    handleMoveNode: function (e, data) {
        var item = data.instance.get_node(data.node.id);
        var parent = data.instance.get_node(data.parent);

        $.post(url.treeMove, {
            'node_id': item.state.id,
            'parent_id': parent.state.id
        }, function (data) {
            // alert(data.success == true );
        }).fail(function () {
            data.instance.refresh();
        });
    },

    handleDeleteNode: function (e, data) {
        var item = data.instance.get_node(data.node.id);
        $.post(url.treeDelete, {
            'id': item.state.id
        }, function (data) {
            //alert(data.id == true );
        }).fail(function () {
            data.instance.refresh();
        });
    },

    handleRenameNode: function (e, data) {
        var item = data.instance.get_node(data.node.id);
        $.post(url.treeRename, {
            'id': item.state.id,
            'text': data.text
        }, function (data) {
            //alert(data.success == true );
        }).fail(function () {
            data.instance.refresh();
        });
    },

    handleStatusChange: function (e, data) {
        
        return;
    },

    handleTreeSearch: function (value) {
        $('#tree').jstree(true).search(value);
    },

    handleSearchResult: function (data) {

    },

    handleTreeReady: function (e, data) {
        // @todo not tested 
        $("#tree li").each(function () {
            var title = $(this).attr('title');
            if (title != 'undefined') {
                var id = $(this).attr('id');
                $("#tree #" + id + "_anchor .jstree-icon").attr({'title': title}).tooltip({
                    track: true
                });
                $(this).removeAttr('title');
            }
        });
    },

    componentDidMount: function () {
        $(ReactDOM.findDOMNode(this)).jstree({
                //  for admin "contextmenu"
                "plugins": ["search", "json_data", "types", "contextmenu", 'dnd', 'state', 'changed']
                , "core": {
                    "icons": false,
                    "animation": 0
                    , "check_callback": function (operation, node, node_parent, node_position, more) {
                        // operation can be 'create_node', 'rename_node', 'delete_node', 'move_node' or 'copy_node'
                        // in case of 'rename_node' node_position is filled with the new node name
                        var res = true;
                        if (operation === 'delete_node') {
                            if (node.hasOwnProperty('immediate') == true) {
                            } else {
                                if (confirm("Are you sure you want to delete the element?")) {
                                }
                                else {
                                    res = false;
                                }
                            }
                        }
                        return res;
                    }
                }
                , "types": types
                , "contextmenu": contextMenu
                , 'onStatusChange': this.handleStatusChange
            }
        ).on('delete_node.jstree', this.handleDeleteNode
        ).on('rename_node.jstree', this.handleRenameNode
        ).on('move_node.jstree', this.handleMoveNode
        ).on('select_node.jstree', this.handleNodeClick
        ).on('ready.jstree', this.handleTreeReady
        ).on('search.jstree', this.handleSearchResult
        );
    },

    componentWillUnmount: function () {
        $(ReactDOM.findDOMNode(this)).trigger('destroy.jstree');
    },

    render: function () {

        var struct = this.props.struct;

        nodes = struct.map(function (n) {
            return <TreeNode node={n} children={n.children} key={n.id}/>
        }.bind(this));


        return (
            <div id="tree" className={this.props.className}>
                <ul>
                    {nodes}
                </ul>
            </div>
        );
    }
});

var TreeNode = React.createClass({

    onStatusChange: function () {
        this.setState({
            refresh: true
        })
    },

    render: function () {

        var cnodes = null;

        if (this.props.children) {
            cnodes = this.props.children.map(function (n) {
                if (n.disabled != true) {
                    return <TreeNode node={n} onStatusChange={n.onStatusChange} forceRender={true} children={n.children}
                                     key={n.id}/>
                }
            });
        }

        var opts = '{ \"icon\":\"' + this.props.node.icon + '\"';
        opts += ', \"id\":\"' + this.props.node.id + '\"';
        opts += ', \"opened\":\"' + this.props.node.opened + '\"';
        // opts += ', \"disabled\":\"' + this.props.node.disabled + '\"'; // this will disable whole tree
        opts += ', \"view\":\"' + this.props.node.view + '\"';
        opts += ', \"type\":\"' + this.props.node.type + '\"';
        opts += ', \"equipment_id\":\"' + this.props.node.equipment_id + '\"';
        opts += ', \"text\":\"' + this.props.node.text + '\"';
        opts += ', \"status\":\"' + this.props.node.status + '\"}';

        var className = switchIds.indexOf(this.props.node.equipment_type_id) > -1 && this.props.node.tie_status == 0 ? "semitransparent" : "";

        return (
            <li key={this.props.node.id} data-jstree={opts} className={className}>
                {this.props.node.text}
                { cnodes ? <ul>{cnodes}</ul> : null }
            </li>
        );
    }
});

const valid_children = [
    "air_bkr", "bkr", "bushing", "capacitor", "induc", "mcc",
    "rect", "source", "switch", "synch", "tank", "tc", "transfo"
    , 'cable'];

const types = {
    "#": {
        "max_children": 1,
        "max_depth": 10,
        "valid_children": ["Vision Diagnostic"]
    }
    , "root": {
        "icon": "",
        "valid_children": ["default", "air_bkr", "bkr", "main", "bushing", "capacitor", "induc,mcc", "rect",
            "source", "switch", "synch", "tank", "tc", "transfo", 'cable']
    }
    , "default": {
        "valid_children": ["default", "file", "main", "air_bkr", "bkr", "bushing", "capacitor", "induc", "mcc",
            "rect", "source", "switch", "synch", "tank", "tc", "transfo", 'cable']
    }
    , 'main': {
        "icon": "../app/static/img/icons/main_b.ico"
        , "valid_children": ["default", "file", 'main', "air_bkr", "bkr", "bushing", "capacitor", "induc", "mcc",
            "rect", "source", "switch", "synch", "tank", "tc", "transfo", 'cable']
    }
    , 'air_bkr': {
        "icon": "../app/static/img/icons/air_bkr_b.ico"
        , "valid_children": valid_children
    }
    , 'bkr': {
        "icon": "../app/static/img/icons/bkr_b.ico"
        , "valid_children": valid_children
    }
    , 'bushing': {
        "icon": "../app/static/img/icons/bushing_b.ico"
        , "valid_children": valid_children
    }
    , 'capacitor': {
        "icon": "../app/static/img/icons/capacitor_b.ico"
        , "valid_children": valid_children
    }
    , 'induc': {
        "icon": "../app/static/img/icons/induc_b.ico"
        , "valid_children": valid_children
    }
    , 'mcc': {
        "icon": "../app/static/img/icons/mcc_b.ico"
        , "valid_children": valid_children
    }
    , 'rect': {
        "icon": "../app/static/img/icons/rect_b.ico"
        , "valid_children": valid_children
    }
    , 'source': {
        "icon": "../app/static/img/icons/source_b.ico"
        , "valid_children": valid_children
    }
    , 'switch': {
        "icon": "../app/static/img/icons/switch_b.ico"
        , "valid_children": valid_children
    }
    , 'synch': {
        "icon": "../app/static/img/icons/synch_b.ico"
        , "valid_children": valid_children
    }
    , 'tank': {
        "icon": "../app/static/img/icons/tank_b.ico"
        , "valid_children": valid_children
    }
    , 'tc': {
        "icon": "../app/static/img/icons/tc_b.ico"
        , "valid_children": valid_children
    }
    , 'transfo': {
        "icon": "../app/static/img/icons/transfo_b.ico"
        , "valid_children": valid_children
    }
    , 'cable': {
        "icon": "../app/static/img/icons/cable_b.ico"
        , "valid_children": valid_children
    }
}

const contextMenu = {
    'items': function (node) {
        var tmp = $.jstree.defaults.contextmenu.items();
        delete tmp.create.action;
        var current = $('#tree').jstree(true).get_selected('full', true)[0];

        if ((this.get_type(node) !== "default")
            && ((this.get_type(node) !== "root"))
        ) {
            tmp['status'] = {
                'label': "Status"
                , 'submenu': {
                    'on': {
                        "separator_after": true
                        , "label": "Normal"
                        , "action": function (data) {

                            var inst = $.jstree.reference(data.reference),
                                obj = inst.get_node(data.reference);

                            var id = obj.state.id;
                            $.post(url.treeStatus, {'node_id': id, 'status': 1}
                                , function (data) {
                                    if (data.status == "OK") {
                                        $("#tree #" + obj.id + " > a > i").css(
                                            'background-image', 'url(' + data.src + ')'
                                        );
                                    }
                                }).fail(function () {
                                data.instance.refresh();
                            });
                        }
                    }
                    , 'medium': {
                        "separator_after": true
                        , "label": "Warning"
                        , "action": function (data) {
                            var inst = $.jstree.reference(data.reference),
                                obj = inst.get_node(data.reference);

                            var id = obj.state.id;
                            $.post(url.treeStatus, {'node_id': id, 'status': 2}
                                , function (data) {
                                    if (data.status == "OK") {
                                        $("#tree #" + obj.id + " > a > i").css('background-image', 'url(' + data.src + ')');
                                    }
                                }).fail(function () {
                                
                                data.instance.refresh();
                            });
                        }
                    }
                    , 'off': {
                        "separator_after": true
                        , "label": "Danger"
                        , "action": function (data) {
                            var inst = $.jstree.reference(data.reference),
                                obj = inst.get_node(data.reference);
                            var id = obj.state.id;
                            $.post(url.treeStatus, {'node_id': id, 'status': 0}
                                , function (data) {
                                    if (data.status == "OK") {
                                        $("#tree #" + obj.id + " > a > i").css('background-image', 'url(' + data.src + ')');
                                    }
                                }).fail(function () {
                                data.instance.refresh();
                            });
                        }
                    }
                }
            };

            tmp['join'] = {
                'label': 'Join'
                , "separator_before": false    // Insert a separator before the item
                , "separator_after": true,     // Insert a separator after the item
                "action": function (node) {
                    var inst = $.jstree.reference(node.reference),
                        obj = inst.get_node(node.reference);
                    
                    var ids = [];
                    $.each($('#tree').jstree(true).get_selected('full', true), function (index, value) {
                        if (value.id != obj.id) {
                            ids[ids.length] = value.id;
                        }
                    });

                    $.post(url.treeJoin, {'node_id': obj.id, 'to_join': JSON.stringify(ids)}
                        , function (data) {
                            if (data.status == "OK") {
                                $.each(data.joined, function (index, value) {
                                    $('#tree').jstree(true).delete_node($("#" + value));
                                });
                            }
                        }).fail(function () {
                        data.instance.refresh();
                    });
                }
            }

        }

        if (typeof current !== 'undefined') {
            if (current.parents.length >= 9) {

                tmp.create.label = '';
                tmp.ccp.label = '';

                delete tmp.ccp.submenu.paste;
                delete tmp.ccp.submenu.cut;
                delete tmp.ccp.submenu.copy;

                return tmp;
            }
        }

        tmp.create.label = "New";
        tmp.create.submenu = {
            'main': {
                "separator_after": true
                , "label": "Main"
                , "action": function (data) {
                    var inst = $.jstree.reference(data.reference),
                        obj = inst.get_node(data.reference);
                    $.post(url.treeCreate, {
                            'parent': obj.id,
                            'text': "New Main",
                            'icon': '../app/static/img/icons/main_b.ico',
                            'type': 'main',
                            tooltip: "Main tooltip"
                        }
                        , function (data) {

                            inst.create_node(obj, {
                                    'id': data.id,
                                    'text': 'New Main' + data.id,
                                    'icon': '../app/static/img/icons/main_b.ico',
                                    type: 'main'
                                }
                                , "last", function (new_node) {

                                    setTimeout(function () {
                                        inst.edit(new_node);
                                    }, 0);
                                });


                        }).fail(function () {
                        data.instance.refresh();
                    });
                }
            }
            , 'equipment': {
                "separator_after": true
                , "label": "Equipment"
                , "action": function (data) {
                    window.location.href = '#/equipment'
                }
                // var inst = $.jstree.reference(data.reference),
                //     obj = inst.get_node(data.reference);

                // $.post(url.treeCreate, {
                //         parent: obj.id,
                //         text: "Transfo",
                //         icon: '../app/static/img/icons/cable_b.ico',
                //         type: 'cable',
                //         tooltip: "Equipment tooltip"
                //     }
                //     ,function(data){
                //         inst.create_node(obj, {
                //                 'id': data.id,
                //                 'text': 'Equipment' + data.id,
                //                 'icon' : '../app/static/img/icons/cable_b.ico',
                //                 'type' : 'Equipment'
                //             }
                //             , "last", function (new_node) {
                //
                //                 setTimeout(function () {
                //                     $("#tree #" + obj.id +"_anchor .jstree-icon").attr({ 'title' : "Cable tooltip" + data.id }).tooltip({
                //                         track: true
                //                     });
                //                     inst.edit(new_node); },0);
                //             });
                //     }).fail(function () {
                //     data.instance.refresh();
                // });
            }
            , 'campaign': {
                "separator_after": true
                , "label": "Campaign"
                , "action": function (node) {
                    var inst = $.jstree.reference(node.reference),
                        obj = inst.get_node(node.reference);
                    var ids = [];
                    $.each($('#tree').jstree(true).get_selected('full', true), function (index, value) {
                        if (value.id != obj.id) {
                            ids[ids.length] = value.id;
                        }
                    });
                    $.post(url.treeJoin, {'node_id': obj.id, 'to_join': JSON.stringify(ids)}
                        , function (data) {
                            if (data.status == "OK") {
                                $.each(data.joined, function (index, value) {
                                    $('#tree').jstree(true).delete_node($("#" + value));
                                });
                            }
                        }).fail(function () {
                        data.instance.refresh();
                        window.location.href = '#/campaign'
                    });
                }

            }

        };


        if ((this.get_type(node) === "default")
            || ((this.get_type(node) === "root"))
        ) {
            $.each(tmp.create.submenu, function (index, value) {
                if (value.label !== 'Main') {
                    delete tmp.create.submenu[index];
                    //delete value;
                    //delete this;
                }
            });

        } else if (this.get_type(node) != "main") {
            //delete main submenu
            delete tmp.create.submenu.main;
        }

        if (this.get_type(node) === "file") {
            delete tmp.create;
        }

        if (node.state != null && node.state.disabled == true) {
            delete tmp.rename;
            delete tmp.remove;
            tmp.ccp.label = '';
            delete tmp.ccp.submenu.paste;
            delete tmp.ccp.submenu.cut;
        }

        delete tmp.ccp.submenu.copy;
        return tmp;
    }
}
export default TreeComponent;

