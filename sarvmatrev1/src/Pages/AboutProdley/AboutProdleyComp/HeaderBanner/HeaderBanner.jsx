import { Link } from "react-router-dom";

import "./HeaderBanner.css";
import headerBanner from "./aboutus.png";

const HeaderBanner = () => {
  return (
    <div className="grid items-center about-prodley bg-banner mt-[70px] md:mt-[84px] relative">
      <img src={headerBanner} className="absolute left-0 w-screen top-0" />
      <div className="flex flex-col gap-[.5rem] sm:gap-5 sm:max-w-sm md:max-w-full max-w-[150px] xsm:max-w-full z-10 text-white my-3 about-banner-container">
        <p className="font-bold sm:text-3xl pl-4">Online shopping is now easy with</p>
        <h1 className="text-[16px] font-bold sm:text-5xl pl-4">Prodley</h1>
        <Link className="bg-[#2EA990] w-fit px-8 md:py-1 rounded-lg about-btn-hover md:mt-2 ml-4 text-[0.7rem] xsm:text-[1rem]">Shop now</Link>
      </div>
    </div>
  );
};

export default HeaderBanner;
