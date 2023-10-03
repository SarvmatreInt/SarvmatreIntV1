import money from "../image/money.jpg";
const swag = [
  {
    title: "Invest",
    dot: ".",
  },
  {
    title: "Collabrate",
    dot: ". ",
  },
  {
    title: "Grow Together",
  },
];
const Into = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[600px] w-screen relative overflow-hidden z-0">
    <img src={money} alt="" className="absolute w-[100%] h-[100%] opacity-[0.2] -z-10" />
      <div className="flex flex-col 2xl:flex-row ">
        {swag.map((item, index) => (
          <div key={index}>
            <h1 className="text-[50px] xsm:text-[60px] sm:text-[88px] text-primary1">
              <span className="font-bold">{item.title}</span>
              <span className="font-extrabold pr-3">{item.dot}</span>
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Into;
