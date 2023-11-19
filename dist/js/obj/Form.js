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
    let planCost;
    let addOnCost = 0;
    switch (this.plan.billing) {
      case "monthly":
        pricing = new Pricing().getPrice("monthly");
        planCost = pricing.plan[this.plan.type];
        for (let i = 0; i < this.addons.length; i++) {
          addOnCost += pricing.addon[this.addons[i]];
        }
        break;

      case "yearly":
        pricing = new Pricing().getPrice("yearly");
        planCost = pricing.plan[this.plan.type];
        for (let i = 0; i < this.addons.length; i++) {
          addOnCost += pricing.addon[this.addons[i]];
        }
        break;
    }
    return { planCost, addOnCost };
  }
}

export { Form };