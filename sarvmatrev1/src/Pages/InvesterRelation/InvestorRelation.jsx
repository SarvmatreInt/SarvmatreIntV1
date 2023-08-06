import BecomeOurPartner from "../HomePage/HomePageComponant/BecomeOurPartner/BecomeOurPartner";
import Newsletter from "../HomePage/HomePageComponant/Newsletter/Newsletter";
import CompanyOverview from "./InvestorRelatComp/CompanyOverview/CompanyOverview";
import CurrentInvester from "./InvestorRelatComp/CurrentInvester/CurrentInvester";
import FAQ from "./InvestorRelatComp/FAQ's/FAQ";

import Intro from "./InvestorRelatComp/Intro/Intro";
import InvesterContact from "./InvestorRelatComp/InvesterContactUs/InvesterContact";
import InvesterSumm from "./InvestorRelatComp/InvesterSumm/InvesterSumm";
import SchedMeet from "./InvestorRelatComp/SchedMeet/SchedMeet";

const InvestorRelation = () => {
  return (
    <div>
      <Intro />
      {/* <BecomeOurPartner /> */}
      <SchedMeet/>
      <InvesterSumm/>
      <InvesterContact/>
      <CurrentInvester/>
      <CompanyOverview/>
      <FAQ/>
      <Newsletter/>
    </div>
  );
};

export default InvestorRelation;
