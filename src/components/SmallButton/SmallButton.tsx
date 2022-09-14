import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faBookOpen } from "@fortawesome/free-solid-svg-icons";
import SmallButtonStyled from "./SmallButtonStyled";

interface SmallButtonProps {
  type: "delete" | "detail";
  onClick: () => void;
}

const SmallButton = ({ type, onClick }: SmallButtonProps): JSX.Element => {
  return (
    <>
      <SmallButtonStyled aria-label={`${type}`} onClick={onClick}>
        {type === "delete" ? (
          <FontAwesomeIcon icon={faTrash} />
        ) : (
          <FontAwesomeIcon icon={faBookOpen} />
        )}
      </SmallButtonStyled>
    </>
  );
};

export default SmallButton;
