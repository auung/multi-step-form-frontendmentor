function handleBilling(checked) {
  const customCheckbox = document.getElementsByClassName("custom-checkbox")[0];
  const titleMonthly = document.getElementsByClassName("billing-title-monthly")[0];
  const titleYearly = document.getElementsByClassName("billing-title-yearly")[0];
  const planFree = document.getElementsByClassName("plan-free");
  const priceArcade = document.getElementById("price-arcade");
  const priceAdvanced = document.getElementById("price-advanced");
  const pricePro = document.getElementById("price-pro");
  const priceOnline = document.getElementById("price-online");
  const priceStorage = document.getElementById("price-storage");
  const priceCustom = document.getElementById("price-custom");


  if (checked) {
    customCheckbox.classList.add("custom-checkbox-checked");
    titleMonthly.classList.remove("selected");
    titleYearly.classList.add("selected");
    for (let i = 0; i < planFree.length; i++) {
      planFree[i].setAttribute("data-display", "true");
    }
    priceArcade.innerText = "$90/yr";
    priceAdvanced.innerText = "$120/yr";
    pricePro.innerText = "$150/yr";
    priceOnline.innerText = "+$10/yr";
    priceStorage.innerText = "+$20/yr";
    priceCustom.innerText = "+$20/yr";
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
    priceOnline.innerText = "+$1/yr";
    priceStorage.innerText = "+$2/yr";
    priceCustom.innerText = "+$2/yr";
  }
}

export { handleBilling };