const btnNext = document.getElementsByClassName("btn-next");
for (let i = 0; i < btnNext.length; i++) {
  btnNext[i].addEventListener("click", () => {
    handleChangePage("next")
  });
}

const btnBack = document.getElementsByClassName("btn-back");
for (let i = 0; i < btnBack.length; i++) {
  btnBack[i].addEventListener("click", () => {
    handleChangePage("back")
  });
}

function handleChangePage(type) {
  const currentPage = document.getElementsByClassName("current")[0];
  const currentPageId = parseInt(currentPage.id);

  const container = document.getElementsByClassName("container")[0];
  currentPage.classList.remove("current");

  if (type == "next") {
    container.style.left = `${currentPageId * -500}px`;
    document.getElementById(currentPageId + 1).classList.add("current");
  } else if (type == "back") {
    container.style.left = `${(currentPageId - 2) * -500}px`;
    document.getElementById(currentPageId - 1).classList.add("current");
  }
}
