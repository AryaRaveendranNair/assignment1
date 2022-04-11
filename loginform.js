const form = document.getElementsByTagName('form')[0];
var email = document.getElementById("email");
 var mailError = document.getElementById("mailError");
 var password = document.getElementById("password");
 var passwordError = document.getElementById("passwordError");

 function validate() {
   
    var regexp = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,8})(.[a-z]{2,8})?$/;
    if (email.value.trim() === "") {
        mailError.innerHTML="Enter Email Id";
        mailError.style.color="red";
        mailError.style.fontWeight="bold";
        setTimeout(function(){ 
            document.getElementById("mailError").innerHTML = "";
        }, 1000);
        
        if(password.value.trim()===""){
            passwordError.innerHTML="Enter Password";
            passwordError.style.color="red";
            passwordError.style.fontWeight="bold";
            setTimeout(function(){ 
                document.getElementById("passwordError").innerHTML = "";
            }, 1000);
            return false;
    }
    
    }
      else if (!regexp.test(email.value)) {
        mailError.innerHTML="Invalid Email Format";
        mailError.style.color="red";
        mailError.style.fontWeight="bold";
        setTimeout(function(){ 
            document.getElementById("mailError").innerHTML = "";
        }, 1000);
        return false;
    }
    
     else if(password.value.trim()===""){
        passwordError.innerHTML="Enter Password";
        passwordError.style.color="red";
        passwordError.style.fontWeight="bold";
        setTimeout(function(){ 
            document.getElementById("passwordError").innerHTML = "";
        }, 1000);
        return false;
    }
    
    
    else {
       
        return true;
    }
}

form.addEventListener('submit', function (event) {
    // if the email field is valid, we let the form submit
    if (!validate()) {
        // Then we prevent the form from being sent by canceling the event
        event.preventDefault();
    }
});


