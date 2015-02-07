//= require jquery.1.11.0.min.js
//= require bootstrap.min.js

$(document).ready(function(){


  $('.subscribe-form button[type="submit"]').click(function(e){
    var kol_id =$(e.target).attr('data-kol_id');
    var form_id =$(e.target).attr('data-form_id');
    $('#kol-id-'+kol_id +'-'+form_id+' .error').html('');
    $('.kol-social-id').val(getURLParameter('social_id'));
    console.log('social_id', $('#kol-social-id').val())
    $.ajax({
      url: 'https://api.kickofflabs.com/v1/'+kol_id+'/subscribe',
      data: $('#kol-id-'+kol_id+'-'+form_id).serialize(),
      dataType: 'jsonp',
      jsonp: 'jsonp',
      jsonpCallback: 'subscribe_callback',
      timeout: 2000,
      error: function() {
        $('#kol-id-'+kol_id +'-'+form_id+' .error').html('<p>There was a problem with your email address!</p>')
      }
    });
    e.preventDefault();

  });

});

function getURLParameter(name) {
  var res =  decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
  if (res && res[res.length-1]=="/")
    res = res.slice(0, -1);
  return res;
}

function subscribe_callback(data){
  console.log(data);
  var kol_id =data.list_id;
  var form_id=data.custom_fields.form_id;
  var form_sel="#kol-id-"+kol_id+"-"+form_id;
  var title=$(form_sel).attr('data-succes_title');
  var text=$(form_sel).attr('data-success_msg');
  var influence = data.influence.direct;
  var social_msg=escape($(form_sel).attr('data-social_msg'));
  var social_url=escape('http://basilic.io/?social_id='+data.social_id);
  var twitter_url = "https://twitter.com/share?url="+social_url+"&amp;text="+social_msg;
  var linkedin_url="https://www.linkedin.com/shareArticle?mini=true&amp;url="+social_url;
  var google_url="https://plusone.google.com/_/+1/confirm?hl=en&url="+social_url+"&title="+social_msg;
  var mail_url="mailto:?subject="+social_msg+"&body="+social_url;
  console.log(twitter_url);
  $('#kol-id-'+kol_id+"-"+form_id).html(
    '<div class="success">'
    +'<h3>'+title+'</h3>'
    +'<p>'+text+'</p>'
    +'<a id="referal" href="http://basilic.io/?social_id='+data.social_id+'">http://basilic.io/?social_id='+data.social_id+'</a>'
    +'<p class="social">'
    + '<a title="Twitter" class="fa fa-twitter" href="'+twitter_url+'" data-url="'+twitter_url+'" data-width="800" data-height="300" target="_blank"></a>'
    +'<a title="LinkedIn" class="fa fa-linkedin" href="'+linkedin_url+'" data-url="'+linkedin_url+'" data-width="800" data-height="400" target="_blank"></a>'
    +'<a class="fa fa-google-plus" href="'+google_url+'" data-url="'+google_url+'" data-width="800" data-height="400" target="_blank"></a>'
    +'<a class="fa fa-envelope" href="'+mail_url+'"></a>'
    +'</p><p class="influence">Influenced so far: '+influence+'</p></div>'
  )
}
