import check from "./check.png";
const AboutDifference = () => {
  const diffdata = [
    {
      number: 1,
      title: "Driving Growth with a Hybrid Approach",
      content:
        "This approach combines the best of traditional services with innovative digital solutions. This hybrid approach allows us to provide a holistic and integrated suite of services to businesses, offering scalable and flexible solutions that bring cost-effectiveness. We help businesses stay ahead of the curve and future-proof their operations.",
    },
    {
      number: 2,
      title: "Expanded Market Reach ",
      content:
        "We assist businesses in expanding their market reach. We help to identify new target markets, devise market entry strategies, and establish partnerships and distribution channels to help businesses penetrate new markets and unlock growth opportunities.",
    },
    {
      number: 3,
      title: "Market Insights",
      content:
        "We offer valuable market insights, enabling businesses to stay ahead of market trends and make data-driven decisions.",
    },
    {
      number: 4,
      title: "Brand Building",
      content:
        "We help businesses build strong and distinctive brands and to establish their brand presence, enhance brand equity, and differentiate themselves in the market.",
    },
  ];
  const diffdata2 = [
    {
      number: 7,
      title: "Innovation And Digital Transformation",
      content:
        "We assist businesses in embracing innovation and digital transformation. By leveraging emerging technologies, we help businesses enhance their digital capabilities, adopt new business models.",
    },
    {
      number: 5,
      title: "Long Term Partnership",
      content:
        "We strive to build long-term partnerships. We provide ongoing support, guidance, and collaboration, adapting our services to meet their evolving needs and ensuring that we continue to add value to their business at every stage of their growth journey.",
    },
    {
      number: 6,
      title: "Enhanced Efficiency",
      content:
        "We streamline business processes and optimize operations to enhance efficiency and productivity. Through process reengineering, automation, and implementation of best practices, we help businesses streamline their workflows, reduce costs, and achieve higher levels of operational excellence.",
    },

    {
      number: 8,
      title: "Strategic Guidance",
      content:
        "Helping businesses navigate through complex challenges and make informed decisions. We enable to identify growth opportunities, mitigate risks, and develop effective strategies that align with business goals.",
    },
  ];
  return (
    <div className="container">
      <div className="my-16">
        <h1 className=" font-bold text-5xl text-center">How we are different</h1>
      </div>
      <div className="flex flex-wrap flex-row gap-20 md:px-16">
        <div className="flex flex-1 flex-col flex-wrap">
          {diffdata.map((item, index) => (
            <div key={index} className="my-4">
              <div className="flex gap-5">
                <div className="w-[7%]">
                  <img
                    className="border border-black rounded-[50%] p-2 bg-red-300"
                    src={check}
                    alt=""
                  />
                </div>
                <div className="flex-1">
                  <h1 className=" pb-3 text-3xl font-medium">{item.title}</h1>
                  <p>{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex  sm:flex-1 flex-col flex-wrap">
          {diffdata2.map((item, index) => (
            <div key={index} className="my-4">
              <div className="flex gap-5">
                <div className="w-[7%]">
                  <img
                    className="border border-black rounded-[50%] p-2 bg-red-300"
                    src={check}
                    alt=""
                  />
                </div>
                <div className="flex-1">
                  <h1 className=" pb-3 text-3xl font-medium">{item.title}</h1>
                  <p>{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="flex-1 flex w-full  items-end justify-center flex-wrap">
            <img src={check} alt="" className="w-[100%]" />
          </div> */}
      </div>
    </div>
  );
};

export default AboutDifference;
