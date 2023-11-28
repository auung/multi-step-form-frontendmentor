import { changeFormInfo } from "./changeFormInfo.js";

function handleChangePage(currentPage) {
  const pageContainer = document.getElementsByClassName("container-page")[0];
  const currentNav = document.getElementsByClassName("current-page")[0];
  const newNav = document.getElementsByTagName("li")[currentPage];
  const actionContainer = document.getElementsByClassName("container-action")[0];
  const btnBack = document.getElementsByClassName("btn-back")[0];
  const btnNext = document.getElementsByClassName("btn-next")[0];
  const btnConfirm = document.getElementsByClassName("btn-confirm")[0];

  currentNav.classList.remove("current-page");
  actionContainer.classList.toggle("multi-btn", currentPage > 0);
  pageContainer.setAttribute("data-current-page", currentPage.toString());

  btnBack.classList.toggle("show", currentPage > 0);
  btnNext.classList.toggle("hide", currentPage == 3);
  btnConfirm.classList.toggle("show", currentPage == 3);

  setTimeout(() => {
    newNav.classList.add("current-page");
    changeFormInfo(currentPage);
  }, 200);
}

export { handleChangePage };