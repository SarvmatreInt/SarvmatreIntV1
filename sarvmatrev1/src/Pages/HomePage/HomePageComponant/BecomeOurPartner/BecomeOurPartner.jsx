import fssai from "./image/1117705b4339fa3e722FSSAI-logo-min+line 1 1.png";
import fissi from "./image/clipart4702317 1.png";
import mait from "./image/Frame 427319491.png";
import feio from "./image/gv.png";
import startupIndia from "./image/image 2.png";
import startupjk from "./image/image 4.png";
import apodp from "./image/image 5.png";
import epch from "./image/image 6.png";
import spic from "./image/image 7.png";
import msms from "./image/pngegg 1.png";

const partnersrow1 = [
  {
    image: epch,
  },
  {
    image: spic,
  },
  {
    image: fssai,
  },
];
const partnersrow2 = [
  {
    image: msms,
  },
  {
    image: fissi,
  },
  {
    image: startupIndia,
  },
  {
    image: startupjk,
  },
];
const partnersrow3 = [
  {
    image: mait,
  },
  {
    image: feio,
  },
  {
    image: apodp,
  },
];

const BecomeOurPartner = () => {
  return (
    <div className="lg:py-36 mt-20 lg:my-0">
      <div className="container">
        <div>
        <h1 className="text-4xl xsm:text-5xl sm:text-6xl font-bold pb-32 text-center">Recognition</h1>
          <div className="flex  gap-5 flex-col  ">
            <div className=" flex pb-10 gap-4">
              {partnersrow1.map((partner, index) => (
                <div key={index} className="w-full flex items-center justify-center">
                  <div className="flex justify-center w-full">
                    <img className="w-[70%]" src={partner.image} alt="" />
                  </div>
                </div>
              ))}
            </div>
            <div className=" flex justify-center gap-4 pb-10">
              {partnersrow2.map((partner, index) => (
                <div key={index} className="flex items-center justify-center">
                  <div className="flex items-center justify-center">
                    <img className="w-3/4" src={partner.image} alt="" />
                  </div>
                </div>
              ))}
            </div>
            <div className=" flex justify-center">
              {partnersrow3.map((partner, index) => (
                <div key={index} className="flex items-center justify-center ">
                  <div className="flex items-center justify-center ">
                    <img className="w-3/4" src={partner.image} alt="" />
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

export default BecomeOurPartner;
