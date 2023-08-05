import { useEffect, useState } from "react";
import Me from "./image/Asset 1.png";
const superpower = `Empowering communities Through Sustainable Solution `;
const AboutSection = () => {
  const [typedSuperPower, setTypedSuperPower] = useState("");
  useEffect(() => {
    const timeout = setTimeout(() => {
      setTypedSuperPower(superpower.slice(0, typedSuperPower.length + 1));
    }, 50);
    return () => clearTimeout(timeout);
  }, [typedSuperPower]);
  return (
    <section className="home-about pb-10">
      <div className="container">
        <div className="aboutHome flex flex-col lg:flex-row my-16 gap-8 sm:gap-4">
          <div className=" flex justify-center items-center w-full" data-aos="fade-right">
            <img
              src={Me}
              data-aos="fade-right"
              alt=""
              className="object-contain h-[80%]"
            />
          </div>
          <div
            className="about-homecontent flex flex-col basis-2/3 justify-center w-full mt-5 lg:mt-0"
            data-aos="fade-lef"
          >
            <h3 className="text-3xl font-bold max-w-fit mb-3 py-3 px-5 rounded-md bg-[#2ea990] text-white">
              About us
            </h3>
            <h1 className="text-4xl xsm:text-5xl sm:text-6xl font-bold">
              {typedSuperPower}
            </h1>
            <p className="text-lg py-3 font-medium text-justify">
              I'm web developer, and I'm very passionate and dedicated to my
              work. With 20 years experience as a professional web developer, I
              have acquired the skills and knowledge necessary to make your
              project a success. I enjoy every step of the design process, from
              discussion and collaboration.
            </p>
            <div>
              <button className=" button-27" role="button">
                Know more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
