import Modal from "./modal";

const Form = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <form className="w-[400px]">
        <h1>Send A message</h1>
      </form>
    </Modal>
  );
};
export default Form;
