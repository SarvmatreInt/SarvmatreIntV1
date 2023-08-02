const swag = [
  {
    title: "Invest",
    dot: ".",
  },
  {
    title: "Collabrate",
    dot: ".",
  },
  {
    title: "Grow Together",

  },
];
const Into = () => {
  return (
    <div className=" ">
      <div className="flex flex-col justify-center items-center h-72 w-screen border-2 ">
        <div className="flex flex-col sm:flex-row">
          {swag.map((item, index) => (
            <div key={index}>
              <h1 className="text-6xl">
                <span className="text-8xl font-bold">{item.title}</span>
               <span className="font-extrabold pr-3">{item.dot}</span>
              </h1>
            </div>
          ))}
        </div>       
      </div>
    </div>
  );
};

export default Into;
