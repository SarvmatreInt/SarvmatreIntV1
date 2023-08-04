import businessdisc from "./Business Discussion.png";
const Intrestus = () => {
  return (
    <div className="py-20 max-w-[1080px] mx-auto container">
      <div className="flex flex-col-reverse lg:flex-row  justify-center border-2 border-black rounded-xl py-5">
        <div className="flex-1 px-5 flex flex-col justify-center">
          <div>
            <h1 className="text-4xl py-2 font-bold">Explore our services range</h1>
          </div>
          <p className="text-xl pb-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Molestiae ab perspiciatis quo vel alias nesciunt, quae recusandae
            numquam dolores nihil?
          </p>
          <div>
            <button className="button-27">View All Services</button>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <img src={businessdisc} alt="" className="w-2/4" />
        </div>
      </div>
    </div>
  );
};

export default Intrestus;
