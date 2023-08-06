import { Link } from "react-router-dom";
import facebook from "./facebook.png";
import linkedin from "./linkedin.png";
import logo from "./logo.png";
import twitter from "./twitter.png";
import youtube from "./youtube.png";
import playstore from "./playstore.png";
import appstore from "./appstore.png";
import footerdesign from "./footersmalldesign.png";

const Footer = () => {
  const footer_data = [
    {
      heading: "Company",
      tags: [
        {
          heading: "Home",
          link: "",
        },
        {
          heading: "About Us",
          link: "/",
        },
        {
          heading: "Careers",
          link: "career",
        },
        {
          heading: "Investors Relation",
          link: "investors",
        },
        {
          heading: "Blogs",
          link: "bloghome",
        },
        {
          heading: "Newsroom",
          link: "/",
        },
      ],
    },
    {
      heading: "Prodley Platform",
      tags: [
        {
          heading: "Overview",
          link: "",
        },
        {
          heading: "About Prodley",
          link: "about",
        },
        {
          heading: "Join Prodley",
          link: "",
        },
      ],
    },
    {
      heading: "Support",
      tags: [
        {
          heading: "Help Center",
          link: "",
        },
        {
          heading: "FAQ's",
          link: "",
        },
        {
          heading: "Chat With Us",
          link: "",
        },
        {
          heading: "Contact Us",
          link: "",
        },
      ],
    },
    {
      heading: "Policies",
      tags: [
        {
          heading: "Terms & Conditions",
          link: "",
        },
        {
          heading: "Disclaimer",
          link: "",
        },
        {
          heading: "Privacy Policy",
          link: "",
        },
      ],
    },
  ];

  const footer_social_icons = [
    {
      icon: facebook,
      link: "#",
    },
    {
      icon: linkedin,
      link: "#",
    },
    {
      icon: twitter,
      link: "#",
    },
    {
      icon: youtube,
      link: "#",
    },
  ];

  return (
    <div className=" bg-gradient-to-r bg-primary1  absolute w-full left-0 relative">
      <div className="max-w-7xl my-0 mx-auto px-[1rem] pt-[3.47rem] pb-[1rem] lg:flex gap-5">
        <img
          src={footerdesign}
          alt=""
          className="absolute max-w-[200px] right-0 top-[-65px] z-[-1]"
        />
        <div className="flex flex-col gap-2 max-w-xs">
          <img src={logo} alt="" className="max-w-[150px]" />
          <p className="text-sm text-white">
            Sarvmatre International Private Limited Jain Niwas, Tali Morh, Near
            Doordarshan Kendra, Old Janipur, Jammu, J&K, India - 180007
          </p>
          <a
            href="mailto:corp@sarvmatre.com"
            className="text-sm text-white w-fit"
          >
            corp@sarvmatre.com
          </a>
          <ul className="flex mt-11 gap-4">
            {footer_social_icons.map((icon, index) => (
              <li key={index}>
                <a href={icon.link} className="text-white">
                  <img src={icon.icon} className="h-7 w-7" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex  flex-wrap xsm:grid xsm:grid-cols-2 sm:grid-cols-4 mt-8 gap-16 w-full z-40">
          {footer_data.map((data, index) => {
            return (
              <div
                className="flex  flex-col justify-start text-start text-white max-w-full"
                key={index}
              >
                <h3 className="font-bold text-2xl mb-1">{data.heading}</h3>
                <ul className="flex flex-col gap-2">
                  {data.tags.map((tag, index) => {
                    return (
                      <li key={index}>
                        <Link
                          to={`${import.meta.env.VITE_BASE_URL}/${tag.link}`}
                        >
                          {tag.heading}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center mx-2 my-7 gap-8">
        <a href="" className="max-w-[200px]">
          <img src={appstore} alt="" className="" />
        </a>
        <a href="" className="max-w-[229px]">
          <img src={playstore} alt="" className="" />
        </a>
      </div>
      <hr />
      <p className="py-10 mx-2 text-white text-xs text-center select-none">
        Copyright © 2023 SIPL | All Rights Reserved |{" "}
        <a href="/" className="hover:underline">
          Terms and Conditions
        </a>{" "}
        |{" "}
        <a href="/" className="hover:underline">
          Privacy Policy
        </a>
      </p>
    </div>
  );
};

export default Footer;
