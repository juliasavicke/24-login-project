console.log("user.js");
import { getFetched } from "./modules/fetch.js";
import { goTo } from "./modules/helper.js";
import { renderHtml } from "./modules/helper.js";

// check localStorage for token
// if not in localStorage - redirect to index.htm

const token = localStorage.getItem("userToken");
const email = localStorage.getItem("userEmail");
const userEl = document.getElementById("user");
userEl.textContent = email;
const logoutEl = document.getElementById("logout");

if (token === null) {
  alert("Please login");
  goTo("index.html");
}

logoutEl.addEventListener("click", () => {
  localStorage.removeItem("userToken");
  localStorage.removeItem("userEmail");
  goTo("index.html");
});

getFetched("https://reqres.in/api/users?page=1").then((data) =>
  renderHtml(data.data)
);
