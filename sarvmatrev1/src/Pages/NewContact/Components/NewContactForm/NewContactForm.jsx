import { useState } from "react";
import Input from "../Input/Input";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import arrow from "./right-arrow.png";
import validateInput from "./Validation.js";
import { validateData } from "./Validation.js";

const NewContactForm = () => {
  const initialState = {
    fullName: "",
    phone: "",
    email: "",
    subject: "",
    address: "",
    city: "",
    state: "",
    province: "",
    pincode: "",
    country: "",
    identity: "team",
    company: "",
    designation: "",
    message: "",
    countryCode: "",
  };
  const [data, setData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors(validateInput(name, value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateData(data));
    if (Object.keys(errors).length === 0) {
      setData(initialState);
    } else {
      setData((prev) => ({ ...prev }));
    }
  };

  return (
    <>
      <div className="flex-1 p-4">
        <div className="w-[95%] md:w-[80%] md:ml-[50px]">
          <h1 className="text-[40px] font-bold md:text-[50px]">Contact us</h1>
          <form className="mt-8" onSubmit={handleSubmit}>
            <Input
              name="fullName"
              value={data["fullName"]}
              title="FULL NAME"
              id="newContact_fName"
              onChange={handleChange}
              onBlur={handleChange}
              placeholder="Enter your full name"
              error={
                Object.keys(errors).includes("fullName") && errors["fullName"]
              }
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-[6px]">
                <div className="text-[12px] pb-[5px]">
                  PHONE / MOBILE<span className="text-red-600 ml-2">*</span>
                </div>
                <PhoneInput
                  country={"in"}
                  value={data["phone"]}
                  onChange={(value, country) => {
                    setErrors(validateInput("phone", data["phone"]));
                    setData((prev) => ({
                      ...prev,
                      phone: value,
                      countryCode: country,
                    }));
                  }}
                  inputStyle={{
                    background: "rgb(229, 231, 235)",
                    width: "100%",
                    border: "0px",
                    borderBottom: "2px solid rgb(156 163 175)",
                    borderRadius: "0",
                    padding: "0px 0px 0px 40px",
                  }}
                  buttonStyle={{
                    backgroundColor: "rgb(229, 231, 235)",
                    border: "0px",
                  }}
                  onBlur={(e) => {
                    setErrors(validateInput("phone", data["phone"]));
                    setData((prev) => ({ ...prev }));
                  }}
                />
                {Object.keys(errors).includes("phone") && (
                  <div className="text-[12px] text-red-600">
                    {errors["phone"]}
                  </div>
                )}
              </div>
              <Input
                name="email"
                value={data["email"]}
                title="EMAIL"
                id="newContact_email"
                onChange={handleChange}
                placeholder="Enter your email"
                onBlur={handleChange}
                error={Object.keys(errors).includes("email") && errors["email"]}
              />
            </div>
            <Input
              name="subject"
              value={data["subject"]}
              title="SUBJECT OF THE CONTENT"
              id="newContact_subject"
              onChange={handleChange}
              placeholder="Subject of the content"
              onBlur={handleChange}
              error={
                Object.keys(errors).includes("subject") && errors["subject"]
              }
            />
            <Input
              name="address"
              value={data["address"]}
              title="ADDRESS"
              id="newContact_address"
              onChange={handleChange}
              placeholder="Address"
              onBlur={handleChange}
              error={
                Object.keys(errors).includes("address") && errors["address"]
              }
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
              <Input
                name="country"
                value={data["country"]}
                title="COUNTRY"
                id="newContact_Country"
                onChange={handleChange}
                placeholder="Enter Country"
                onBlur={handleChange}
                error={
                  Object.keys(errors).includes("country") && errors["country"]
                }
              />
              <Input
                name="state"
                value={data["state"]}
                title="STATE / UT"
                id="newContact_state"
                onChange={handleChange}
                placeholder="Enter state name..."
                onBlur={handleChange}
                error={Object.keys(errors).includes("state") && errors["state"]}
              />
              <Input
                name="province"
                value={data["province"]}
                title="PROVINCE"
                id="newContact_province"
                onChange={handleChange}
                placeholder="Enter Province..."
                onBlur={handleChange}
                error={
                  Object.keys(errors).includes("province") && errors["province"]
                }
                required={false}
              />
              <Input
                name="city"
                value={data["city"]}
                title="CITY"
                id="newContact_city"
                onChange={handleChange}
                placeholder="Enter your city name..."
                onBlur={handleChange}
                error={Object.keys(errors).includes("city") && errors["city"]}
              />
              <Input
                name="pincode"
                value={data["pincode"]}
                title="PINCODE"
                id="newContact_pincode"
                onChange={handleChange}
                placeholder="Enter Pincode..."
                onBlur={handleChange}
                error={
                  Object.keys(errors).includes("pincode") && errors["pincode"]
                }
              />

              <div className="mb-[6px]">
                <div>
                  <label htmlFor="newContact_identity" className="text-[12px]">
                    CORPORATE IDENTITY
                  </label>
                </div>
                <select
                  className="w-full p-[6.5px] focus:outline-0 bg-inherit"
                  style={{ borderBottom: "2px solid #9CA3AF" }}
                  value={data["identity"]}
                  onChange={handleChange}
                  name="identity"
                >
                  <option value="individual">Individual</option>
                  <option value="team">Team</option>
                </select>
              </div>
            </div>
            <Input
              name="company"
              value={data["company"]}
              title="COMPANY"
              id="newContact_company"
              onChange={handleChange}
              placeholder="Enter Company..."
              onBlur={handleChange}
              error={
                Object.keys(errors).includes("company") && errors["company"]
              }
            />
            <Input
              name="designation"
              value={data["designation"]}
              title="DESIGNATION"
              id="newContact_designation"
              onChange={handleChange}
              placeholder="Enter Designation..."
              onBlur={handleChange}
              error={
                Object.keys(errors).includes("designation") &&
                errors["designation"]
              }
            />
            <Input
              name="message"
              value={data["message"]}
              title="WRITE YOUR MESSAGE"
              id="newContact_message"
              onChange={handleChange}
              placeholder="Enter your message to us..."
              onBlur={handleChange}
              error={
                Object.keys(errors).includes("message") && errors["message"]
              }
            />
            <div className="flex items-center gap-2 text-[20px] cursor-pointer w-max my-4 relative">
              <button type="submit" className="mr-8 button-27">
                Submit
              </button>
              <img src={arrow} className="h-[16px] absolute right-0" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default NewContactForm;
