const whatOffer = [
  {
    title: "Tech Enable Platform",
    description:
      "Our smart Marketplace and trade plactform helps businesses do business across borders, manage supply chain, and find best deals.",
  },
  {
    title: "Technology and Digital solutions",
    description:
      "We offer end-to-end technology and digital solutions that help businesses harness the power of technology to drive growth and success",
  },
  {
    title: "Analytics & Insights",
    description:
      " We provide analytics and insights services to help businesses gain valuable insight into their operations, customres, and markets, and make data-driven decisions.",
  },
  {
    title: "  Business Expansion & Opportunities",
    description:
      "  We help businesses Globally build strategic partnerships, expand their network, and identify new growth opportunities through business connects, market research, business planning, and execution support.",
  },
  {
    title: "Building Business Credibility",
    description:
      "Establishing business credibility is crucial to building a strong reputation. We help businesses increase credibility, earn trust, and establish a solid foundation for growth and success through specialized services in business verification.",
  },
  {
    title: "  Logistics & Delivery Support",
    description:
      "  We provide comprehensive logistics and delivery support services to help businesses of all sizes transport their products safely and efficiently with the country and globally.",
  },
];
const WhatWeOffer = () => {
  return (
    <>
      <div className="container">
        <div className="flex flex-col w-full">
          <ul className=" w-full ">
            <li className="text-center font-bold text-4xl mb-8">What We Offer</li>
            {/* <br /> */}
          </ul>
          <div>
            <div className="flex lg:flex-row flex-col w-full flex-wrap justify-center gap-7 py-10">
              {whatOffer.map((offer, index) => (
                <div key={index} className="lg:w-1/4 sm:pb-7 border-t-2 border-black  ">
                    <div>
                      <h1 className="text-3xl w-full font-bold pt-5">{offer.title}</h1>
                    </div>
                    <div>
                      <p className="items-baseline pt-4 text-justify">{offer.description}</p>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeOffer;
