import LargeButtonStyled from "./LargeButtonStyled";

interface LargeButtonProps {
  text: string;
  actionOnClick?: () => void;
  type?: string;
}

const LargeButton = ({
  text,
  actionOnClick,
}: LargeButtonProps): JSX.Element => {
  return <LargeButtonStyled onClick={actionOnClick}>{text}</LargeButtonStyled>;
};

export default LargeButton;
