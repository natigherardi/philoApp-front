import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import SmallButtonStyled from "./SmallButtonStyled";

interface SmallButtonProps {
  type: "delete" | "detail";
}

const SmallButton = ({ type }: SmallButtonProps): JSX.Element => {
  return (
    <>
      <SmallButtonStyled>
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
