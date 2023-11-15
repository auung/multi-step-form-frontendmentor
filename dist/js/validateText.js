function validateText(info) {
  const errors = {
    name: false,
    email: false,
    phone: false
  }

  const errorName = document.getElementsByClassName("error-name")[0];
  const errorEmail = document.getElementsByClassName("error-email")[0];
  const errorPhone = document.getElementsByClassName("error-phone")[0];

  const regxName = new RegExp("[a-zA-Z][a-zA-Z0-9-_]{3,32}", "g");
  const regxEmail = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?", "g");
  const regxPhone = new RegExp("^[0-9]*$", "g");

  if (info.name) {
    if (!regxName.test(info.name)) {
      errorName.innerText = "Invalid name";
      errors.name = true;
    } else {
      errorName.innerText = "";
      errors.name = false;
    }
  } else {
    errorName.innerText = "This field is required";
    errors.name = true;
  }

  if (info.email) {
    if (!regxEmail.test(info.email)) {
      errorEmail.innerText = "Invalid email";
      errors.email = true;
    } else {
      errorEmail.innerText = "";
      errors.email = false;
    }
  } else {
    errorEmail.innerText = "This field is required";
    errors.email = true;
  }

  if (info.phone) {
    if (!regxPhone.test(info.phone)) {
      errorPhone.innerText = "Invalid phone";
      errors.phone = true;
    } else {
      errorPhone.innerText = "";
      errors.phone = false;
    }
  } else {
    errorPhone.innerText = "This field is required";
    errors.phone = true;
  }

  return !(errors.name || errors.email || errors.phone);
}

export { validateText };