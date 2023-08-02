import { Link } from "react-router-dom";

const ContactComp = ({ src, title, description, link, linkText }) => {
  return (
    <div className="rounded border border-2 bg-white select-none sm:basis-[48%] lg:basis-[24%] h-[200px] basis-[100%] flex flex-col justify-between p-4 shadow-md">
      <img
        src={src}
        alt={title}
        className="w-[50px] h-[50px] rounded-lg border border-2 shadow-lg p-1"
      />
      <div>
        <div className="text-[20px] font-semibold">{title}</div>
        <div className="text-[gray] mb-3">{description}</div>
        <div>
          <Link to={link} className="font-semibold underline decoration-solid">{linkText}</Link>
        </div>
      </div>
    </div>
  );
};
export default ContactComp;
