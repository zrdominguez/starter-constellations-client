import React from "react";
import Search from "./Search";

export default () => {
  return (
    <div className="jumbotron jumbotron-fluid bg-info text-white rounded-0 mb-0">
      <div className="container">
        <h1 className="display-4">Explore Constellations</h1>
        <p className="lead">Explore different constellations in the sky!</p>
        <hr />
        <Search />
      </div>
    </div>
  );
};
