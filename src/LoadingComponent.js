import React from "react";
// Material UI stuff
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const styles = theme => ({
  root: {
    flex: 1,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  }
});

const Loading = props => {
  const { classes, isLoading, error } = props;
  // Handle the loading state
  if (isLoading) {
    console.log(isLoading);
    return (
      <div className={classes.root}>
        <CircularProgress color="primary" />
      </div>
    );
  }
  // Handle the error state
  else if (error) {
    return (
      <div style={classes.root}>
        Sorry, there was a problem loading the page.
      </div>
    );
  } else {
    return null;
  }
};

export default withStyles(styles, { withTheme: true })(Loading);
