import { useState } from "react";
import AllPressRel from "./PressReleaseComp/AllPressRel";
import PressReleaseFeat from "./PressReleaseComp/PressReleaseFeat";

const PressRelease = () => {
  const tabValue = [
    { name: "Featured", value: 0 },
    { name: "All", value: 1 },
  ];
  const [activePress, setActPress] = useState(1);

  const [active, setActive] = useState(1);

  const ActiveTab = (active) => {
    switch (active) {
      case 1:
        return <PressReleaseFeat />;
      case 2:
        return <AllPressRel />;
    }
  };
  return (
    <div className="mt-[150px]">
      <div className="container">
        <div>
          <div>
            <h1 className="text-center text-5xl font-bold ">Press Release</h1>
          </div>
          <div className="flex gap-5  justify-center pt-5 pb-2    ">
            {tabValue.map((data, index) => (
              <div className="" key={index}>
                <h1
                  className="text-center text-xl cursor-pointer"
                  onClick={() => setActPress(index + 1)}
                >
                  {data.name}
                </h1>
              </div>
            ))}
          </div>
          <hr />
          <div>{ActiveTab(activePress)}</div>
        </div>
      </div>
    </div>
  );
};

export default PressRelease;
