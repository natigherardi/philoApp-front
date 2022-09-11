import listOfAuthors from "../../utils/listOfAuthors";

const QuoteForm = (): JSX.Element => {
  return (
    <>
      <form>
        <label htmlFor="text-content" className="form__label">
          Quote
        </label>
        <textarea
          id="text-content"
          cols={30}
          rows={10}
          className="form__field--big"
        ></textarea>
        <label htmlFor="philosopher" className="form__label">
          Philosopher
        </label>
        <select id="author">
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
        <input type="number" id="year" className="form__field--small" />
        <label htmlFor="school" className="form__label">
          School
        </label>
        <input type="text" id="school" className="form__field" />
        <label htmlFor="book" className="form__label">
          Book
        </label>
        <input type="text" id="book" className="form__field" />
        <label htmlFor="image">Image</label>
        <input type="file" accept="image/png, image/jpg" id="image" />
      </form>
    </>
  );
};

export default QuoteForm;
