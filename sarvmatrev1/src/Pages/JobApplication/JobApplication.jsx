import { useEffect, useState} from "react";
// import { useParams } from "react-router-dom";
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
import { useLocation } from "react-router";


function JobApplication({ jobData, jobTitle = "Lorem Ipsum" }) {
    // const params = useParams();
    // const {jobid} = params;
    // console.log(jobid);
    let data = useLocation();
   let job_title = (data.state.name);


    const [progress, setProgress] = useState(0);
    const [numberOfCollegeEducation, setnumberOfCollegeEducation] = useState(1)

    const educationSchema = {
        collegeName: "",
        universityName: "",
        courseDetail: "",
        collegeStream: "",
        collegeCourseMode: "",
        startDate: "",
        endDate: "",
        collegeGradeObtained: "",
    }

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
        education: [
            {...educationSchema}
        ],
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

    useEffect(() => {

    },[formData])


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        setErrors(validateInput(name, value));
        console.log(errors);
    };
    
    const handleEducationChange = (event) => {
        const { name, value, id } = event.target
        setFormData(prevState => {
            let updatedEducation = prevState.education[id];
            console.log(updatedEducation);
            return formData
        })
    }
    console.log(formData);

    return (
        <form onSubmit={(event) => {event.preventDefault}} className="container mb-24">
            <p className="uppercase font-bold text-3xl blue-text-gradient text-center my-4">You’re applying for {job_title} </p>
            <div className="w-full flex justify-center items-center gap-2 my-5">
                <Line
                    style={{ height: "0.56rem", borderRadius: "1rem", width: "80%" }}
                    percent={progress} />
                <span className="font-medium">{progress}%</span>
            </div>
            <ForContactInfo 
                handleChange={handleChange}
                formData={formData}
            />
            <ResumeUpload  
                handleChange={handleChange}
            />
            <CheckBox  
                handleChange={handleChange}
                formData={formData}
            />
            <ForAddress  
                handleChange={handleChange}
                formData={formData}
            />
            <CorporateIdentity  
                handleChange={handleChange}
                formData={formData}
            />


            <h2 className="font-bold text-2xl mt-16">Education</h2>
            <ul className="grid gap-5 font-medium">
            {
                Array.from({
                    length: formData.education
                })
                .map((_, index) => {
                    const MainIndex = index;
                    return(
                        <div className="grid gap-4 my-4" key={index}>
                            {
                                inputFields.education.filter((field, index) => index < 2).map((field, index) => {
                                return(
                                    <Input 
                                    {...field}
                                    id={MainIndex}
                                    value={formData.education[MainIndex][field.name]}
                                    onChange={handleEducationChange}
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
                                    id={MainIndex}
                                    value={formData.education[MainIndex][field.name]}
                                    onChange={handleEducationChange}
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
                                        id={MainIndex}
                                        value={formData.education[MainIndex][field.name]}
                                        onChange={handleEducationChange}
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
                                    id={MainIndex}
                                    value={formData.education[MainIndex][field.name]}
                                    onChange={handleEducationChange}
                                    key={index}
                                    />
                                ))
                                }
                            </div>
                            <button 
                                className="max-w-fit rounded-lg flex items-center px-4 py-2  border-red-600 border gap-2 font-medium text-red-600 hover:bg-red-600 hover:text-white" 
                                onClick={(event) => {
                                    event.preventDefault();
                                    if(formData.education.length > 1) {
                                        setFormData(prevState => {
                                            const firstHalf = prevState.education.slice(0, MainIndex);
                                            const secondHalf = prevState.education.slice(MainIndex+1);
                                            return {
                                                ...prevState,
                                                education: [
                                                    ...firstHalf,
                                                    ...secondHalf
                                                ]
                                            }
                                        })
                                    }
                                }}
                            >
                                <img src={trash} className="max-w-[25px]" />
                                <span>Delete Education</span>
                            </button>
                        </div>
                    )
                })
            }
            </ul>

            <button 
                className="border-[1px] border-[#166316] text-[#166316] max-w-fit px-5 py-1 rounded-lg hover:bg-green hover:text-white hover:bg-[#166316] font-medium mt-4" 
                onClick={(event) => {
                    event.preventDefault();
                    setFormData(prevState => {
                        const newState = {
                            ...prevState,
                            education: [
                                ...prevState.education,
                                {...educationSchema}
                            ]
                        };
                        return {...newState};
                    })
                    console.log(formData);
                }} 
            >
            Add Education +
            </button>


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