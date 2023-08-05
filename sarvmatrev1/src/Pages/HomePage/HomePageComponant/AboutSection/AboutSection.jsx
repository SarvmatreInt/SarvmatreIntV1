import { useEffect, useState } from "react";
import Me from "./image/Asset 1.png";
const superpower = `Empowering Communities Through Sustainable Solutions `;
const AboutSection = () => {
  const [typedSuperPower, setTypedSuperPower] = useState("");
  useEffect(() => {
    const timeout = setTimeout(() => {
      setTypedSuperPower(superpower.slice(0, typedSuperPower.length + 1));
    }, 50);
    return () => clearTimeout(timeout);
  }, [typedSuperPower]);
  return (
    <div>
      <section className="home-about bg-[]">
        <div className="container">
          {/* <img className='bob1' src={bob} alt="" /> */}
          <div className="aboutHome flex flex-col sm:flex-row mt-36 mb-36 sm:gap-5 gap-11 ">
            <div className="aboutimg flex justify-center flex-1">
              <img src={Me} alt="" className="w-[60%]" />
            </div>
            <div
              className="about-homecontent flex flex-col flex-1 justify-center"
              data-aos="fade-lef"
            >
              <h3 className="text-3xl font-bold w-2/4 sm:w-1/4 mb-3 pl-2 bg-[#efcb96] rounded-md ">
                About us
              </h3>
              <h1 className="text-6xl font-bold">{typedSuperPower}</h1>
              <p className="text-lg py-3 font-medium">
                Sarvmatre is an innovative B2B e-commerce platform connecting
                businesses with global suppliers & customers. We empower
                sustainable growth through technology tools & collaborative
                relationships.
              </p>
              <div>
                <button className="button-17" role="button">
                  Know more
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
