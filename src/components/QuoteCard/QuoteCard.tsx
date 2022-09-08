import Quote from "../../types/Quote";
import QuoteCardStyled from "./QuoteCardStyled";

interface QuoteCardProps {
  quote: Partial<Quote>;
}

const QuoteCard = ({
  quote: { author, image, textContent },
}: QuoteCardProps): JSX.Element => {
  return (
    <QuoteCardStyled>
      <p className="card__text">{textContent}</p>
      <span className="card__author">{author}</span>
      <div className="card__image-container">
        <img
          src={image as string}
          alt={author}
          className="card__image"
          width="150"
          height="150"
        />
      </div>
    </QuoteCardStyled>
  );
};

export default QuoteCard;
