import BecomeOurPartner from "../HomePage/HomePageComponant/BecomeOurPartner/BecomeOurPartner";
import Newsletter from "../HomePage/HomePageComponant/Newsletter/Newsletter";
import CompanyOverview from "./InvestorRelatComp/CompanyOverview/CompanyOverview";

import Intro from "./InvestorRelatComp/Intro/Intro";
import InvesterSumm from "./InvestorRelatComp/InvesterSumm/InvesterSumm";
import SchedMeet from "./InvestorRelatComp/SchedMeet/SchedMeet";

const InvestorRelation = () => {
  return (
    <div>
      <Intro />
      {/* <BecomeOurPartner /> */}
      <SchedMeet/>
      <CompanyOverview/>
      <InvesterSumm/>
      <Newsletter/>
    </div>
  );
};

export default InvestorRelation;
