$(document).ready(function() {
  <!--Email must be an email -->
  $('#contact_email').on('input', function() {
    var input=$(this);
    var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var is_email=re.test(input.val());
    if(is_email){input.removeClass("invalid").addClass("valid");}
    else{input.removeClass("valid").addClass("invalid");}
  });
  document.getElementById('phoneNumber').addEventListener('keyup',function(evt){
    var phoneNumber = document.getElementById('phoneNumber');
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    phoneNumber.value = phoneFormat(phoneNumber.value);
  });

  document.getElementById('phoneNumber').value = phoneFormat(document.getElementById('phoneNumber').value);
  function numberPressed(evt){
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if(charCode > 31 && (charCode < 48 || charCode > 57) && (charCode < 36 || charCode > 40)){
      return false;
    }
    return true;
  }
  function phoneFormat(input){
    input = input.replace(/\D/g,'');
    input = input.substring(0,10);
    var size = input.length;
    if(size == 0){
      input = input;
    }else if(size < 4){
      input = ''+input;
    }else if(size < 7){
      input = ''+input.substring(0,3)+' - '+input.substring(3,6);
    }else{
      input = ''+input.substring(0,3)+' - '+input.substring(3,6)+' - '+input.substring(6,10);
    }
    return input; 
  }
});

