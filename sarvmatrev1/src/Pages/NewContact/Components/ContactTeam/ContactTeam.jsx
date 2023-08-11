import ContactComp from "./ContactComp";
import bubbleChat from "./bubble-chat.png";
import career from "./career-promotion.png";
import enquiry from "./enquiry.png";
// import location from "./location.png";
import messenger from "./messenger.png";
// import phone from "./phone-call.png";
import support from "./support.png";
import press from "./press-release.png";
import partner from "./partners.png";
import { useState } from "react";

const ContactTeam = ({ onClick }) => {
  const DATA = [
    {
      src: enquiry,
      title: "General Enquiry",
      description: "We're there to help",
      linkText: "enquiries@sarvmatre.com",
      link: "mailto:enquiries@sarvmatre.com",
      name: "general",
    },
    {
      src: partner,
      title: "Partnerships",
      description: "Partner with us",
      linkText: "partner@sarvmatre.com",
      link: "mailto:partner@sarvmatre.com",
      name: "partner",
    },
    {
      src: bubbleChat,
      title: "For Sales",
      description: "We'll take your sales to next level",
      linkText: "sales@sarvmatre.com",
      link: "mailto:sales@sarvmatre.com",
      name: "sales",
    },
    {
      src: support,
      title: "Support",
      description: "Chat with us",
      linkText: "support@sarvmatre.com",
      link: "mailto:support@sarvmatre.com",
      name: "support",
    },
    {
      src: press,
      title: "Press & Media",
      description: "Reach Our Media team",
      linkText: "press@sarvmatre.com",
      link: "mailto:press@sarvmatre.com",
      name: "press",
    },
    {
      src: career,
      title: "Career",
      description: "For your Brigt Career",
      linkText: "career@sarvmatre.com",
      link: "mailto:grievance@sarvmatre.com",
      name: "career",
    },
    {
      src: messenger,
      title: "Grievance Redressal",
      description: "For your Grievance Redressal",
      linkText: "grievance@sarvmatre.com",
      link: "mailto:grievance@sarvmatre.com",
      name: "grievance",
    },
  ];
  return (
    <div className="py-16">
      <div className=" container">
        <h1 className="text-center text-[40px] font-semibold">
          Contact Our Friendly Team
        </h1>
        <p className="text-center text-[20px] mb-8">
          Want to get in touch? We'd love to hear from you.
        </p>
        <div className="flex flex-wrap justify-center gap-4 max-w-[95%] mx-auto">
          {DATA.map((item, index) => (
            <ContactComp key={index} {...item} onClick={onClick} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default ContactTeam;
