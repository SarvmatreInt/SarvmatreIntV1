import "./wedo.css";
import icon1 from "./image/Globe.png";
import icon2 from "./image/Cloud Development.png";
import icon3 from "./image/Positive Dynamic.png";
import icon4 from "./image/Teamwork.png";

const WhatWeDoAray = [
  {
    Icon: icon1,
    TitleNum: "01",
    TitleText:
      "We are innovative company that aims to transform the e-commerce industry on a global scale ",
    className: " lg:-top-36  lg:rotate-6",
  },
  {
    Icon: icon2,
    TitleNum: "02",
    TitleText:
      " We offers advanced technology and tools to small and medium-sized businesses for their success in the digital marketplace. ",
    cardid: "PageCard2",
    className: "lg:-bottom-0 lg:-rotate-6",
    subclass: "w-full",
  },
  {
    Icon: icon3,
    TitleNum: "03",
    TitleText: " We are  an enabler focused on growth and development. ",
    cardid: "PageCard3",
    className: "lg:-top-36 lg:rotate-6",
  },
  {
    Icon: icon4,
    TitleNum: "04",
    TitleText:
      "  The company fosters a culture of collaboration, creativity, excellence, and relentless commitment to innovation.",
    cardid: "PageCard4",
    className: "lg:mt-0 lg:-rotate-6",
    subclass: "sm:-mt-36",
  },
];

const WeDo = () => {
  return (
    <div>
      <div className="">
        <div className=" py-36">
          <h1 className="text-6xl text-[#209089] text-center font-bold">
            WHAT WE DO{" "}
          </h1>
        </div>
        <div className="container">
          <div className=" relative my-20 mx-auto flex    ">
            <div className="absolute lg:flex hidden">
              <svg
                width="1053"
                className="relative left-36 -top-24 opacity-2 rotate-2  "
                height="299"
                viewBox="0 0 1053 299"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 5C63.6479 7.06846 122.154 48.4378 266.607 209.778C408.887 368.692 664.391 265.811 740.5 196C813.878 128.695 1002.85 91.8755 1051 107.389"
                  stroke="#209089"
                  stroke-width="15"
                />
              </svg>
            </div>
            <div className="relative flex sm:flex-row flex-col xl:gap-20 gap-5  ">
              {WhatWeDoAray.map((data, index) => (
                <div key={index} className="flex-1 flex ">
                  <div
                    className={`  rounded-2xl shadow-md p-4 border flex-1   bg-[#F4F7E6] relative  ${data.className}`}
                  >
                    <h3 className="text-5xl font-black pb-3 text-[#902027] ">
                      {data.TitleNum}
                    </h3>
                    <p className="text-2xl font-medium"> {data.TitleText}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeDo;
