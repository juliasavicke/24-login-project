import { getFetched } from "./modules/fetch.js";
import { sendPost } from "./modules/fetch.js";
import { takeInputs } from "./modules/helper.js";
import { goTo } from "./modules/helper.js";
import feedback from "./modules/feedback.js";
console.log("main.js");

const loginForm = document.forms[0];

// get all users from https://reqres.in/api/users?page=1

getFetched("https://reqres.in/api/users?page=1").then((data) =>
  console.log("data ===", data.data)
);

const age = 45;
console.log("age ===", age);
// window.myAge = 45;

//collect data from form

loginForm.addEventListener("submit", loginHandler);

async function loginHandler(event) {
  event.preventDefault();
  const loginObj = takeInputs(loginForm);
  const sendResult = await sendPost("https://reqres.in/api/login", loginObj);
  console.log("sendResult ===", sendResult);
  if (sendResult.error) {
    console.warn("klaida", sendResult.error);
    feedback.fail(`Klaida: ${sendResult.error}`);
  } else {
    console.log("sekme");
    // user: eve.holt@reqres.in
    // pass: cityslicka
    // save token
    localStorage.setItem("userToken", sendResult.token);
    localStorage.setItem("userEmail", loginObj.email);

    // navigate to users-only.html
    feedback.success(`Login success, welcome ${loginObj.email}`);
    setTimeout(() => {
      goTo("users-only.html");
    }, 5000);
  }
}
