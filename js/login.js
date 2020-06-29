const show = document.getElementById("hide1");
const hide = document.getElementById("hide2");
//Show and Hide the Password
function showHide() {
  const currentType = $("#pwd").attr("type");
  if (currentType == "password") {
    $("#pwd").attr("type", "text");
    show.style.display = "none";
    hide.style.display = "block";
  } else {
    $("#pwd").attr("type", "password");
    show.style.display = "block";
    hide.style.display = "none";
  }
}

//function
function loginSubmit() {
  const uname = $("#name").val();
  const password = $("#pwd").val();

  if (uname == "") {
    let userError = document.querySelector(".user-name-error");
    userError.style.display = "block";
  }
  if (password == "") {
    let passwordError = document.querySelector(".password-error");
    passwordError.style.display = "block";
  }

  if (uname == "admin" && password == "india") {
    location.replace("./assets/user.html");
  } else {
    // alert("User not found, please login again");
    cl();
  }
}
function cl() {
  var pop = document.querySelector("#pop-up-block");
  pop.style.display = "block";
  var covering = document.querySelector(".main-pop");
  covering.style.display = "block";
}
function ml() {
  var pop = document.querySelector("#pop-up-block");
  pop.style.display = "none";
  var covering = document.querySelector(".main-pop");
  covering.style.display = "none";
}
