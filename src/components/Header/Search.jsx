import React from "react";

export default () => (
  <form className="form container">
    <div className="form-group row">
      <input
        className="form-control col col-md-8"
        type="text"
        id="search"
        name="search"
        placeholder="Search the stars..."
      />
      <label className="form-check-label sr-only" htmlFor="search">
        Search
      </label>
    </div>
  </form>
);
