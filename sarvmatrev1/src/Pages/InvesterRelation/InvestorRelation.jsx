import Bnaer from "../HomePage/HomePageComponant/Baner.jsx/Bnaer";
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
    <div className="overflow-hidden">
      <Intro />
      {/* <BecomeOurPartner /> */}
      <SchedMeet />
      {/* <CompanyOverview /> */}
      <Bnaer/>
      <InvesterContact />
      {/* <CurrentInvester /> */}
      <InvesterSumm />
      <FAQ />
      <Newsletter />
    </div>
  );
};

export default InvestorRelation;
