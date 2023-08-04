import { useState } from 'react'
import BecomeOurPartner from '../../../HomePage/HomePageComponant/BecomeOurPartner/BecomeOurPartner';
import ProblemWesolve from '../../../HomePage/HomePageComponant/ProblemweSolvw/ProblemWesolve';
// import WhatWeDo from '../../../HomePage/HomePageComponant/WhatWeDo/WhatWeDo';
import WhatWeOffer from '../../../HomePage/HomePageComponant/WhatWeOffer/WhatWeOffer';
const CompanyOverview = () => {
    const [currentOve, serOverview] = useState(1);
    const ShowOverview = (active) => {
        switch(active){
            case 1:
                return <BecomeOurPartner/>
            case 2: 
            return <ProblemWesolve/>
            case 3: 
            return <WhatWeOffer/>
        }
    }
  return (
    <div>
    <div className='container'>
         <div className='pt-32 pb-24'>
            <h1 className='text-6xl text-center font-bold'>Company Overview</h1>
         </div>
         <div>
         <hr className='pb-3'/>
            <div className='flex flex-row justify-center gap-5 '>

                <div>
                    <button className='button-17' onClick={()=>serOverview(1)}>Our History</button>
                </div>
                <div>
                    <button className='button-17' onClick={()=>serOverview(2)}>Recognitions</button>
                </div>
                <div>
                    <button className='button-17' onClick={()=>serOverview(3)}>Our Values</button>
                </div>
                <div>
                    <button className='button-17' onClick={()=>serOverview(4)}>Our History</button>
                </div>
                <div>
                    <button className='button-17' onClick={()=>serOverview(5)}>What we Offer</button>
                </div>
            </div>
         </div>
         <hr className='mt-3'
         />
    </div>
      {
        ShowOverview(currentOve)
      }
    </div>
  )
}

export default CompanyOverview
