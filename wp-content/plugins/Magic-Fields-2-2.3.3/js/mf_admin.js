jQuery(document).ready(function($) {
  //Custom Validataion methods
  jQuery.validator.addMethod( "lowercase", function(value, element) {
    return this.optional(element) || /^[0-9a-z\_]+$/.test(value);
  },'Only  are accepted lowercase characters,numbers or underscores');

  $('#addPostType').validate({meta:"validate"});
  $('#addCustomTaxonomy').validate({meta:"validate"});
  $('#addCustomGroup').validate({meta:"validate"});
  $('#addCustomField').validate({meta:"validate"});

  //validation type(name)
  $('#addPostType').submit(function(){
    name = $('#posttype-type').val();
    id = $('#posttype-id').val();
    var status = 0;

    var data = {
      action       : 'mf_call',
      type         : 'check_name_post_type',
      post_type    : name,
      post_type_id : id,
      security     : mf_js.mf_nonce_ajax
    }

    jQuery.ajax({
      url: ajaxurl,
      type: 'POST',
      async: false,
      dataType: 'json',
      data: data,
       success: function(response){
         $("#message_post_type").hide();
         if(response.success){
           status = 1;
         }else{
           $('#message_post_type p').empty().append(response.msg);
           $("#message_post_type").show();
           $("#posttype-type").focus();
         }
       }
     });

    if(status)
      return true;

    return false;
  });

  //validation custom group
  $('#addCustomGroup').submit(function(){
    name = $("#custom_group_name").val();
    group_id = $("#custom_group_id").val();
    post_type = $("#custom_group_post_type").val();
    var status = 0;
    if(name){

      var data = {
        action     : 'mf_call',
        type       : 'check_name_custom_group',
        group_name : name,
        post_type  : post_type,
        group_id   : group_id,
        security   : mf_js.mf_nonce_ajax
      }
      jQuery.ajax({
         url: ajaxurl,
         type: 'POST',
         async: false,
         dataType: 'json',
         data: data,
         success: function(response){
           $("#message_mf_error").hide();
           if(response.success){
             status = 1;
           }else{
             $('#message_mf_error p').empty().append(response.msg);
             $("#message_mf_error").show();
             $("#custom_group_name").focus();
           }
         }
       });
    }
    if(status)
      return true;

    return false;

  });

  //validation custom field
  $('#addCustomField').submit(function(){
    name = $("#customfield-name").val();
    field_id = $("#customfield_id").val();
    post_type = $("#customfield-post_type").val();
    var status = 0;
    if(name){
      var data = {
        action     : 'mf_call',
        type       : 'check_name_custom_field',
        field_name : name,
        post_type  : post_type,
        field_id   : field_id,
        security   : mf_js.mf_nonce_ajax
      }

      jQuery.ajax({
         url: ajaxurl,
         type: 'POST',
         async: false,
         dataType: 'json',
         data: data,
         success: function(response){
           $("#message_mf_error").hide();
           if(response.success){
             status = 1;
           }else{
             $('#message_mf_error p').empty().append(response.msg);
             $("#message_mf_error").show();
             $("#customfield-name").focus();
           }
         }
       });
    }
    if(status)
      return true;

    return false;
  });

  //validation custom taxonomy
  $('#addCustomTaxonomy').submit(function(){
    type = $("#custom-taxonomy-type").val();
    taxonomy_id = $("#custom-taxonomy-id").val();
    var status = 0;
    if(type){
      var data = {
        action     : 'mf_call',
        type       : 'check_type_custom_taxonomy',
        taxonomy_type : type,
        taxonomy_id  : taxonomy_id,
        security   : mf_js.mf_nonce_ajax
      }

      jQuery.ajax({
         url: ajaxurl,
         type: 'POST',
         async: false,
         dataType: 'json',
         data: data,
        success: function(response){
           $("#message_mf_error").hide();
           if(response.success){
             status = 1;
           }else{
             $('#message_mf_error p').empty().append(response.msg);
             $("#message_mf_error").show();
             $("#custom-taxonomy-type").focus();
           }
         }
       });
    }
    if(status)
      return true;

    return false;
  });

  //Confirm for display a confirm box
  $('.mf_confirm').click(function() {
    message = $(this).attr('alt');

    return confirm_message(message);
  });

  $('#change-post-type').change(function(){

    post_type = $(this).val();
    url = 'admin.php?page=mf_dispatcher&mf_section=mf_custom_fields&mf_action=fields_list&post_type=';
    window.location= url +  post_type;
  });

  /* change options of custom field */
  $('#customfield-type').change( function(){
    type = $(this).val();
    if(type != ''){
      jQuery.post(
        ajaxurl,
        {
          'action'     :'mf_call',
          'type'       : 'change_custom_field',
          'field_type' : type,
          security     : mf_js.mf_nonce_ajax
        },
        function(response){

          try {
            var response = JSON.parse(response);
            if (!response.success) {
              alert(response.msg);
            }
          } catch(e) {
            // this isn's an error
            $('#options_field_legend').hide();
            $("#options_field").empty().append(response);
          }
        }
      );
    }else{
      $("#options_field_legend").show();
      $("#options_field").empty();
    }
  });

  suggestCustomFieldName();

});

