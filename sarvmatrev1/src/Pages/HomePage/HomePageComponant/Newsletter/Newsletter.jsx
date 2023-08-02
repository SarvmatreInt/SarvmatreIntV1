import wire from "./Mask Group.png"
const Newsletter = () => {
  return (
    <div className="py-36">
      <div className="container">
        <div className="border border-black py-20 sm:px-20 rounded-xl bg-newsletter relative">
        <img src={wire} className="absolute right-0 top-0" alt="" />
          <div className="flex justify-center  ">
            <h1 className="text-center text-2xl w-full lg:text-5xl font-bold lg:w-3/4 ">
              Subscribe to get information, latest news and other interesting
              offers about Sarvmatre
            </h1>
          </div>

          <div className=" py-10 ">
            <div className="w-full">
              <form
                action=""
                className="  w-full flex justify-center gap-3" 
              >
              <div>
                <input
                  type="email"
                  className="border border-black p-3 text-xl rounded-xl"
                  placeholder="Your mail"
                />
              </div>
                <div className="">
                  <button className="button-27">Submit</button>
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
