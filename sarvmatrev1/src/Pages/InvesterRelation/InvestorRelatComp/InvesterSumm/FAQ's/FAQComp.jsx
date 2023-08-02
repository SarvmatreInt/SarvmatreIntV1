import down from "./down.png";
import up from "./up.png";
import { useState } from "react";

const FAQComp = ({ src, title, content, onClick, className, num }) => {
  return (
    <div
      className={`my-4 p-4 rounded-2xl bg-gray-100 cursor-pointer `}
      onClick={onClick}
    >
      <div className="flex relative select-none items-start ">
        <h1 className=" text-3xl rounded-[50%]  border-2  border-black p-2 mr-[10px]">
          {num}
        </h1>

        <div className="max-w-[80%] px-3 font-bold text-[30px]">{title}</div>
        <div className="absolute right-0">
          <img
            src={className === "active" ? up : down}
            className="w-[20px] cursor-pointer"
            onClick={onClick}
          />
        </div>
      </div>
      <div
        className={`ml-[45px] mr-8 pt-2 ${
          className === "active" ? "block" : "hidden"
        }`}
      >
        {content}
      </div>
    </div>
  );
};
export default FAQComp;
