import { useNavigate } from "react-router-dom";
import useQuotes from "../../hooks/useQuotes/useQuotes";
import { useAppSelector } from "../../store/hooks";
import { Quote } from "../../types/Quote";
import SmallButton from "../SmallButton/SmallButton";
import QuoteCardStyled from "./QuoteCardStyled";

interface QuoteCardProps {
  quote: Partial<Quote>;
}

const QuoteCard = ({
  quote: { author, backUpImage, textContent, id, owner },
}: QuoteCardProps): JSX.Element => {
  const { deleteQuote } = useQuotes();
  const { id: userId } = useAppSelector((state) => state.userSession.userData);
  const handleDelete = () => {
    deleteQuote(id as string);
  };
  const isPrivate = owner === userId;

  const navigate = useNavigate();

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
      <SmallButton
        type="detail"
        onClick={() => navigate(`/quote/${id}`)}
      ></SmallButton>
      {isPrivate && (
        <SmallButton type="delete" onClick={handleDelete}></SmallButton>
      )}
    </QuoteCardStyled>
  );
};

export default QuoteCard;
