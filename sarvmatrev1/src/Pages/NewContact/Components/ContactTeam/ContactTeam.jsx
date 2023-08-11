import ContactComp from "./ContactComp";
import bubbleChat from "./bubble-chat.png";
import enquiry from "./enquiry.png";
// import location from "./location.png";
import messenger from "./messenger.png";
import career from "./career-promotion.png";
import support from "./support.png";
import press from "./press-release.png";
import partner from "./partners.png";
// import { useState } from "react";

const ContactTeam = ({ onClick }) => {
  const DATA = [
    {
      src: enquiry,
      title: "General Enquiry",
      description: "We're there to help",
      linkText: "enquiries@sarvmatre.com",
      link: "mailto:enquiries@sarvmatre.com",
    },
    {
      src: partner,
      title: "Partnerships",
      description: "Partner with us",
      linkText: "partner@sarvmatre.com",
      link: "mailto:partner@sarvmatre.com",
    },
    {
      src: bubbleChat,
      title: "For Sales",
      description: "We'll take your sales to next level",
      linkText: "sales@sarvmatre.com",
      link: "mailto:sales@sarvmatre.com",
    },
    {
      src: support,
      title: "Support",
      description: "Chat with us",
      linkText: "support@sarvmatre.com",
      link: "mailto:support@sarvmatre.com",
    },
    {
      src: press,
      title: "Press & Media",
      description: "Reach Our Media team",
      linkText: "press@sarvmatre.com",
      link: "mailto:press@sarvmatre.com",
    },
    {
      src: career,
      title: "Career",
      description: "For your Brigt Career",
      linkText: "career@sarvmatre.com",
      link: "mailto:grievance@sarvmatre.com",
    },
    {
      src: messenger,
      title: "Grievance Redressal",
      description: "For your Grievance Redressal",
      linkText: "grievance@sarvmatre.com",
      link: "mailto:grievance@sarvmatre.com",
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
