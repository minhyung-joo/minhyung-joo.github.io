/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./Header";
import ProfileSection from "./ProfileSection";
import ExperienceSection from "./ExperienceSection";

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
      <ProfileSection />
      <ExperienceSection />
    </div>
  </React.Fragment>
);

ReactDOM.render(<Root />, document.getElementById("app"));
