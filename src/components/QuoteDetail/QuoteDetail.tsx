import { NavLink } from "react-router-dom";
import useQuotes from "../../hooks/useQuotes/useQuotes";
import { useAppSelector } from "../../store/hooks";
import { Quote } from "../../types/Quote";
import LargeButton from "../LargeButton/LargeButton";
import QuoteDetailStyled from "./QuoteDetailStyled";

interface QuoteDetailProps {
  quote: Partial<Quote>;
}

const QuoteDetail = ({
  quote: { author, backUpImage, book, school, textContent, year, id, owner },
}: QuoteDetailProps): JSX.Element => {
  const { id: userId } = useAppSelector((state) => state.userSession.userData);

  const isPrivate = owner === userId;

  const { deleteQuote } = useQuotes();

  const handleDelete = () => {
    deleteQuote(id as string);
  };

  return (
    <QuoteDetailStyled>
      <div className="quote-detail__image-container">
        <img
          src={backUpImage}
          alt={author}
          className="quote-detail__image"
          width="150"
          height="150"
        />
      </div>
      <p className="quote-detail__text">{textContent}</p>
      <span className="quote-detail__author">{author}</span>
      <div className="quote-detail__group-container">
        <ul className="quote-detail__group">
          <li className="quote-detail__item" key="year">
            Year: {year}
          </li>
          <li className="quote-detail__item" key="school">
            School: {school}
          </li>
          <li className="quote-detail__item" key="book">
            Book: {book}
          </li>
        </ul>
        <NavLink to={"/pageNotFound"} className="quote-detail__link">
          More from {author}
        </NavLink>
      </div>
      {isPrivate && <LargeButton text="Delete" actionOnClick={handleDelete} />}
    </QuoteDetailStyled>
  );
};

export default QuoteDetail;
