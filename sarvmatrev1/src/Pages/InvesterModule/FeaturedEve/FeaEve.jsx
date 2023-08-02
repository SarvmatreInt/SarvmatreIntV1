import { data } from "autoprefixer";
import { useState } from "react";
import UpcomingFeatureEvent from "./FeaturedEventComp/UpcomingFeatureEvent";
import AllFeaturedEvent from "./FeaturedEventComp/AllFeaturedEvent";
import PastEvents from "./FeaturedEventComp/PastEvents";

const FeaEve = () => {
  const tabValue = [
    { name: "All ", value: 0 },
    { name: "Upcoming", value: 1 },
    { name: "Past ", value: 3 },
  ];
  const [activeEvent, setEvent] = useState(1);
  const [active, setActive] = useState(1);

  const ActiveTab = (active) => {
    switch (active) {
      case 1:
        return <h1>
            <AllFeaturedEvent/>
        </h1>;
      case 2:
        return <h1><UpcomingFeatureEvent/></h1>;
      case 3:
        return <h1><PastEvents/></h1>;
    }
  };
  return (
    <div className="mt-[150px]">
      <div className="container">
        <div>
          <div>
            <h1 className="text-center text-5xl font-bold ">Events</h1>
          </div>
          <div className="flex gap-5  justify-center pt-5 pb-2    ">
            {tabValue.map((data, index) => (
              <div className="" key={index}>
                <h1
                  className="text-center text-xl cursor-pointer"
                  onClick={() => setEvent(index + 1)}
                >
                  {data.name}
                </h1>
              </div>
            ))}
          </div>
          <hr />
          <div>{ActiveTab(activeEvent)}</div>
        </div>
      </div>
    </div>
  );
};

export default FeaEve;
