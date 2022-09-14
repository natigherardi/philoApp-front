import ModalStyled from "./ModalStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useAppDispatch } from "../../store/hooks";
import { closeModalActionCreator } from "../../store/ui/uiSlice";

const Modal = (): JSX.Element => {
  const {
    modal: { isError, isOpen, message },
  } = useSelector((state: RootState) => state.ui);

  const dispatch = useAppDispatch();

  const text = isError ? "Error ꭗ" : "Success ✓";
  if (isOpen) {
    setTimeout(() => {
      dispatch(closeModalActionCreator());
    }, 5000);
  }

  const handleClose = () => {
    dispatch(closeModalActionCreator());
  };
  return (
    <>
      {isOpen && (
        <ModalStyled>
          <FontAwesomeIcon
            icon={faX}
            className="modal__close-icon"
            onClick={handleClose}
            data-testid="close-icon"
          />
          <span className="modal__title">{text}</span>
          <span className="modal__description">{message}</span>
        </ModalStyled>
      )}
    </>
  );
};

export default Modal;
