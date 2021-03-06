function stringifyObject ( obj ) {
    if ( $.isArray( obj ) || (typeof obj !== "object") ) {
        return obj.toString()
    }
    var seen = [];
    return JSON.stringify(
        obj,
        function( key, val ) {
            if (val != null && typeof val == "object") {
                if ( seen.indexOf( val ) >= 0 )
                    return
                seen.push( val )
            }
            return val
        }
    );
}

$(document).ready(function(){

    $("#menuView").submit(function(e){
        $.post(url.update, $(this).serialize()
            ,function(data){
                if(data.status == "OK"){
                    alert("View is updated");
                }else{
                    alert("Error in submiting");
                }
            }).fail(function () {
            alert("Something went wrong");
        });
        e.preventDefault();
    });

    $('#menu').jstree({
        //  for admin "contextmenu"
        "plugins" : [ "search" , "json_data" , "types"  , "contextmenu" , 'dnd' , 'state' ]
        ,"core" : {
            "animation" : 0
            ,"check_callback" : true
            ,"themes":{
                "icons":false
            }
        }
        ,"types" : {
            "#" : {
                "max_children" : 1
                ,"max_depth" : 6
                ,"valid_children" : ["root" , 'node']
            },
            "root" : {
                "valid_children" : ["node"]
            }
        }
        ,'contextmenu' : {
            'items' : function(node) {

                tmp = $.jstree.defaults.contextmenu.items();
                delete tmp.create.action;
                var current = $('#menu').jstree(true).get_selected('full',true)[0];

                if( current.parents.length >= 6){

                    tmp.create.label = '';
                    tmp.ccp.label = '';

                    delete tmp.ccp.submenu.paste;
                    delete tmp.ccp.submenu.cut;
                    delete tmp.ccp.submenu.copy;

                    return tmp;
                }

                tmp.create.label = "New";
                tmp.create.submenu = {
                    'create_node' : {
                        "separator_after"	    : true
                        ,"label"				: "node"
                        ,"action"			    : function (data){

                            var inst = $.jstree.reference(data.reference),
                                obj = inst.get_node(data.reference);

                            $.post(url.create, { 'parent' : obj.id , 'text' : "node " , 'type' : 'node'}
                                ,function(data){
                                    inst.create_node(obj, { 'id' : data.id , 'text' : 'node' + data.id , type: 'parent' }
                                        , "last", function (new_node) {
                                            setTimeout( function (){
                                                //inst.refresh();
                                                inst.edit(new_node);
                                            } , 0 );
                                        });


                                }).fail(function () {

                            });
                        }
                    }
                };

                // check if element is disabled and remove other sub menus
                if( node.state != null && node.state.disabled == true)
                {
                    delete tmp.rename;
                    delete tmp.remove;
                    tmp.ccp.label = '';
                    delete tmp.ccp.submenu.paste;
                    delete tmp.ccp.submenu.cut;
                }

                delete tmp.ccp.submenu.copy;
                return tmp;

            }}}).on('delete_node.jstree', function (e, data) {

        $.post(url.delete, { 'id' : data.node.id } ,function(data ){
            //alert(data.id == true );
        }).fail(function () {
            //data.instance.refresh();
        });
    }).on('rename_node.jstree', function (e, data) {

        $.post(url.rename, { 'id' : data.node.id, 'text' : data.text } ,function(data){
            //alert(data.success == true );
        }).fail(function () {
            //data.instance.refresh();
        });

    }).on('move_node.jstree', function (e, data) {

        $.post(url.move, { 'node_id' : data.node.id, 'parent_id' : data.parent } ,function(data ){
            //alert(data.success == true );
        }).fail(function () {
            //data.instance.refresh();
        });

    })
        .on('copy_node.jstree', function (e, data){
//                $.post(url.copy, { 'node_id' : data.original.id , 'parent_id' : data.parent } ,function(d){
//                    if(d.status == "OK"){
//                        data.instance.refresh();
//                    }else{
//                        alert("Something went wrong");
//                    }
//                }).fail(function () {
//	    			data.instance.refresh();
//				});

        }).on('select_node.jstree', function (e, data) {
        $("#menuView #node_id").val(data.node.id);

        $.post(url.getView, { 'node_id' : data.node.id } ,function(res){
            $("#menuView #page_view").val(res.view);
        }).fail(function () {

        });
    }).on('ready.jstree', function (e, data){

    }).on('refresh.jstree', function (e, data){
        
    });

    /*
    var to = false;
    $('#plugins4_q').keyup(function () {
        if(to) { clearTimeout(to); }
        to = setTimeout(function () {
            var v = $('#plugins4_q').val();
            $('#tree').jstree(true).search(v);
        }, 250);
    });
    */

    //  next part 

    $("#treeView").submit(function(e){
        $.post(url.treeUpdate, $( this ).serialize()
        ,function(data){
            if(data.status == "OK"){
                alert("View is updated");
                $("#tree #" + data.id + "_anchor .jstree-icon").attr({
                     'data-original-title' : data.tooltip
                    ,'title' : data.tooltip
                });
            }else{
                alert("Error in submiting");
            }

        }).fail(function () {
            alert("Something went wrong");
        });
        e.preventDefault();
    });

    $('#tree').jstree({
         //  for admin "contextmenu"
         "plugins" : [ "search" , "json_data" , "types"  , "contextmenu" , 'dnd' , 'state' , 'changed' ]
        ,"core" : {
             "animation" : 0
            ,"check_callback" : function (operation, node, node_parent, node_position, more) {
                // operation can be 'create_node', 'rename_node', 'delete_node', 'move_node' or 'copy_node'
                // in case of 'rename_node' node_position is filled with the new node name
                var res = true;
                if(operation === 'delete_node'){
                    if(node.hasOwnProperty('immediate') == true){
                        <!-- delete node immediately  -->
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
        ,"types" : {
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
        // for admin "contextmenu"
        ,'contextmenu' : {
            'items' : function(node) {
                tmp = $.jstree.defaults.contextmenu.items();
                delete tmp.create.action;

                var current = $('#tree').jstree(true).get_selected('full',true)[0];

                if( (this.get_type(node) !== "default")
                    && ((this.get_type(node) !== "root"))
                )
                {
                    tmp['status'] = {
                         'label' : "Status"
                        ,'submenu' : {
                            'on' : {
                                "separator_after"	    : true
                                ,"label"				: "Normal"
                                ,"action"			    : function (data){
                                    var inst = $.jstree.reference(data.reference),
                                    obj = inst.get_node(data.reference);
                                    <!-- change status to on -->
                                    $.post(url.treeStatus, { 'node_id' : obj.id , 'status' : 1 }
                                    ,function(data){
                                        if(data.status == "OK"){
                                            $("#tree #" + obj.id + " > a > i").css('background-image','url(' + data.src +')');
                                        }

                                    }).fail(function () {
                                        data.instance.refresh();
                                    });
                                }
                            }
                            ,'medium' : {
                                  "separator_after"	    : true
                                ,"label"				: "Warning"
                                ,"action"			    : function (data){
                                    var inst = $.jstree.reference(data.reference),
                                    obj = inst.get_node(data.reference);
                                    <!-- change status to on -->
                                    $.post(url.treeStatus, { 'node_id' : obj.id , 'status' : 2 }
                                    ,function(data){
                                        if(data.status == "OK"){
                                            $("#tree #" + obj.id + " > a > i").css('background-image','url(' + data.src +')');
                                        }

                                    }).fail(function () {
                                        data.instance.refresh();
                                    });
                                }
                            }
                            ,'off' : {
                                 "separator_after"	    : true
                                ,"label"				: "Danger"
                                ,"action"			    : function (data){
                                    var inst = $.jstree.reference(data.reference),
                                    obj = inst.get_node(data.reference);
                                    <!-- change status to off -->
                                    $.post(url.treeStatus, { 'node_id' : obj.id , 'status' : 0 }
                                    ,function(data){
                                        if(data.status == "OK"){
                                            $("#tree #" + obj.id + " > a > i").css('background-image','url(' + data.src +')');
                                        }

                                    }).fail(function () {
                                        data.instance.refresh();
                                    });
                                }
                            }
                        }
                    };

                    tmp['join'] = {
                        'label' : 'Join'
                        ,"separator_before"  : false    // Insert a separator before the item
                        ,"separator_after"   : true,     // Insert a separator after the item
                        "action" : function (node){
                            var inst = $.jstree.reference(node.reference),
                            obj = inst.get_node(node.reference);
                            
                            ids = [];
                            $.each( $('#tree').jstree(true).get_selected('full',true) , function( index , value){
                                    if(value.id != obj.id){
                                        ids[ids.length] = value.id;
                                    }
                            });

                            $.post(url.treeJoin, { 'node_id' : obj.id , 'to_join' : JSON.stringify(ids) }
                            ,function(data){
                                if(data.status == "OK"){
                                    <!-- TODO -->
                                    $.each( data.joined , function(index, value){
                                        $('#tree').jstree(true).delete_node($("#" + value));
                                    });
                                }

                            }).fail(function () {
                                data.instance.refresh();
                            });

                        }
                    }
                }

                if(typeof current !== 'undefined'){
                    if( current.parents.length >= 9){

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
                     'main' : {
                         "separator_after"	    : true
                        ,"label"				: "Main"
                        ,"action"			    : function (data){
                            var inst = $.jstree.reference(data.reference),
                            obj = inst.get_node(data.reference);
                            $.post(url.treeCreate, { 'parent' : obj.id , 'text' : "New Main" , 'icon' : '../app/static/img/icons/main_b.ico' , 'type' : 'main' , tooltip : "Main tooltip" }
                            ,function(data){

                                inst.create_node(obj, { 'id' : data.id , 'text' : 'New Main' + data.id , 'icon' : '../app/static/img/icons/main_b.ico' , type: 'main' }
                                        , "last", function (new_node) {

                                    setTimeout(function () {
                                        <!--$("#tree #" + obj.id +"_anchor .jstree-icon").attr({ 'title' : "Main tooltip" + data.id }).tooltip({-->
                                            <!--track: true-->
                                        <!--});-->
                                        inst.edit(new_node); },0);
                                });


                            }).fail(function () {
                                data.instance.refresh();
                            });
                        }
                    }
                    ,'air_bkr' : {
                         "separator_after"	    : true
                        ,"label"				: "Air Bkr"
                        ,"action"			    : function (data){
                            var inst = $.jstree.reference(data.reference),
                            obj = inst.get_node(data.reference);
                            $.post(url.treeCreate, { 'parent' : obj.id , 'text' : "Air Bkr" , 'icon' : '../app/static/img/icons/air_bkr_b.ico' , 'type' : 'air_bkr' , tooltip : "Air Bkr tooltip" }
                            ,function(data){
                                inst.create_node(obj, { 'id' : data.id , 'text' : 'Air Bkr' + data.id , 'icon' : '../app/static/img/icons/air_bkr_b.ico' , type: 'air_bkr' }
                                        , "last", function (new_node) {

                                    setTimeout(function () {
                                        $("#tree #" + obj.id +"_anchor .jstree-icon").attr({ 'title' : "Air Bkr tooltip" + data.id }).tooltip({
                                            track: true
                                        });
                                        inst.edit(new_node); },0);
                                });
                            }).fail(function () {
                                data.instance.refresh();
                            });
                        }
                    }
                    ,'bkr' : {
                         "separator_after"	    : true
                        ,"label"				: "Bkr"
                        ,"action"			    : function (data){
                            var inst = $.jstree.reference(data.reference),
                            obj = inst.get_node(data.reference);
                            $.post(url.treeCreate, { 'parent' : obj.id , 'text' : "Bkr" , 'icon' : '../app/static/img/icons/bkr_b.ico' , 'type' : 'bkr' , tooltip : "Bkr tooltip" }
                            ,function(data){
                                inst.create_node(obj, { 'id' : data.id , 'text' : 'Bkr' + data.id , 'icon' : '../app/static/img/icons/bkr_b.ico' , 'type' : 'bkr' }
                                        , "last", function (new_node) {

                                    setTimeout(function () {
                                        $("#tree #" + obj.id +"_anchor .jstree-icon").attr({ 'title' : "Bkr tooltip" + data.id }).tooltip({
                                            track: true
                                        });
                                        inst.edit(new_node); },0);
                                });
                            }).fail(function () {
                                data.instance.refresh();
                            });
                        }
                    }
                    ,'bushing' : {
                         "separator_after"	    : true
                        ,"label"				: "Bushing"
                        ,"action"			    : function (data){
                            var inst = $.jstree.reference(data.reference),
                            obj = inst.get_node(data.reference);
                            $.post(url.treeCreate, { 'parent' : obj.id , 'text' : "Bushing" , 'icon' : '../app/static/img/icons/bushing_b.ico' , 'type' : 'bushing' , tooltip : "Bushing tooltip" }
                            ,function(data){
                                inst.create_node(obj, { 'id' : data.id , 'text' : 'Bushing' + data.id , 'icon' : '../app/static/img/icons/bushing_b.ico' , 'type' : 'bushing' }
                                        , "last", function (new_node) {

                                    setTimeout(function () {
                                        $("#tree #" + obj.id +"_anchor .jstree-icon").attr({ 'title' : "Brushing tooltip" + data.id }).tooltip({
                                            track: true
                                        });
                                        inst.edit(new_node); },0);
                                });
                            }).fail(function () {
                                data.instance.refresh();
                            });
                        }
                    }
                    ,'capacitor' : {
                         "separator_after"	    : true
                        ,"label"				: "Capacitor"
                        ,"action"			    : function (data){
                            var inst = $.jstree.reference(data.reference),
                            obj = inst.get_node(data.reference);
                            $.post(url.treeCreate, { 'parent' : obj.id , 'text' : "Capacitor" , 'icon' : '../app/static/img/icons/capacitor_b.ico' , 'type' : 'capacitor' , tooltip : "Capacitor tooltip" }
                            ,function(data){
                                inst.create_node(obj, { 'id' : data.id , 'text' : 'Capacitor' + data.id , 'icon' : '../app/static/img/icons/capacitor_b.ico' , 'type' : 'capacitor' }
                                        , "last", function (new_node) {

                                    setTimeout(function () {
                                        $("#tree #" + obj.id +"_anchor .jstree-icon").attr({ 'title' : "Capacitor tooltip" + data.id }).tooltip({
                                            track: true
                                        });
                                        inst.edit(new_node); },0);
                                });
                            }).fail(function () {
                                data.instance.refresh();
                            });
                        }
                    }
                    ,'induc' : {
                         "separator_after"	    : true
                        ,"label"				: "Induc"
                        ,"action"			    : function (data){
                            var inst = $.jstree.reference(data.reference),
                            obj = inst.get_node(data.reference);
                            $.post(url.treeCreate, { 'parent' : obj.id , 'text' : "Induc" , 'icon' : '../app/static/img/icons/induc_b.ico' , 'type' : 'induc' , tooltip : "Induc tooltip" }
                            ,function(data){
                                inst.create_node(obj, { 'id' : data.id , 'text' : 'Induc' + data.id , 'icon' : '../app/static/img/icons/induc_b.ico' , 'type' : 'induc' }
                                        , "last", function (new_node) {

                                    setTimeout(function () {
                                        $("#tree #" + obj.id +"_anchor .jstree-icon").attr({ 'title' : "Induc tooltip" + data.id }).tooltip({
                                            track: true
                                        });
                                        inst.edit(new_node); },0);
                                });
                            }).fail(function () {
                                data.instance.refresh();
                            });
                        }
                    }
                    ,'mcc_b' : {
                         "separator_after"	    : true
                        ,"label"				: "Mcc"
                        ,"action"			    : function (data){
                            var inst = $.jstree.reference(data.reference),
                            obj = inst.get_node(data.reference);
                            $.post(url.treeCreate, { 'parent' : obj.id , 'text' : "Mcc" , 'icon' : '../app/static/img/icons/mcc_b.ico' , 'type' : 'mcc' , tooltip : "Mcc tooltip" }
                            ,function(data){
                                inst.create_node(obj, { 'id' : data.id , 'text' : 'Mcc' + data.id , 'icon' : '../app/static/img/icons/mcc_b.ico' , 'type' : 'mcc' }
                                        , "last", function (new_node) {

                                    setTimeout(function () {
                                        $("#tree #" + obj.id +"_anchor .jstree-icon").attr({ 'title' : "Mcc tooltip" + data.id }).tooltip({
                                            track: true
                                        });
                                        inst.edit(new_node); },0);
                                });
                            }).fail(function () {
                                data.instance.refresh();
                            });
                        }
                    }
                    ,'rect' : {
                         "separator_after"	    : true
                        ,"label"				: "Rect"
                        ,"action"			    : function (data){
                            var inst = $.jstree.reference(data.reference),
                            obj = inst.get_node(data.reference);
                            $.post(url.treeCreate, { 'parent' : obj.id , 'text' : "Rect" , 'icon' : '../app/static/img/icons/rect_b.ico' , 'type' : 'rect' , tooltip : "Rect tooltip" }
                            ,function(data){
                                inst.create_node(obj, { 'id' : data.id , 'text' : 'Rect' + data.id , 'icon' : '../app/static/img/icons/rect_b.ico' , 'type' : 'rect' }
                                        , "last", function (new_node) {

                                    setTimeout(function () {
                                        $("#tree #" + obj.id +"_anchor .jstree-icon").attr({ 'title' : "Rect tooltip" + data.id }).tooltip({
                                            track: true
                                        });
                                        inst.edit(new_node); },0);
                                });
                            }).fail(function () {
                                data.instance.refresh();
                            });
                        }
                    }
                    ,'source' : {
                         "separator_after"	    : true
                        ,"label"				: "source"
                        ,"action"			    : function (data){
                            var inst = $.jstree.reference(data.reference),
                            obj = inst.get_node(data.reference);
                            $.post(url.treeCreate, { 'parent' : obj.id , 'text' : "Source" , 'icon' : '../app/static/img/icons/source_b.ico' , 'type' : 'source' , tooltip : "Source tooltip" }
                            ,function(data){
                                inst.create_node(obj, { 'id' : data.id , 'text' : 'Source' + data.id , 'icon' : '../app/static/img/icons/source_b.ico' , 'type' : 'source' }
                                        , "last", function (new_node) {

                                    setTimeout(function () {
                                        $("#tree #" + obj.id +"_anchor .jstree-icon").attr({ 'title' : "Source tooltip" + data.id }).tooltip({
                                            track: true
                                        });
                                        inst.edit(new_node); },0);
                                });
                            }).fail(function () {
                                data.instance.refresh();
                            });
                        }
                    }
                    ,'switch' : {
                         "separator_after"	    : true
                        ,"label"				: "switch"
                        ,"action"			    : function (data){
                            var inst = $.jstree.reference(data.reference),
                            obj = inst.get_node(data.reference);
                            $.post(url.treeCreate, { 'parent' : obj.id , 'text' : "Switch" , 'icon' : '../app/static/img/icons/switch_b.ico' , 'type' : 'switch' , tooltip : "Switch tooltip" }
                            ,function(data){
                                inst.create_node(obj, { 'id' : data.id , 'text' : 'Switch' + data.id , 'icon' : '../app/static/img/icons/switch_b.ico' , 'type' : 'switch' }
                                        , "last", function (new_node) {

                                    setTimeout(function () {
                                        $("#tree #" + obj.id +"_anchor .jstree-icon").attr({ 'title' : "Switch tooltip" + data.id }).tooltip({
                                            track: true
                                        });
                                        inst.edit(new_node); },0);
                                });
                            }).fail(function () {
                                data.instance.refresh();
                            });
                        }
                    }
                    ,'synch' : {
                         "separator_after"	    : true
                        ,"label"				: "Synch"
                        ,"action"			    : function (data){
                            var inst = $.jstree.reference(data.reference),
                            obj = inst.get_node(data.reference);
                            $.post(url.treeCreate, { 'parent' : obj.id , 'text' : "Synch" , 'icon' : '../app/static/img/icons/synch_b.ico' , 'type' : 'synch' , tooltip : "Synch tooltip" }
                            ,function(data){
                                inst.create_node(obj, { 'id' : data.id , 'text' : 'Synch' + data.id , 'icon' : '../app/static/img/icons/synch_b.ico' , 'type' : 'synch' }
                                        , "last", function (new_node) {

                                    setTimeout(function () {
                                        $("#tree #" + obj.id +"_anchor .jstree-icon").attr({ 'title' : "Synch tooltip" + data.id }).tooltip({
                                            track: true
                                        });
                                        inst.edit(new_node); },0);
                                });
                            }).fail(function () {
                                data.instance.refresh();
                            });
                        }
                    }
                    ,'tank' : {
                         "separator_after"	    : true
                        ,"label"				: "Tank"
                        ,"action"			    : function (data){
                            var inst = $.jstree.reference(data.reference),
                            obj = inst.get_node(data.reference);
                            $.post(url.treeCreate, { 'parent' : obj.id , 'text' : "Tank" , 'icon' : '../app/static/img/icons/tank_b.ico' , 'type' : 'tank' , tooltip : "Tank tooltip" }
                            ,function(data){
                                inst.create_node(obj, { 'id' : data.id , 'text' : 'Tank' + data.id , 'icon' : '../app/static/img/icons/tank_b.ico' , 'type' : 'tank' }
                                        , "last", function (new_node) {

                                    setTimeout(function () {
                                        $("#tree #" + obj.id +"_anchor .jstree-icon").attr({ 'title' : "Tank tooltip" + data.id }).tooltip({
                                            track: true
                                        });
                                        inst.edit(new_node); },0);
                                });
                            }).fail(function () {
                                data.instance.refresh();
                            });
                        }
                    }
                    ,'tc' : {
                         "separator_after"	    : true
                        ,"label"				: "Tc"
                        ,"action"			    : function (data){
                            var inst = $.jstree.reference(data.reference),
                            obj = inst.get_node(data.reference);
                            $.post(url.treeCreate, { 'parent' : obj.id , 'text' : "Tc" , 'icon' : '../app/static/img/icons/tc_b.ico' , 'type' : 'tc' , tooltip : "Tc tooltip" }
                            ,function(data){
                                inst.create_node(obj, { 'id' : data.id , 'text' : 'tc' + data.id , 'icon' : '../app/static/img/icons/tc_b.ico' , 'type' : 'tc' }
                                        , "last", function (new_node) {

                                    setTimeout(function () {
                                        $("#tree #" + obj.id +"_anchor .jstree-icon").attr({ 'title' : "Tc tooltip" + data.id }).tooltip({
                                            track: true
                                        });
                                        inst.edit(new_node); },0);
                                });
                            }).fail(function () {
                                data.instance.refresh();
                            });
                        }
                    }
                    ,'transfo' : {
                         "separator_after"	    : true
                        ,"label"				: "Transfo"
                        ,"action"			    : function (data){
                            var inst = $.jstree.reference(data.reference),
                            obj = inst.get_node(data.reference);
                            $.post(url.treeCreate, { 'parent' : obj.id , 'text' : "Transfo" , 'icon' : '../app/static/img/icons/transfo_b.ico' , 'type' : 'transfo' , tooltip : "Transfo tooltip" }
                            ,function(data){
                                inst.create_node(obj, { 'id' : data.id , 'text' : 'transfo' + data.id , 'icon' : '../app/static/img/icons/transfo_b.ico' , 'type' : 'transfo' }
                                        , "last", function (new_node) {

                                    setTimeout(function () {
                                        $("#tree #" + obj.id +"_anchor .jstree-icon").attr({ 'title' : "Transfo tooltip" + data.id }).tooltip({
                                            track: true
                                        });
                                        inst.edit(new_node); },0);
                                });
                            }).fail(function () {
                                data.instance.refresh();
                            });
                        }
                    }
                    ,'cable' : {
                         "separator_after"	    : true
                        ,"label"				: "Cable"
                        ,"action"			    : function (data){
                            var inst = $.jstree.reference(data.reference),
                            obj = inst.get_node(data.reference);
                            $.post(url.treeCreate, { 'parent' : obj.id , 'text' : "Transfo" , 'icon' : '../app/static/img/icons/cable_b.ico' , 'type' : 'cable' , tooltip : "Cable tooltip" }
                            ,function(data){
                                inst.create_node(obj, { 'id' : data.id , 'text' : 'cable' + data.id , 'icon' : '../app/static/img/icons/cable_b.ico' , 'type' : 'cable' }
                                        , "last", function (new_node) {

                                    setTimeout(function () {
                                        $("#tree #" + obj.id +"_anchor .jstree-icon").attr({ 'title' : "Cable tooltip" + data.id }).tooltip({
                                            track: true
                                        });
                                        inst.edit(new_node); },0);
                                });
                            }).fail(function () {
                                data.instance.refresh();
                            });
                        }
                    } 
                    ,'equipment' : {
                        "separator_after"	    : true
                        ,"label"				: "Equipment"
                        ,"action"			    : function (data){
                            var inst = $.jstree.reference(data.reference),
                                obj = inst.get_node(data.reference);

                            $.post(url.treeCreate, {
                                    parent: obj.id,
                                    text: "Transfo",
                                    icon: '../app/static/img/icons/cable_b.ico',
                                    type: 'cable',
                                    tooltip: "Equipment tooltip"
                                }
                                ,function(data){
                                    inst.create_node(obj, {
                                            'id': data.id,
                                            'text': 'Equipment' + data.id,
                                            'icon' : '../app/static/img/icons/cable_b.ico',
                                            'type' : 'Equipment'
                                        }
                                        , "last", function (new_node) {

                                            setTimeout(function () {
                                                $("#tree #" + obj.id +"_anchor .jstree-icon").attr({ 'title' : "Cable tooltip" + data.id }).tooltip({
                                                    track: true
                                                });
                                                inst.edit(new_node); },0);
                                        });
                                }).fail(function () {
                                data.instance.refresh();
                            });
                        }
                    }
                };

                if( (this.get_type(node) === "default")
                    || ((this.get_type(node) === "root"))
                )
                {
                    $.each(tmp.create.submenu , function(index, value){
                        if( value.label !== 'Main' ){
                            delete tmp.create.submenu[index];
                            //delete value;
                            //delete this;
                        }
                    });

                }else if(this.get_type(node) != "main"){
                    //delete main submenu
                    delete tmp.create.submenu.main;
                }

                if(this.get_type(node) === "file") {
                    delete tmp.create;
                }

                if( node.state != null && node.state.disabled == true)
                {
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
            $.post(url.treeMove, { 'node_id' : data.node.id, 'parent_id' : data.parent } ,function(data ){
                //alert(data.success == true );
            }).fail(function () {
                data.instance.refresh();
            });

        })
        .on('copy_node.jstree', function (e, data){ 
        }).on('select_node.jstree', function (e, data) {
                $("#treeView #node_id").val(data.node.id);

                $.post(url.treeGetView, { 'node_id' : data.node.id } ,function(res){
                    if(res.view){
                        $("#treeView #view").val(res.view);
                        $("#treeView #tooltip").val(res.tooltip);
                    }
                }).fail(function () {

                });
        }).on('ready.jstree', function (e, data){

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

    var to = false;
    $.jstree.defaults.search.show_only_matches = true;
    console.log("treee")
    $('#plugins4_q').keyup(function () {
        if(to) { clearTimeout(to); }
        to = setTimeout(function () {
          var v = $('#plugins4_q').val();
          $('#tree').jstree(true).search(v);
        }, 250);
    });

    $( document ).ready(function(){
        $('#delete_btn').click(function(){
            var current = $('#tree').jstree(true).get_selected('full',true)[0];
            if(current != undefined){
                if(confirm("Are you sure you want to delete " + current.text + " ?")){
                    current.immediate = true;
                    $('#tree').jstree(true).delete_node(current);
                }
            }
        });

        $('#graphics_btn').click(function(){
            var current = $('#tree').jstree(true).get_selected('full',true)[0];
            if(current != undefined){
                $('#test_map_name').html(current.text);
            }
        });

        $('#info_btn').click(function(){
            var current = $('#tree').jstree(true).get_selected('full',true)[0];
            if(current != undefined){
                var data = '<p class="text-center">North Huron\\' + current.text + '\\' + 'TODO' +  ', Oil' + '<br>';
                data +='Transformer Sealed, Pri. voltage (V):' + 'TODO' + ', BIL (kV): : ' + 'TODO' + '</p>';
                data +='<p class="text-center"> TODO </p>'
                $('#infoForm .modal-body').html(data);
            }
        });

        $("#manage_show").click(function(e){
            $("#manage_add_form").removeClass('hidden');
            e.preventDefault();
        });

        $("#manage_cancel").click(function(e){
            $("#manage_add_form").addClass('hidden');
            e.preventDefault();
        });
    });
}); 
