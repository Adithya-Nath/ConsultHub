function Searchbar({ searchTerm, onSearch }) {
  return (

    <div className="input-group w-75 mx-auto mb-4">
      <input
        type="search"
        placeholder="Search by company name..."
        className="form-control"
        value={searchTerm} 
        onChange={onSearch} />
      <button className="btn btn-primary" type="button">Search</button>
    </div>
  );
}

export default Searchbar;