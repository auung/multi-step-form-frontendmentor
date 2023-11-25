function handleBilling(checked) {
  const customCheckbox = document.getElementsByClassName("custom-checkbox")[0];
  const titleMonthly = document.getElementsByClassName("billing-title-monthly")[0];
  const titleYearly = document.getElementsByClassName("billing-title-yearly")[0];
  const planFree = document.getElementsByClassName("plan-free");
  const priceArcade = document.getElementById("price-arcade");
  const priceAdvanced = document.getElementById("price-advanced");
  const pricePro = document.getElementById("price-pro");

  if (checked) {
    customCheckbox.classList.add("custom-checkbox-checked");
    titleMonthly.classList.remove("selected");
    titleYearly.classList.add("selected");
    for (let i = 0; i < planFree.length; i++) {
      planFree[i].setAttribute("data-display", "true");
    }
    priceArcade.innerText = "$90/mo";
    priceAdvanced.innerText = "$120/mo";
    pricePro.innerText = "$150/mo";
  } else {
    customCheckbox.classList.remove("custom-checkbox-checked");
    titleMonthly.classList.add("selected");
    titleYearly.classList.remove("selected");
    for (let i = 0; i < planFree.length; i++) {
      planFree[i].setAttribute("data-display", "false");
    }
    priceArcade.innerText = "$9/mo";
    priceAdvanced.innerText = "$12/mo";
    pricePro.innerText = "$15/mo";
  }
}

export { handleBilling };