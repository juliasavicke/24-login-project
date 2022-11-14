export function takeInputs(formObj) {
  const el = {
    email: formObj.elements.email.value.trim(),
    password: formObj.elements.password.value.trim(),
  };
  return el;
}

export function goTo(where) {
  window.location.href = where;
}

export function renderHtml(users) {
  const userCardsEl = document.getElementById("userCards");
  users.forEach((user) => {
    const userDivEl = document.createElement("div");
    userDivEl.className = "card userCard";
    userDivEl.innerHTML = `
          <h2>${user.first_name} ${user.last_name}</h2>
          <p>${user.email}</p>
          <img src=${user.avatar}></img>
          `;
    userCardsEl.append(userDivEl);
  });
}
