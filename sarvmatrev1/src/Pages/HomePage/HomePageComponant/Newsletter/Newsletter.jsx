import wire from "./Mask Group.png"
const Newsletter = () => {
  return (
    <div className="w-full py-10 max-w-[1440px] mx-auto">
      <div className="mx-5">
        <div className="border border-black py-20 sm:px-20 rounded-xl bg-newsletter relative">
        <img src={wire} className="absolute right-0 top-0" alt="" />
          <div className="flex justify-center  px-3">
            <h1 className="text-center text-2xl w-full lg:text-5xl font-bold lg:w-3/4 ">
              Subscribe to get information, latest news and other interesting
              offers about Sarvmatre
            </h1>
          </div>
          <div className="w-full">
            <form
              action=""
              className="w-full flex flex-wrap justify-center items-center gap-5 mt-7 px-3" 
            >
              <input
                type="email"
                className="border border-black w-full p-3 text-xl rounded-lg"
                placeholder="Your mail"
              />
              <div className="w-full justify-self-start"><button className="text-white bg-black p-3 rounded-xl w-full sm:w-[25%]">Submit</button></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
