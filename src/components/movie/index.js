import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Box, Button } from "@material-ui/core";
import axios from "axios";
import { movieName } from "./../search/index";
import { Link } from "react-router-dom";
import noImage from "./movie-png-85-images-in-collection-page-1-movie-png-png-2000_2000.png";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500
  },
  image: {
    width: 128,
    height: 128
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
    border: "5px solid #fff"
  },
  link: {
    textDecoration: "none",
    margin: "50px 0 0 50px"
  }
}));

const MoviePage = () => {
  const classes = useStyles();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    axios
      .get("http://www.omdbapi.com/?apikey=ce56fb84&t=" + movieName)
      .then(res => {
        setMovie(res.data);
      });
  }, []);

  return (
    <Box m={10}>
      <Grid container spacing={10} style={{ marginBottom: "20px" }}>
        <Grid item>
          <img
            className={classes.img}
            alt="Movie Poster"
            src={movie.Poster === "N/A" ? noImage : movie.Poster}
          />
        </Grid>
        <Grid item xs={12} sm={6} container justify="center">
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography
                variant="h2"
                color="primary"
                style={{ marginBottom: "20px" }}
              >
                {movie.Title}
              </Typography>
              <Typography variant="h6" color="secondary">
                {movie.Released === "N/A" ? movie.DVD : movie.Released}
              </Typography>
              <Typography variant="h6" color="secondary">
                {movie.Genre}
              </Typography>
              <Typography
                style={{ marginBottom: "20px" }}
                variant="h6"
                color="secondary"
              >
                {movie.Country}
              </Typography>
              <Typography
                variant="h4"
                color="primary"
                style={{ marginBottom: "20px" }}
              >
                Actors
              </Typography>
              <Typography
                style={{ marginBottom: "20px" }}
                variant="h5"
                color="secondary"
              >
                {movie.Actors}
              </Typography>
              <Typography
                variant="h4"
                color="primary"
                style={{ marginBottom: "20px" }}
              >
                Director
              </Typography>
              <Typography
                style={{ marginBottom: "20px" }}
                variant="h5"
                color="secondary"
              >
                {movie.Director}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Link to="/" className={classes.link}>
        <Button variant="contained" color="primary" className={classes.button}>
          Back To Search Page ?!
        </Button>
      </Link>
    </Box>
  );
};

export default MoviePage;
