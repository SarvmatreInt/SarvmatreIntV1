const errors = {};

const validateName = (value) => {
  if (value.trim().length < 3) {
    errors.fullName = "Name is Required and must have 3 characters.";
  } else {
    delete errors["fullName"];
  }
};

const validatePhone = (value) => {
  const regex =
    /((?:\+|00)[17](?: |\-)?|(?:\+|00)[1-9]\d{0,2}(?: |\-)?|(?:\+|00)1\-\d{3}(?: |\-)?)?(0\d|\([0-9]{3}\)|[1-9]{0,3})(?:((?: |\-)[0-9]{2}){4}|((?:[0-9]{2}){4})|((?: |\-)[0-9]{3}(?: |\-)[0-9]{4})|([0-9]{7}))/g;
  if (!regex.test(value)) {
    errors.phone = "Must be a valid Phone Number";
  } else {
    delete errors["phone"];
  }
};

const validateEmail = (value) => {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!regex.test(value)) {
    errors.email = "Must be a valid Email";
  } else {
    delete errors["email"];
  }
};

const validatePinCode = (value) => {
  const regex = /^[1-9][0-9]{5}$/;
  if (!regex.test(value)) {
    errors.pincode = "Must be a valid Pin Code";
  } else {
    delete errors["pincode"];
  }
};

const validateCommon = (name, value) => {
  if (value.trim().length < 3) {
    errors[name] = `Must be a valid ${name}`;
  } else {
    delete errors[name];
  }
};

const validateInput = (name, value) => {
  if (name === "fullName") {
    validateName(value);
  } else if (name === "phone") {
    validatePhone(value);
  } else if (name === "email") {
    validateEmail(value);
  } else if (
    name === "subject" ||
    name === "address" ||
    name === "city" ||
    name === "state" ||
    name === "country" ||
    name === "company" ||
    name === "designation" ||
    name === "message"
  ) {
    validateCommon(name, value);
  } else if (name === "pincode") {
    validatePinCode(value);
  } else {
    return errors;
  }
  return errors;
};

export const validateData = (data) => {
  Object.entries(data).map((item) => {
    validateInput(item[0], item[1]);
  });

  return errors;
};

export default validateInput;
