const addBookBtn = document.querySelector("#addBookBtn");
const form__div = document.querySelector(".form__div");
const form = document.querySelector("#form")

// Opening the pop up window
addBookBtn.addEventListener('click', () => {
  form__div.style.display = "flex";
})

// Listen for outside click
window.addEventListener("click", (e) => {
  if (e.target == form__div) {
    form__div.style.display = "none";
  }
})