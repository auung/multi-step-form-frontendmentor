import { changeFormInfo } from "./changeFormInfo.js";
import { handleChangePage } from "./handleChangePage.js";
import { validateText } from "./validateText.js";

const btnNext = document.getElementsByClassName("btn-next")[0];
const btnBack = document.getElementsByClassName("btn-back")[0];
const btnConfirm = document.getElementsByClassName("btn-confirm")[0];

const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const inputPhone = document.getElementById("phone");

let currentPage = 1;

window.addEventListener("load", () => {
  changeFormInfo(currentPage);
})

btnNext.addEventListener("click", () => {
  console.log({
    name: inputName.value,
    email: inputEmail.value,
    phone: inputPhone.value
  });
  const isValid = validateText({
    name: inputName.value,
    email: inputEmail.value,
    phone: inputPhone.value
  });
  if (isValid) {
    handleChangePage(currentPage, "next");
    currentPage++;
    btnBack.style.display = "initial";
    if (currentPage == 4) {
      btnNext.style.display = "none";
      btnConfirm.style.display = "initial";
    }
  }
})

btnBack.addEventListener("click", () => {
  handleChangePage(currentPage, "back");
  currentPage--;
  btnNext.style.display = "initial";
  btnConfirm.style.display = "none";
  if (currentPage == 1) {
    btnBack.style.display = "none";
  }
})
