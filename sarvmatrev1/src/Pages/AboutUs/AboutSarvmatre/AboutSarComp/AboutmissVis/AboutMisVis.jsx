import logo from "./Asset 2.png";
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
      content:
        "At Sarvmatre International, we provide innovative solutions and unwavering support to businesses of all sizes and sectors. Our platform connects businesses with suppliers and customers both nationally and internationally, providing access to a wider range of suppliers and customers. .",
    },
  ];
  return (
    <div className="py-10">
      <div className="container">
        <div className="flex  flex-col-reverse lg:flex-row gap-5">
          <div className="flex flex-1 gap-20 flex-col">
            {Missiondata.map((item, index) => (
              <div key={index}>
                <div>
                  <div className="border-2 border-black rounded-xl p-4">
                    <h1 className="text-5xl font-bold pb-4">{item.title}</h1>
                    <p className="text-xl">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-1 gap-20 flex-col">
            {whatwedo.map((item, index) => (
              <div key={index}>
                  <div className=" rounded-xl p-4 flex gap-28 flex-col ">
                    <div className="flex py-3 justify-center items-center">
                      <img className="w-full" src={logo} alt="" />
                    </div>
                    <div className="border-2 border-black rounded-xl p-4 w-[100%]">
                      <h1 className="text-5xl font-bold pb-4">{item.title}</h1>
                      <p className="text-xl">{item.content}</p>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMisVis;
