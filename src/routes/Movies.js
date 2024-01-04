import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagenation from "../components/Pagenation";
import { StarRating } from "../components";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  // const [length, setLength] = useState(0);
  const [pagePerCount, setPagePerCount] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLast = currentPage * pagePerCount;
  const indexOfStart = indexOfLast - pagePerCount;
  const currentMovies = movies.slice(indexOfStart, indexOfLast);

  const axiosHandle = async () => {
    const datas = await axios.get("https://yts.mx/api/v2/list_movies.json");
    const numAddData = datas.data.data.movies.map((movie, index) => ({
      ...movie,
      num: index + 1,
    }));
    setMovies(numAddData);
  };

  useEffect(() => {
    axiosHandle();
    // setLength(movies.length);
  }, []);

  return (
    <div>
      <h2> 상영 영화 개수 {movies.length} 종</h2>
      {movies.length <= 0 ? (
        "Loading..."
      ) : (
        <>
          {currentMovies.map((movie) => (
            <div className="card">
              {movie.num} : {movie.title} :{" "}
              <StarRating count={10} rating={movie.rating} />
            </div>
          ))}
        </>
      )}
      <Pagenation
        length={movies.length}
        pagePerCount={pagePerCount}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Movies;
