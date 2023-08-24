const urlRegex = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/

const errors = {};

const validateName = (value) => {
  if (value.trim().length < 3) {
    errors.fullName = "Name is Required and must have 3 characters.";
  } else {
    delete errors["fullName"];
  }
};

const validatePhone = (value) => {
  const regex = /^[0-9]{10}$/;
  if (value.length < 10 ) {
    errors.mobile = "Contact number must be satisfied numbers";
  }
  else {
    delete errors["mobile"];
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

const validateLinkedIn = (value) => {
  const regex = /^https:\/\/www\.linkedin\.com\/[a-zA-Z0-9-]{3,}\/?$/;
  if (!regex.test(value)) {
    errors.linkedin = "Must be a valid linkedin profile url";
  } else {
    delete errors["linkedin"];
  }
}

const validatePinCode = (value) => {
  const regex = /^[1-9][0-9]{5}$/;
  if (!regex.test(value)) {
    errors.pincode = "Must be a valid Pin Code";
  } else {
    delete errors["pincode"];
  }
};

const validateNumber = (name,value) => {
  const regex = /^[0-9]+$/;
  if (!regex.test(value)) {
    errors[name] = `Must be a number`;
  } else {
    delete errors[name];
  }
}

const validateMonth = (value) =>{

  if(value>=0 && value<=12){
    delete errors["totTimeNoticePeriod"];
  }
  else{
    errors.totTimeNoticePeriod = "must be a valid month";
  }
}

const validateYesNo = (value) =>{
  const regex = /^(yes|no)$/i;
  value = value.toLowerCase();
  if (!regex.test(value)) {
    errors.servingNoticePeriodStatus = `Must be a yes or no`;
  } else {
    delete errors["servingNoticePeriodStatus"];
  }
}

const validateCommon = (name, value) => {
  if (value.trim().length <= 3) {
    errors[name] = `Minimum 3 character required!`;
  } else {
    delete errors[name];
  }
};

export default function validateInput (name, value)  {
  if (name === "fullName") {
    validateName(value);
  } else if (name === "mobile") {
    validatePhone(value);
  } else if (name === "email") {
    validateEmail(value);
  } else if(name === "linkedin"){
    validateLinkedIn(value);
  } else if (
    name === "subject" ||
    name === "address1" ||
    name === "address2" ||
    name === "city" ||
    name === "state" ||
    name === "country" ||
    name === "company" ||
    name === "designation" ||
    name === "message" ||
    name === "currentCompany" ||
    name === "department" ||
    name === "currentDesignation" ||
    name === "joiningStatus"
  ) 
  
  {
    validateCommon(name, value);
  } 
  
  else if (name === "pincode") {
    validatePinCode(value);
  } 
  else if(name === "yrsWithCurrCompany" || name === "totalExperience" || name === "currentCTC" || name === "currentHandPackage"){
    validateNumber(name,value);
  }
  else if(name === "totTimeNoticePeriod"){
    validateMonth(value);
  }
  else if(name === "servingNoticePeriodStatus"){
    validateYesNo(value);
  }
  else {
    return errors;
  }
  return errors;
};

export const validateData = (data) => {
  // console.log(data);
  [{...data}].map((item) => {
    validateInput(item.name, item.value);
  });
  return errors;
};


// Validation for education

let educationErrors = []

const validateGeneral = (name, value, MainIndex) => {
  if(value.length <= 3) {
    let newError = educationErrors.filter((element) => element.id === MainIndex);
    if(newError.length == 0) {
      newError = {
        id: MainIndex,
        [name]: value
      }
      educationErrors = [
        ...educationErrors,
        {...newError}
      ]
      return educationErrors;
    } else {
      educationErrors = [
        {...newError}
      ]
    }
    return educationErrors;
  }
  return educationErrors;
}

export const educationValidation = (name, value, MainIndex) => {
  if( name === "collegeName" || name === "universityName" ) 
  {
    return validateGeneral(name, value, MainIndex);
  }
  return educationErrors;
}