import FAQComp from "./FAQComp";
import { useState } from "react";

const FAQ = () => {
  const DATA = [
    {
      num: "01",
      title: "What is the company's primary business focus?",
      content: `Our company focuses on Sector Agnostic approach, catering to the needs of variety of
        businesses. We are committed to growing and expanding in this area and believe that it presents
        significant growth potential for our investors.`,
    },
    {
      num: "02",
      title: "What sets your company apart from competitors?",
      content: `Our company's unique value proposition lies in our end-to-end solutions in both offline and
        online mode for multiple business needs and scalability. We believe that by harnessing the power of
        technology and providing intelligent and efficient decision-making, we can offer a   superior customer
        experience and drive growth for our investors.`,
    },
    {
      num: "03",
      title: "What is the long-term growth strategy for the company?",
      content: `Our long-term growth strategy is focused on expanding our market reach across the globe,
        making strategic acquisitions, investing in research and development to drive innovation, and optimizing
        our operations to increase efficiency and profitability. We believe there is significant potential for growth
        as our platform and services are specially designed to cater to the needs of variety of businesses. We are
        dedicated to executing on this strategy and are committed to delivering long-term value to our investors. `,
    },
    {
      num: "04",
      title: "Has the company raised an investment yet?",
      content: `No, the company has not raised investment yet. We are currently bootstrapped`,
    },
    {
      num: "05",
      title:
        "How to invest in the company and what information can potential investors expect to receive when considering investing in your company?",
      content: `Thank you for considering investing in our company. We are excited to welcome potential
        investors who are interested in partnering with us and supporting our growth journey. Our company is
        committed to transparency and we are dedicated to providing our investors with a comprehensive
        understanding of our business operations, financials, and growth plans. We believe that our success is
        directly tied to our investors, and we strive to create a mutually beneficial relationship with them. Please feel free to contact us to learn more about our company's growth drivers and explore potential
        investment opportunities. We will be happy to share the information with you and discuss how you can
        become a part of our success story`,
    },
    {
      num: "06",
      title: "How does the company plan to utilize the investment funds?",
      content: `Our primary goal is to use the funds to fuel our growth and expansion plans. This may include
        strengthening the technology, increasing our marketing efforts, hiring additional staff, investing in
        research and development, expanding our product offerings or entering new markets. We will ensure
        that any funds received are utilized efficiently and effectively to support the long-term growth of our
        company. As an investor, you can expect complete transparency from us on how the funds are being
        used and the progress being made towards our growth goals.`,
    },
    {
      num: "07",
      title: "What is the company's strategy for managing risk?",
      content: `Our risk management strategy is based on identifying, assessing, and mitigating risks across all
        areas of the business. We regularly monitor and evaluate our risk management approach to ensure it
        remains effective and aligned with our overall strategy.
        `,
    },
    {
      num: "08",
      title:
        "Are there any current or potential legal or regulatory issues that may impact the company's growth prospects?",
      content: `The company is committed to complying with all applicable laws and regulations, currently
        there are no legal and regulatory issues.`,
    },
  ];

  const [active, setActive] = useState(null);

  return (
    <div className="container py-28">
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
