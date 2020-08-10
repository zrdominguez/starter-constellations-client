import React from "react";
import Header from "./Header/Header";
import Navigation from "./Navigation";
import ConstellationsList from "./ConstellationsList/ConstellationsList";

function App() {
  return (
    <main>
      <Header />
      <Navigation />
      <ConstellationsList />
    </main>
  );
}

export default App;
