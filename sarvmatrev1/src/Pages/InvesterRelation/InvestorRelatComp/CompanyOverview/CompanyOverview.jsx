import { useState } from "react";
import BecomeOurPartner from "../../../HomePage/HomePageComponant/BecomeOurPartner/BecomeOurPartner";
import ProblemWesolve from "../../../HomePage/HomePageComponant/ProblemweSolvw/ProblemWesolve";
// import WhatWeDo from '../../../HomePage/HomePageComponant/WhatWeDo/WhatWeDo';
import WhatWeOffer from "../../../HomePage/HomePageComponant/WhatWeOffer/WhatWeOffer";
import OurHistory from "../../../OurHistory/OurHistory";
import AboutValues from "../../../AboutUs/AboutSarvmatre/AboutSarComp/AboutValues/AboutValues";
const CompanyOverview = () => {
  const [currentOve, serOverview] = useState(1);
  const ShowOverview = (active) => {
    switch (active) {
      case 1:
        return <OurHistory />;
      case 2:
        return <BecomeOurPartner />;
      case 3:
        return <AboutValues />;
      case 4:
        return <ProblemWesolve />;
      case 5:
        return <WhatWeOffer />;
    }
  };
  return (
    <div>
      <div className="containe">
        <div className="pt-32 pb-24">
          <h1 className="text-6xl text-center font-bold">Company Overview</h1>
        </div>
        <div>
          <hr className="" />
          <div className="py-3 flex flex-row flex-wrap justify-center gap-5 bg-[#CAEEEB]">
            <div>
              <button className="button-17" onClick={() => serOverview(1)}>
                Our History
              </button>
            </div>
            <div>
              <button className="button-17" onClick={() => serOverview(2)}>
                Recognitions
              </button>
            </div>
            <div>
              <button className="button-17" onClick={() => serOverview(3)}>
                Our Values
              </button>
            </div>
            <div>
              <button className="button-17" onClick={() => serOverview(4)}>
                Problems We Solve
              </button>
            </div>
            <div>
              <button className="button-17" onClick={() => serOverview(5)}>
                What we Offer
              </button>
            </div>
          </div>
        </div>
        <hr className="" />
      </div>
      {ShowOverview(currentOve)}
    </div>
  );
};

export default CompanyOverview;
