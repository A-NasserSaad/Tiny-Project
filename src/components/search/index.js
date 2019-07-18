import React, { useState } from "react";
import { TextField, Typography, Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import Divider from "@material-ui/core/Divider";
import noImage from "./../movie/movie-png-85-images-in-collection-page-1-movie-png-png-2000_2000.png";

import axios from "axios";

const useStyles = makeStyles(theme => ({
  box: {
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100%",
    textAlign: "center"
  },
  typography: {
    paddingBottom: "15px"
  },
  histTypo: {
    paddingBottom: "15px",
    display: "inline"
  },
  link: {
    textDecoration: "none"
  },
  histImage: {
    width: "130px",
    height: "150px",
    border: "2px solid #fff"
  },
  histBox: {
    width: "57%",
    backgroundColor: "#333",
    padding: "10px 20px",
    margin: "auto"
  },
  button: {
    marginTop: "30px"
  },
  histContainer: {
    maxHeight: "250px",
    overflow: "auto"
  },
  input: {
    width: "60%",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#ffeb3b"
      },
      "&:hover fieldset": {
        borderColor: "#ffeb3b"
      },
      "&.Mui-focused fieldset": {
        borderColor: "#ffeb3b"
      }
    },
    "& label": {
      color: "#fff"
    },
    "& input": {
      color: "#fff"
    }
  }
}));

let movieName = "";
let movieNameWithoutPlus = "";
let searchHistory = [];

setInterval(function() {
  console.log(searchHistory);
}, 3000);

const Search = props => {
  const classes = useStyles();

  const [movie, setMovie] = useState({});
  const [focused, setFocused] = useState(false);

  const handleClick = () => {
    if (movieName === "") {
      alert("please return to the search page and type a movie name");
      return 0;
    } else {
      searchHistory.push({ Title: movieNameWithoutPlus, Poster: movie.Poster });
    }
  };

  const History = () => (
    <React.Fragment>
      {searchHistory.map((film, index) => (
        <Box key={index} className={classes.histBox}>
          <img
            src={
              film.Poster === "N/A" || film.Poster === undefined
                ? noImage
                : film.Poster
            }
            alt="movie"
            className={classes.histImage}
          />
        </Box>
      ))}
    </React.Fragment>
  );

  return (
    <div className={classes.box}>
      <Typography className={classes.typography} variant="h3" color="primary">
        Type a movie name
      </Typography>
      <Typography className={classes.typography} variant="h4" color="secondary">
        know information about it
      </Typography>
      <div>
        <TextField
          label="The Movie Name"
          variant="outlined"
          className={classes.input}
          onChange={e => {
            movieName = e.target.value;
            movieNameWithoutPlus = movieName;
            movieName = movieName.replace(" ", "+");
            axios
              .get("http://www.omdbapi.com/?apikey=ce56fb84&t=" + movieName)
              .then(res => {
                setMovie(res.data);
              });
          }}
          autoComplete="off"
          onFocus={() => {
            setFocused(true);
          }}
        />
        <br />
        {focused ? (
          <div className={classes.histContainer}>
            {" "}
            <History className={classes.hist} />
          </div>
        ) : (
          ""
        )}
      </div>
      <Link
        to={movie.Response === "True" ? "/movie" : "/error"}
        className={classes.link}
      >
        <Button
          color="primary"
          variant="contained"
          onClick={() => handleClick()}
          className={classes.button}
        >
          <SearchIcon />
        </Button>
      </Link>
    </div>
  );
};
export default Search;

export { movieName };
