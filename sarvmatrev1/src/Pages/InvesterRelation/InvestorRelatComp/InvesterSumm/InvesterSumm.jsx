import FAQ from "./FAQ's/FAQ";
import FAQComp from "./FAQ's/FAQComp";
import smile from "./smile.png";
import { useState } from "react";
import click1 from "./image/click1.avif"
import click2 from "./image/click2.jpeg"
import click3 from "./image/click3.jpeg"

const InvesterSumm = () => {
  const [active, setActive] = useState(null);
  const [preview, setPreview] = useState(1);

  const PreviewComp = (previewComp) => {
    switch (previewComp) {
      case 1:
        return <h1>
          <img src={click1} alt="" />
        </h1>;
        case 2:
        return <h1>
          <img src={click2} alt="" />
        </h1>;
        case 3:
        return <h1>
          <img src={click3} alt="" />
        </h1>;
        case 4:
        return <h1>
          <img src={click1} alt="" />
        </h1>;
        case 5:
        return <h1>
          <img src={click2} alt="" />
        </h1>;
    }
  };
  const DATA = [
    {
      src: smile,
      num:"01",
      title: "Featured Events",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique repellat alias incidunt omnis totam earum laborum, at iusto praesentium cumque et aspernatur minus nesciunt ad blanditiis quas molestiae nam ipsa!",
    },
    {
      src: smile,
      num:"02",
      title: "Latest News",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique repellat alias incidunt omnis totam earum laborum, at iusto praesentium cumque et aspernatur minus nesciunt ad blanditiis quas molestiae nam ipsa!",
    },
    {
      src: smile,
      num:"03",
      title: "Current Investor",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique repellat alias incidunt omnis totam earum laborum, at iusto praesentium cumque et aspernatur minus nesciunt ad blanditiis quas molestiae nam ipsa!",
    },
    {
      src: smile,
      num:"04",
      title: "Business presentation",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique repellat alias incidunt omnis totam earum laborum, at iusto praesentium cumque et aspernatur minus nesciunt ad blanditiis quas molestiae nam ipsa!",
    },
    {
      src: smile,
      num:"05",
      title: "Media Coverage & Press release",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique repellat alias incidunt omnis totam earum laborum, at iusto praesentium cumque et aspernatur minus nesciunt ad blanditiis quas molestiae nam ipsa!",
    },
  ];
  return (
    <div>
      <div className="container">
        <div >
          <h1 className="text-5xl text-center font-bold py-10">Latest Updates</h1>
        </div>
        <div className="flex pt-24">
          <div className="flex-1 ">
            <div className="">
              <div className="">
                <div className="max-w-[75%] mx-auto ">
                  <h1 className="text-center text-[40px] font-semibold "></h1>
                  {DATA.map((item, index) => (
                    <FAQComp
                      key={index}
                      {...item}
                      onClick={() => {
                        setPreview(index+1)
                        setActive((prev) => {
                          if (JSON.stringify(prev) === JSON.stringify(item)) {
                            return null;
                          } else {
                            setActive(item);
                          }
                        });
                      }}
                      className={
                        JSON.stringify(active) === JSON.stringify(item)
                          ? "active"
                          : ""
                      }
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            {
              PreviewComp(preview)
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvesterSumm;
