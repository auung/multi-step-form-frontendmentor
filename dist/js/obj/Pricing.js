class Pricing {
  constructor() {
    this.times = 10;
    this.pricingMonthly = {
      plan: {
        arcade: 9,
        advanced: 12,
        pro: 15
      },
      addon: {
        online: 1,
        storage: 2,
        custom: 2
      }
    }
    this.pricingYearly = {
      plan: {
        arcade: this.pricingMonthly.plan.arcade * this.times,
        advanced: this.pricingMonthly.plan.advanced * this.times,
        pro: this.pricingMonthly.plan.pro * this.times
      },
      addon: {
        online: this.pricingMonthly.addon.online * this.times,
        storage: this.pricingMonthly.addon.storage * this.times,
        custom: this.pricingMonthly.addon.custom * this.times
      }
    }
  }

  getPrice(billing) {
    switch (billing) {
      case "monthly":
        return this.pricingMonthly;
      case "yearly":
        return this.pricingYearly
    }
  }
}

export { Pricing };