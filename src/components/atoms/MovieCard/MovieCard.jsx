import React, { useCallback } from "react";
import PropTypes from "prop-types";

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie: { imdbID, Poster, Title, Type, Year } }) => {
  const navigate = useNavigate();

  const handleRedirect = useCallback((id) => {
    navigate(`/movie-details/${id}`);
  }, []);

  return (
    <div>
      <Card sx={{ maxWidth: 400 }} onClick={() => handleRedirect(imdbID)}>
        <CardActionArea>
          {Poster && (
            <CardMedia
              component="img"
              height="400"
              image={Poster}
              alt={Title}
            />
          )}
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {Title || ""}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {Type?.toUpperCase() || ""}
            </Typography>
            <Typography variant="body2">{Year || ""}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

MovieCard.propTypes = {
  movie: {
    imdbID: PropTypes.string,
    Poster: PropTypes.string,
    Title: PropTypes.string,
    Type: PropTypes.string,
    Year: PropTypes.string,
  },
};

export default MovieCard;
