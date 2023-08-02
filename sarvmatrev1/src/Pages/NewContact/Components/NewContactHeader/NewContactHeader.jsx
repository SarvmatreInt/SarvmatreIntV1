const NewContactHeader = () => {
  return (
    <>
      <div className="absolute h-[1000px] md:h-[1150px] w-[100vw] md:w-[40vw] bg-[#000] left-0 top-0 text-white flex flex-col md:pt-[80px]">
        <div className=" w-[100%] md:ml-auto pt-[80px] md:pt-[0px]">
            <iframe
            className="w-[752px] h-[1000px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5692258747736!2d77.5332501760903!3d12.935385215669216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3e468d8d36d3%3A0x694d74f6ac640acf!2sPES%20University!5e0!3m2!1sen!2sin!4v1690911728631!5m2!1sen!2sin"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
        </div>
        {/* <div className="w-[100%] md:max-w-[450px] ml-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109552.37343972929!2d75.77427165013239!3d30.90031908939201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a837462345a7d%3A0x681102348ec60610!2sLudhiana%2C%20Punjab!5e0!3m2!1sen!2sin!4v1690864640408!5m2!1sen!2sin"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[400px] w-[95%] mx-auto md:mx-[0] rounded-lg"
          />
        </div> */}
      </div>
      <div className="h-[600px] md:h-0"></div>
    </>
  );
};
export default NewContactHeader;
