jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) +
                                                $(window).scrollTop()) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) +
                                                $(window).scrollLeft()) + "px");
    return this;
}


jQuery(document).ready(function(){
    
    jQuery(".delete").click(function(){
        jQuery('#confirmModal').modal('show');
        var toDelete = jQuery(this).attr("id");
        jQuery("#toDelete").val(toDelete.split("-")[1]);
        return false;
    });

    jQuery("#confirmedDelete").click(function(e){
    	e.preventDefault();
    	var deleteUrl = jQuery("#deleteForm").attr('action');
    	var deleteUrlArray = deleteUrl.split("/");
    	
    	deleteUrlArray[deleteUrlArray  .length - 2] = jQuery("#toDelete").val();
    	var finalUrl = deleteUrlArray.join("/");
    	
    	$('#deleteForm').attr('action', finalUrl).submit();
    });
});