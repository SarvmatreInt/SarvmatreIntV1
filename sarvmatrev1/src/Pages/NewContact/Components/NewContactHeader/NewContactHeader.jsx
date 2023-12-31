import location from "./images/location-pin.png";
import hours from "./images/24-7.png";
import call from "./images/phone-call.png";
import globe from "./images/globe.png";
import whatsapp from "./images/whatsapp.png";
import linkedin from "./images/linkedin.png";
import instagram from "./images/instagram.png";
import facebook from "./images/facebook.png";
import phone from "./images/glowing-spider-web-dark-abstract-backdrop-generated-by-ai.jpg";
import { Link } from "react-router-dom";

const NewContactHeader = () => {
  const contactInformation = [
    {
      icon: location,
      heading: "Corporate Office",
      content: `Sarvmatre International Private Limited`,
      address: `Jain Niwas, Tali Morh, Near Doordarshan Kendra, Old Janipur, Jammu, J&K, India - 180007`,
    },
    {
      icon: hours,
      heading: "Working Hours",
      content: `10 a.m. to 8 p.m. IST(Monday-Saturday)`,
    },
    {
      icon: call,
      content: `+91-8527992181, +91-9622044437`,
    },
    {
      icon: whatsapp,
      content: `+91-9622044437`,
      to: `https://api.whatsapp.com/send/?phone=%2B919622044437&text&type=phone_number&app_absent=0`,
    },
    {
      icon: globe,
      content: `www.sarvmatre.com`,
      to: `https://www.sarvmatre.com`,
    },
  ];

  const socialLinks = [
    {
      icon: linkedin,
      to: "https://www.linkedin.com/company/sarvmatre-international-pvt-ltd/mycompany/",
    },
    {
      icon: facebook,
      to: "",
    },
    {
      icon: instagram,
      to: "",
    },
  ];

  return (
    // bg-[#CAEEEB]
    <div className="lg:basis-[40%] min-h-full relative bg-[#2EA990] ">
{/* <img src={phone} alt="" className="absolute h-[100%] w-[100%] opacity-[0.5]" /> */}
      <div className="flex flex-col h-full w-[90%] mx-auto gap-4 lg:gap-8 pt-8">
        {/* <h1 className="bg-gradient-to-b from-[#2EA990] to-[#107882] text-transparent bg-clip-text text-5xl font-bold py-2">

        </h1> */}
        {/* <p className="text-[#5b5b5b] text-lg font-medium">
          Great! We&apos;re excited to hear from you and let&apos;s start something
          special together
        </p> */}
        <div className="flex-1 flex flex-col ">
        <div className="border-[2px] rounded-xl p-4">
        <div className="pb-10 ">
          <h1 className="text-4xl font-bold text-[#ffffff]">Contact Information</h1>
          <p className="text-[#fefefe] text-md font-medium">
          Great! We&apos;re excited to hear from you and let&apos;s start something
          special together
        </p>
        </div>
          <div className="flex flex-col flex-1 gap-5 ">
            {contactInformation.map((item, index) => (
              <Link to={item.to} key={index}>
                <div className="flex  items-start">
                  <div className="min-w-[50px] w-[40px] pt-[3px]">
                    <img src={item.icon} className="h-[30px] object-contain" />
                  </div>
                  <div>
                    {/* {item.heading !== undefined && (
                      <>
                        <div className="text-2xl font-semibold mb-2">
                          {item.heading}
                        </div>
                      </>
                    )} */}
                    <div className="text-lg font-medium text-[#fefefe]">{item.content}</div>
                    <div className="text-lg font-medium text-[#fefefe]">{item.address}</div>
                  </div>
                </div>
              </Link>
            ))}
          <div className="">
            <h1 className="my-2">Follow us on:</h1>
            <div className="flex gap-4">
              {socialLinks.map((item, index) => (
                <Link to={item.to} key={index}>
                  <img src={item.icon} className="w-[40px]" />
                </Link>
              ))}
            </div>
          </div>
          </div>
          <div className="pt-[20px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3355.485063261844!2d74.84840047539005!3d32.752861473673725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzLCsDQ1JzEwLjMiTiA3NMKwNTEnMDMuNSJF!5e0!3m2!1sen!2sin!4v1691759570586!5m2!1sen!2sin"
            className="border-0 rounded-lg w-full h-[300px]"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};
export default NewContactHeader;
