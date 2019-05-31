/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import Paper from "@material-ui/core/Paper";

const Post = () => (
  <Paper
    css={css`
      width: 60%;
      align-self: center;
      padding: 20px;
    `}
  >
    <h3>First Post</h3>
    <p>I will put some text here.</p>
  </Paper>
);

export default Post;
