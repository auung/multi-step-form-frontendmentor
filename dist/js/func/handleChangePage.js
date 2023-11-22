import { changeFormInfo } from "./changeFormInfo.js";

function handleChangePage(currentPage, type) {
  const pageContainer = document.getElementsByClassName("container-page")[0];

  if (type == "next") {
    pageContainer.style.marginLeft = `${currentPage * -100}%`;
    setTimeout(() => {
      changeFormInfo(currentPage + 1);
    }, 200);
  } else if (type == "back") {
    pageContainer.style.marginLeft = `${(currentPage - 2) * -100}%`;
    setTimeout(() => {
      changeFormInfo(currentPage - 1);
    }, 200);
  }
}

export { handleChangePage };