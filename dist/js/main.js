import { Form } from "./obj/Form.js";
import { changeFormInfo } from "./func/changeFormInfo.js";
import { getFormData } from "./func/getFormData.js";
import { handleChangePage } from "./func/handleChangePage.js";
import { validateText } from "./func/validateText.js";
import { handleBilling } from "./func/handleBilling.js";

const btnNext = document.getElementsByClassName("btn-next")[0];
const btnBack = document.getElementsByClassName("btn-back")[0];
const btnConfirm = document.getElementsByClassName("btn-confirm")[0];
const inputBilling = document.getElementById("billing");

let currentPage = 1;
const form = new Form();

window.addEventListener("load", () => {
  changeFormInfo(currentPage);
  //handleChangePage(currentPage, "next"); // delete later
})

btnNext.addEventListener("click", () => {
  const { info, plan, addons } = getFormData();

  if (validateText(info)) {
    form.setInfo(info);
    form.setPlan(plan);
    form.setAddons(addons);
    handleChangePage(currentPage, "next");
    currentPage++;
    btnBack.style.display = "initial";
    if (currentPage == 4) {
      btnNext.style.display = "none";
      btnConfirm.style.display = "initial";
    }
    console.log(form.getBills());
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

inputBilling.addEventListener("change", () => {
  handleBilling(inputBilling.checked);
})
