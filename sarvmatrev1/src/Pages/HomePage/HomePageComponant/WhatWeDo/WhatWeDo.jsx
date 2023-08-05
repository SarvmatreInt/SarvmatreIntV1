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
  },
  {
    Icon: icon2,
    TitleNum: "02",
    TitleText:
      " We offers advanced technology and tools to small and medium-sized businesses for their success in the digital marketplace. ",
  },
  {
    Icon: icon3,
    TitleNum: "03",
    TitleText: " We are  an enabler focused on growth and development. ",
  },
  {
    Icon: icon4,
    TitleNum: "04",
    TitleText:
      "  The company fosters a culture of collaboration, creativity, excellence, and relentless commitment to innovation.",
  },
];

const WhatWeDo = () => {
  return (
    <div className="py-20">
      <div className="container">
        <div>
          <h1 className=" text-green-700 text-center font-bold text-4xl mb-8">
            What we do
          </h1>
        </div>
        <div className="flex justify-center">
          <p className=" text-center font-bold text-4xl py-10 w-9/12 ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. At vel
            ullam molestias in non esse asperiores dolores, sunt omnis quam!
          </p>
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-8 mt-10 justify-center">
            {WhatWeDoAray.map((item, index) => (
              <div key={index} className="flex-1 border-transparent border-2 hover:border-black rounded-xl p-10">
                <div className="  flex flex-col items-center ">
                  <div className="py-2"><img src={item.Icon} alt="" /></div>
                  <div>
                    <h1 className="font-bold text-5xl py-4">{item.TitleNum}</h1>
                  </div>
                  <div>
                    <p className="text-xl ">{item.TitleText}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
