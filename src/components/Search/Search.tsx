import { useNavigate } from "react-router-dom";
import listOfAuthors from "../../utils/listOfAuthors";
import SearchStyled from "./SearchStyled";

const Search = (): JSX.Element => {
  const navigate = useNavigate();
  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    navigate(`/quote-filter/${event.target.value}`);
  };

  return (
    <>
      <label htmlFor="author" hidden>
        Choose author
      </label>
      <SearchStyled
        id="author"
        onChange={handleSelect}
        name="author"
        data-testid="select"
      >
        <option hidden>Filter by</option>
        {listOfAuthors.map((author) => (
          <option key={author} value={author} data-testid="select-option">
            {author}
          </option>
        ))}
      </SearchStyled>
    </>
  );
};

export default Search;
