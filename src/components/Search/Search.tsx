import listOfAuthors from "../../utils/listOfAuthors";

const Search = (): JSX.Element => {
  return (
    <div>
      <select id="author" className="filter__select">
        <option hidden>Filter by</option>
        {listOfAuthors.map((author) => (
          <option value={author}>{author}</option>
        ))}
      </select>
    </div>
  );
};

export default Search;
