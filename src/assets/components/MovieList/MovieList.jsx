import React, { useEffect, useState } from "react";
import _ from "lodash";

import "./MovieList.css";
import MovieCard from "./MovieCard/MovieCard";
import FilterGroup from "./FilterGroup";

const MovieList = ({ type, title, emoji }) => {
  const [movies, setMovies] = useState([]);
  const [filterMovies, setFilterMovies] = useState([]);
  const [minRating, setMinRating] = useState(0);
  const [sort, setSort] = useState({
    by: "default",
    order: "asc",
  });

  const fetchData = async () => {
    const API_KEY = "8b5e629a52ed58d12f04964ae7c5e610";
    const url = `https://api.themoviedb.org/3/movie/${type}?api_key=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    setMovies(data.results);
    setFilterMovies(data.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (sort.by !== "default") {
      const sortedMovies = _.orderBy(filterMovies, [sort.by], [sort.order]);
      setFilterMovies(sortedMovies);
    }
  }, [sort]);

  const handleFilter = (rating) => {
    if (rating === minRating) {
      setMinRating(0);
      setFilterMovies(movies);
    } else {
      setMinRating(rating);
      const filter = movies.filter((movie) => movie.vote_average >= rating);
      setFilterMovies(filter);
    }
  };

  const handleSort = (event) => {
    const { name, value } = event.target;
    setSort((prev) => ({ ...prev, [name]: value }));
    // setSort((prev) => {
    //   return { ...prev, [name]: value };
    // });
    console.log(sort);
  };

  return (
    <section className="movie_list" id={type}>
      <header className="align_center movie_list_header">
        <h2 className="align_center movie_list_heading">
          {title}{" "}
          <img src={emoji} alt={`${emoji} icon`} className="navbar_emoji" />
        </h2>
        <div className="align_center movie_list_fs">
          <FilterGroup
            minRating={minRating}
            onRatingClick={handleFilter}
            rating={[8, 7, 6]}
          />

          <select
            name="by"
            className="movie_sorting"
            onChange={handleSort}
            value={sort.by}
          >
            <option value="default">SortBy</option>
            <option value="release_date">Date</option>
            <option value="vote_average">Rating</option>
          </select>

          <select
            name="order"
            onChange={handleSort}
            className="movie_sorting"
            value={sort.order}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </header>
      <div className="movie_cards">
        {filterMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default MovieList;
