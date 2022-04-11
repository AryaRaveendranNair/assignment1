const form = document.getElementsByTagName('form')[0];
var fname = document.getElementById("fname");
var fnameError = document.getElementById("fnameError");
var lname = document.getElementById("lname");
var lnameError = document.getElementById("lnameError");
var email = document.getElementById("email");
 var mailError = document.getElementById("mailError");
 var phonenumber = document.getElementById("phonenumber");
 var numberError = document.getElementById("numberError");
 var password = document.getElementById("password");
 var passwordError = document.getElementById("passwordError");
 var confirmpassword = document.getElementById("confirmpassword");
var confirmpasswordError = document.getElementById("confirmpasswordError");

function validate() {
    
    if (fname.value.trim() === ""){
                fnameError.innerHTML="Enter First Name";
                fnameError.style.color="red";
                fnameError.style.fontWeight="bold";
                setTimeout(function(){ 
                    document.getElementById("fnameError").innerHTML = "";
                }, 1500);
               
                if(lname.value.trim()==="") {
                  lnameError.innerHTML="Enter last Name";
                 lnameError.style.color="red";
                 lnameError.style.fontWeight="bold";
                 setTimeout(function(){ 
                    document.getElementById("lnameError").innerHTML = "";
                }, 1500);

                 if (email.value.trim() === "") {
                    mailError.innerHTML="Enter Email Id";
                     mailError.style.color="red";
                     mailError.style.fontWeight="bold";
                     setTimeout(function(){ 
                        document.getElementById("mailError").innerHTML = "";
                    }, 1500);

                     if (phonenumber.value.trim()===""){
                        numberError.innerHTML="Enter Phone number";
                        numberError.style.color="red";
                         numberError.style.fontWeight="bold";
                         setTimeout(function(){ 
                            document.getElementById("numberError").innerHTML = "";
                        }, 1500);

                         if (password.value.trim()===""){
                            passwordError.innerHTML="Enter Password";
                             passwordError.style.color="red";
                             passwordError.style.fontWeight="bold";
                             setTimeout(function(){ 
                                document.getElementById("passwordError").innerHTML = "";
                            }, 1500);
    
                                 if (confirmpassword.value.trim()===""){
                                    confirmpasswordError.innerHTML="Enter Confirm Password";
                                    confirmpasswordError.style.color="red";
                                     confirmpasswordError.style.fontWeight="bold";
                                     setTimeout(function(){ 
                                        document.getElementById("confirmpasswordError").innerHTML = "";
                                    }, 1500);
            
               
                }
               }  
             }
            }
          }
          return false;
         }
        
         if(lname.value.trim()==="") {
            lnameError.innerHTML="Enter last Name";
            lnameError.style.color="red";
            lnameError.style.fontWeight="bold";
            setTimeout(function(){ 
                document.getElementById("lnameError").innerHTML = "";
            }, 1500);
            return false;
            }

         
           var regexp = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,8})(.[a-z]{2,8})?$/; 
          
           if (email.value.trim() === "") {
            mailError.innerHTML="Enter Email Id";
             mailError.style.color="red";
             mailError.style.fontWeight="bold";
             setTimeout(function(){ 
                document.getElementById("mailError").innerHTML = "";
            }, 1500);
            return false;}
        
                else  if (!regexp.test(email.value)){
                 mailError.innerHTML="Invalid Email Format";
                 mailError.style.color="red";
                 mailError.style.fontWeight="bold";
                 setTimeout(function(){ 
                    document.getElementById("mailError").innerHTML = "";
                }, 1500);
                return false;}
                 

            var numregexp1 = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
            
            if (phonenumber.value.trim()===""){
                numberError.innerHTML="Enter Phone number";
                numberError.style.color="red";
                 numberError.style.fontWeight="bold";
                 setTimeout(function(){ 
                    document.getElementById("numberError").innerHTML = "";
                }, 1500);
                return false;}
            
            
            
             else if(!numregexp1.test(phonenumber.value)){
                numberError.innerHTML="Invalid Number Format. Please check!";
                numberError.style.color="purple";
                 numberError.style.fontWeight="bold";
                 setTimeout(function(){ 
                    document.getElementById("numberError").innerHTML = "";
                }, 1500);
                return false;}
            

                var passreg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
            if (password.value.trim()===""){
                passwordError.innerHTML="Enter Password";
                 passwordError.style.color="red";
                 passwordError.style.fontWeight="bold";
                 setTimeout(function(){ 
                    document.getElementById("passwordError").innerHTML = "";
                }, 1500);
                return false;}

                  else if(!passreg.test(password.value)){
                    passwordError.innerHTML="Should contain Minimum 8 characters, at least one uppercase, and one lower case, must contain at least one number";
                    passwordError.style.color="red";
                    passwordError.style.fontWeight="bold";
                    setTimeout(function(){ 
                       document.getElementById("passwordError").innerHTML = "";
                   }, 2500);
                   return false; }
                                     
                 

                 if (confirmpassword.value.trim()===""){
                    confirmpasswordError.innerHTML="Enter Confirm Password";
                    confirmpasswordError.style.color="red";
                     confirmpasswordError.style.fontWeight="bold";
                     setTimeout(function(){ 
                        document.getElementById("confirmpasswordError").innerHTML = "";
                    }, 1500);
                    return false;} 
                     
                 if(password.value.trim() != confirmpassword.value.trim()){
                     confirmpasswordError.innerHTML="Password not matching. Try again!";
                     confirmpasswordError.style.color="red";
                     confirmpasswordError.style.fontWeight="bold";
                     setTimeout(function(){ 
                        document.getElementById("confirmpasswordError").innerHTML = "";
                    }, 1500);
                    return false;} 
        else {
            return true;
        }
      


    
    }
 

