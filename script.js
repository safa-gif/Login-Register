function validateForm()  {
var usn = document.getElementById("firstname").value;
var usln = document.getElementById("userlastname").value;
var usp = document.getElementById("paswd").value;
var usre = dociment.GetEelementById("usermail").value;
var m = "hello you girl";
console.log(m);
if((usn== "") &&(usln == "")) {
            alert("Please enter your Full Name");
             return false;
             }
             
if   ((usre.indexOf('@')== -1) && (usre.indexOf('.')== -1)){
            alert("Please enter a valid emai adresse");
            return false;
            }
if(usp == "") {
             alert('Please enter a password');
             return false;
            }

             alert("All datas are valid!, send it to the server!")

             return true;
         }