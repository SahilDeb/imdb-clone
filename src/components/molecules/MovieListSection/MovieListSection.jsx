import { CircularProgress, Pagination } from "@mui/material";
import PropTypes from "prop-types";
import MovieCard from "../../atoms/MovieCard/MovieCard";
import { useStyles } from "./MovieListSection.style";

const MovieListSection = ({
  isLoading,
  hasResult,
  movieList,
  totalpageCount,
  currentPage,
  handlePageChange,
}) => {
  const { classes } = useStyles();

  return (
    <section>
      {isLoading && (
        <div className={classes.loader}>
          <CircularProgress />
        </div>
      )}
      {movieList && movieList.length > 0 ? (
        <div>
          <div className={classes.grid__list}>
            {movieList.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))}
          </div>
          <Pagination
            className={classes.pagination}
            count={totalpageCount}
            page={currentPage}
            onChange={handlePageChange}
          />
        </div>
      ) : (
        <div className={classes.empty__page}>
          {hasResult ? (
            <h2>No movies found!</h2>
          ) : (
            <h2>Search above to get results</h2>
          )}
        </div>
      )}
    </section>
  );
};

MovieListSection.propTypes = {
  isLoading: PropTypes.bool,
  hasResult: PropTypes.bool,
  currentPage: PropTypes.number,
  totalpageCount: PropTypes.number,
  movieList: PropTypes.array,
  handlePageChange: PropTypes.func,
};

export default MovieListSection;
