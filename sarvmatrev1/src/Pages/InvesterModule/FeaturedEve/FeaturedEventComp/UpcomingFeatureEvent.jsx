import noData from "./8961448_3973481.jpg"
const UpcomingFeatureEvent = () => {
  const upcData = [
    {
      date: "01",
      month:"oct",
      time: "timw",
      title: "Title 2",
      desrip: "lorem loren",
    },
    {
      date: "01",
      time: "timw",
      title: "Title 2",
      desrip: "lorem loren",
    },
    {
      date: "01",
      time: "timw",
      title: "Title 2",
      desrip: "lorem loren",
    },
    {
      date: "01",
      time: "timw",
      title: "Title 2",
      desrip: "lorem loren",
    },
  ];
  return (
    <div className="py-10">
      <div>
        <div className="flex gap-10 ">
          {upcData.map((data, index) => (
            <div key={index}>
           <div className="border rounded-xl border-black p-4">
                <div className="">
                  <div className="flex">
                    <div>
                    <div className="flex justify-center items-center w-full">
                      <h1 className="  w-full p-2 text-xl font-bold mr-3 flex flex-col"><span className="w-full">{data.date}</span> <span className="w-full">{data.month}</span> </h1>
                    </div>
                      <h1>{data.time}</h1>
                    </div>
                    <div className="flex justify-center items-center">
                      <h1 className="text-2xl font-bold">{data.title}</h1>
                    </div>
                  </div>
                    <div>
                      <h1>{data.desrip}</h1>
                    </div>
                </div>
              </div>
              
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default UpcomingFeatureEvent;
