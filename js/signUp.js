var users = [];

function getData() {
  var user = {};
  user.pic = $("#profile-photo").val();
  user.name = $("#user-name").val();
  user.password = $("#password").val();
  user.c_password = $("#c-password").val();
  user.dob = $("#datepicker").val();
  user.email = $("#email").val();
  user.number = $("#number").val();
  user.village = $("#village").val();
  user.mandal = $("#mandal").val();
  user.district = $("#district").val();
  user.post_code = $("#post-code").val();
  user.conditions = document.getElementById("conditions").checked;
  console.log(user.gender);
  console.log(user);

  if (user.password.length <= 6 && user.password != user.c_password) {
    alert("please check once");
  }
  if (user.pic == "") {
    var proPicError = document.querySelector(".propic-error");
    proPicError.style.display = "block";
  }
  if (user.name == "") {
    var nameError = document.querySelector(".name-error");
    nameError.style.display = "block";
  }
  if (user.password == "") {
    var passwordError = document.querySelector(".password-error");
    passwordError.style.display = "block";
  }
  if (user.c_password == "") {
    var cPasswordError = document.querySelector(".c-password-error");
    cPasswordError.style.display = "block";
  }
  if (user.dob == "") {
    var dobError = document.querySelector(".dob-error");
    dobError.style.display = "block";
  }
  if (user.email == "") {
    var emailError = document.querySelector(".email-error");
    emailError.style.display = "block";
  }
  if (user.gender == "") {
    var genderError = document.querySelector(".gender-error");
    genderError.style.display = "block";
  }
  if (user.number == "") {
    var numberError = document.querySelector(".number-error");
    numberError.style.display = "block";
  }
  if (user.village == "") {
    var villageError = document.querySelector(".village-error");
    villageError.style.display = "block";
  }
  if (user.mandal == "") {
    var mandalError = document.querySelector(".mandal-error");
    mandalError.style.display = "block";
  }
  if (user.district == "") {
    var districtError = document.querySelector(".district-error");
    districtError.style.display = "block";
  }
  if (user.post_code == "") {
    var postError = document.querySelector(".post-code-error");
    postError.style.display = "block";
  }
  if (user.conditions == false) {
    var conditionsError = document.querySelector(".conditions-error");
    conditionsError.style.display = "block";
  }
  if (user != "") {
    location.replace("../assets/user.html");
  }
}

function genderData() {
  user.gender = $("#gender").val();
}

function signUpSubmit() {
  location.replace("../assets/signUp.html");
}
$(document).ready(() => {
  $("#datepicker").datepicker({
    dateFormat: "dd-mm-yy",
    changeMonth: true,
    changeYear: true,
  });
});
