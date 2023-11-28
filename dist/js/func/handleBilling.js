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

  customCheckbox.classList.toggle("custom-checkbox-checked", checked);
  titleMonthly.classList.toggle("selected", !checked);
  titleYearly.classList.toggle("selected", checked);

  const length = planFree.length;
  for (let i = 0; i < length; i++) {
    planFree[i].setAttribute("data-display", checked.toString());
  }

  priceArcade.innerText = checked ? "$90/yr" : "$9/mo";
  priceAdvanced.innerText = checked ? "$120/yr" : "$12/mo";
  pricePro.innerText = checked ? "$150/yr": "$15/mo";
  priceOnline.innerText = checked ? "+$10/yr" : "+$1/mo";
  priceStorage.innerText = checked ? "+$20/yr" : "+$2/mo";
  priceCustom.innerText = checked ? "+$20/yr" : "+$2/mo";
}

export { handleBilling };