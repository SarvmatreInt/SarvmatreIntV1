import ReactDOM from "react-dom";
import close from "./close.png";

const Backdrop = (props) => {
  return (
    <div
      className="fixed top-0 left-0 w-[100%] h-[100vh] z-[20] bg-[rgba(0,0,0,0.75)]"
      onClick={props.onClose}
    />
  );
};

const ModalOverlay = (props) => {
  return (
    <div className="w-[100%] h-[100vh] flex items-center justify-center absolute">
      <div className="fixed bg-[white] p-[1rem] rounded-[14px] z-[60]">
        <div className="relative">
          <img
            src={close}
            className="absolute w-[20px] right-0 cursor-pointer"
            onClick={props.onClose}
          />
        </div>
        <div className="">{props.children}</div>
      </div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onClose={props.onClose}>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};
export default Modal;
