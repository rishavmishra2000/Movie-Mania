import React from "react";
import "./App.css";
import Navbar from "./assets/components/Navbar/Navbar";
import MovieList from "./assets/components/MovieList/MovieList";

import Fire from "./assets/icons/fire.png";
import Star from "./assets/icons/glowing_star.png";
import Party from "./assets/icons/party_face.png";
import { Route, Routes } from "react-router-dom";
import NotFound from "./assets/components/NotFound/NotFound";
import MovieDetails from "./assets/components/MovieList/MovieDetails/MovieDetails";

const App = () => {
  return (
    <div className="app">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<MovieList type="popular" title="Popular" emoji={Fire} />}
        />
        <Route
          path="/top_rated"
          element={
            <MovieList type="top_rated" title="Top Rated" emoji={Star} />
          }
        />
        <Route
          path="/upcoming"
          element={
            <MovieList type="upcoming" title="Up-coming" emoji={Party} />
          }
        />
        <Route path="/movie/:movie_id" element={<MovieDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
