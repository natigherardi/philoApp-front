import ModalStyled from "./ModalStyled";

const Modal = (): JSX.Element => {
  return (
    <ModalStyled>
      <i className="modal__close"></i>
      <span className="modal__title">Success</span>
      <i></i>
      <span className="modal__description">
        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
      </span>
    </ModalStyled>
  );
};

export default Modal;
