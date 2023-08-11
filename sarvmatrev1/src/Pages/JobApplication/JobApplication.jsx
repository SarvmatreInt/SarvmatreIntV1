import { useState } from "react";
import {Line} from "rc-progress";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';
import { inputFields } from "./InputData";
import validateInput, {validateData} from "./Validation";
import trash from './images/trash-bin.png'
import Input from "../NewContact/Components/Input/Input";
import "./JobApplication.css";


function JobApplication({ jobData, jobTitle = "Lorem Ipsum" }) {

    const [progress, setProgress] = useState(0);
    const [numberOfCollegeEducation, setnumberOfCollegeEducation] = useState(1)

    const [formData, setFormData] = useState({
        // For Personal Details
        fullName: "",
        mobile: "",
        email: "",
        linkedin: "",
        residentType: true,
        // For Address
        address1: "",
        address2: "",
        country: "",
        state: "",
        city: "",
        pincode: "",
        // For education
        collegeName: [],
        universityName: [],
        courseDetail: [],
        collegeStream: [],
        collegeCourseMode: [],
        startDate: [],
        endDate: [],
        collegeGradeObtained: [],
        // For Professional details
        currentCompany: "",
        department: "",
        currentDesignation: "",
        currentCTC: "",
        currentCTC: "",
        yrsWithCurrCompany: null,
        totalExperience: null,
        servingNoticePeriodStatus: "",
        totTimeNoticePeriod: null,
        joiningStatus: ""
      })

    function addCollege() {
      setnumberOfCollegeEducation(prevState => prevState+=1)
    }

    // function removeCollege(index) {
    //   setnumberOfCollegeEducation(prevState => {
    //     const prevArray = prevState;
    //     console.log(prevArray.indexOf(index));
    //     return prevArray
    //   })
    // }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        setErrors(validateInput(name, value));
    };

    return (
    <form onSubmit={(event) => {event.preventDefault}} className="container">
        <p className="uppercase font-bold text-3xl blue-text-gradient text-center my-4">You’re applying for {jobTitle}</p>
        <div className="w-full flex justify-center items-center gap-2 my-5">
            <Line
                style={{ height: "0.56rem", borderRadius: "1rem", width: "80%" }}
                percent={progress} />
            <span className="font-medium">{progress}%</span>
        </div>
        <h2 className="blue-text-gradient font-bold text-2xl">Contact Info</h2>
        <ul className="grid sm:grid-cols-2 gap-5 mt-4">
            {inputFields.contactInfo.map((field, index) => {
                // console.log(field);
                return (
                <li key={index} className="font-medium">
                    {field.name === "mobile" ?
                    <label htmlFor="mobile" className="">
                        <p>Mobile <span className="text-red-800">*</span></p>
                        <PhoneInput
                        country={"in"}
                        title={field.label}
                        placeholder={field.placeHolder}
                        id={field.id}
                        name={field.name}
                        inputProps={{
                            id: "contactus_phone",
                            name: "phone",
                            className: "w-full pl-12 py-2 rounded-md  border-[1px] border-blue-200 text-base",
                            autoComplete: "off",
                        }}
                        buttonStyle={{
                            margin: 0,
                        }} />
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
        <h2 className="blue-text-gradient font-bold text-2xl mt-4">Resume</h2>
        <h3 className="text-gray-500 font-bold text-2xl">Resume should be updated</h3>
        <label className="w-full flex flex-col mt-4">
            <input type="file" name="resume" id="resume" className="max-w-[115px]" />
            <span className="font-medium">
                (Max file size limit less than 2MB)
            </span>
        </label>
        <h2 className="blue-text-gradient font-bold text-2xl mt-4 mb-2">Address</h2>
        <label htmlFor="residentType" className="flex gap-3 items-center">
            <input type="checkbox" name="residentType" id="residentType" />
            <span className="font-medium">I am outside India</span>
        </label>
        <h2 className="blue-text-gradient font-bold text-2xl mt-4"> Current Address</h2>
        <div className="grid gap-5 my-5">
            <div className="grid lg:grid-cols-2 gap-5 font-medium">
            {
                inputFields.address.filter((field, index) => index <= 1 ).map((field, index) => {
                return(
                    <Input
                        {...field}
                        onChange={handleChange}
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
                    />
                )
                })
            }
            </div>
        </div>
        <div className="mb-[6px]">
            <div>
                <label
                htmlFor="newContact_identity"
                className="text-xl font-medium"
                >
                CORPORATE IDENTITY
                </label>
            </div>
            <select
                className="w-full p-[6.5px] focus:outline-0 bg-inherit"
                style={{ borderBottom: "2px solid #9CA3AF" }}
                // value={data["identity"]}
                onChange={handleChange}
                name="identity"
            >
                <option value="individual">Individual</option>
                <option value="group">Group</option>
                <option value="company">Company</option>
            </select>
        </div>
        <ul className="grid gap-5 font-medium">
        {
            Array.from({length: numberOfCollegeEducation}).map((_, index) => (
                <div className="grid gap-4 my-4" key={index}>
                {
                    inputFields.education.filter((field, index) => index < 2).map((field, index) => {
                    return(
                        <Input 
                        {...field}
                        onChange={handleChange}
                        />
                    )
                    })
                }

                <div className="grid grid-cols-2 gap-4">
                    {
                    inputFields.education.filter((field, index) => index < 4 && index > 1).map((field, index) => (
                        <Input 
                        {...field}
                        onChange={handleChange}
                        />
                    ))
                    }
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {
                    inputFields.education.filter((field, index) => index > 3 && index < 7).map((field, index) => (
                        <Input 
                        {...field}
                        onChange={handleChange}
                        />
                    ))
                    }
                </div>

                <div className="max-w-[250px]">
                    {
                    inputFields.education.filter((field, index) => index===7).map((field, index) => (
                        <Input 
                        {...field}
                        onChange={handleChange}
                        />
                    ))
                    }
                </div>

                <button className="max-w-fit rounded-lg flex items-center px-4 py-2  border-red-600 border gap-2 font-medium text-red-600 hover:bg-red-600 hover:text-white" onClick={(event) => {event.preventDefault()}}>
                    <img src={trash} className="max-w-[25px]" />
                    <span>Delete Education</span>
                </button>
                </div>
            ))
        }
        </ul>
        <button className="border-[1px] border-[#166316] text-[#166316] max-w-fit px-5 py-1 rounded-lg hover:bg-green hover:text-white hover:bg-[#166316] font-medium mt-4" onClick={addCollege} >Add Education +</button>
        <h2 className="blue-text-gradient font-bold text-2xl mt-10 my-4 capitalize">Professional Detail</h2>
        <div className="grid sm:grid-cols-2 gap-4 font-medium my-4">
            {
            inputFields.professionalDetails.map((field, index) => (
                <Input 
                {...field}
                onChange={handleChange}
                />
            ))
            }
        </div>
        <button type="submit" className="justify-self-end max-w-fit bg-gradient-to-b from-fontblue-200 to-fontblue-300 px-8 py-2 rounded-xl text-white font-medium hover:from-fontblue-300 hover:to-fontblue-300 cursor-pointer">Submit Now</button>
    </form>
    );
}

export default JobApplication