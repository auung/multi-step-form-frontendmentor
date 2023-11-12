import { changeFormInfo } from "./changeFormInfo.js";
import { handleChangePage } from "./handleChangePage.js";

const btnNext = document.getElementsByClassName("btn-next")[0];
const btnBack = document.getElementsByClassName("btn-back")[0];
const btnConfirm = document.getElementsByClassName("btn-confirm")[0];

let currentPage = 1;

window.addEventListener("load", () => {
  changeFormInfo(currentPage);
})

btnNext.addEventListener("click", () => {
  handleChangePage(currentPage, "next");
  currentPage++;
  btnBack.style.display = "initial";
  if (currentPage == 4) {
    btnNext.style.display = "none";
    btnConfirm.style.display = "initial";
  }
});

btnBack.addEventListener("click", () => {
  handleChangePage(currentPage, "back");
  currentPage--;
  btnNext.style.display = "initial";
  btnConfirm.style.display = "none";
  if (currentPage == 1) {
    
    btnBack.style.display = "none";
  }
});
