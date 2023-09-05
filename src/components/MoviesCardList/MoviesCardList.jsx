
import { useState, useEffect, useCallback } from "react";
import { useStore } from "../../services/StoreProvider";
import {
  THREE_COUNT_MOVIES_FOR_MORE_BUTTON,
  TWO_COUNT_MOVIES_FOR_MORE_BUTTON,
  SCREEN_WIDTH_690,
  SCREEN_WIDTH_1090,
  INITIAL_COUNT_MOVIES_FOR_MOBILE,
  INITIAL_COUNT_MOVIES_FOR_MIDDLE,
  INITIAL_COUNT_MOVIES_FOR_DESKTOP,
  MAX_DURATION_SHORT_MOVIES,
} from "../../utils/constants";
import MovieCard from "../MovieCard";
import Preloader from "../Preloader";

function MoviesCardList({
  movies,
  handleClickMoreMovies,
  notFound,
  showedMovies,
  filterShortFilms,
  isNotFound,
  plase,
}) {
  const [state, dispatch] = useStore();
  const { loading } = state;

  // const [countShowMore, setCountShowMore] = useState(THREE_COUNT_MOVIES_FOR_MORE_BUTTON);
  const [moviesList, setMoviesList] = useState(movies);
  const [width, setWidth] = useState(window.screen.width);
  const [renderingMovies, setRenderingMovies] = useState({
    showedMovies: showedMovies,
  });
  useEffect(() => {
    setRenderingMovies({ ...renderingMovies, showedMovies: showedMovies });
  }, [showedMovies]);

  const checkedScreenSize = () => {
    const screenWidth = window.screen.width;

    if (screenWidth >= SCREEN_WIDTH_1090) {
      setRenderingMovies({
        ...renderingMovies,
        totalItemsCount: INITIAL_COUNT_MOVIES_FOR_DESKTOP,
        moreItemsCount: THREE_COUNT_MOVIES_FOR_MORE_BUTTON,
      });
    } else if (screenWidth >= SCREEN_WIDTH_690) {
      setRenderingMovies({
        ...renderingMovies,
        totalItemsCount: INITIAL_COUNT_MOVIES_FOR_MIDDLE,
        moreItemsCount: TWO_COUNT_MOVIES_FOR_MORE_BUTTON ,
      });
    } else {
      setRenderingMovies({
        ...renderingMovies,
        totalItemsCount: INITIAL_COUNT_MOVIES_FOR_MOBILE,
        moreItemsCount: TWO_COUNT_MOVIES_FOR_MORE_BUTTON ,
      });
    }
  }
  const handleLoadElseCard = () => {
    const count = (renderingMovies.totalItemsCount +=
      renderingMovies.moreItemsCount);
    setRenderingMovies({ ...renderingMovies, totalItemsCount: count });
  };

  const filteredMovies = useCallback(() => {
    return movies.filter((movie) => movie.duration <= MAX_DURATION_SHORT_MOVIES);
  }, [movies]);

  useEffect(() => {
    if (movies.length && filterShortFilms) {
      setMoviesList(filteredMovies());
    }
  }, [filterShortFilms, filteredMovies, movies]);

  useEffect(() => {
    setRenderingMovies({ ...renderingMovies, showedMovies: showedMovies });
    if (plase !== 'saved-movies') {
      checkedScreenSize(width);
      setTimeout(() => {
      window.addEventListener("resize", checkedScreenSize);
    }, 100);
    return () => window.removeEventListener("resize", checkedScreenSize);
    }
    
  }, [showedMovies, dispatch, handleClickMoreMovies]);

  useEffect(() => {
    if (movies.length && filterShortFilms) {
      if (filteredMovies().length === 0) {
        isNotFound();
      }
    } else {
      setMoviesList(movies);
    }
  }, [
    filterShortFilms,
    filteredMovies,
    isNotFound,
    movies,
    movies.length,
    moviesList.length,
    setMoviesList,
  ]);

  return (
    <div className="cards">
      {loading ? (
        <Preloader />
      ) : (
        <>
          <p className="cards__message">{notFound}</p>
          <div className="cards__list">
            {moviesList.slice(0, renderingMovies.totalItemsCount).map((movie) => (
              <MovieCard movie={movie} key={movie.id || movie._id} />
            ))}
          </div>
          {moviesList.length > renderingMovies.totalItemsCount && (
            <button className="cards__button" onClick={handleLoadElseCard}>
              Ещё
            </button>
          )}
        </>
      )}
    </div>
  );
}

export default MoviesCardList;
