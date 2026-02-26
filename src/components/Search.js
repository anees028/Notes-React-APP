import { MdSearch } from "react-icons/md";

const Search = ({handleSearchNote}) => {
  const handleInput = (event) => {
    handleSearchNote(event.target.value);
  };

  return (
    <div className="search">
      <MdSearch className="search-icons" size="1.3em" />
      <input
        type="text"
        placeholder="Type to search..."
        onChange={handleInput}
      />
    </div>
  );
};

export default Search;
