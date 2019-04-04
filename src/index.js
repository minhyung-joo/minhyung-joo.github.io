import React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";

const Root = () => (
  <React.Fragment>
    <CssBaseline />
    <h1>Building in progress!</h1>
    <h2>Built using React.js</h2>
    <Button variant="contained" color="primary">
      Surprise!
    </Button>
  </React.Fragment>
);

ReactDOM.render(<Root />, document.getElementById("app"));
