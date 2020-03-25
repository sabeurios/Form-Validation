const form=document.getElementById("form")
const firstName=document.getElementById("firstName")
const lastName=document.getElementById("lastName")
const adress=document.getElementById("adress")
const email=document.getElementById("email")
const password=document.getElementById("password")
const comments=document.getElementById("comments")

form.addEventListener('submit', e => {
	e.preventDefault();
	checkInputs();
});

function checkInputs(){

   const firstNameValue=firstName.value.trim()
   const lastNameValue=lastName.value.trim()
   const adressValue=adress.value.trim()
   const emailValue=email.value.trim()
   const passwordValue=password.value.trim()
   const commentsValue=comments.value.trim()

  if(firstNameValue===''){
     alert("Please enter your first name")
   }
  if(lastNameValue===''){
    alert("Please enter your last name")
  }
  if(adressValue===''){
    alert("Please enter your adress")
  }
  if(emailValue===''){
    alert("Please enter your email")
  }
  else if (!isEmail(emailValue)) {
		alert('Not a valid email');
	}
  if(passwordValue===''){
    alert("Please enter your password")
  }
  else if (!isPassword(passwordValue)) {
		alert('Not a valid password');
	}
  if(commentsValue===''){
    alert("Please enter your comments")
  }
 }
 
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isPassword(password){
  var pswd=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,99}$/;
  if(form.password.value.length < 8) {
    alert("Error: Password must contain at least 8 characters!");
    form.password.focus();
    return false;
  }
  var number = /[0-9]/;
  if(!number.test(form.password.value)) {
    alert("Error: password must contain at least one number (0-9)!");
    form.password.focus();
    return false;
  }
  var upperLetter = /[A-Z]/;
  if(!upperLetter.test(form.pwd1.value)) {
  alert("Error: password must contain at least one uppercase  letter (a-z)!");
  form.pwd1.focus();
  return false;
 }
}