$(document).ready(function(){
$(window).scroll(function() {
  if($(this).scrollTop() > 50)  
  {
    $('.opaque-navbar').addClass('opaque');
  } else {
    $('.opaque-navbar').removeClass('opaque');
  }
});

$('#nav').affix({
  offset: {
    top: $('header').height()-$('#nav').height()
  }
});	

$('body').scrollspy({ target: '#nav' })


$('.scroll-top').click(function(){
  $('body,html').animate({scrollTop:0},1000);
})

$('#nav .navbar-nav li>a').click(function(){
  var link = $(this).attr('href');
  var posi = $(link).offset().top+20;
  $('body,html').animate({scrollTop:posi},700);
})


//   $('body,html').animate({
//     scrollTop: 0
//   }, 800);
//   $('.btn-go-to-top').click(function () {
//     $('body,html').animate({
//       scrollTop: 0
//     }, 800);
//     return false;
//   });



  $('body,html').animate({
    scrollDown: 0
  }, 800);
  $('#btn-go-to-down').click(function () {
    $('body,html').animate({
      scrollDown: 0
    }, 800);
    return false;
  });



  $('#hit').click(function() {
    var text = $('.form-control').val();
    $('#displaysubs').append('<div>' + text + '</div>');
  });
  // $('#contact_email').on('input', function() {
  //   var input=$(this);
  //   var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  //   var is_email=re.test(input.val());
  //   if(is_email){input.removeClass("invalid").addClass("valid");}
  //   else{input.removeClass("valid").addClass("invalid");}
  // });

    $('#hitt').click(function(){
    var fn=document.getElementById('vald').value;
    if(fn == ""){
        alert('Please Enter your Email to Subscribe');
        document.getElementById('vald').style.borderColor = "red";
        return false;
      }
    });


});