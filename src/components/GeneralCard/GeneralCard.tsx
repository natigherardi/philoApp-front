import Quote from "../../types/Quote";
import GeneralCardStyled from "./GeneralCardStyled";

interface GeneralCardProps {
  quote: Quote;
}

const GeneralCard = ({
  quote: { author, image, textContent },
}: GeneralCardProps): JSX.Element => {
  return (
    <GeneralCardStyled>
      <p className="card__text">{textContent}</p>
      <span className="card__author">{author}</span>
      <img src={image as string} alt={author} className="card__image" />
    </GeneralCardStyled>
  );
};

export default GeneralCard;
