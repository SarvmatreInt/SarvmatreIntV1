import phots from "./sketch-5622725_640.webp";
import growth from "./business-163501_1280.webp";
// import map3 from "./istockphoto-1405728317-612x612.webp";
// import maps from "./map-of-the-world-2401458_640.jpg";
// import phots from "./social-media-g596044540_1280.png"
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
//     background: rgb(17,157,164);
// background: linear-gradient(83deg, rgba(17,157,164,1) 51%, rgba(234,240,206,1) 92%);
    <div className=" m-0 p-0 relative overflow-hidden">
    <img src={phots} alt="" className="absolute -z-10 w-[100%]   top-[2%] text-center   opacity-[0.25] "/>
    {/* <img src={growth} alt="" className="absolute -z-10 w-[100%]  text-center   opacity-[0.1] "/> */}
    {/* <img src={maps} className="absolute -z-10 w-[100%]  text-center   opacity-[0.5]" alt="" /> */}
    {/* <img src={map3} className="absolute -z-10 w-[100%]  text-center   opacity-[0.5] mix-blend-color-dodge" alt="" /> */}
      <div className="flex flex-col items-center mt-20 p-4 sm:p-0 font-poppins sm:items-center h-[70vh] xl:h-[85vh]">
        <div className="text-2xl sm:text-3xl font-bold mt-5 text-primary1">We Bring</div>
        <div className="flex flex-col sm:flex-row">
          {swag.map((item, index) => (
            <div key={index}>
              <h1 className="text-3xl font-medium xl:text-6xl ">
                <span className="text-4xl md:text-5xl lg:text-7xl xl:text-9xl font-bold text-primary1">{item.title}</span>
                {item.text} <span className="font-extrabold pr-3">{item.dot}</span>
              </h1>
            </div>
          ))}
        </div>
        <div>
          <h1 className="text-2xl sm:text-3xl pt-4 font-bold text-primary1">to the </h1>
        </div>
        <div>
          <h1 className="text-5xl xl:text-8xl font-bold text-gradient-to-r from-primary1 to-newsletter text-primary1" >Businesses</h1>
        </div>
      </div>
    </div>
  );
};

export default IntoSec;
