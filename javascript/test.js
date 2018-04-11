<script type="text/javascript">
  function FormValidation(){
    var fn=document.getElementById('fname').value;
    if(fn == ""){
        alert('Please Enter Name');
        document.getElementById('fname').style.borderColor = "red";
        return false;
    }
    var fn=document.getElementById('email').value;
    if(fn == ""){
        alert('Please Enter Email');
        document.getElementById('email').style.borderColor = "red";
        return false;
    }
    var fn=document.getElementById('pwd').value;
    if(fn == ""){
        alert('Please Enter Password');
        document.getElementById('pwd').style.borderColor = "red";
        return false;
    }
    var fn=document.getElementById('cpwd').value;
    if(fn == ""){
        alert('Please Enter Confirmation Password');
        document.getElementById('cpwd').style.borderColor = "red";
        return false;
    }
}
</script>
