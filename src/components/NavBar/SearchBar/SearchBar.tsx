import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState("");

  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent form submission
    navigate(`/search/${searchValue}`); // Use searchValue in the query string
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value); // Update searchValue as user types
  };

  return (
    <form className="d-flex" onSubmit={handleSearch} role="search">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={searchValue}
        onChange={handleChange}
      />
      <button className="btn btn-outline-success" type="submit">
        Search
      </button>
    </form>
  );
}
