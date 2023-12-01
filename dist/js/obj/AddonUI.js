class AddonUI {
  constructor(name, price) {
    this.tr = document.createElement("tr");
    this.tr.className = "checkout-addon " + name;

    this.tr.appendChild(this.newTd(name, "title"));
    this.tr.appendChild(this.newTd(price, "price"));

    return this.tr;
  }

  newTd(text, className) {
    const newTag = document.createElement("td");
    const newText = document.createTextNode(text);
    
    newTag.appendChild(newText);
    newTag.className = className;

    return newTag;
  }
}

export { AddonUI };