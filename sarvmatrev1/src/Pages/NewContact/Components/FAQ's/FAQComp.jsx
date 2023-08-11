import down from "./down.png";
import up from "./up.png";
import { useState } from "react";

const FAQComp = ({ src, title, content, onClick, className }) => {
  return (
    <div className={`my-4 p-4 rounded-2xl bg-gray-100 cursor-pointer`} onClick={onClick}>
      <div className="flex relative select-none items-start ">
        <img
          src={src}
          className="w-[30px] rounded-sm  border-2 border-black p-1 mr-[10px]"
        />
        <div className="max-w-[80%] font-bold text-[24px]">{title}</div>
        <div className="absolute right-0">
          <img
            src={className === "active" ? up : down}
            className="w-[20px] cursor-pointer"
          />
        </div>
      </div>
      <div
        className={`ml-[45px] mr-8 ${
          className === "active" ? "block" : "hidden"
        }`}
      >
        {content}
      </div>
    </div>
  );
};
export default FAQComp;
