import FilterCheckbox from "./FilterCheckbox";

function SearchForm() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="search">
      <form className="search__form" onSubmit={handleSubmit}>
        <input type="text" className="search__form-input" placeholder="Фильм" required />
        <button className="search__submit" type="submit"></button>
      </form>
      <FilterCheckbox />
    </div>
  );
}

export default SearchForm;
