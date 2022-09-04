import ModalStyled from "./ModalStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const Modal = (): JSX.Element => {
  return (
    <ModalStyled>
      <FontAwesomeIcon icon={faX} className="modal__close-icon" />
      <span className="modal__title">Success ✓</span>

      <i></i>
      <span className="modal__description">
        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
      </span>
    </ModalStyled>
  );
};

export default Modal;
