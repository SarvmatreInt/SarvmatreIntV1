import busnessnet from "./image/Business Network.png";
import checkDoller from "./image/Check Dollar.png";
import guarent from "./image/Guarantee.png";
import transit from "./image/In Transit.png";
import Link from "./image/Link.png";
import proman from "./image/Project Management.png";
import Finac from "./image/Financial Growth Analysis.png";

const ProblemWeSolvecol1 = [
  {
    icon: Finac,
    Problem: "Business Analytics &Domestic and Global Tender",
  },
  {
    icon: checkDoller,
    Problem: "Financial Support & Credit Facilities",
  },
];
const ProblemWeSolvecol2 = [
  {
    icon: proman,
    Problem: "Business Operations Management",
    className:'bg-[#fff]'
  },
  {
    icon: busnessnet,
    Problem:
      "Tech enablement and upgradation, Marketing and Sales Channel creation and support in Hybrid mode",
      className:'bg-[#fff]'
  },
  {
    icon: transit,
    Problem: "Logistics and Delivery Management",
    className:'bg-[#fff]'
  },
];
const ProblemWeSolvecol3 = [
  {
    icon: Link,
    Problem: "Supply Chain Management & Inefficient Trading Mechanism",
  },
  {
    icon: guarent,
    Problem: " Quality and Inspection services",
  },
];
const ProblemWesolve = () => {
  return (
    <div className="py-32 bg-[#beeae7]">
      <div className="container">
        <div >
  
          <h1 className="text-6xl  pb-32 font-bold text-left text-[#902027]">
            PROBLEMS WE SOLVE
          </h1>
   
        </div>
        <div className="flex justify-center">
        </div>
        <div className="flex flex-col sm:flex-row gap-10">
          <div className="flex-1 flex sm:flex-col gap-4 relative sm:top-32">
            {ProblemWeSolvecol1.map((data, index) => (
              <div key={index} className="">
                <div className="rounded-xl relative gap-3 flex flex-col p-4 bg-[#fff]">
                  <div className="flex-1">
                    <img src={data.icon}  alt="" />
                  </div>
                  <div className="flex-1">
                    <h1 className="text-3xl ">{data.Problem}</h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex-1 flex flex-col gap-4">
            {ProblemWeSolvecol2.map((data, index) => (
              <div key={index} className="">
                <div className={` rounded-xl gap-3 flex flex-col p-4 ${data.className}`}>
                  <div className="flex-1">
                    <img src={data.icon} alt="" />
                  </div>
                  <div className="flex-1">
                    <h1 className="text-3xl">{data.Problem}</h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex-1 flex lg:flex-col  gap-4 relative sm:top-32">
            {ProblemWeSolvecol3.map((data, index) => (
              <div key={index} className="">
                <div className="rounded-xl  gap-3 flex flex-col p-4 bg-[#fff]">
                  <div className="flex-1">
                    <img src={data.icon} alt="" />
                  </div>
                  <div className="flex-1">
                    <h1 className="text-3xl">{data.Problem}</h1>
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

export default ProblemWesolve;
