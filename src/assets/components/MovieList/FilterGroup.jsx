import React from "react";

const FilterGroup = ({ minRating, onRatingClick, rating }) => {
  return (
    <ul className="align_center movie_filter">
      {rating.map((rate) => (
        <li
          className={
            minRating === rate
              ? "movie_filter_item active"
              : "movie_filter_item"
          }
          onClick={() => onRatingClick(rate)}
          key={rate}
        >
          {rate}+ Rating
        </li>
      ))}
      {/* <li
        className={
          minRating === 8 ? "movie_filter_item active" : "movie_filter_item"
        }
        onClick={() => onRatingClick(8)}
      >
        8+ Star
      </li>
      <li
        className={
          minRating === 7 ? "movie_filter_item active" : "movie_filter_item"
        }
        onClick={() => onRatingClick(7)}
      >
        7+ Star
      </li>
      <li
        className={
          minRating === 6 ? "movie_filter_item active" : "movie_filter_item"
        }
        onClick={() => onRatingClick(6)}
      >
        6+ Star
      </li> */}
    </ul>
  );
};

export default FilterGroup;
