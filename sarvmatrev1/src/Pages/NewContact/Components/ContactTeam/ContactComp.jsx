import { useState } from "react";
import EmailModal from "./EmailModal";



const ContactComp = ({ src, title, description, link, linkText }) => {

  const [ modalOpen, setModalOpen ] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  }
  const handleCloseModal = () => {
    setModalOpen(false);
  }

  console.log(modalOpen);

  return (
    <div className="rounded-xl  border-2 bg-white select-none sm:basis-[48%] lg:basis-[24%] basis-[100%] flex flex-col justify-between p-4 shadow-md">
      <img
        src={src}
        alt={title}
        className="w-[50px] h-[50px] rounded-lg  p-1"
      />
      <div>
        <div className="text-[20px] font-semibold">{title}</div>
        <div className="text-[gray] mb-3">{description}</div>
        <div>
          {/* <Link to={link} className="font-semibold underline decoration-solid">{linkText}</Link> */}
          <button value={link} onClick={handleOpenModal} className="bg-gradient-to-br from-[#2EA990] to-[#107882] text-white px-4 py-1 rounded-md hover:from-[#107882] hover:to-[#107882]">Send an email</button>
          {
            modalOpen &&
            <EmailModal 
              email={linkText}
              onClose={handleCloseModal}
              open={modalOpen}
            />
          }
        </div>
      </div>
    </div>
  );
};
export default ContactComp;
