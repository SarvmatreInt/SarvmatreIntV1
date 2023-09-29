import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
const SchedMeet = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vpeq9q9",
        "template_gry2eux",
        form.current,
        "1UU7sjBqQJA7fjCrM"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="pt-24">
      <div className="container px-2">
        <h1 className="text-4xl py-10 font-bold">Schedule and Meet</h1>
        <div>
          <div>
            <form action="" ref={form} onSubmit={sendEmail}>
              <div className="flex flex-col lg:flex-row flex-wrap text-2xl md:text-3xl font-medium pb-4 gap-4">
                <div className="flex flex-wrap gap-2 basis-[48%]">
                  <h1>Hey, my name is </h1>
                  <div className="flex-1">
                    <input
                      type="text"
                      name="name"
                      className="border-b-2 border-black focus:outline-none w-[90%] placeholder:text-center min-w-[350px] md:min-w-[218px]"
                      placeholder="Type Here"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 basis-[48%]">
                  <h1>and I'm looking for </h1>
                  <div className="flex-1">
                    <select
                      name="meetFor"
                      className="border-b-2 border-black focus:outline-none w-[90%] min-w-[350px] md:min-w-[180px] sm:min-w-[0px] text-center"
                    >
                      <option selected>Investment</option>
                      <option selected>Investment2</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <h1>Get in touch with me at</h1>
                  <div className="flex flex-1">
                    <input
                      type="email"
                      name="email"
                      className="placeholder:text-center border-b-2 border-black mx-0 w-[90%] focus:outline-none min-w-[350px] md:min-w-[0px]"
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
