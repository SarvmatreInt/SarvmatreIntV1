import ContactComp from "./ContactComp";
import bubbleChat from "./bubble-chat.png";
import enquiry from "./enquiry.png";
import messenger from "./messenger.png";
import support from "./support.png";
import press from "./press-release.png";

const ContactTeam = () => {



  const DATA = [
    {
      src: enquiry,
      title: "General Enquiry",
      description: "We're there to help",
      linkText: "enquiries@sarvmatre.com",
      link: "mailto:enquiries@sarvmatre.com",
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
      src: messenger,
      title: "Grievance Redressal",
      description: "For your Grievance Redressal",
      linkText: "grievance@sarvmatre.com",
      link: "mailto:grievance@sarvmatre.com",
    },
    {
      src: press,
      title: "Press & Media",
      description: "Reach Our Media team",
      linkText: "press@sarvmatre.com",
      link: "mailto:press@sarvmatre.com",
    }
  ];
  return (
    <div className="py-32">
    <div className=" container py-36">
      <h1 className="text-center text-[40px] font-semibold">
        Contact Our Friendly Team
      </h1>
      <p className="text-center text-[20px] mb-8">
        Let us know how we can help
      </p>
      <div className="flex flex-wrap justify-center gap-4 max-w-[95%] mx-auto">
        {DATA.map((item, index) => (
          <ContactComp key={index} {...item} />
        ))}
      </div>
    </div>
    </div>
  );
};
export default ContactTeam;
