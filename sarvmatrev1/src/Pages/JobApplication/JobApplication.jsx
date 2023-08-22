import { useState} from "react";
import { useParams } from "react-router-dom";
import 'react-phone-input-2/lib/style.css';
import { inputFields } from "./InputData";
import validateInput, {educationValidation, validateData} from "./Validation";
import trash from './images/trash-bin.png'
import Input from "../NewContact/Components/Input/Input";
import "./JobApplication.css";
import { ForContactInfo } from "./ForContactInfo/ForContactInfo";
import ForAddress from "./ForAddress/ForAddress";
import Checkbox from "./CheckBox/CheckBox";


function JobApplication({ jobData, jobTitle = "Lorem Ipsum" }) {

    const {jobId} = useParams();
    
    const [errors, setErrors] = useState({});
    const [educationErrors, setEducationErrors] = useState ([]);

    const [formData, setFormData] = useState({
        // For Personal Details
        fullName: "",
        mobile: "",
        email: "",
        linkedin: "",
        residentType: "",
        resume: {
            fileExtensions: ['pdf', 'docx'],
            doesExist: false
        },
        // For Address
        address1: "",
        address2: "",
        country: "",
        province: "",
        state: "",
        city: "",
        pincode: "",
    })
    // ==================================
    
    // This code part is exclusively for professional detail;
    
    const [hasExperience, setHasExperience] = useState(false);
    const [nri, setNri] = useState(false);
    const jobExperienceSchema = {
        // For Professional details
        currentCompany: "",
        department: "",
        currentDesignation: "",
        currentCTC: "",
        yrsWithCurrCompany: null,
        totalExperience: null,
        servingNoticePeriodStatus: "",
        totTimeNoticePeriod: null,
        joiningStatus: ""
    }
    
    const professionalFieldsAdder = (isChecked) => {
        setFormData(prevState => {
            let newFormData;
            if(isChecked) {
                newFormData = {...prevState, ...jobExperienceSchema}
            }
            else {
                let {
                    currentCompany,
                    department,
                    currentDesignation,
                    currentCTC,
                    yrsWithCurrCompany,
                    totalExperience,
                    servingNoticePeriodStatus,
                    totTimeNoticePeriod,
                    joiningStatus,
                    ...restData
                } = prevState;
                newFormData = restData;
            }
            return newFormData
        })
    }
    
    const getExperience = (event) => {
        const { checked } = event.target
        setHasExperience(checked);
        professionalFieldsAdder(checked);
    }
    
    // ==============================================
    
    
    
    // Handling resident is NRI or not
    const handleResidentType = (event) => {
        const {checked} = event.target;
        setNri(checked)
        setFormData(prevState => {
            return {
                ...prevState,
                residentType: checked ? "NRI" : ""
            }
        })
    }
    // ===============================
    
    
    // General change section 
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        setErrors(validateData({name, value}))
    };
    // =====================
    
    // Mobile number change section

    const mobileChange = (e) => {
        setErrors(validateInput("mobile", e));
        setFormData(prevState => {
            return {
                ...prevState,
                mobile: e
            }
        })
    }
    // ==============================
    
    // Education changing and modification section
    
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

    const [education, setEducation] = useState([
        {...educationSchema}
    ])

    const handleEducationChange = (event) => {
        const { name, value, id } = event.target
        setEducation(prevState => {
            let newArray = prevState[id];
            newArray = {
                ...newArray,
                [name]: value
            };
            return [
                ...prevState.slice(0, id),
                {...newArray},
                ...prevState.slice(id+1)
            ];
        });
        setEducationErrors(educationValidation(name, value, id));
    };

    const [isDisabled, setIsDisabled] = useState([false]);
    const handleEducationPursuing = (event) => {
        const {id, checked} = event.target
        setIsDisabled(prevState => {
            let changedDisabled = prevState[id];
            changedDisabled = checked;
            return [
                ...prevState.slice(0, id),
                changedDisabled,
                ...prevState.slice(id+1)
            ]
        });

        if(checked === true) {
            setEducation(prevState => {
                let newArray = prevState[id];
                const { endDate, ...rest } = newArray;
                newArray = {
                    ...rest,
                    currentlyPursuing: "Yes"
                }
                return [
                    ...prevState.slice(0, id),
                    {...newArray},
                    ...prevState.slice(id+1)
                ]
            })
        } else {
            setEducation(prevState => {
                let newArray = prevState[id];
                const { currentlyPursuing, endDate ,...rest } = newArray;
                newArray = {
                    ...rest,
                    endDate: ""
                }
                return [
                    ...prevState.slice(0, id),
                    {...newArray},
                    ...prevState.slice(id+1)
                ]
            })
        }
    }
    // ======================================================

    const resumeUpload = (event) => {
        const file = event.target.files[0];
        if(!file) {
            setFormData(prevState => {
                return {
                    ...prevState,
                    resume: {
                        ...prevState.resume,
                        doesExist: false
                    }
                }
            })
            setErrors(prevErrors => {
                return {
                    ...prevErrors,
                    resume: "Please upload a file"
                }
            });
            return;
        }

        const allowedExtensions = ['pdf', 'docx'];
        const fileExtension = file.name.split('.').pop().toLowerCase();
        if(!allowedExtensions.includes(fileExtension)) {
            setErrors(prevState => {
                return {
                    ...prevState,
                    resume: "Upload only .pdf and .docx files"
                }
            })
            return;
        }

        const maxFileLimit = 2000;
        const size = Math.round(file.size / 1024);
        if(size <= maxFileLimit){
            setFormData(prevState => {
                return {
                    ...prevState,
                    resume: {
                        ...prevState.resume,
                        doesExist: true
                    }
                }
            })
            setErrors(prevState => {
                delete prevState.resume;
                return {
                    ...prevState
                }
            })
        } else {
            setFormData(prevState => {
                return {
                    ...prevState,
                    resume: {
                        ...prevState.resume,
                        doesExist: false
                    }
                }
            })
            setErrors(prevState => {
                return {
                    ...prevState,
                    resume: "File size is greater than 2MB"
                }
            })
        }
    }

    // console.log(errors);

    return (
        <form onSubmit={(event) => {event.preventDefault}} className="container mt-44 mb-24">
            <p className="uppercase font-bold text-3xl blue-text-gradient text-center my-10">You’re applying for {jobId}</p>

            <ForContactInfo 
                handleChange={handleChange}
                formData={formData}
                changeinMobile={mobileChange}
                errors = {...errors}
            />
            <Input 
                type="file" 
                name="resume" 
                id="resume" 
                required 
                className="max-w-fit" 
                onChange={resumeUpload} 
                title={'Resume'} 
                inputClass={`max-w-fit`}
            />
            {errors.resume && formData.resume.doesExist ? "" : <span>(Max File size must be 2MB)</span>}
            
            <span className="font-medium text-red-500 select-none">
                {errors.resume}
            </span>
            <Checkbox  
                handleChange={handleResidentType}
                nri={nri}
            />
            <ForAddress  
                handleChange={handleChange}
                formData={formData}
            />

            <h2 className="font-bold text-2xl mt-16">Education</h2>
            <ul className="grid gap-5 font-medium">
            {
                Array.from({
                    length: education.length
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
                                    onChange={handleEducationChange}
                                    value={education[MainIndex][field.name]}
                                    key={index}
                                    error={...errors[MainIndex]}
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
                                    onChange={handleEducationChange}
                                    value={education[MainIndex][field.name]}
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
                                        onChange={handleEducationChange}
                                        value={education[MainIndex][field.name]}
                                        key={index}
                                        disabled={index == 2 && isDisabled[MainIndex]}
                                        inputClass={index == 2 && isDisabled[MainIndex] ? "bg-gray-200 disabled:hover:cursor-not-allowed" : ""}
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
                                    value={education[MainIndex][field.name]}
                                    onChange={handleEducationChange}
                                    key={index}
                                    />
                                    ))
                                }
                            </div>
                            <label htmlFor="" className="max-w-fit mb-3 flex items-center gap-3">
                                <input type="checkbox" name="currentlyPursuing" id={MainIndex} onChange={handleEducationPursuing} />
                                <span>Currently Pursuing</span>
                            </label>
                            <button 
                                className="max-w-fit rounded-lg flex items-center px-4 py-2  border-red-600 border gap-2 font-medium text-red-600 hover:bg-red-600 hover:text-white" 
                                onClick={(event) => {
                                    event.preventDefault();
                                    if(education.length > 1) {
                                        setEducation(prevState => {
                                            const firstHalf = prevState.slice(0, MainIndex);
                                            const secondHalf = prevState.slice(MainIndex+1);
                                            return [...firstHalf, ...secondHalf];
                                        })
                                    } else {
                                        alert("Atleast one education qualification is must!")
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
                    setEducation(prevState => {
                        return [...prevState, {...educationSchema}];
                    })
                }}
            >
            Add Education +
            </button>

            <h2 className="blue-text-gradient font-bold text-2xl mt-10 my-4 capitalize">Professional Detail</h2>
            <label htmlFor="hasExperience" className="flex items-center gap-2">
                <input type="checkbox" name="hasExperience" 
                onChange={getExperience}/>
                <span className="porse font-medium">Do you have any previous work experience ?</span>
            </label>
            {
                hasExperience ? 
                <div className="grid sm:grid-cols-2 gap-4 font-medium my-4">
                    {
                    inputFields.professionalDetails.map((field, index) => (
                        <Input 
                        {...field}
                        onChange={handleChange}
                        error={Object.keys(errors).includes(field.name) && errors[field.name]}
                        key={index}
                        />
                    ))
                    }
                </div>
                :
                ""
            }
            <button 
                type="submit" 
                className=" max-w-fit px-4 py-2 bg-gradient-to-br from-[#2EA990] to-[#107882] hover:from-[#107882] hover:to-[#107882] cursor-pointer font-medium text-[#ffffffe7] hover:text-white text-opacity-[100%] rounded-md">
                Submit Now
            </button>
        </form>
    );
}

export default JobApplication