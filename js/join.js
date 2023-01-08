const joininForm = document.querySelector("#joinin-form");
const joininId = joininForm.querySelector("#user-id");
const joininPw= joininForm.querySelector("#user-pw");
const joininPwCheck= joininForm.querySelector("#user-pw-check");

function onJoininSubmit(event) {
  event.preventDefault();
  const userID = joininId.value;
  const userPW = joininPw.value;
  const pwCheck = joininPwCheck.value;
  if (userPW !== pwCheck) {
    alert("Check your password!");
  }
  else {
    localStorage.setItem(userID, userPW);
    alert("Register success!");
    location.href = "/index.html";
  }
}
joininForm.addEventListener("submit", onJoininSubmit);
