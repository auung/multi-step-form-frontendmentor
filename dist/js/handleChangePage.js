import { changeFormInfo } from "./changeFormInfo.js";

function handleChangePage(currentPage, type) {
  const pageContainer = document.getElementsByClassName("container-page")[0];

  if (type == "next") {
    pageContainer.style.left = `${currentPage * -500}px`;
    changeFormInfo(currentPage + 1);
  } else if (type == "back") {
    pageContainer.style.left = `${(currentPage - 2) * -500}px`;
    changeFormInfo(currentPage - 1);
  }
}

export { handleChangePage };