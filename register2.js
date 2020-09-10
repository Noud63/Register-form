//Register and validation 
const username = document.myForm.Name;
const adress = document.myForm.Adress;
const city = document.myForm.City;
const country = document.myForm.Country;
const email = document.myForm.Email;
const password = document.myForm.Password;
const confirmPassword = document.myForm.Confirmpassword;

const form = document.getElementById('valform');

const check = document.getElementById('check');
const check2 = document.getElementById('check2');
const check3 = document.getElementById('check3');
const check4 = document.getElementById('check4');
const check5 = document.getElementById('check5');
const check6 = document.getElementById('check6');

const nameError = document.getElementById('name_error');
const adressError = document.getElementById('adress_error');
const cityError = document.getElementById('city_error');
const countryError = document.getElementById('country_error');
const emailError = document.getElementById('email_error');
const passwordError = document.getElementById('password_error');
const confirmPasswordError = document.getElementById('confirmpassword_error');

const icon = '<i class="fa fa-check" style="font-size:25px; color:green;"></i>';
const icon2 = '<i class="fa fa-times-circle" style="font-size:25px; color:red;"></i>'; 
const icon3 = '<img src="icon3.png" style="width:25px; height: 25px;" id="cross">'; 
const icon4 = '<img src="icon4.png" style="width:22px; height: 22px;" id="green">';
const emailFilter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//EventListeners
const btn = document.querySelector('.btn');
btn.addEventListener('click', validate);

document.addEventListener('keydown', function(event){
   if(event.keyCode === 13){
      validate()
   }
});

// Toggle password visibility
document.querySelector('.fa-eye-slash').addEventListener('click', function(event){
     const password = document.querySelector('.pass');

         if(password.type === "password"){
            password.type = "text"
            document.querySelector('.fa-eye-slash').classList.toggle('fa-eye');  
            document.querySelector('.fa-eye-slash').classList.toggle('fa-eye-slash');
         }else{
            password.type = "password"
            document.querySelector('.fa-eye').classList.toggle('fa-eye-slash'); 
            document.querySelector('.fa-eye').classList.toggle('fa-eye'); 
         }
})

//Validate password
function validatePassword(str) {
   const passwordVal =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
   if(password.type === "password" || password.type === "text") {
   return passwordVal.test(str);
   }
}

// Validate address (dutch, name + number)
function validateAddress(address) {
   var regex = /^([1-9][e][\s])*([a-zA-Z]+(([\.][\s])|([\s]))?)+[1-9][0-9]*(([-][1-9][0-9]*)|([\s]?[a-zA-Z]+))?$/i;
   return regex.test(address);
}

function validate() {

//Username input
   if(username.value === "" || username.value.length < 2 ){
      check.innerHTML = icon3;
      username.style.border = "2px solid red"
      nameError.textContent = "Fill in your name!"
      username.focus();
      return false;
   }else{
      check.innerHTML = icon4;
      username.style.border = "1px solid rgb(165, 136, 7)";
      nameError.textContent = ""
      adress.focus();
   }
  
   // Adress input
   if(adress.value === ""){
      check2.innerHTML = icon3;
      adress.style.border = "2px solid red"
      adressError.textContent = "Fill in your adress!"
      return false;

   }else if(!validateAddress(adress.value)){
      adress.style.border = "1px solid rgb(165, 136, 7)";
      adressError.textContent = "Not a valid address!"
      return false;
   }else if(validateAddress(adress.value)){
      check2.innerHTML = icon4;
      adress.style.border = "1px solid rgb(165, 136, 7)";
      adressError.textContent = ""
      city.focus();
   }

   // City input
   if(city.value === ""){
      check3.innerHTML = icon3;
      city.style.border = "2px solid red"
      cityError.textContent = "Fill in the name of the city you live in!";
      return false;
   }else{
      check3.innerHTML = icon4;
      city.style.border = "1px solid rgb(165, 136, 7)"
      cityError.textContent = ""
      country.focus();
   }
   
   // Choose country
   if(country.value === "0"){
      check4.innerHTML = icon3;
      country.style.border = "2px solid red"
      countryError.textContent = "Select the name of the country you live in!";
      return false;
   }else{
      check4.innerHTML = icon4;
      country.style.border ="1px solid rgb(165, 136, 7)"
      countryError.textContent = ""
      email.focus(); 
   }

   // E-mail input

   if(email.value === ""){
      check5.innerHTML = icon3;
      email.style.border = "2px solid red";
      emailError.textContent = "Please enter e-mail address!";
      return false;

   }else if (!emailFilter.test(email.value)) {
      check5.innerHTML = icon3;
      email.style.border = "2px solid red";
      emailError.textContent = "Invalid e-mail adress!";
      return false;

   }else if (emailFilter.test(email.value)) {
      check5.innerHTML = icon4;
      email.style.border = "1px solid rgb(165, 136, 7)";
      emailError.textContent = ""
      password.focus();
   }

   // Password validation
   if(password.value === ""){
      password.style.border = "2px solid red";
      passwordError.textContent = "Password is empty!";
      return false

   }else if(!validatePassword(password.value)){
      password.style.border = "2px solid red";
      passwordError.textContent = "Invalid password!";
      return false
   }else if(validatePassword(password.value)){
      password.style.border = "1px solid rgb(165, 136, 7)";
      passwordError.textContent = "";
      confirmPassword.focus();
   }

   // Confirm password
   if(confirmPassword.value === ""){
      check6.innerHTML = icon3;
      confirmPassword.style.border = "2px solid red";
      confirmPasswordError.textContent = "Confirm password is empty!";
      return false
   }else if(!validatePassword(confirmPassword.value)){
      check6.innerHTML = icon3;
      confirmPassword.style.border = "2px solid red";
      confirmPasswordError.textContent = "Passwords don't match!";
      return false;
   }else if(password.value === confirmPassword.value){
      check6.innerHTML = icon4;
      confirmPassword.style.border = "1px solid rgb(165, 136, 7)";
      confirmPasswordError.textContent = "";
   }
}

// Get the modal
var modal = document.getElementById("myModal");

// When the user clicks the button, open the modal 
function showPopup() {                        //method="POST" action="javascript:showPopup();"
  modal.style.display = "block";
  const checkedElements = document.querySelectorAll('.input, .check')
  checkedElements.forEach( el => {
     el.value = ""
     el.innerHTML = ""
  })
}

// When the user clicks on (x), close the modal
document.querySelector('.close').onclick = function() {
   modal.style.display = "none";
 }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}