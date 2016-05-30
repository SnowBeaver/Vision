function node_selected(node){
   $('#lab_body tr').removeClass('active');
   $(node).addClass('active');
}

var LAB = LAB || (function(){
    var _args = {}; // private

    return {
        init : function(Args) {
            _args = Args;
             // some other initialising

            $(document).ready(function(){
                $.post( _args[1]
                ,function(data){
                    //alert(JSON.stringify(data));
                    if(data.success){
                        data.labs.forEach(function(entry) {
                            var out = '<tr id="addr-'+ entry.id +'" onclick="node_selected(this);">';
                            out +='<td>'+ entry.code + '</td>';
                            out +='<td>'+ entry.analyser + '</td>';
                            out +='</tr>';

                            $("#lab_body").append(out);
                            //console.log(JSON.stringify(entry));
                        });
                    }
                }).fail(function (data) {
                    console.log(data);
                });

            });

            $("#labFooter #labAdd").click(function(e){
                $("#labData").removeClass("hidden");
                $("#labActionType").val(1);
                e.preventDefault();
            });

            $("#labFooter #labDelete").click(function(e){
                if($("#lab_body .active").length){
                    id = $('#lab_body .active').attr('id');
                    id = id.replace("addr-", "");

                    $.post( _args[2], { 'id' : id }
                    ,function(data){
                        if(data.success){
                            $('#lab_body .active').remove();
                        }
                        //alert(JSON.stringify(data));
                    }).fail(function (data) {
                        console.log(data);
                    });

                } else{
                    alert("Please select an row");
                }

            });

            $("#labFooter #labModify").click(function(e){
                if($("#lab_body .active").length){

                    $("#lab_body .active td").each(function( index ) {
                        if(index == 0){
                            $("#LabFormData #code").val($( this ).text());
                        } else {
                            $("#LabFormData #analyser").val($( this ).text());
                        }
                        //console.log( index + ": " + $( this ).text() );
                    });

                    $("#labData").removeClass("hidden");
                    $("#labActionType").val(2);
                    e.preventDefault();
                } else{
                    alert("Please select an row");
                }

            });

            $("#labFooter #labSelect").click(function(e){
                if($("#lab_body .active").length){
                    id = $('#lab_body .active').attr('id');
                    id = id.replace("addr-", "");

                    //$("#new-tabs-1 #lab").find('option').removeAttr("selected")
                    //$("#new-tabs-1 #lab :selected").prop('selected', false);
                    $("#new-tabs-1 #lab").val(id);
                    //$('#new-tabs-1 #lab option[value="' + id + '"]').attr('selected', true);
                    $("#labFooter #closeLab").click();

                } else{
                    alert("Please select an row");
                }
            });


            $("#LabFormData #CancelLab").click(function(e){
                $("#labData").addClass("hidden");
                $("#LabFormData")[0].reset();
                $("#labActionType").val(0);
                e.preventDefault();
            });

            $("#LabFormData").submit(function(e){
                var actionType = parseInt($("#labActionType").val());
                var code = $("#LabFormData #code").val();
                var analyser = $("#LabFormData #analyser").val();
                /* add Action */
                if(actionType == 1){

                    $.post( _args[0], { 'code' : code, 'analyser' : analyser }
                    ,function(data){

                        if(data.success){
                            var out = '<tr id="addr-'+ data.id +'" onclick="node_selected(this);">';
                            out +='<td>'+ code + '</td>';
                            out +='<td>'+ analyser + '</td>';
                            out +='</tr>';

                            $("#labData").addClass("hidden");
                            $("#LabFormData")[0].reset();

                            $("#lab_body").append(out);

                            //location.reload();
                        }
                        //alert(JSON.stringify(data));
                    }).fail(function (data) {
                        console.log(data);
                    });
                }
                /* modify Action */
                else if(actionType == 2){
                    var code = $("#LabFormData #code").val();
                    var analyser = $("#LabFormData #analyser").val();

                    id = $('#lab_body .active').attr('id');
                    id = id.replace("addr-", "");

                    $.post( _args[3], { 'id' : id, 'code' : code,  'analyser' : analyser}
                    ,function(data){

                        if(data.success){
                            $("#lab_body .active td").each(function( index ) {
                                if(index == 0){
                                    $( this ).text( $("#LabFormData #code").val() ) ;
                                } else {
                                    $( this ).text( $("#LabFormData #analyser").val() );
                                }
                                //console.log( index + ": " + $( this ).text() );
                            });

                            $("#labData").addClass("hidden");
                            $("#LabFormData")[0].reset();
                        }
                        //alert(JSON.stringify(data));
                    }).fail(function (data) {
                        console.log(data);
                    });

                }
                else{
                    alert("Nothing was preset");
                }
                e.preventDefault();
            });

    },

    };
}());
