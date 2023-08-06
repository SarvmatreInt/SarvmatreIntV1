import FAQComp from "./FAQComp";
import smile from "./smile.png";
import { useState } from "react";

const FAQ = () => {
  const DATA = [
    {
      src: smile,
      title: "What is TCS's area of operations?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique repellat alias incidunt omnis totam earum laborum, at iusto praesentium cumque et aspernatur minus nesciunt ad blanditiis quas molestiae nam ipsa!",
    },
    {
      src: smile,
      title: "When was TCS founded?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique repellat alias incidunt omnis totam earum laborum, at iusto praesentium cumque et aspernatur minus nesciunt ad blanditiis quas molestiae nam ipsa!",
    },
    {
      src: smile,
      title: "What is the employee strength of TCS?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique repellat alias incidunt omnis totam earum laborum, at iusto praesentium cumque et aspernatur minus nesciunt ad blanditiis quas molestiae nam ipsa!",
    },
    {
      src: smile,
      title: "Where is TCS located?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique repellat alias incidunt omnis totam earum laborum, at iusto praesentium cumque et aspernatur minus nesciunt ad blanditiis quas molestiae nam ipsa!",
    },
    {
      src: smile,
      title: "What is the address of TCS registered office?",
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
