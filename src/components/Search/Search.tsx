import listOfAuthors from "../../utils/listOfAuthors";
import SearchStyled from "./SearchStyled";

const Search = (): JSX.Element => {
  return (
    <SearchStyled id="author">
      <option hidden>Filter by</option>
      {listOfAuthors.map((author) => (
        <option value={author}>{author}</option>
      ))}
    </SearchStyled>
  );
};

export default Search;