var togglePassword = document.querySelector("#togglePassword");
var togglePassword1=document.querySelector("#togglePassword1");
var password = document.querySelector("#password");
var confirmpassword= document.querySelector("#confirmpassword");
togglePassword.addEventListener("click", function () {
    // toggle the type attribute
    const type = password.getAttribute("type") === "password" ? "text" : "password";
   password.setAttribute("type", type);
   
   
   // toggle the icon
    this.classList.toggle("bi-eye");
});
togglePassword1.addEventListener("click", function () {
const type = confirmpassword.getAttribute("type") === "confirmpassword" ? "text" : "confirmpassword";
   confirmpassword.setAttribute("type", type);
   this.classList.toggle("bi-eye");
});
form.addEventListener('submit', function (event) {
    // if the email field is valid, we let the form submit
    if (!validate()) {
        // Then we prevent the form from being sent by canceling the event
        event.preventDefault();
    }
});


//strenth bar//

let state = false;
let pass = document.getElementById("password");
let passwordStrength = document.getElementById("password-strength");
let lowUpperCase = document.querySelector(".low-upper-case i");
let number = document.querySelector(".one-number i");
let specialChar = document.querySelector(".one-special-char i");
let eightChar = document.querySelector(".eight-character i");

password.addEventListener("keyup", function(){
    let pass = document.getElementById("password").value;
    checkStrength(pass);
});

function toggle(){
    if(state){
        document.getElementById("password").setAttribute("type","password");
        state = false;
    }else{
        document.getElementById("password").setAttribute("type","text")
        state = true;
    }
}



function checkStrength(password) {
    let strength = 0;

    //If password contains both lower and uppercase characters
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
        strength += 1;
        lowUpperCase.classList.remove('fa-circle');
        lowUpperCase.classList.add('fa-check');
    } else {
        lowUpperCase.classList.add('fa-circle');
        lowUpperCase.classList.remove('fa-check');
    }
    //If it has numbers and characters
    if (password.match(/([0-9])/)) {
        strength += 1;
        number.classList.remove('fa-circle');
        number.classList.add('fa-check');
    } else {
        number.classList.add('fa-circle');
        number.classList.remove('fa-check');
    }
    //If it has one special character
    if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
        strength += 1;
        specialChar.classList.remove('fa-circle');
        specialChar.classList.add('fa-check');
    } else {
        specialChar.classList.add('fa-circle');
        specialChar.classList.remove('fa-check');
    }
    //If password is greater than 7
    if (password.length > 7) {
        strength += 1;
        eightChar.classList.remove('fa-circle');
        eightChar.classList.add('fa-check');
    } else {
        eightChar.classList.add('fa-circle');
        eightChar.classList.remove('fa-check');   
    }

    // If value is less than 2
    if (strength < 2) {
        passwordStrength.classList.remove('progress-bar-warning');
        passwordStrength.classList.remove('progress-bar-success');
        passwordStrength.classList.add('progress-bar-danger');
        passwordStrength.style = 'width: 10%';
    } else if (strength == 3) {
        passwordStrength.classList.remove('progress-bar-success');
        passwordStrength.classList.remove('progress-bar-danger');
        passwordStrength.classList.add('progress-bar-warning');
        passwordStrength.style = 'width: 60%';
    } else if (strength == 4) {
        passwordStrength.classList.remove('progress-bar-warning');
        passwordStrength.classList.remove('progress-bar-danger');
        passwordStrength.classList.add('progress-bar-success');
        passwordStrength.style = 'width: 100%';
    }
}