/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import Paper from "@material-ui/core/Paper";

const Post = ({ image, company, title, description }) => (
  <Paper
    css={css`
      width: 60%;
      align-self: center;
      padding: 20px;
      border-radius: 6px;
      margin: 10px;
    `}
  >
    <img src={image} alt={company} height={100} width={100} />
    <h3>{company}</h3>
    <h3>{title}</h3>
    <p>{description}</p>
  </Paper>
);

export default Post;
