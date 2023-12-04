import { Form } from "./obj/Form.js";
import { changeFormInfo } from "./func/changeFormInfo.js";
import { getFormData } from "./func/getFormData.js";
import { handleChangePage } from "./func/handleChangePage.js";
import { validateText } from "./func/validateText.js";
import { handleBilling } from "./func/handleBilling.js";

const btnNext = document.getElementsByClassName("btn-next")[0];
const btnBack = document.getElementsByClassName("btn-back")[0];
const btnConfirm = document.getElementsByClassName("btn-confirm")[0];
const btnChange = document.getElementById("btn-change");
const inputBilling = document.getElementById("billing");

let currentPage = 0;
const form = new Form();

window.addEventListener("load", () => {
  changeFormInfo(currentPage);
  handleChangePage(currentPage, "next"); // delete later
})

btnNext.addEventListener("click", () => {
  const { info, plan, addons } = getFormData();

  if (validateText(info)) {
    form.setInfo(info);
    if (currentPage == 0 || plan.type) {
      form.setPlan(plan);
      form.setAddons(addons);
      handleChangePage(++currentPage, form.getBills());
      console.log(currentPage);
    }
  }
})

btnBack.addEventListener("click", () => {
  handleChangePage(--currentPage);
  console.log(currentPage);
})

btnConfirm.addEventListener("click", () => {
  handleChangePage(++currentPage);
})

inputBilling.addEventListener("change", () => {
  handleBilling(inputBilling.checked);
})

btnChange.addEventListener("click", () => {
  handleChangePage(currentPage = 1);
})