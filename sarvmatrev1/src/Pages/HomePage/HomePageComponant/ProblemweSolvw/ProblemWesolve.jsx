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
  },
  {
    icon: busnessnet,
    Problem:
      "Tech enablement and upgradation, Marketing and Sales Channel creation and support in Hybrid mode",
  },
  {
    icon: transit,
    Problem: "Logistics and Delivery Management",
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
    <div className="py-20">
      <div className="container">
        <div>
          <h1 className="text-center font-bold text-4xl mb-8 text-green-700">
            Problem we solve
          </h1>
        </div>
        <div className="flex justify-center mb-10">
          <p className="text-center font-bold text-4xl py-10 w-11/12">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. At vel
            ullam molestias in non esse asperiores dolores, sunt omnis quam!
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-start-1 lg:col-end-5 flex flex-col justify-center gap-6">
            {ProblemWeSolvecol1.map((data, index) => (
              <div key={index} className="">
                <div className="border-2 rounded-xl border-black gap-3 flex flex-col items-center p-4">
                  <div className="flex-1">
                    <img src={data.icon} alt="" />
                  </div>
                  <div className="flex-1">
                    <h1 className="text-3xl text-center">{data.Problem}</h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:col-start-5 lg:col-end-9 flex flex-col justify-center gap-6">
            {ProblemWeSolvecol2.map((data, index) => (
              <div key={index} className="">
                <div className="border-2 rounded-xl border-black gap-3 flex flex-col items-center p-4">
                  <div className="flex-1">
                    <img src={data.icon} alt="" />
                  </div>
                  <div className="flex-1">
                    <h1 className="text-3xl text-center">{data.Problem}</h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:col-start-9 lg:col-end-13 flex flex-col justify-center gap-6">
            {ProblemWeSolvecol3.map((data, index) => (
              <div key={index} className="">
                <div className="border-2 rounded-xl border-black gap-3 flex flex-col items-center p-4">
                  <div className="flex-1">
                    <img src={data.icon} alt="" />
                  </div>
                  <div className="flex-1">
                    <h1 className="text-3xl text-center">{data.Problem}</h1>
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
