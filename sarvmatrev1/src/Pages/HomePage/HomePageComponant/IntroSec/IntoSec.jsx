const swag = [
  {
    title: "S",
    text: "ervice",
    dot: ".",
  },
  {
    title: "W",
    text: "ith",
    dot: ".",
  },
  {
    title: "A",
    text: "ccelerated",
    dot: ".",
  },
  {
    title: "G",
    text: "rowth",
  },
];
const IntoSec = () => {
  return (
    <div className=" ">
      <div className="flex flex-col justify-center items-center h-screen w-screen">
        <div className="text-3xl font-bold">We Bring</div>
        <div className="flex flex-col sm:flex-row">
          {swag.map((item, index) => (
            <div key={index}>
              <h1 className="text-6xl">
                <span className="text-9xl font-bold">{item.title}</span>
                {item.text} <span className="font-extrabold pr-3">{item.dot}</span>
              </h1>
            </div>
          ))}
        </div>
        <div>
          <h1 className=" text-3xl pt-4 font-bold">to the </h1>
        </div>
        <div>
          <h1 className="text-8xl font-bold " >Businesses</h1>
        </div>
      </div>
    </div>
  );
};

export default IntoSec;
