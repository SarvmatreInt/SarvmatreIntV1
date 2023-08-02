import { useEffect, useState } from "react";
import Me from "./image/Asset 1.png";
const superpower = `Empowering communities Trough Sustainable Solution `;
const AboutSection = () => {
  const [typedSuperPower, setTypedSuperPower] = useState("");
  useEffect(() => {
    const timeout = setTimeout(() => {
      setTypedSuperPower(superpower.slice(0, typedSuperPower.length + 1));
    }, 150);
    return () => clearTimeout(timeout);
  }, [typedSuperPower]);
  return (
    <div>
      <section className="home-about my-10  p-11">
        <div className="container">
          {/* <img className='bob1' src={bob} alt="" /> */}
          <div className="aboutHome flex flex-col sm:flex-row mt-36 mb-36 sm:gap-5 gap-11">
            <div className="aboutimg flex justify-center flex-1" data-aos="fade-right">
              <img src={Me} data-aos="fade-right" alt="" className="w-3/4" />
            </div>
            <div className="about-homecontent flex flex-col flex-1 justify-center" data-aos="fade-lef">
              <h3 className="text-3xl font-bold w-2/4 sm:w-1/4 mb-3 pl-2 rounded-md bg-green-600">About us</h3>
              <h1 className="text-6xl font-bold">{typedSuperPower}</h1>
              <p className="text-lg py-3 font-medium">
                I'm web developer, and I'm very passionate and dedicated to my
                work. With 20 years experience as a professional web developer,
                I have acquired the skills and knowledge necessary to make your
                project a success. I enjoy every step of the design process,
                from discussion and collaboration.
              </p>
              <div>

<button className=" button-27" role="button">Know more</button>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
