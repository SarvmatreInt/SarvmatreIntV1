import prodley from './prodleyFeatures.svg';

const WhatIsProdley = () => {

    return (
    <>
        <p className="text-green uppercase mt-16 font-bold text-3xl pb-6 heading-border-for-about-page">
            what is the prodley platform
        </p>
        <p className="text-[#555555]">
            Our proprietary supply chain management software allows us to deliver promised service levels in a cost efficient way. Maven is a Cloud based warehouse management system to orchestrate client supply chains ensuring timely visibility to relevant information for all stake holders without compromising on productivity and reliably delivering service levels aligned with client business
        </p>
        <img src={prodley} alt="Prodley Features" className='my-8'/>
    </>
    )
}

export default WhatIsProdley