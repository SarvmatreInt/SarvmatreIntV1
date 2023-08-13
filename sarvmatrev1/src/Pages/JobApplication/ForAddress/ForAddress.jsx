import PhoneInput from "react-phone-input-2";
import { inputFields } from "../InputData";
import Input from "../../NewContact/Components/Input/Input";

const ForAddress = ({handleChange, formData}) => {
  return (
    <>
        <h2 className="blue-text-gradient font-bold text-2xl mt-4"> Current Address</h2>
        <div className="grid gap-5 my-5">
            <div className="grid lg:grid-cols-2 gap-5 font-medium">
            {
                inputFields.address.filter((field, index) => index <= 1 ).map((field, index) => {
                return(
                    <Input
                        {...field}
                        onChange={handleChange}
                        key={index}
                        value={formData[field.name]}
                    />
                    )
                    })
            }
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 font-medium">
            {
                inputFields.address.filter((field, index) => index > 1).map((field, index) => {
                return(
                    <Input 
                    {...field}
                    onChange={handleChange}
                    key={index}
                    value={formData[field.name]}
                    />
                )
                })
            }
            </div>
        </div>
        <h2 className="blue-text-gradient font-bold text-2xl mt-4">Permanent Address</h2>
        <div className="grid gap-5 my-5">
            <div className="grid lg:grid-cols-2 gap-5 font-medium">
            {
                inputFields.address.filter((field, index) => index <= 1 ).map((field, index) => {
                return(
                    <Input
                        {...field}
                        onChange={handleChange}
                        key={index}
                        value={formData[field.name]}
                    />
                    )
                    })
            }
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 font-medium">
            {
                inputFields.address.filter((field, index) => index > 1).map((field, index) => {
                return(
                    <Input 
                    {...field}
                    onChange={handleChange}
                    key={index}
                    value={formData[field.name]}
                    />
                )
                })
            }
            </div>
        </div>
    </>
  )
}

export default ForAddress