import wire from "./Mask Group.png"
const Newsletter = () => {
  return (
    <div className="bg-[#29bab1]">
      <div className="mx-2">
        <div className="py-20 sm:px-20 rounded-xl bg-[#29BAB1] relative">
        <img src={wire} className="absolute right-0 top-0" alt="" />
          <div className="flex justify-center  ">
            <h1 className="text-center text-white text-2xl w-full lg:text-5xl font-bold lg:w-3/4 ">
              Subscribe to get information, latest news and other interesting
              updates about Sarvmatre
            </h1>
          </div>
          <div className="pt-5 ">
            <div className="w-full mx-2">
              <form
                action=""
                className="w-[90%] max-w-[800px] mx-auto flex flex-col md:flex-row gap-3" 
              >
                <input type="email" placeholder="xyz@mail.com" className="p-2 pl-3 rounded-xl w-full"/>
                <button type="submit" className="bg-black max-w-fit px-3 py-2 text-white rounded-xl">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
