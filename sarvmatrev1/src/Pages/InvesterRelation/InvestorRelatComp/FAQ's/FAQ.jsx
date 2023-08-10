import FAQComp from "./FAQComp";
import { useState } from "react";

const FAQ = () => {
  const DATA = [
    {
      num: "01",
      title: "What is the company's primary business focus?",
      content:
       `At Sarvmatre, we embrace a sector-agnostic approach as we drive our primary business focus 
       towards empowering businesses in both offline and online modes through our comprehensive and 
       innovative e-commerce platform. Our goal is to equip businesses operating in rural and urban areas with 
       the tools they need to thrive in both offline and digital marketplaces. We are steadfast in our 
       commitment to support traditional businesses, artisans, and rural enterprises by providing the 
       technology and resources essential for showcasing their unique products and connecting with a broader 
       customer base. Our platform serves as a bridge that brings together rural entrepreneurs and urban 
       consumers, fostering economic growth and sustainability. Through our integrated online and offline 
       presence, we enable businesses to reach customers in urban and rural areas, ensuring equal access to 
       growth opportunities and prosperity. Moreover, we facilitate access to a global marketplace, 
       empowering businesses to expand their reach beyond borders and tap into international markets. We 
       cater to a diverse range of sectors, from manufacturing to supply chain management, and strive to 
       create an inclusive environment where businesses from all corners of India can flourish, innovate, and 
       shape a better future.`,
    },
    {
      num: "02",
      title: "What sets your company apart from competitors?",
      content:
      `At Sarvmatre International, we differentiate ourselves from competitors through a synergy of 
      strategic factors that define our uniqueness`,
    },
    {
      num: "03",
      title: "What is the long-term growth strategy for the company?",
      content:
       `The long-term growth strategy for Sarvmatre International is built upon a multi-faceted approach that 
       encompasses innovation, expansion, and sustained value creation. Our vision is to evolve into a global 
       powerhouse in empowering businesses, connecting markets, and fostering economic growth. Here's a 
       glimpse into our strategic roadmap`,
    },
    {
      num: "04",
      title: "Has the company raised an investment yet?",
      content:
       `As of the current juncture, Sarvmatre International remains completely bootstrapped. Our trajectory of 
       growth and advancement has been propelled by our own internal resources and endeavors, showcasing 
       our steadfast commitment to self-reliance and astute strategic choices. This bootstrapping strategy 
       underscores our unwavering dedication to fostering sustainable and methodical expansion, all the while 
       retaining full command over our operations and overarching mission`,
    },
    {
      num: "05",
      title:
        "How to invest in the company and what information can potential investors expect to receive when considering investing in your company?",
      content:
        `Investing in Sarvmatre is a unique opportunity to be part of our journey to empower businesses and 
        communities. Potential investors can engage with us by reaching out to our Investor Relations team 
        through our dedicated contact channels. When considering investment in Sarvmatre, potential investors 
        can expect to receive comprehensive and transparent information about our company's financial 
        performance, growth strategies, market insights, and future plans. This includes detailed presentations, 
        financial statements, business models, and projections. We believe in fostering open communication and 
        building strong relationships with our investors, providing them with the necessary information to make 
        informed decisions aligned with their investment goals`,
    },
    {
      num: "06",
      title: "How does the company plan to utilize the investment funds?",
      content:
       `The investment funds raised by Sarvmatre International will be strategically allocated to fuel our growth 
       and expansion initiatives. Our primary focus is on maximizing the impact of the investment to drive 
       sustainable growth, enhance customer experience, and create long-term value for both our stakeholders 
       and the businesses we empower. Through careful planning and execution, we aim to strengthen our 
       technology infrastructure and expand our market presence`,
    },
    {
      num: "07",
      title: "What is the company's strategy for managing risk?",
      content:
       `Sarvmatre International is committed to a comprehensive risk management strategy that encompasses 
       various aspects of our operations. Our approach includes proactive identification, assessment, 
       mitigation, and monitoring of potential risks. We prioritize risk management across all levels of the 
       organization and promote a culture of accountability and preparedness. By adhering to stringent 
       regulatory compliance, implementing robust security measures, and maintaining a strong financial 
       foundation, we aim to minimize risks and ensure business continuity. Our strategy also involves 
       continuous evaluation and adaptation to changing market dynamics, technological advancements, and 
       external factors that could impact our business. Through regular risk assessments and the 
       implementation of effective risk management practices, we strive to safeguard our stakeholders' 
       interests and sustain our growth trajectory.`,
    },
    {
      num: "08",
      title:
        "Are there any current or potential legal or regulatory issues that may impact the company's growth prospects?",
      content:
        `Sarvmatre International is committed to compliance with all applicable laws and regulations, and we 
        continuously monitor the legal and regulatory landscape to mitigate potential risks. While we maintain a 
        proactive approach to ensure adherence to these standards, it's important to note that the business 
        environment can be dynamic and subject to changes in laws, regulations, and industry practices. Any 
        legal or regulatory issues that may arise can potentially impact our growth prospects. However, we are 
        dedicated to promptly addressing and resolving any such challenges by working closely with legal 
        experts and regulatory authorities to maintain our commitment to transparency, ethical business 
        practices, and long-term sustainability. Our focus on compliance and ethical conduct remains paramount 
        to our growth strategy, helping to build trust with stakeholders and sustain our position in the market`,
    },
  ];

  const [active, setActive] = useState(null);

  return (
    <div className="container">
      <div className="max-w-[75%] mx-auto ">
        <h1 className="text-center text-[40px] font-semibold my-16">
          Frequently asked questions
        </h1>
        {DATA.map((item, index) => (
          <FAQComp
            key={index}
            {...item}
            onClick={() => {
              setActive((prev) => {
                if (JSON.stringify(prev) === JSON.stringify(item)) {
                  return null;
                } else {
                  setActive(item);
                }
              });
            }}
            className={
              JSON.stringify(active) === JSON.stringify(item) ? "active" : ""
            }
          />
        ))}
      </div>
    </div>
  );
};
export default FAQ;
