import change from "./image/Change.png";
import equality from "./image/Equality.png";
import group from "./image/Group 42204.png";
import image4 from "./image/image 62.png";
import image5 from "./image/image 63.png";
import image6 from "./image/image 67.png";
import sustain from "./image/Sustainability.png";
import web from "./image/Web Accessibility.png";

const AboutValues = () => {
  const valueData = [
    {
      icon: group,
      title: "Integrity",
      description: `Upholding high ethical standards, honesty, transparency, and building trust.`,
    },
    {
      icon: equality,
      title: "Reliability",
      description: `Promoting teamwork, fostering collaboration, and achieving mutual success.`,
    },
    {
      icon: image6,
      title: "Accountability",
      description: `Consistently delivering on commitments and being dependable.`,
    },
    {
      icon: image5,
      title: "Collaboration",
      description: `Taking responsibility, holding oneself and others accountable, and learning from mistakes.`,
    },
    {
      icon: image4,
      title: "Customer-Centricity",
      description: ` Understanding and meeting customer needs, exceptional service, and building lasting relationships.`,
    },
    {
      icon: sustain,
      title: "Sustainability",
      description: ` Integrating sustainable practices, minimizing environmental impact, and promoting social responsibility.`,
    },
    {
      icon: change,
      title: "Innovation",
      description: `Embracing creativity, forward-thinking, and staying ahead.`,
    },
    {
      icon: web,
      title: "Adaptability",
      description: `Being flexible and adaptable to change in markets, customer needs, and industry trends.`,
    },
  ];
  return (
    <div className="py-10">
      <div className="container">
        <div>
          <div>
            <div className="text-6xl font-bold text-center py-16">
              Our Root Values
            </div>
          </div>
          <div>
            <div className="flex flex-wrap justify-center items-center gap-16 mt-5">
              {valueData.map((data, index) => (
                <div
                  key={index}
                  className="w-[400px] text-center border-2 border-black p-3 rounded-xl"
                >
                  <div className="border-2 border-black  p-4 rounded-xl relative">
                    <div className="flex justify-center absolute -top-[24%] left-[40%]">
                      <div className="border-2 border-red-900 rounded-[50%]">
                        <img
                          src={data.icon}
                          alt=""
                          className=" bg-white p-2 w-[70px] rounded-[50%] "
                        />
                      </div>
                    </div>
                    <div>
                      <h1 className="text-3xl font-medium py-3">
                        {data.title}
                      </h1>
                    </div>
                    <div>
                      <p>{data.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutValues;
