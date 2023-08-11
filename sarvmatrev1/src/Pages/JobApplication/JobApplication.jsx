import { useState } from "react";
import {Line} from "rc-progress";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';
import { inputFields } from "./InputData";
import validateInput, {validateData} from "./Validation";
import trash from './images/trash-bin.png'
import Input from "../NewContact/Components/Input/Input";
import "./JobApplication.css";
import { ForContactInfo } from "./ForContactInfo/ForContactInfo";
import ForAddress from "./ForAddress/ForAddress";
import CheckBox from "./ResumeAndCheckBox/CheckBox";
import ResumeUpload from "./ResumeAndCheckBox/ResumeUpload";
import CorporateIdentity from "./CorporateIdentity/CorporateIdentity";


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
        <form onSubmit={(event) => {event.preventDefault}} className="container mb-24">
            <p className="uppercase font-bold text-3xl blue-text-gradient text-center my-4">You’re applying for {jobTitle}</p>
            <div className="w-full flex justify-center items-center gap-2 my-5">
                <Line
                    style={{ height: "0.56rem", borderRadius: "1rem", width: "80%" }}
                    percent={progress} />
                <span className="font-medium">{progress}%</span>
            </div>
            <ForContactInfo />
            <ResumeUpload />
            <CheckBox />
            <ForAddress />
            <CorporateIdentity />
            <h2 className="font-bold text-2xl mt-16">Education</h2>
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
                                key={index}
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
                                key={index}
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
                                    key={index}
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
                                key={index}
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
            <button 
                type="submit" 
                className=" max-w-fit px-4 py-2 bg-gradient-to-br from-[#2EA990] to-[#107882] hover:from-[#107882] hover:to-[#107882] cursor-pointer font-medium text-[#ffffffe7] hover:text-white text-opacity-[100%] rounded-md">
                Submit Now
            </button>
        </form>
    );
}

export default JobApplication