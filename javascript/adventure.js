$(document).ready(function(){
   var $input = $("#txt");
    $input.val(0);
     $(".fa-thumbs-up").click(function(){ 
      if ($(this).addClass('fa-thumbs-up')) $input.val(parseInt($input.val())+1); 
       else if ($input.val()>=1) 
        $input.val(parseInt($input.val())-1);
        $(this).hide();
        $(".fa-thumbs-down").show();
    });
     $(".fa-thumbs-down").click(function(){ 
      if ($(this).addClass('fa-thumbs-down')) $input.val(parseInt($input.val())-1); 
       else if ($input.val()>=1) 
        $input.val(parseInt($input.val())-1);
        $(this).hide();
        $(".fa-thumbs-down").show();
    });
    });
    
