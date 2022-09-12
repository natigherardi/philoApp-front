import useQuotes from "../../hooks/useQuotes/useQuotes";
import { Quote } from "../../types/Quote";
import SmallButton from "../SmallButton/SmallButton";
import QuoteCardStyled from "./QuoteCardStyled";

interface QuoteCardProps {
  quote: Partial<Quote>;
  isPrivate: boolean;
}

const QuoteCard = ({
  quote: { author, backUpImage, textContent, id },
  isPrivate,
}: QuoteCardProps): JSX.Element => {
  const { deleteQuote } = useQuotes();

  const handleDelete = () => {
    deleteQuote(id as string);
  };

  return (
    <QuoteCardStyled>
      <p className="card__text">{textContent}</p>
      <span className="card__author">{author}</span>
      <div className="card__image-container">
        <img
          src={backUpImage}
          alt={author}
          className="card__image"
          width="150"
          height="150"
        />
      </div>
      {isPrivate && (
        <SmallButton type="delete" onClick={handleDelete}></SmallButton>
      )}
    </QuoteCardStyled>
  );
};

export default QuoteCard;
