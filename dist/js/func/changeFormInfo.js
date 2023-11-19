import { Page } from "../obj/Page.js";

function changeFormInfo(currentPage) {
  const heading = document.getElementsByTagName("h1")[0];
  const description = document.getElementsByClassName("description")[0];

  const page = new Page();
  const pageData = page.getPage(currentPage);

  heading.innerText = pageData.heading;
  description.innerText = pageData.description;
}

export { changeFormInfo };