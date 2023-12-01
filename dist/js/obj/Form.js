import { Pricing } from "./Pricing.js";

class Form {
  constructor() {
    this.info;
    this.plan = {
      type: "",
      billing: "monthly"
    }
    this.addons = [];
  }

  setInfo(info) {
    this.info = info;
  }

  setPlan(plan) {
    this.plan = plan;
  }

  setAddons(addons) {
    this.addons = addons;
  }

  getBills() {
    let pricing;
    let totalCost = 0;

    switch (this.plan.billing) {
      case "monthly":
        pricing = new Pricing().getPrice("monthly");
        break;

      case "yearly":
        pricing = new Pricing().getPrice("yearly");
        break;
    }

    let planCost = pricing.plan[this.plan.type] || 0;
    totalCost += planCost;

    let addonArray = this.addons.map(addon => {
      const addonCost = pricing.addon[addon];
      totalCost += addonCost;
      return {
        name: addon,
        price: addonCost
      }
    })

    let bills = {
      billingType: this.plan.billing,
      plan: {
        name: this.plan.type,
        price: planCost
      },
      addons: addonArray,
      total: totalCost
    }

    return bills;
  }
}

export { Form };

/*



*/
