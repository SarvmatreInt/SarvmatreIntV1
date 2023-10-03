import { useDisclosure } from "@mantine/hooks";
import { Drawer, Button, Group } from "@mantine/core";
import Input from "../../../NewContact/Components/Input/Input";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";
import phone from "../image/top-view-retro-telephone.jpg";

const InvesterContact = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const initialState = {
    fullName: "",
    phone: "",
    email: "",
    group: "",
    investorType: "",
    country: "",
    identity: "individual",
    subject: "",
    message: "",
    designation: "",
    company: "",
  };

  const [data, setData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="my-[100px]">
      <div className="container">
        <div className="flex border-2 rounded-xl overflow-hidden max-h-[80vh]">
          <div className="w-[40%]">
          <img src={phone} alt="" className="h-[100%] w-[100%]"/>
          </div>
          <div className="w-[60%]  flex justify-center items-center">
              <form action="" className="w-[80%]">
              <p className="font-bold text-3xl pt-[20px]">Contact Us</p>
                <Input
                  name="fullName"
                  id="investor_fullName"
                  value={data.fullName}
                  onChange={handleChange}
                  placeholder="Enter Full Name"
                  required={true}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="mb-[6px]">
                    <div className="text-xl font-medium mb-[6.5px]">
                      PHONE / MOBILE<span className="text-red-600 ml-2">*</span>
                    </div>
                    <PhoneInput
                      country={"in"}
                      value={data["phone"]}
                      onChange={(value, country) => {
                        // setErrors(validateInput("phone", data["phone"]));
                        setData((prev) => ({
                          ...prev,
                          phone: value,
                          // countryCode: country,
                        }));
                      }}
                      inputStyle={{
                        width: "100%",
                        border: "0px",
                        borderBottom: "2px solid rgb(156,163, 175)",
                        borderRadius: "0",
                        padding: "0px 0px 0px 40px",
                        backgroundColor: "inherit",
                      }}
                      buttonStyle={{
                        border: "0px",
                        background: "white",
                        marginBottom: "4px",
                        backgroundColor: "inherit",
                      }}
                      // onBlur={(e) => {
                      //   setErrors(validateInput("phone", data["phone"]));
                      //   setData((prev) => ({ ...prev }));
                      // }}
                    />
                    <div className="h-[12px]"></div>
                  </div>
                  <Input
                    name="email"
                    value={data["email"]}
                    id="investor_email"
                    onChange={handleChange}
                    placeholder="Enter your email"
                    // onBlur={handleChange}
                    // error={Object.keys(errors).includes("email") && errors["email"]}
                  />
                  <Input
                    name="investorType"
                    value={data.investorType}
                    id="investor_type"
                    onChange={handleChange}
                    placeholder="Invester Type"
                    // onBlur={handleChange}
                    // error={Object.keys(errors).includes("email") && errors["email"]}
                  />
                  <Input
                    name="country"
                    value={data.country}
                    id="investor_country"
                    onChange={handleChange}
                    placeholder="Enter Country"
                    // onBlur={handleChange}
                    // error={Object.keys(errors).includes("email") && errors["email"]}
                  />

                  <div className="mb-[6px]">
                    <div>
                      <label
                        htmlFor="investor_identity"
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
                    <div className="h-[24px]"></div>
                  </div>
                </div>
                {data.identity === "group" && (
                  <Input
                    name="group"
                    value={data["group"]}
                    id="newContact_group"
                    onChange={handleChange}
                    placeholder="Enter Group"
                    // onBlur={handleChange}
                    // error={Object.keys(errors).includes("group") && errors["group"]}
                  />
                )}

                <Input
                  name="company"
                  value={data["company"]}
                  id="newContact_company"
                  onChange={handleChange}
                  placeholder="Enter Company"
                  // onBlur={handleChange}
                  // error={
                  //   Object.keys(errors).includes("company") && errors["company"]
                  // }
                />

                {(data.identity === "group" ||
                  data.identity === "individual") && (
                  <Input
                    name="designation"
                    value={data["designation"]}
                    id="newContact_designation"
                    onChange={handleChange}
                    placeholder="Enter Designation"
                    // onBlur={handleChange}
                    // error={
                    //   Object.keys(errors).includes("designation") &&
                    //   errors["designation"]
                    // }
                  />
                )}
                <Input
                  name="message"
                  value={data.message}
                  id="investor_message"
                  onChange={handleChange}
                  placeholder="Enter Message"
                  // onBlur={handleChange}
                  // error={Object.keys(errors).includes("email") && errors["email"]}
                />
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="bg-black text-white rounded-r-md px-4 py-1 text-2xl"
                >
                  Submit
                </button>
              </form>


          </div>
        </div>
      </div>
    </div>
  );
};

export default InvesterContact;
