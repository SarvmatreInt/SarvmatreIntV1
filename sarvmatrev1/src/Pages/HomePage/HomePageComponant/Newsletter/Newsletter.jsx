import wire from "./Mask Group.png"
const Newsletter = () => {
  return (
    <div className=" bg-[#29bab1]">
      <div className="">
        <div className="py-20 sm:px-20 rounded-xl bg-[#29BAB1] relative">
        <img src={wire} className="absolute right-0 top-0" alt="" />
          <div className="flex justify-center  ">
            <h1 className="text-center text-white text-2xl w-full lg:text-5xl font-bold lg:w-3/4 ">
              Subscribe to get information, latest news and other interesting
              updates about Sarvmatre
            </h1>
          </div>
          <div className="pt-5 ">
            <div className="w-full">
              <form
                action=""
                className="  w-full flex justify-center " 
              >
              <div className="w-[30%]">
                <input
                  type="email"
                  className="w-[100%] border border-black p-[15px] text-xl rounded-l-xl"
                  placeholder="Your mail"
                />
              </div>
                <div className="">
                  <button className="button-27 rounded-r-xl rounded-l-sm">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
