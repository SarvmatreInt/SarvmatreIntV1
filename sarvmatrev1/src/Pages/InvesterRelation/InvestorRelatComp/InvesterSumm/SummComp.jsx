const SummComp = ({ title, className, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer bg-gray-100 px-2 text-center py-4 font-bold text-3xl rounded-lg hover:outline hover:outline-1 hover:shadow-[2px_5px_5px] ${
        className === "active" ? "outline outline-1 shadow-[2px_5px_5px]" : ""
      }`}
    >
      {title}
    </div>
  );
};
export default SummComp;
