/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./Header";
import NameCard from "./NameCard";
import Post from "./Post";

const Root = () => (
  <React.Fragment>
    <Header />
    <CssBaseline />
    <div
      css={css`
        display: flex;
        flex-direction: column;
      `}
    >
      <NameCard />
      <Post />
    </div>
    <h1>Building in progress!</h1>
    <h2>Built using React.js</h2>
    <Button variant="contained" color="primary">
      Surprise!
    </Button>
  </React.Fragment>
);

ReactDOM.render(<Root />, document.getElementById("app"));
