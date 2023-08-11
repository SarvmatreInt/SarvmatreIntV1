import PhoneInput from "react-phone-input-2";
import { inputFields } from "../InputData";
import Input from "../../NewContact/Components/Input/Input";

export const ForContactInfo = ({handleChange, onBlur}) => {

  return (
    <>
        <h2 className="blue-text-gradient font-bold text-2xl">Contact Info</h2>
        <ul className="grid sm:grid-cols-2 gap-5 mt-4">
        {
            inputFields.contactInfo.map((field, index) => {
                return (
                    <li key={index} className="font-medium">
                        {field.name === "mobile" ?
                            <label htmlFor="mobile" className="w-full">
                                <div className="">
                                    <div className="text-xl font-medium mb-[6px]">
                                    PHONE / MOBILE<span className="text-red-600 ml-2">*</span>
                                    </div>
                                    <PhoneInput
                                        country={"in"}
                                        // value={data["phone"]}
                                        onChange={handleChange}
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
                                        onBlur={onBlur}
                                    />
                                    {/* {Object.keys(errors).includes("phone") && (
                                        <div className="text-[12px] text-red-600 my-2">
                                        {errors["phone"]}
                                        </div>
                                    )} */}
                                </div>
                            </label>
                        :
                            <Input
                            {...field}
                            onChange={handleChange}
                            />
                        }
                    </li>
                );
            })}
        </ul>
    </>
  )
}
