const MisVisComp = ({ title, text }) => {
  return (
    <div className="border border-black rounded-xl p-4 bg-[#fcf9f9]">
      <h1 className="text-3xl md:text-5xl font-bold pb-4 text-[#902027]">{title}</h1>
      <p className="text-lg md:text-xl h-[] text-justify">{text}</p>
    </div>
  );
};
export default MisVisComp;
