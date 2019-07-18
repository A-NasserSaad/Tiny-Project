import React from "react";
import { Button, Typography, Box, Icon } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    backgroundImage: "url(MoviePosterCollecting1024x576.jpg)", // doesn't work
    backgroundSize: "cover",
    backgroundPosition: "center",
    textAlign: "center",
    width: "80%",
    margin: "auto"
  },
  box: {
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100%"
  },
  icon: {
    fontSize: "200px"
  },

  link: {
    textDecoration: "none"
  },
  button: {
    textTransform: "capitalize"
  },
  mainText: {
    padding: "20px 0 10px",
    letterSpacing: ".02em"
  },
  secText: {
    paddingBottom: "20px",
    letterSpacing: ".01em"
  }
}));
let ErrorPage = props => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Box className={classes.box}>
        <Typography color="primary">
          <Icon color="primary" className={classes.icon}>
            sentiment_dissatisfied
          </Icon>
        </Typography>

        <Typography variant="h3" color="primary" className={classes.mainText}>
          Error 404 Not Found
        </Typography>
        <Typography variant="h4" color="secondary" className={classes.secText}>
          Sorry We Couldn't find the movie
        </Typography>
        <Link to="/" className={classes.link}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Back To Search Page ?!
          </Button>
        </Link>
      </Box>
    </div>
  );
};

export default ErrorPage;
