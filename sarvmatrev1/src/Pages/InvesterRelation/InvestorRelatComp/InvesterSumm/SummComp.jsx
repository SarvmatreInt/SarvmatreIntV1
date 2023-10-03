const SummComp = ({ title, className, onClick,id, content}) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer px-2 text-center py-4 font-bold text-3xl rounded-lg hover:outline hover:outline-1 hover:shadow-[2px_5px_5px] ${
        className === "active" ? "outline outline-1 shadow-[2px_5px_5px]" : ""
      }`}
    >
    {id}
      {title}
      <div
        className={`ml-[45px] mr-8 ${
          className === "active" ? "block" : "hidden"
        }`}
      >
        {content}
      </div>
    </div>
  );
};
export default SummComp;
