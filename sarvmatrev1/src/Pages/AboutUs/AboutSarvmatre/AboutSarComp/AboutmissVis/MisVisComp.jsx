const MisVisComp = ({ title, text }) => {
  return (
    <div className="border-2 border-black rounded-xl p-4">
      <h1 className="text-3xl md:text-5xl font-bold pb-4">{title}</h1>
      <p className="text-lg md:text-xl h-[] text-justify">{text}</p>
    </div>
  );
};
export default MisVisComp;
