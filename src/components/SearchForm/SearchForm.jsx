import { searchFormPT } from "../../utils/propTypes";

function SearchForm({ searchText, handleChange, handleSubmit, children, errorQuery}) {

  return (
    <div className="search">
      <form className="search__form" onSubmit={handleSubmit} noValidate>
        <input
          type="text"
          className="search__form-input"
          placeholder="Фильм"
          value={searchText}
          onChange={handleChange}
          required
        />
        <span className="search__error">{errorQuery}</span>

        <button className="search__submit" type="submit"></button>
      </form>
      {children}
    </div>
  );
}

SearchForm.propTypes = searchFormPT

export default SearchForm;
