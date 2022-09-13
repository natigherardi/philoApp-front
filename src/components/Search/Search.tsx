import { useState } from "react";
import { useNavigate } from "react-router-dom";
import listOfAuthors from "../../utils/listOfAuthors";
import SearchStyled from "./SearchStyled";

const Search = (): JSX.Element => {
  const navigate = useNavigate();
  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    navigate(`/quote-filter/${event.target.value}`);
  };

  return (
    <SearchStyled id="author" onChange={handleSelect}>
      <option hidden>Filter by</option>
      {listOfAuthors.map((author) => (
        <option value={author}>{author}</option>
      ))}
    </SearchStyled>
  );
};

export default Search;
