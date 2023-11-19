function getFormData() {
  const inputName = document.getElementById("name");
  const inputEmail = document.getElementById("email");
  const inputPhone = document.getElementById("phone");

  const radiosPlan = document.getElementsByName("plan");
  const checkBilling = document.getElementById("billing");

  const checksAddon = document.getElementsByName("addon");

  const info = {
    name: inputName.value,
    email: inputEmail.value,
    phone: inputPhone.value
  }
  const plan = {};
  const addons = [];

  radiosPlan.forEach(element => {
    if (element.checked) {
      plan.type = element.id;
    }
  })
  
  if (checkBilling.checked) {
    plan.billing = "yearly";
  } else {
    plan.billing = "monthly";
  }

  checksAddon.forEach(element => {
    if (element.checked) {
      addons.push(element.id);
    }
  })

  return { info, plan, addons };
}

export { getFormData };