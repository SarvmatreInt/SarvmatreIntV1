const SchedMeet = () => {
  return (
    <div className="pb-20">
      <div className="container">
        <h1 className="text-4xl py-10 font-bold">Schedule and Meet</h1>
        <div>
          <div>
            <form action="">
              <div className="flex flex-col lg:flex-row flex-wrap text-3xl font-medium pb-4 gap-4">
                <div className="flex flex-wrap gap-2 basis-[48%]">
                  <h1>Hey, my name is </h1>
                  <div className="flex-1">
                    <input
                      type="text"
                      name="name"
                      className="border-b-2 border-black focus:outline-none w-full placeholder:text-center min-w-[350px] md:min-w-[218px]"
                      placeholder="Type Here"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 basis-[48%]">
                  <h1>and I'm looking for </h1>
                  <div className="flex-1">
                    <select
                      name="job"
                      className="border-b-2 border-black focus:outline-none w-full min-w-[350px] md:min-w-[180px] sm:min-w-[0px] text-center"
                    >
                      <option disabled selected>
                        Default
                      </option>
                      <option>Text 1</option>
                      <option>Text 2</option>
                      <option>Text 3</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <h1>Get in touch with me at</h1>
                  <div className="flex flex-1">
                    <input
                      type="email"
                      className="placeholder:text-center border-b-2 border-black mx-3 w-full focus:outline-none min-w-[350px] md:min-w-[0px]"
                      placeholder="Your Email ID here "
                    />
                    <h1>!</h1>
                  </div>
                </div>
              </div>
              <div>
                <button className="button-17">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchedMeet;