function suggestCustomFieldName(){
  if (jQuery('#customfield-label').length > 0 && jQuery('#customfield-name').length > 0 && jQuery("#customfield-name").val() == '') {
    jQuery('#customfield-label').stringToSlug({
      space:'_',
      getPut:'#customfield-name',
      prefix:jQuery('#name_group_slug').val() + " ",
      replace:/\s?\([^\)]*\)/gi
    });
  }
}

confirm_message = function(message) {

  if( confirm( message ) ){
    return true;
  } else {
    return false;
  }
}

function load_link_in_media_upload(){

  jQuery('a.del-link').each(function(){
    id = jQuery(this).next().attr('id');
    check_repet = jQuery(this).prev().attr('class');
    if(check_repet == "mf_media_upload"){
    }else{
      check = parent.window.mf_field_id;
      if(check == "" || check == undefined ){}else{
        set = parent.window.mf_js.mf_image_media_set;
        jQuery(this).before('<a href="#" class="mf_media_upload button" onclick="mf_set_image_field(\''+id+'\'); return false;">'+set+'</a>');
        jQuery(this).parent().find("input:submit").remove();
      }
    }
  });
}

function mf_set_image_field(id){

  id_element = parent.window.mf_field_id;

  var data = {
    action   : 'mf_call',
    type     : 'get_thumb',
    image_id : id,
    field_id : id_element,
    security : mf_js.mf_nonce_ajax
  }

  jQuery.ajax({
      url: ajaxurl,
      type: 'POST',
      dataType: 'json',
      data: data,
      success: function(response){
        console.log(response);
        if (response.success == false) {
          show_error_image_field(id_element,response.msg);
          return;
        }

        jQuery('#img_thumb_'+response.field_id, top.document).attr('src',response.thumb);
        jQuery('#'+response.field_id, top.document).attr('value',response.image_value);
        jQuery('#edit-'+response.field_id, top.document).attr('href',response.image_path);
        jQuery('#photo_edit_link_'+response.field_id, top.document).show();
        parent.window.mf_field_id = '';
        parent.window.tb_remove();
      }
    });
}

//load button for image media
jQuery(document).ready(function($){
  jQuery('.del-link').each(function(){
    id = jQuery(this).next().attr('id');
    check = parent.window.mf_field_id;
    if (check){
      set = parent.window.mf_js.mf_image_media_set;
      $(this).before('<a href="#"  class="mf_media_upload button" onclick="mf_set_image_field(\''+id+'\'); return false;">'+set+'</a>');
      $(this).parent().find("input:submit").remove();
    }
  });

  $(document).on('click', '.update_field_media_upload',function(){
    window.mf_field_id = jQuery(this).attr('id');
  });

  $('#set-post-thumbnail , #add_image').click( function(){
    window.mf_field_id = '';
  });

  $(document).on('click',".mce_add_image , .mce_add_video , .mce_add_audio , .mce_add_media",function(){

    window.mf_field_id = '';
    var a = this;


	// When a mce button is clicked, we have to hotswap the activeEditor instance, else the image will be inserted into the wrong tinyMCE box (current editor)
	setTimeout( function() {
		tinyMCE.activeEditor = tinyMCE.EditorManager.getInstanceById( a.id.replace('_add_media', '') );
		wpActiveEditor = a.id.replace('_add_media', '');
		}, 500 );

  });

  //focus for visual editor wp 3.8
  $(document).on('click',".mf_media_button_div > .add_media",function(){
    var idElem = $(this).parent('div.mf_media_button_div').attr('id');
    idElem = idElem.replace(/wp-/, "");
    idElem = idElem.replace(/-media-buttons/, "");
    tinyMCE.get(idElem).focus();
  });
});

function mf_use_new_image_gallery(){

  if (typeof wp === 'undefined' || typeof wp.media === 'undefined') return;

  var _custom_media = true;
  _orig_send_attachment = wp.media.editor.send.attachment;

  jQuery('.update_field_media_upload').removeClass('thickbox');
  jQuery(document).on('click', '.update_field_media_upload',function(e){
    window.mf_field_id = jQuery(this).attr('id').replace('thumb_', '');
    _custom_media = true;

    wp.media.editor.send.attachment = function(props, attachment){
      if ( _custom_media ) {
        jQuery("#"+window.mf_field_id).val(attachment.url);
        mf_set_image_field(attachment.id);
      }else{
        return _orig_send_attachment.apply( this, [props, attachment] );
      };
    }

    wp.media.editor.open(jQuery(this));
    return false;
  });

  jQuery('.add_media').on('click', function(){
    _custom_media = false;
  });

}

function show_error_image_field(elem,msg){
    var error_resp = '<span class="mf-upload-error" >'+msg+'</span>';
    jQuery('#response-'+elem).html(error_resp).show();
    setTimeout("remove_resp('#response-"+elem+"')",5000);

  }
