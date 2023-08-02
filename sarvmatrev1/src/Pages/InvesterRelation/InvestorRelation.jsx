import BecomeOurPartner from "../HomePage/HomePageComponant/BecomeOurPartner/BecomeOurPartner";
import Newsletter from "../HomePage/HomePageComponant/Newsletter/Newsletter";
import CompanyOverview from "./InvestorRelatComp/CompanyOverview/CompanyOverview";

import Intro from "./InvestorRelatComp/Intro/Intro";
import InvesterSumm from "./InvestorRelatComp/InvesterSumm/InvesterSumm";

const InvestorRelation = () => {
  return (
    <div>
      <Intro />
      {/* <BecomeOurPartner /> */}
      <CompanyOverview/>
      <Newsletter/>
      <InvesterSumm/>
    </div>
  );
};

export default InvestorRelation;
