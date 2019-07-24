/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import Post from "./Post";
const tiancaiLogo = require("./images/tiancai.jpeg");
const ubsLogo = require("./images/ubs.png");
const lalamoveLogo = require("./images/lalamove.png");

const ExperienceSection = () => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `}
  >
    <h1>Professional Experiences</h1>
    <Post
      image={tiancaiLogo}
      company={"Tiancai"}
      title={"Software Engineer"}
      description={"Code things"}
    />
    <Post
      image={ubsLogo}
      company={"UBS"}
      title={"Equities Intern"}
      description={"Trade things"}
    />
    <Post
      image={lalamoveLogo}
      company={"Lalamove"}
      title={"Tech Intern"}
      description={"Help things"}
    />
  </div>
);

export default ExperienceSection;
