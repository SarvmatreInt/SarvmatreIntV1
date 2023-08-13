import { useState } from "react";
import Input from "../../Input/Input";
import Modal from "./modal";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const initialState = {
  fullName: "",
  phone: "",
  email: "",
  type: "",
  message: "",
};

const general_enqueries = [
  {
    value: "representative",
    title: "I want to get in touch with representative",
  },
  {
    value: "business_query",
    title: "Query regarding business association with sarvmatre",
  },
  {
    value: "services",
    title: "Know more about services & Products offered",
  },
];

const grievance_enqueries = [
  { value: "grievance", title: "I want to address Grievance" },
];

const press_enqueries = [
  { value: "press", title: "Query regarding press & Media" },
];

const sales_enqueries = [
  {
    value: "representative",
    title: "I want to get in touch with representative",
  },
  {
    value: "business_query",
    title: "Query regarding business association with sarvmatre",
  },
  {
    value: "services",
    title: "Know more about services & Products offered",
  },
  {
    value: "sales",
    title: "I want to sell with Sarvmatre",
  },
];

const support_enqueries = [
  {
    value: "representative",
    title: "I want to get in touch with representative",
  },
  {
    value: "transaction",
    title: "I want to talk regarding recent transaction",
  },
];

const partner_enqueries = [
  {
    value: "representative",
    title: "I want to get in touch with representative",
  },
  {
    value: "business_query",
    title: "Query regarding business association with sarvmatre",
  },
  {
    value: "services",
    title: "Know more about services & Products offered",
  },
  {
    value: "sales",
    title: "I want to sell with Sarvmatre",
  },
  {
    value: "buy",
    title: "I want to buy from Sarvmatre",
  },
];

const Form = (props) => {
  const [data, setData] = useState(initialState);
  const options = (name) => {
    switch (name) {
      case "general":
        return general_enqueries.map((item, index) => (
          <option value={item.value} key={index}>
            {item.title}
          </option>
        ));
      case "grievance":
        return grievance_enqueries.map((item, index) => (
          <option value={item.value} key={index}>
            {item.title}
          </option>
        ));
      case "sales":
        return sales_enqueries.map((item, index) => (
          <option value={item.value} key={index}>
            {item.title}
          </option>
        ));
      case "partner":
        return partner_enqueries.map((item, index) => (
          <option value={item.value} key={index}>
            {item.title}
          </option>
        ));
      case "press":
        return press_enqueries.map((item, index) => (
          <option value={item.value} key={index}>
            {item.title}
          </option>
        ));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Modal onClose={props.onClose}>
      <h1 className="mb-4">{props.name.toUpperCase()} FORM</h1>
      <form className="w-[90%] md:w-[400px] max-h-[80vh] md:max-h-[500px] overflow-y-scroll">
        <Input
          name="fullName"
          title="FULL NAME"
          value={data.fullName}
          onChange={handleChange}
        />
        <div className="mb-[24px]">
          <div className="text-xl font-medium mb-[6px]">
            PHONE<span className="text-red-600 ml-2">*</span>
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
        </div>
        <Input
          name="email"
          title="EMAIL"
          value={data.email}
          onChange={handleChange}
        />
        <div className="mb-[24px]">
          <div>
            <label
              htmlFor="newContact_identity"
              className="text-xl font-medium"
            >
              Type of Query
              <span className="text-red-600 ml-2">*</span>
            </label>
          </div>
          <select
            className="w-full pl-0 p-[6.5px] focus:outline-0 bg-inherit"
            style={{ borderBottom: "2px solid #9CA3AF" }}
            value={data["type"]}
            name="type"
            onChange={handleChange}
          >
            {options(props.name)}
            <option value="other">Other</option>
          </select>
        </div>
        <Input
          name="message"
          title="MESSAGE"
          value={data.message}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-[#000] text-white pl-1 pr-4 py-1 rounded-r-lg mb-4"
        >
          Submit
        </button>
      </form>
    </Modal>
  );
};
export default Form;
