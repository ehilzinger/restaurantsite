$(document).ready(function(){
  var date_input=$('input[name="date"]'); //our date input has the name "date"
  var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
  var options={
    format: 'yyyy-mm-dd',
    container: container,
    todayHighlight: true,
    autoclose: true,
  };
  date_input.datepicker(options);
})

function clickedOnAmountOfPersons(){
 let d = document.getElementById("amountofpersonsid").value="1";
}

function checkForm(){
  let f_name = document.getElementById("fname");
  let l_name = document.getElementById("lname");
  let email = document.getElementById("mail");
  let amtpersons =  document.getElementById("amountofpersonsid");
  let date =  document.getElementById("date");

  if(f_name.value=="" | l_name.value=="" | email.value=="" | amtpersons.value=="" | date.value==""){
    popUp();
    return false;
  }
}
