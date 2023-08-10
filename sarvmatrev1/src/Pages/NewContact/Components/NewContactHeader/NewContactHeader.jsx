import location from "./images/location.png";
import hours from "./images/hours.png";
import call from "./images/call.png";
import globe from "./images/globe.png";
import whatsapp from "./images/whatsapp.png";
import mail from "./images/mail.png";


const NewContactHeader = () => {

  const contactInformation = [
    {
      icon: location,
      heading: "Corporate Office",
      content: `Sarvmatre International Private Limited
      Jain Niwas, Tali Morh, Near Doordarshan Kendra,
      Old Janipur, Jammu, J&K, India - 180007`
    },
    {
      icon: hours,
      heading: "Working Hours",
      content: `10 a.m. to 8 p.m. IST(Monday-Saturday)`
    },
    {
      icon: call,
      content: `+91-8527992181, +91-9622044437`
    },
    {
      icon: whatsapp,
      content: `+91-9622044437`
    },
    {
      icon: mail,
      content: `www.sarvmatre.com`
    },
  ]

  return (
    <div className="flex flex-col gap-7 p-4 h-full shadow-[2px_5px_15px] rounded-xl border-[1px] border-blue-200">
      {/* <div className=" flex-1 left-0 top-0 text-white flex-col ">
        <div className="md:ml-auto  md:pt-[0px] ">
            <iframe
            className="w-[100%] h-[400px] lg:h-[1250px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5692258747736!2d77.5332501760903!3d12.935385215669216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3e468d8d36d3%3A0x694d74f6ac640acf!2sPES%20University!5e0!3m2!1sen!2sin!4v1690911728631!5m2!1sen!2sin"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
        </div>
      </div> */}
      <div className="p-4">
        <p className="bg-gradient-to-b from-[#2EA990] to-[#107882] text-transparent bg-clip-text text-3xl max-w-[225px] font-bold">Let’s get in touch</p>
        <p className="font-medium">Great! We’re excited to here from you and let’s start something special together.</p>
      </div>
      <div className="mt-3 mb-16 px-4 h-full">
        <h3 className="text-3xl font-bold">Contact Information</h3>
        <ul className="grid gap-5 justify-start mt-5">
          {
            contactInformation.map((contact, index) => {
              return (
                <li className="flex items-center lg:items-start gap-3">
                  <img src={contact.icon} alt="" className={`h-fit rounded-md self-start sm:w-[4%]`}
                  />
                  <div className={`${contact.heading ? `grid gap-3` : ``} text-start w-[90%]`}>
                    <h4 className={`${contact.heading ? `` : `hidden`} font-bold`}>{contact.heading}</h4>
                    <p>{contact.content}</p>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  );
};
export default NewContactHeader;
