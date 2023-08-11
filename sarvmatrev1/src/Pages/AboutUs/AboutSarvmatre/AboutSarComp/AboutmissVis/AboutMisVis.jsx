import logo from "./Asset 2.png";
import MisVisComp from "./MisVisComp";
const AboutMisVis = () => {
  const Missiondata = [
    {
      title: "Mission",
      text: "Our “Mission” is to empower businesses to thrive by providing innovative solutions and unwavering support. Our sector-agnostic approach caters to businesses of all sizes, we strongly endorse, support, and are committed to - 'Vocal for Local' Our platform enables businesses to connect seamlessly with suppliers and customers across the Country and in International markets.",
    },
    {
      title: "Our Vision",
      text: "Our 'Vision' is to be the foremost and trusted partner and leading facilitator of sustainable growth to businesses of all sizes across various sectors, empowering them to succeed in the highly competitive domestic and global markets, and contributing to the growth and development of the economy.",
    },
  ];
  const whatwedo = [
    {
      title: "What we do",
      text: "At Sarvmatre International, we provide innovative solutions and unwavering support to businesses of all sizes and sectors. Moreover, our platform connects businesses with suppliers and customers both nationally and international, providing access to a wider range of suppliers and customers. .",
    },
  ];
  return (
    // <div className="flex flex-col-reverse lg:flex-row gap-5 px-4">
    //   <div className="flex flex-1 gap-5 flex-col">
    //     {Missiondata.map((item, index) => (
    //       <MisVisComp key={index} {...item} />
    //     ))}
    //   </div>
    //   <div className="flex flex-1 gap-20 flex-col">
    //     {whatwedo.map((item, index) => (
    //       <div key={index}>
    //         <div className=" rounded-xl flex gap-5 flex-col">
    //           <div className="flex p-4 justify-center items-center">
    //             <img className="w-full" src={logo} alt="" />
    //           </div>
    //           <MisVisComp key={index} {...item} />
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <div className="container">
      <img src={logo} className="lg:hidden w-[80%] mx-auto mb-8" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="grid grid-cols-1 gap-8">
          {Missiondata.map((item, index) => (
            <MisVisComp key={index} {...item} />
          ))}
        </div>
        <div className="flex flex-col lg:gap-8">
          <div className="flex-1 flex items-center">
            <img
              src={logo}
              className="hidden lg:block max-h-[200px] w-[90%] mx-auto object-contain"
            />
          </div>
          {whatwedo.map((item, index) => (
            <MisVisComp key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMisVis;
