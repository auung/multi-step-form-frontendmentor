import { changeFormInfo } from "./changeFormInfo.js";

function handleChangePage(currentPage, type) {
  const pageContainer = document.getElementsByClassName("container-page")[0];
  const currentNav = document.getElementsByClassName("current-page")[0];

  currentNav.classList.remove("current-page");

  if (type == "next") {
    const newNav = document.getElementsByTagName("li")[currentPage];
    
    pageContainer.style.marginLeft = `${currentPage * -100}%`;
    setTimeout(() => {
      newNav.classList.add("current-page");
      changeFormInfo(currentPage + 1);
    }, 200);
  } else if (type == "back") {
    const newNav = document.getElementsByTagName("li")[currentPage - 2];

    pageContainer.style.marginLeft = `${(currentPage - 2) * -100}%`;
    setTimeout(() => {
      newNav.classList.add("current-page");
      changeFormInfo(currentPage - 1);
    }, 200);
  }
}

export { handleChangePage };