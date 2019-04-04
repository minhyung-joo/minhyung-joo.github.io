import React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";

const Root = () => (
  <div>
    <h1>Building in progress!</h1>
    <h2>Built using React.js</h2>
    <Button variant="contained" color="primary">
      Surprise!
    </Button>
  </div>
);

ReactDOM.render(<Root />, document.getElementById("app"));
