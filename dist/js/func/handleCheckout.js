import { AddonUI } from "../obj/AddonUI.js";

function handleCheckout(bills) {
  const timeUnit = bills.billingType == "monthly" ? "/mo" : "/yr";
  const addonMap = {
    online: "Online service",
    storage: "Larger storage",
    custom: "Customizable profile"
  }

  const billsTable = document.getElementsByClassName("bills")[0];
  const checkoutAddon = document.getElementsByClassName("checkout-addon");
  const checkoutPlan = document.getElementById("checkoutPlan");
  const checkoutPlanPrice = document.getElementById("checkoutPlanPrice");
  const checkoutTotal = document.getElementById("checkoutTotal");
  const checkoutTotalPrice = document.getElementById("checkoutTotalPrice");
  const checkoutPlanTr = document.getElementsByClassName("checkout-plan")[0];

  while(checkoutAddon.length > 0){
    checkoutAddon[0].parentNode.removeChild(checkoutAddon[0]);
  }
  
  checkoutPlan.innerText = `${bills.plan.name} (${bills.billingType})`;
  checkoutPlanPrice.innerText = `\$${bills.plan.price}${timeUnit}`;
  checkoutTotal.innerHTML = bills.billingType == "monthly" ? "(per month)" : "(per year)";
  checkoutTotalPrice.innerText = `\$${bills.total}${timeUnit}`;
  checkoutPlanTr.classList.toggle("checkout-plan-addon", bills.addons.length != 0);

  bills.addons.map(addon => {
    const tr = new AddonUI(addonMap[addon.name], `\+\$${addon.price}${timeUnit}`);
    billsTable.insertAdjacentElement("beforeend", tr);
  })

  
}

export { handleCheckout };