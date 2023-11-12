class Page {
  constructor() {
    this.data = {
      page1: {
        heading: "Personal Info",
        description: "Please provide your name, email address, and phone number."
      },
      page2: {
        heading: "Select your Plans",
        description: "You have the option of monthly or yearly billing."
      },
      page3: {
        heading: "Pick add-ons",
        description: "Add-ons help enhance your gaming experience."
      },
      page4: {
        heading: "Finishing up",
        description: "Double-check everything looks OK before confirming."
      },
    }
  };

  getPage(number) {
    switch (number) {
      case 1:
        return this.data.page1;
        break;

      case 2:
        return this.data.page2;
        break;

      case 3:
        return this.data.page3;
        break;

      case 4:
        return this.data.page4;
        break;

      default:
        return null;
    }
  }
}

export { Page };