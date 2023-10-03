import FAQ from "./FAQ's/FAQ";
import FAQComp from "./FAQ's/FAQComp";
import smile from "./smile.png";
import { useState } from "react";
import events from "./image/no_events.jpg";
import click2 from "./image/click2.jpeg";
import SummComp from "./SummComp";

const InvesterSumm = () => {
  const [preview, setPreview] = useState(0);

  const PreviewComp = (previewComp) => {
    switch (previewComp) {
      case 0:
        return (
          <div className="h-full w-full flex items-center justify-center text-2xl font-bold rounded-2xl bg-gray-100 text-black text-center">
            No Upcoming Events...
          </div>
        );
      case 1:
        return (
          <div className="h-full w-full flex items-center justify-center text-2xl font-bold rounded-2xl bg-gray-100 text-black text-center">
            No News Yet...
          </div>
        );
      case 2:
        return (
          <div className="h-full w-full flex items-center justify-center text-2xl font-bold rounded-2xl bg-gray-100 text-black text-center">
            We Are Currently Bootstrapped...
          </div>
        );
      case 3:
        return (
          // <img
          //   src={events}
          //   alt=""
          //   className="object-contain w-full rounded-2xl"
          // />
          <div className="h-full w-full flex items-center justify-center text-2xl font-bold rounded-2xl bg-gray-100 text-black text-center">
            Releasing Soon...
          </div>
        );
    }
  };
  const DATA = [
    {
      id:1,
      title: "Featured Events",
      content:"heloo"
    },
    {
      id:2,
      title: "Latest News",
      content:"heloo"
    },
    {
      id:3,
      title: "Current Investor",
      content:"heloo"
    },
    {
      id:4,
      title: "Media Coverage & Press release",
      content:"heloo"
    },
  ];

  
  const [activeState, setActiveState]=useState(null)
  return (
    <div className="bg-[#beeae7] py-8">
      <div className="container">
        <div>
          <h1 className="text-6xl text-center font-bold py-10">
            Latest Updates
          </h1>
        </div>
        <div className="flex w-[80%] mx-auto justify-center gap-8">
          <div className="flex flex-col gap-4">
            {DATA.map((item, index) => (
              <>
                <SummComp
                  key={index}
                 {...item}
                  onClick={() => {
                    setPreview(index);
                    setActiveState((prev)=>{
                      if(JSON.stringify(prev) === JSON.stringify(item)){
                        return null;
                      }else{
                        setActiveState(item)
                      }
                    })
                  }}
                  className={index === preview ? "active" : ""}
                />
                {index === preview && (
                  <div className="flex xl:hidden justify-center max-h-[400px]">
                    {PreviewComp(preview)}
                  </div>
                )}
              </>
            ))}
          </div>
          <div className="flex-1 justify-center max-h-[384px] hidden xl:flex">
            {PreviewComp(preview)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvesterSumm;
