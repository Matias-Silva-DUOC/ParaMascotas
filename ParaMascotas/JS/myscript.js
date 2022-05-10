
  // agrega datos del registro a una tabla
  function agregarTabla() {
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;
    var app = document.getElementById("apellidos").value;
    var email = document.getElementById("email").value;
    var table = document.getElementById("bodyTabla1");
    var tab = document.getElementById("tabla1").rows.length; 
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = user + " " + app;
    cell2.innerHTML = email;
    cell3.innerHTML = pass;
    cell4.innerHTML = '<button type="button" class="btn btn-danger" onclick="deleteRow(this)">Eliminar</button>';
    if(tab>0){
        document.getElementById("tabla1").style.visibility="visible";
    }
}

function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("tabla1").deleteRow(i);
    
    var tab = document.getElementById("bodyTabla1").rows.length; 
    if(tab<=0){
        document.getElementById("tabla1").style.visibility="hidden";
    }
}  

//valida email

  function validateEmail(emailId)
  {
  var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if(emailId.value.match(mailformat))
  {
  document.registro.email.focus();
  return true;
  }
  else
  {
  alert("ERROR: INGRESE UN E-MAIL VÁLIDO");
  document.registro.email.focus();
  document.getElementById("tabla1").deleteRow(1);
  //document.getElementById("tabla1").style.visibility="hidden";
  return false;
  
  }
  }    
  
  
