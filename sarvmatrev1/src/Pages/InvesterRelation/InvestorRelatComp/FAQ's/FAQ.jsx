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
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique repellat alias incidunt omnis totam earum laborum, at iusto praesentium cumque et aspernatur minus nesciunt ad blanditiis quas molestiae nam ipsa!",
    },
    {
      num: "03",
      title: "What is the long-term growth strategy for the company?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique repellat alias incidunt omnis totam earum laborum, at iusto praesentium cumque et aspernatur minus nesciunt ad blanditiis quas molestiae nam ipsa!",
    },
    {
      num: "04",
      title: "Has the company raised an investment yet?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique repellat alias incidunt omnis totam earum laborum, at iusto praesentium cumque et aspernatur minus nesciunt ad blanditiis quas molestiae nam ipsa!",
    },
    {
      num: "05",
      title:
        "How to invest in the company and what information can potential investors expect to receive when considering investing in your company?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique repellat alias incidunt omnis totam earum laborum, at iusto praesentium cumque et aspernatur minus nesciunt ad blanditiis quas molestiae nam ipsa!",
    },
    {
      num: "06",
      title: "How does the company plan to utilize the investment funds?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique repellat alias incidunt omnis totam earum laborum, at iusto praesentium cumque et aspernatur minus nesciunt ad blanditiis quas molestiae nam ipsa!",
    },
    {
      num: "07",
      title: "What is the company's strategy for managing risk?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique repellat alias incidunt omnis totam earum laborum, at iusto praesentium cumque et aspernatur minus nesciunt ad blanditiis quas molestiae nam ipsa!",
    },
    {
      num: "08",
      title:
        "Are there any current or potential legal or regulatory issues that may impact the company's growth prospects?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique repellat alias incidunt omnis totam earum laborum, at iusto praesentium cumque et aspernatur minus nesciunt ad blanditiis quas molestiae nam ipsa!",
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
