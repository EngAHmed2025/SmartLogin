let PutyourName = document.getElementById("PutyourName");
let exampleInputEmail1 = document.getElementById("exampleInputEmail1");
let exampleInputPassword1 = document.getElementById("exampleInputPassword1");
let btnLog = document.getElementById("btnLog");
let btnSign = document.getElementById("btnSign");
let btnCall = document.getElementById("btnCall");
let show = document.getElementById("show");
let wrongMassgAlret = document.getElementById("wrongMassg")

let signUpArry = [];

if (localStorage.getItem("users") != null) {
  signUpArry = JSON.parse(localStorage.getItem("users"));
} else {
  signUpArry = [];
}

function signuP() {
  let btnLog = document.getElementById("btnLog");
  if (AllValid() && !isExist()) {
    let signUP = {
      Name: PutyourName.value,
      Email: exampleInputEmail1.value,
      Password: exampleInputPassword1.value,
    };
    signUpArry.push(signUP);
    localStorage.setItem('users',JSON.stringify(signUpArry));
    clearForm();
  } else {
    btnLog.classList.replace("d-block", "d-none");
    console.log("not allowed");
  }
}

function AllValid() {
  if (validUserName() && validUserEmail() && validUserPass()) {
    return true;
  } else {
    return false;
  }
}

function isExist() {
  for (var i = 0; i < signUpArry.length; i++) {
    if (
      signUpArry[i].Name.toLowerCase() == PutyourName.value.toLowerCase() ||
      signUpArry[i].Email.toLowerCase() ==
      exampleInputEmail1.value.toLowerCase()
    ) {
      console.log("Email  Exsit");
      return true;
    }

  }
  console.log("Email is not Exsit");
  return false;
}

function validUserName() {
  var NamePattern = /^[A-Z][a-zA-Z]*$/;
  var userNameAlret = document.getElementById("userNameAlret");
  if (NamePattern.test(PutyourName.value) == true) {
    PutyourName.classList.add("is-valid");
    PutyourName.classList.remove("is-invalid");
    userNameAlret.classList.add("d-none");
    return true;
  } else {
    PutyourName.classList.remove("is-valid");
    PutyourName.classList.add("is-invalid");
    userNameAlret.classList.remove("d-none");
    return false;
  }
}

function validUserEmail() {
  var EmailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  var userEamilAlret = document.getElementById("userEamilAlret");
  if (EmailPattern.test(exampleInputEmail1.value) == true) {
    exampleInputEmail1.classList.add("is-valid");
    exampleInputEmail1.classList.remove("is-invalid");

    return true;
  } else {
    exampleInputEmail1.classList.remove("is-valid");
    exampleInputEmail1.classList.add("is-invalid");
    userEamilAlret.classList.remove("d-none");
    return false;
  }
}

function validUserPass() {
  var PasswordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/;
  var userPassAlret = document.getElementById("userPassAlret");
  if (PasswordPattern.test(exampleInputPassword1.value) == true) {
    exampleInputPassword1.classList.add("is-valid");
    exampleInputPassword1.classList.remove("is-invalid");
    userPassAlret.classList.add("d-none");
    return true;
  } else {
    exampleInputPassword1.classList.remove("is-valid");
    exampleInputPassword1.classList.add("is-invalid");
    userPassAlret.classList.remove("d-none");
    return false;
  }
}

function clearForm() {
  PutyourName.value = "";
  exampleInputEmail1.value = "";
  exampleInputPassword1.value = "";
}

function SiG() {
  PutyourName.classList.add("d-none");
  btnSign.classList.add("d-none");
  btnLog.classList.remove("d-none");
  btnCall.classList.remove("d-none");
  show.classList.add("d-none");
  userNameAlret.classList.add("d-none");

}

function call() {
  btnCall.classList.add("d-none");
  PutyourName.classList.remove("d-none");
  btnSign.classList.remove("d-none");
  btnLog.classList.add("d-none");
  show.classList.remove("d-none");
  wrongMassgAlret.classList.add("d-none")
}


var UserNameSession=JSON.parse(localStorage.getItem("username"))
function logIn() {
  var loginEmailInput = document.getElementById("exampleInputEmail1");
  var loginPasswordInput = document.getElementById("exampleInputPassword1");
 
  for (var i = 0; i < signUpArry.length; i++) {
    if (
      signUpArry[i].Email.toLowerCase() ==
      loginEmailInput.value.toLowerCase() &&
      signUpArry[i].Password.toLowerCase() == loginPasswordInput.value.toLowerCase()
    ) {
      UserNameSession=signUpArry[i].Name
      localStorage.setItem("username",JSON.stringify(UserNameSession))
      window.location.href="hello.html";
      console.log("you are logged in ");
      clearForm()
      return true
    }else{
      wrongMassgAlret.classList.replace("d-none","d-block")
    }
  }
}




function despliyWelcomeUser(){
var usernameContainer = document.getElementById("welcome");
usernameContainer.innerHTML = `Hello ${UserNameSession}`
}



function logout(){
window.location.href="index.html";
console.log("logout");
}


