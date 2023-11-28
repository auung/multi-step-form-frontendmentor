class Page {
  constructor() {
    this.data = [
      {
        heading: "Personal Info",
        description: "Please provide your name, email address, and phone number."
      },
      {
        heading: "Select your Plans",
        description: "You have the option of monthly or yearly billing."
      },
      {
        heading: "Pick add-ons",
        description: "Add-ons help enhance your gaming experience."
      },
      {
        heading: "Finishing up",
        description: "Double-check everything looks OK before confirming."
      }
    ]
  };

  getPage(currentPage) {
    return this.data[currentPage];
  }
}

export { Page };