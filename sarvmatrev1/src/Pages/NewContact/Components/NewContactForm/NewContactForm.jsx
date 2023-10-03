import { useState } from "react";
import Input from "../Input/Input";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import arrow from "./right-arrow.png";
import validateInput from "./Validation.js";
import { validateData } from "./Validation.js";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const NewContactForm = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_239zzij",
        "template_ob6cemk",
        form.current,
        "1UU7sjBqQJA7fjCrM"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    handleSubmit();
  };

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
    identity: "individual",
    company: "",
    designation: "",
    message: "",
    countryCode: "",
    group: "",
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
      <div className="flex-1 p-4  lg:basis-[60%]">
        <div className="w-[95%] md:w-[80%] md:ml-[50px] overflow-hidden">
          <h1 className="text-[40px] font-bold md:text-[50px] text-[#2EA990]">Contact us</h1>
          <form className="mt-" ref={form} onSubmit={sendEmail}>
            <Input
              name="fullName"
              value={data["fullName"]}
              id="newContact_fName"
              onChange={handleChange}
              onBlur={handleChange}
              placeholder="Enter your full name"
              error={
                Object.keys(errors).includes("fullName") && errors["fullName"]
              }
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                {/* <div className="text-xl font-medium mb-[6px]">
                  PHONE<span className="text-red-600 ml-2">*</span>
                </div> */}
                <PhoneInput
                  country={"in"}
                  className="mt-6"
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
                    width: "100%",
                    text:"40px",
                    border: "1px solid rgb(156,163, 175)",
                    borderRadius:"10px",
                    padding: "1rem 0 1rem 40px",
                    backgroundColor: "inherit",
                  }}
                  buttonStyle={{
                    border: "0px",
                    background: "white",
                    marginBottom: "4px",
                    backgroundColor: "inherit",
                  }}
                  onBlur={(e) => {
                    setErrors(validateInput("phone", data["phone"]));
                    setData((prev) => ({ ...prev }));
                  }}
                />
                {Object.keys(errors).includes("phone") && (
                  <div className="text-[12px] text-red-600 my-2">
                    {errors["phone"]}
                  </div>
                )}
              </div>
              <Input
                name="email"
                value={data["email"]}
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
                id="newContact_Country"
                onChange={handleChange}
                placeholder="Enter Country"
                onBlur={handleChange}
                error={
                  Object.keys(errors).includes("country") && errors["country"]
                }
              />
              <Input
                name="city"
                value={data["city"]}
                id="newContact_city"
                onChange={handleChange}
                placeholder="Enter your city name..."
                onBlur={handleChange}
                error={Object.keys(errors).includes("city") && errors["city"]}
              />
 
              <Input
                name="state"
                value={data["state"]}
                id="newContact_state"
                onChange={handleChange}
                placeholder="Enter state/ut/Provience name"
                onBlur={handleChange}
                error={Object.keys(errors).includes("state") && errors["state"]}
              />
              <Input
                name="pincode"
                value={data["pincode"]}
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
                  <label
                    htmlFor="newContact_identity"
                    className="text-xl font-medium"
                  >
                    CORPORATE IDENTITY
                    <span className="text-red-600 ml-2">*</span>
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
                  <option value="group">Group</option>
                  <option value="company">Company</option>
                </select>
              </div>
            </div>
            {data.identity === "group" && (
              <Input
                name="group"
                value={data["group"]}
                title="GROUP"
                id="newContact_group"
                onChange={handleChange}
                placeholder="Enter Group..."
                onBlur={handleChange}
                error={Object.keys(errors).includes("group") && errors["group"]}
              />
            )}

            <Input
              name="company"
              value={data["company"]}
              id="newContact_company"
              onChange={handleChange}
              placeholder="Enter Company..."
              onBlur={handleChange}
              error={
                Object.keys(errors).includes("company") && errors["company"]
              }
            />

            {(data.identity === "group" || data.identity === "individual") && (
              <Input
                value={data["designation"]}
                id="newContact_designation"
                onChange={handleChange}
                placeholder="Enter Designation..."
                onBlur={handleChange}
                error={
                  Object.keys(errors).includes("designation") &&
                  errors["designation"]
                }
              />
            )}
            <Input
              name="message"
              value={data["message"]}
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
