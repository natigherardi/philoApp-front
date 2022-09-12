import { NavLink } from "react-router-dom";
import useQuotes from "../../hooks/useQuotes/useQuotes";
import { Quote } from "../../types/Quote";
import LargeButton from "../LargeButton/LargeButton";
import QuoteDetailStyled from "./QuoteDetailStyled";

interface QuoteDetailProps {
  quote: Partial<Quote>;
  isPrivate: boolean;
}

const QuoteDetail = ({
  isPrivate,
  quote: { author, backUpImage, book, school, textContent, year, id },
}: QuoteDetailProps): JSX.Element => {
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
          <li className="quote-detail__item">Year: {year}</li>
          <li className="quote-detail__item">School: {school}</li>
          <li className="quote-detail__item">Book: {book}</li>
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
