const NewContactHeader = () => {
  return (
    <>
      <div className=" flex-1 left-0 top-0 text-white flex-col ">
        <div className="  md:ml-auto  md:pt-[0px] ">
            <iframe
            className="w-[100%] h-[400px] lg:h-[1250px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5692258747736!2d77.5332501760903!3d12.935385215669216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3e468d8d36d3%3A0x694d74f6ac640acf!2sPES%20University!5e0!3m2!1sen!2sin!4v1690911728631!5m2!1sen!2sin"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
        </div>
      </div>
    </>
  );
};
export default NewContactHeader;
