import { useState } from "react";

const NewsModule = () => {
    const tabValue = [
        { name: "Featured", value: 0 },
        { name: "All", value: 1 },
      ];

      const [activeNews, setActiveNews] = useState(1);
      const [active, setActive] = useState(1);
      const ActiveTab = (active) => {
        switch (active) {
          case 1:
            return <h1>dcsd</h1>;
          case 2:
            return <h1>scbsdj</h1>;
        }
      };
  return (
    <div>
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
                  onClick={() => setActiveNews(index + 1)}
                >
                  {data.name}
                </h1>
              </div>
            ))}
          </div>
          <hr />
          <div>{ActiveTab(activeNews)}</div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default NewsModule
