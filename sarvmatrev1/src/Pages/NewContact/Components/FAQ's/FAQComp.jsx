// import down from "./down.png";
// import up from "./up.png";

const FAQComp = () => {
  const DATA = [
    {
      id: 1,
      title: "How can I get in touch with Sarvmatre International?",
      content:
        'If you have any questions or inquiries, you can reach out to us through the "Contact Us" form on our website. You can also find our contact details, including phone number and email address, for direct communication.',
    },
    {
      id: 2,
      title: "What kind of inquiries can I contact you about?",
      content:
        "We're here to assist you with a wide range of inquiries, including sales, support, career, grievance redressal, business partnerships, media inquiries, and more. Feel free to reach out to us with any questions you have.",
    },
    {
      id: 3,
      title:
        "What information should I include in my message when using the contact form?",
      content:
        "Please provide your name, email address, phone number, and a detailed message outlining your inquiry or feedback. The more information you provide, the better we can assist you",
    },
    {
      id: 4,
      title: "How long does it take to receive a response to my message?",
      content:
        "We strive to respond to all inquiries as quickly as possible. Our team typically replies within 24 to 48 hours on business days. However, during peak times, it may take a little longer.",
    },
  ];
  return (
    <div className="bg-[#F8F9FA] py-[100px]">
      <div className="container">
        <div className=" mx-auto">
        <div className="text-center py-3">
        <span className="text-center px-3 py-1 bg-[#DFE0E1]">Frequently asked question</span>
        </div>
            <p className="sm:text-5xl text-4xl pb-[70px] font-bold text-center text-[#495057]">Questions & Answers</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-[15px] place-content-center justify-center items-center place-items-center " data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos="zoom-out-left">
                {
                    DATA.map((data, index)=>{
                        return(
                            <div  className="sm:w-[80%] ">
                                <h1 className="sm:text-[1.5rem] text-xl font-bold text-[#495057] pb-3">{data.title}</h1>
                                <p className=" text-lg">{data.content}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
      </div>
    </div>
  )
};
export default FAQComp;
