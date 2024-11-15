import React from "react";
import "./App.css";
import Navbar from "./assets/components/Navbar/Navbar";
import MovieList from "./assets/components/MovieList/MovieList";

import Fire from "./assets/icons/fire.png";
import Star from "./assets/icons/glowing_star.png";
import Party from "./assets/icons/party_face.png";

const App = () => {
  return (
    <div className="app">
      <Navbar />

      <MovieList type="popular" title="Popular" emoji={Fire} />
      <MovieList type="top_rated" title="Top Rated" emoji={Star} />
      <MovieList type="upcoming" title="Up-coming" emoji={Party} />
    </div>
  );
};

export default App;
