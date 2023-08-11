import FAQComp from "./FAQComp";
import smile from "./smile.png";
import { useState } from "react";

const FAQ = () => {
  const DATA = [
    {
      src: smile,
      title: "How can I get in touch with Sarvmatre International?",
      content:
        'If you have any questions or inquiries, you can reach out to us through the "Contact Us" form on our website. You can also find our contact details, including phone number and email address, for direct communication.',
    },
    {
      src: smile,
      title: "What kind of inquiries can I contact you about?",
      content:
        "We're here to assist you with a wide range of inquiries, including sales, support, career, grievance redressal, business partnerships, media inquiries, and more. Feel free to reach out to us with any questions you have.",
    },
    {
      src: smile,
      title:
        "What information should I include in my message when using the contact form?",
      content:
        "Please provide your name, email address, phone number, and a detailed message outlining your inquiry or feedback. The more information you provide, the better we can assist you",
    },
    {
      src: smile,
      title: "How long does it take to receive a response to my message?",
      content:
        "We strive to respond to all inquiries as quickly as possible. Our team typically replies within 24 to 48 hours on business days. However, during peak times, it may take a little longer.",
    },
  ];

  const [active, setActive] = useState(null);

  return (
    <div className="container">
      <div className="max-w-[75%] mx-auto ">
        <h1 className="text-center text-[40px] font-semibold my-16">
          Frequently asked questions
        </h1>
        {DATA.map((item, index) => (
          <FAQComp
            key={index}
            {...item}
            onClick={() => {
              setActive((prev) => {
                if (JSON.stringify(prev) === JSON.stringify(item)) {
                  return null;
                } else {
                  setActive(item);
                }
              });
            }}
            className={
              JSON.stringify(active) === JSON.stringify(item) ? "active" : ""
            }
          />
        ))}
      </div>
    </div>
  );
};
export default FAQ;
