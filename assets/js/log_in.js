const inputUsername = document.querySelector("#username");
const inputpassword = document.querySelector("#password");
const btnElement = document.querySelector("#btn");

btnElement.onclick = () => {
  for (var i = 0; i <= users.length; i++) {
    if (
      users[i].username == inputUsername.value &&
      users[i].password == inputpassword.value
    ) {
      window.localStorage.setItem("id", i);
      window.location.href = "/Final-Lesson-LTM/page.html"
      break;
    }
  }
};
