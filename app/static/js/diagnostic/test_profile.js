var Test_Profile = Test_Profile || (function(){
    var _args = {}; // private

    return {
        init : function(Args) {
            _args = Args;

            $.ajax({
                 type : 'POST'
                ,url : _args.get_value
                ,async : false
                ,dataType : 'json'
                ,success : function(out){
                    $('#profile_elc').empty()
                    $.each(out.data.electrical , function(i, val) {
                        //alert(i + ' ' + JSON.stringify(val));
                        //var absent = 0 == $('#profile_elc option[value=' + val.selection + ']').length;
                        //if(absent){
                        $('#profile_elc').append($("<option></option>")
                        .attr("value",val.selection)
                        .text(val.selection));
                            //alert(absent);
                        //}
                    });

                    $('#profile_fl').empty();
                    //alert(JSON.stringify(out.data.fluid));
                    $.each(out.data.fluid , function(i, val) {
                        $('#profile_fl').append($("<option></option>")
                        .attr("value",val.selection)
                        .text(val.selection));
                    });
                }
                ,error: function(data){
                    console.log(data);
                }
            });

            var electrical_values = $.map($('#profile_elc option') ,function(option) {
                return option.value;
            });

            var fluid_values = $.map($('#profile_fl option') ,function(option) {
                return option.value;
            });

            $('#profile_elc').selectize({
                 allowEmptyOption: true
                ,create: true
                ,onChange : function(value){
                    if(value){
                        if( electrical_values.indexOf(value) > -1 ){
                            $.post(
                                 _args.get_profile
                                ,{ 'select' : 'electrical', 'selection' : value }
                                ,function(data){
                                    if(data.success){
                                        //alert(JSON.stringify(data.node));
                                        $('#electrical_profile')[0].reset();
                                        $.each( data.node , function(i,val) {
                                            //alert(i + ' ' + val);
                                            if(i == 'description'){
                                                $('#'+ i + '_elc' ).val(val);
                                            }else{
                                                //alert(i + ' ' + val + ' ' + (val == true)  + ' ' + (val == false)  );
                                                if(val == true){
                                                    $('#electrical_profile #'+ i ).attr('checked', true);
                                                }else if(val == false || val == null){
                                                    //alert(i);
                                                    $('#electrical_profile #'+ i ).attr('checked', false);
                                                }else{
                                                    $('#electrical_profile #'+ i ).val(val);
                                                }
                                            }
                                        });
                                    }
                                    //alert(JSON.stringify(data));
                            }).fail(function (data) {
                                console.log(data);
                            });
                        }
                    }
                }
            });

            $('#profile_fl').selectize({
                 allowEmptyOption: true
                ,create: true
                ,onChange : function(value){
                    if(value){
                        if( fluid_values.indexOf(value) > -1 ){
                            $.post(
                                 _args.get_profile
                                ,{ 'select' : 'fluid', 'selection' : value }
                                ,function(data){
                                    if(data.success){
                                        //alert(JSON.stringify(data.node));
                                        $('#fluid_profile')[0].reset();
                                        $.each( data.node , function(i,val) {
                                            //alert(i + ' ' + val);
                                            if(i == 'description'){
                                                $('#'+ i + '_fl' ).val(val);
                                            }else{
                                                //alert(i + ' ' + val + ' ' + (val == true)  + ' ' + (val == false)  );
                                                if(val == true){
                                                    $('#fluid_profile #'+ i ).attr('checked', true);
                                                }else if(val == false || val == null){
                                                    //alert(i);
                                                    $('#fluid_profile #'+ i ).attr('checked', false);
                                                }else{
                                                    //alert(i + ' ' + val + ' ' + (val == true)  + ' ' + (val == false)  );
                                                    $('#fluid_profile #'+ i ).val(val);
                                                    //alert(i + ' ' + val + ' ' + (val == true)  + ' ' + (val == false)  );
                                                    //alert( $('#fluid_profile #'+ i ).val() );
                                                }
                                            }
                                        });
                                    }
                                    //alert(JSON.stringify(data));
                            }).fail(function (data) {
                                console.log(data);
                            });
                        }
                    }
                }
            });

            $(document).ready(function(){
                //alert(JSON.stringify(_args));
                $('#profile_elc')[0].selectize.clear();
                $('#profile_fl')[0].selectize.clear();

                $("#TestProfile").submit(function(e){
                    e.preventDefault();
                });

                $("#TestProfile :button").click(function(e){
                    //alert($(this).attr("id"));

                    switch( $(this).attr("id") ){
                        case 'electrical_create':
                        case 'electrical_modify':
                            $("#TestProfile #electrical_select").val( $(this).attr("id") );
                        break;
                        case 'electrical_delete':
                            if (confirm('Do you wish to delete this item ?')) {
                                var opt = $('#profile_elc').val();
                                alert(opt);
                                $.post(
                                     _args.delete
                                    ,{ 'select' : 'electrical', 'profile' : opt }
                                    ,function(data){
                                        //alert(JSON.stringify(data));
                                        if(data.success){
                                            $('#profile_elc')[0].selectize.removeOption(data.profile);
                                            $('#profile_elc')[0].selectize.clear();
                                            $("#description_elc").val('');
                                            var index = electrical_values.indexOf(opt);
                                            if (index > -1) {
                                                electrical_values.splice(index, 1);
                                            }
                                            //location.reload();
                                        }
                                        //alert(JSON.stringify(data));
                                }).fail(function (data) {
                                    console.log(data);
                                });
                            }
                            break;
                        case 'electrical_cancel':

                            break;
                        case 'electrical_save':
                            var opt = $('#profile_elc').val();
                            var select = $("#TestProfile #electrical_select").val();

                            if(select){
                                //alert(select);
                                if(select == 'electrical_create'){
                                    if( electrical_values.indexOf(opt) == -1 ) {
                                        var  profile = $("#electrical_profile").serializeArray();
                                        profile.push( { name: 'select', value: 'electrical' } );

                                        profile.push( { name: 'selection', value: $("#profile_elc").val() } );
                                        profile.push( { name: 'description', value: $("#description_elc").val() } );
                                        //alert($("description_elc").val());
                                        //profile.selected = "electrical_profile";
                                        //alert(JSON.stringify(profile));

                                        $.post( _args.create , profile
                                        ,function(data){
                                            if(data.success){
                                                alert("Test successfully added");
                                                electrical_values.push( $("#profile_elc").val() );
                                                //location.reload();
                                            }
                                            //alert(JSON.stringify(data));
                                        }).fail(function (data) {
                                            console.log(data);
                                        });
                                    }else{
                                        alert("Please enter a new value");
                                    }
                                }else{
                                     //alert("Modify pressed");

                                     var  profile = $("#electrical_profile").serializeArray();
                                     profile.push( { name: 'select', value: 'electrical' } );

                                     profile.push( { name: 'selection', value: $("#profile_elc").val() } );
                                     profile.push( { name: 'description', value: $("#description_elc").val() } );

                                     $.post( _args.modify , profile
                                     ,function(data){
                                            if(data.success){
                                                alert("Test successfully modified");
                                                //location.reload();
                                            }
                                            //alert(JSON.stringify(data));
                                     }).fail(function (data) {
                                            console.log(data);
                                     });
                                }
                            }else{
                                alert("Please select a method first");
                            }
                            break;
                        case 'fluid_create':
                        case 'fluid_modify':
                            $("#TestProfile #fluid_select").val( $(this).attr("id") );
                            break;
                        case 'fluid_delete':
                             if (confirm('Do you wish to delete this item ?')) {
                                var opt = $('#profile_fl').val();
                                //alert(opt);
                                $.post(
                                     _args.delete
                                    ,{ 'select' : 'fluid', 'profile' : opt }
                                    ,function(data){
                                        //alert(JSON.stringify(data));
                                        if(data.success){
                                            $('#profile_fl')[0].selectize.removeOption(data.profile);
                                            $('#profile_fl')[0].selectize.clear();
                                            $("#description_fl").val('');
                                            var index = fluid_values.indexOf(opt);
                                            if (index > -1) {
                                                fluid_values.splice(index, 1);
                                            }
                                            //location.reload();
                                        }
                                        //alert(JSON.stringify(data));
                                }).fail(function (data) {
                                    console.log(data);
                                });
                            }
                            break;

                        case 'fluid_cancel':
                            break;

                        case 'fluid_save':
                            var opt = $('#profile_fl').val();
                            var select = $("#TestProfile #fluid_select").val();

                            if(select){
                                //alert(select);
                                if(select == 'fluid_create'){

                                    if( fluid_values.indexOf(opt) == -1 ) {

                                        var  profile = $("#fluid_profile").serializeArray();
                                        profile.push( { name: 'select', value: 'fluid' } );

                                        profile.push( { name: 'selection', value: $("#profile_fl").val() } );
                                        profile.push( { name: 'description', value: $("#description_fl").val() } );
                                        //alert($("description_elc").val());
                                        //profile.selected = "electrical_profile";
                                        //alert(JSON.stringify(profile));

                                        $.post( _args.create , profile
                                        ,function(data){
                                            if(data.success){
                                                alert("Test successfully added");
                                                fluid_values.push( $("#fluid_profile").val() );
                                                //location.reload();
                                            }
                                            //alert(JSON.stringify(data));
                                        }).fail(function (data) {
                                            console.log(data);
                                        });
                                    }else{
                                        alert("Please enter a new value");
                                    }
                                }else{
                                     //alert("Modify pressed");

                                     var  profile = $("#fluid_profile").serializeArray();
                                     profile.push( { name: 'select', value: 'fluid' } );

                                     profile.push( { name: 'selection', value: $("#profile_fl").val() } );
                                     profile.push( { name: 'description', value: $("#description_fl").val() } );

                                     $.post( _args.modify , profile
                                     ,function(data){
                                            if(data.success){
                                                alert("Test successfully modified");
                                                //location.reload();
                                            }
                                            //alert(JSON.stringify(data));
                                     }).fail(function (data) {
                                            console.log(data);
                                     });
                                }
                            }else{
                                alert("Please select a method first");
                            }

                            break;

                    }

                    e.preventDefault();
                });
            });
        }
    }
}());