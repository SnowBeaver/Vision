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
        $.post('{{ url_for(".update") }}', $(this).serialize()
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

                            $.post('{{ url_for(".create") }}', { 'parent' : obj.id , 'text' : "node " , 'type' : 'node'}
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

        $.post('{{url_for(".delete")}}', { 'id' : data.node.id } ,function(data ){
            //alert(data.id == true );
        }).fail(function () {
            //data.instance.refresh();
        });
    }).on('rename_node.jstree', function (e, data) {

        $.post('{{url_for(".rename")}}', { 'id' : data.node.id, 'text' : data.text } ,function(data){
            //alert(data.success == true );
        }).fail(function () {
            //data.instance.refresh();
        });

    }).on('move_node.jstree', function (e, data) {

        $.post('{{url_for(".move")}}', { 'node_id' : data.node.id, 'parent_id' : data.parent } ,function(data ){
            //alert(data.success == true );
        }).fail(function () {
            //data.instance.refresh();
        });

    })
        .on('copy_node.jstree', function (e, data){
//                $.post('{{url_for(".copy")}}', { 'node_id' : data.original.id , 'parent_id' : data.parent } ,function(d){
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

        $.post('{{ url_for(".getview") }}', { 'node_id' : data.node.id } ,function(res){
            $("#menuView #page_view").val(res.view);
        }).fail(function () {

        });
    }).on('ready.jstree', function (e, data){

    }).on('refresh.jstree', function (e, data){
        //console.log("refresh");
    });

    var to = false;
    $('#plugins4_q').keyup(function () {
        if(to) { clearTimeout(to); }
        to = setTimeout(function () {
            var v = $('#plugins4_q').val();
            $('#tree').jstree(true).search(v);
        }, 250);
    });

}); 
