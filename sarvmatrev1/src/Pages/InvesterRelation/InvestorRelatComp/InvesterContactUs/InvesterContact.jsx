import { useDisclosure } from "@mantine/hooks";
import { Drawer, Button, Group } from "@mantine/core";
import Input from "../../../NewContact/Components/Input/Input";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";

const InvesterContact = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const initialState = {
    fullName: "",
    phone: "",
    email: "",
    group: "",
    investorType: "",
    country: "",
    identity: "",
    subject: "",
    message: "",
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
    <div className="py-20">
      <div className="container">
        <Drawer
          position="right"
          opened={opened}
          onClose={close}
          title="Send a Message"
        >
          <div>
            <form action="">
              <Input
                name="fullName"
                id="investor_fullName"
                title="FULL NAME"
                value={data.fullName}
                onChange={handleChange}
                placeholder="Body"
                required={true}
              />
              <div className="mb-[6px]">
                <div className="text-xl font-medium mb-[6px]">
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
                title="EMAIL"
                id="investor_email"
                onChange={handleChange}
                placeholder="Enter your email"
                // onBlur={handleChange}
                // error={Object.keys(errors).includes("email") && errors["email"]}
              />
              <Input
                name="group"
                value={data["group"]}
                title="GROUP OR COMPANY"
                id="investor_group"
                onChange={handleChange}
                placeholder="Body"
                // onBlur={handleChange}
                // error={Object.keys(errors).includes("email") && errors["email"]}
              />
              <Input
                name="investorType"
                value={data.investorType}
                title="INVESTOR TYPE"
                id="investor_type"
                onChange={handleChange}
                placeholder="Body"
                // onBlur={handleChange}
                // error={Object.keys(errors).includes("email") && errors["email"]}
              />
              <Input
                name="country"
                value={data.country}
                title="COUNTRY"
                id="investor_country"
                onChange={handleChange}
                placeholder="Body"
                // onBlur={handleChange}
                // error={Object.keys(errors).includes("email") && errors["email"]}
              />
              <Input
                name="identity"
                value={data.identity}
                title="CORPORATE IDENTITY"
                id="investor_identity"
                onChange={handleChange}
                placeholder="Body"
                // onBlur={handleChange}
                // error={Object.keys(errors).includes("email") && errors["email"]}
              />
              <Input
                name="subject"
                value={data.subject}
                title="SUBJECT"
                id="investor_subject"
                onChange={handleChange}
                placeholder="Body"
                // onBlur={handleChange}
                // error={Object.keys(errors).includes("email") && errors["email"]}
              />
              <Input
                name="message"
                value={data.message}
                title="MESSAGE"
                id="investor_message"
                onChange={handleChange}
                placeholder="Body"
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
        </Drawer>
        <div className="w-full flex flex-col items-center">
          <h1>Invester Contact</h1>
          <div>
            <Group>
              <Button onClick={open} className="button-17 text-black">
                Send a message
              </Button>
            </Group>
          </div>+
        </div>
      </div>
    </div>
  );
};

export default InvesterContact;
