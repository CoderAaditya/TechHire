import React from "react";

const SearchBar = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-12 d-flex justify-content-center"> 
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search for candidates..."
              aria-label="Search for candidates"
              aria-describedby="searchButton"
            />
            <button className="btn btn-primary" type="button" id="searchButton">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
