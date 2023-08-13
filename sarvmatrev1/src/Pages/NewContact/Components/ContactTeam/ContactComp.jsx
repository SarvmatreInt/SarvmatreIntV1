// import { useState } from "react";
// import EmailModal from "./EmailModal";
import {Link} from "react-router-dom"



const ContactComp = ({
  src,
  title,
  description,
  link,
  linkText,
  onClick,
  name,
}) => {
  return (
    <div className="rounded-xl  border-2 bg-white select-none sm:basis-[48%] lg:basis-[24%]  basis-[100%] flex flex-col justify-between px-4 py-2 shadow-md">
      <img
        src={src}
        alt={title}
        className="w-[50px] h-[50px] rounded-lg  p-1"
      />
      <div>
        <div className="text-[20px] font-semibold">{title}</div>
        <div className="text-[gray] mb-3 h-[50px] lg:h-[30px]">
          {description}
        </div>
        <div>
          <Link to={link} className="font-semibold underline decoration-solid">
            {linkText}
          </Link>
        </div>
        {title !== "Career" && (
          <button
            className="bg-[#2EA990] mt-2 w-full py-1 rounded-lg text-white font-semibold text-xl active:outline-0 focus:outline-0"
            onClick={() => {
              onClick(name);
            }}
          >
            Contact Us
          </button>
        )}
        {title === "Career" && (
          <Link to="/career">
            <button className="bg-[#2EA990] mt-2 w-full py-1 rounded-lg text-white font-semibold text-xl active:outline-0 focus:outline-0">
              Career Page
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};
export default ContactComp;
