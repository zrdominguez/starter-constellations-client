import React, { useEffect, useState } from "react";
import Constellation from "./Constellation";
import NoConstellationsMessage from "./NoConstellationsMessage";

export default () => {
  const [constellations, setConstellations] = useState([]);

  useEffect(() => {
    const url = `${process.env.REACT_APP_API_BASE_URL}/constellations`;
    fetch(url)
      .then((response) => response.json())
      .then(setConstellations);
  }, []);

  if (!constellations.length) return <NoConstellationsMessage />;

  const cards = constellations.map((constellation) => (
    <Constellation constellation={constellation} />
  ));
  return (
    <div className="container">
      <div className="row">{cards}</div>
    </div>
  );
};
