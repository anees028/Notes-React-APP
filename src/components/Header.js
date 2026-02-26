const Header = ({ handleToogleDarkMode }) => {
  return (
    <div className="header">
      <h1>Notes App</h1>
      <button
        className="save"
        onClick={() => handleToogleDarkMode((prevDarkMode) => !prevDarkMode)}
      >
        Toogle Mode
      </button>
    </div>
  );
};

export default Header;
