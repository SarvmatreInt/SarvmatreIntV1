import AboutSection from "./HomePageComponant/AboutSection/AboutSection"
import Bnaer from "./HomePageComponant/Baner.jsx/Bnaer"
import BecomeOurPartner from "./HomePageComponant/BecomeOurPartner/BecomeOurPartner"
import Intrestus from "./HomePageComponant/InterestedInUs/Intrestus"
import IntoSec from "./HomePageComponant/IntroSec/IntoSec"
import Newsletter from "./HomePageComponant/Newsletter/Newsletter"
import ProblemWesolve from "./HomePageComponant/ProblemweSolvw/ProblemWesolve"
import Reasons from "./HomePageComponant/Reasons/Reasons"
import WeDo from "./HomePageComponant/WeDo/WeDo"
import WhatWeOffer from "./HomePageComponant/WhatWeOffer/WhatWeOffer"
import Tagline from "./HomePageComponant/tagLine/Tagline"

const Homepage = () => {
  return (
    <div className="mx-auto p-0 home-style overflow-x-hidden">
      <IntoSec/>
      <Tagline/>
      <AboutSection/>
      <WeDo/>
      <WhatWeOffer/>
      <Bnaer/>
      <Reasons/>
      <ProblemWesolve/>
      <BecomeOurPartner/>
      <Intrestus/>
      {/* <WhatWeDo/> */}
      <Newsletter/>
    </div>
  )
}

export default Homepage
