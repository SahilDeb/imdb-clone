import clsx from "clsx";
import { useNavigate, useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { CircularProgress, IconButton } from "@mui/material";
import { useGetMovies } from "../../../api/query";
import { useStyles } from "./DetailsPage.style";

const DetailsPage = () => {
  const { imdbId } = useParams();
  const { getMovieDetails } = useGetMovies();
  const { classes } = useStyles();
  const navigate = useNavigate();

  const [movieDetails, setMovieDetails] = useState(null);

  const getDetails = useCallback(async () => {
    try {
      const data = await getMovieDetails(imdbId);
      if (data.Response === "False") {
        navigate(-1);
      }
      setMovieDetails(data);
    } catch (err) {
      navigate(-1);
    }
  }, []);

  const handleGoBack = useCallback(() => {
    navigate(-1);
  }, []);

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <div>
      <div className={classes.header}>
        <IconButton aria-label="go-back" onClick={() => handleGoBack()}>
          <ArrowBackIcon fontSize="large" sx={{ color: "white" }} />
        </IconButton>
      </div>
      <div className={classes.container}>
        {movieDetails ? (
          <div className={classes.movie__container}>
            <img
              className={classes.movie__poster}
              src={movieDetails.Poster}
              alt={movieDetails.Title}
            />
            <div className={classes.movie__details}>
              <h2>{movieDetails.Title}</h2>
              <p>
                <span>Year: {movieDetails.Year}</span>
                <span className={clsx([classes.chip, classes.chip__yellow])}>
                  Rated {movieDetails.Rated}
                </span>
                <span>Released: {movieDetails.Released}</span>
              </p>
              <p>
                <strong>Genre:</strong> {movieDetails.Genre}
              </p>
              <p>
                <strong>Writer:</strong> {movieDetails.Writer}
              </p>
              <p>
                <strong>Actors:</strong> {movieDetails.Actors}
              </p>
              <p>
                <strong>Plot:</strong> {movieDetails.Plot}
              </p>
              <p>
                <em>
                  <strong>Language:</strong> {movieDetails.Language}
                </em>
              </p>
              <p>
                <strong>Awards:</strong> {movieDetails.Awards}
              </p>
            </div>
          </div>
        ) : (
          <CircularProgress className={classes.circular__progress} />
        )}
      </div>
    </div>
  );
};

export default DetailsPage;
