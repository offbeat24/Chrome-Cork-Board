const loginForm = document.querySelector("#login-form");
const loginID = loginForm.querySelector("#user-id");
const loginPW = loginForm.querySelector("#user-pw");
const joinBtn = document.querySelector("#join");
function onLoginSubmit(event) {
  event.preventDefault();
  const userID = loginID.value;
  const userPW = loginPW.value;

  if (localStorage.getItem(userID) === userPW) {
    localStorage.setItem("loggedInID", userID);
    location.href = "/html/board.html";
  }
  else {
    alert("Failed!");
  }
}

function joinBtnEvent() {
  location.href = "/html/joinIn.html";
}

loginForm.addEventListener("submit", onLoginSubmit);
joinBtn.addEventListener("click",joinBtnEvent);
