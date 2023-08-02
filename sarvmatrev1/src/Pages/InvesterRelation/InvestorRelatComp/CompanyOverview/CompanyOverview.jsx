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
         <div className='py-10'>
            <h1 className='text-4xl text-center font-bold'>Company Overview</h1>
         </div>
         <div>
         <hr />
            <div className='flex flex-row justify-center gap-5 '>
                <div>
                    <button className='button-27' onClick={()=>serOverview(1)}>values</button>
                </div>
                <div>
                    <button className='button-27' onClick={()=>serOverview(2)}>values</button>
                </div>
                <div>
                    <button className='button-27' onClick={()=>serOverview(3)}>values</button>
                </div>
                <div>
                    <button className='button-27' onClick={()=>serOverview(4)}>values</button>
                </div>
                <div>
                    <button className='button-27' onClick={()=>serOverview(5)}>values</button>
                </div>
            </div>
            <hr />
         </div>
    </div>
      {
        ShowOverview(currentOve)
      }
    </div>
  )
}

export default CompanyOverview
