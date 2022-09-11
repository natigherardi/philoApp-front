import listOfAuthors from "../../utils/listOfAuthors";
import LargeButton from "../LargeButton/LargeButton";
import QuoteFormStyled from "./QuoteFormStyled";

const QuoteForm = (): JSX.Element => {
  return (
    <>
      <QuoteFormStyled>
        <div className="form__fields-group">
          <label htmlFor="text-content" className="form__label">
            Quote
          </label>
          <textarea
            id="text-content"
            cols={30}
            rows={10}
            className="form__field form__field--big"
          ></textarea>
          <label htmlFor="philosopher" className="form__label">
            Philosopher
          </label>
          <select id="author" className="form__field">
            <option hidden selected>
              Choose an author
            </option>
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
          />
          <label htmlFor="school" className="form__label">
            School
          </label>
          <input type="text" id="school" className="form__field" />
          <label htmlFor="book" className="form__label">
            Book
          </label>
          <input type="text" id="book" className="form__field" />
          <label htmlFor="image" className="form__label">
            Image
          </label>
          <input
            type="file"
            accept="image/png, image/jpg"
            id="image"
            className="form__field"
          />
        </div>
        <LargeButton text="Create" type="submit" />
      </QuoteFormStyled>
    </>
  );
};

export default QuoteForm;
