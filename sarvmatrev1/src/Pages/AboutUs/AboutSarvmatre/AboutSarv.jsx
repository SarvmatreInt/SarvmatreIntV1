import OurHistory from "../../OurHistory/OurHistory";
import AboutDifference from "./AboutSarComp/AboutDifference/AboutDifference";
import AboutInto from "./AboutSarComp/AboutIntro/AboutInto";
import AboutValues from "./AboutSarComp/AboutValues/AboutValues";
import AboutMisVis from "./AboutSarComp/AboutmissVis/AboutMisVis";

const AboutSarv = () => {
  return (
    <div>
      <AboutInto />
      <AboutMisVis />
      <AboutDifference />
      <OurHistory />
      <AboutValues />
      <div className="py-32">
        <div className="container">
          <div className="flex justify-center items-center ">
            <iframe
              className="rounded-xl w-full h-[56.25vw] max-w-[960px] max-h-[515px]"
              src="https://www.youtube.com/embed/TKd_e9KVLP4"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSarv;
