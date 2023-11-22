function handleBilling(checked) {
  const customCheckbox = document.getElementsByClassName("custom-checkbox")[0];
  const titleMonthly = document.getElementsByClassName("billing-title-monthly")[0];
  const titleYearly = document.getElementsByClassName("billing-title-yearly")[0];

  if (checked) {
    customCheckbox.classList.add("custom-checkbox-checked");
    titleMonthly.classList.remove("selected");
    titleYearly.classList.add("selected");
  } else {
    customCheckbox.classList.remove("custom-checkbox-checked");
    titleMonthly.classList.add("selected");
    titleYearly.classList.remove("selected");
  }
}

export { handleBilling };