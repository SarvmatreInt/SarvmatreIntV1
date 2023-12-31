import { useEffect, useState } from "react";
import Me from "./image/Asset 1.png";
import { Link } from "react-router-dom";
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
      <section className="home-about">
        <div className="container">
          {/* <img className='bob1' src={bob} alt="" /> */}
          <div className="aboutHome flex flex-col lg:flex-row mt-36 mb-36 sm:gap-5 gap-11 ">
            <div className="aboutimg flex justify-center flex-1">
              <img
                src={Me}
                alt=""
                data-aos="fade-right"
                className="w-[60%] object-contain"
              />
            </div>
            <div
              className="about-homecontent flex flex-col flex-1 justify-center"
              data-aos="fade-left"
            >
              <h3 className="text-3xl font-bold max-w-fit mb-3 py-2 px-6 bg-[#2ea990] text-white rounded-md ">
                About us
              </h3>
              <h1 className="text-4xl sm:text-5xl font-bold">
                {typedSuperPower}
              </h1>
              <p className="text-lg py-3 font-medium xsm:text-justify">
                Sarvmatre is an innovative B2B e-commerce platform connecting
                businesses with global suppliers & customers. We empower
                sustainable growth through technology tools & collaborative
                relationships.
              </p>
              <div>
                <Link to="about/sarvmatre">
                  <button className="button-17" role="button">
                    Know more
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
