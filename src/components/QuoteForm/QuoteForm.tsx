import { SyntheticEvent, useState } from "react";
import useQuotes from "../../hooks/useQuotes/useQuotes";
import { QuoteCreated } from "../../types/Quote";
import listOfAuthors from "../../utils/listOfAuthors";
import LargeButton from "../LargeButton/LargeButton";
import QuoteFormStyled from "./QuoteFormStyled";

const QuoteForm = (): JSX.Element => {
  const initialQuoteData: QuoteCreated = {
    textContent: "sas",
    author: "sdas",
    year: "",
    school: "",
    book: "",
    image: "",
  };

  const [quoteData, setQuoteData] = useState(initialQuoteData);

  const { createQuote } = useQuotes();

  const handleChangeSelect = (
    event:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => {
    setQuoteData({ ...quoteData, [event.target.id]: event.target.value });
  };

  const handleChangeImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuoteData({ ...quoteData, image: event.target.files![0] });
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    createQuote(quoteFormData);
  };

  const quoteFormData = new FormData();
  quoteFormData.append("textContent", quoteData.textContent);
  quoteFormData.append("author", quoteData.author);
  quoteFormData.append("year", quoteData.year);
  quoteFormData.append("school", quoteData.school);
  quoteFormData.append("book", quoteData.book);
  quoteFormData.append("image", quoteData.image as File);

  return (
    <>
      <QuoteFormStyled onSubmit={handleSubmit} data-testid="form-quote">
        <div className="form__fields-group">
          <label htmlFor="textContent" className="form__label">
            Quote
          </label>
          <textarea
            id="textContent"
            cols={30}
            rows={10}
            className="form__field form__field--big"
            onChange={handleChangeSelect}
          ></textarea>
          <label htmlFor="author" className="form__label">
            Philosopher
          </label>
          <select
            id="author"
            className="form__field"
            onChange={handleChangeSelect}
          >
            <option hidden>Choose a philosopher</option>
            {listOfAuthors.map((author) => (
              <option value={author}>{author}</option>
            ))}
          </select>
          <label htmlFor="year" className="form__label">
            Year
          </label>
          <input
            type="number"
            id="year"
            className="form__field form__field--small"
            onChange={handleChangeSelect}
          />
          <label htmlFor="school" className="form__label">
            School
          </label>
          <input
            type="text"
            id="school"
            className="form__field"
            onChange={handleChangeSelect}
          />
          <label htmlFor="book" className="form__label">
            Book
          </label>
          <input
            type="text"
            id="book"
            className="form__field"
            onChange={handleChangeSelect}
          />
          <label htmlFor="image" className="form__label">
            Image
          </label>
          <input
            type="file"
            id="image"
            className="form__field"
            onChange={handleChangeImage}
          />
        </div>
        <LargeButton text="Create" type="submit" />
      </QuoteFormStyled>
    </>
  );
};

export default QuoteForm;
