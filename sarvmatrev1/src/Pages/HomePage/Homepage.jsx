import AboutSection from "./HomePageComponant/AboutSection/AboutSection"
import Bnaer from "./HomePageComponant/Baner.jsx/Bnaer"
import BecomeOurPartner from "./HomePageComponant/BecomeOurPartner/BecomeOurPartner"
import Intrestus from "./HomePageComponant/InterestedInUs/Intrestus"
import IntoSec from "./HomePageComponant/IntroSec/IntoSec"
import Newsletter from "./HomePageComponant/Newsletter/Newsletter"
import ProblemWesolve from "./HomePageComponant/ProblemweSolvw/ProblemWesolve"
import WeDo from "./HomePageComponant/WeDo/WeDo"
import WhatWeDo from "./HomePageComponant/WhatWeDo/WhatWeDo"
import WhatWeOffer from "./HomePageComponant/WhatWeOffer/WhatWeOffer"

const Homepage = () => {
  return (
    <div className="mx-auto p-0 home-style">
      <IntoSec/>
      <BecomeOurPartner/>
      <AboutSection/>
      <WhatWeOffer/>
      <WhatWeDo/>
      <Bnaer/>
      <WeDo/>
      <Newsletter/>
      <Intrestus/>
      <ProblemWesolve/>
    </div>
  )
}

export default Homepage
