/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";

const NameCard = () => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      align-items: center;
      align-self: center;
    `}
  >
    <h1 style={{ marginBottom: "5px" }}>Minhyung Joo</h1>
    <div
      css={css`
        display: flex;
        img {
          height: 30px;
          width: 30px;
          padding: 5px;
        }
      `}
    >
      <a href="mailto:ravenjoo@outlook.com">
        <img src="https://i.imgur.com/A0xdKnq.png" alt="email" />
      </a>
      <a href="https://github.com/minhyung-joo" target="_blank">
        <img src="https://i.imgur.com/lss776r.png" alt="github" />
      </a>
      <a
        href="https://www.linkedin.com/in/minhyung-joo-64a940115/"
        target="_blank"
      >
        <img src="https://i.imgur.com/L5GoAnj.png" alt="linkedin" />
      </a>
    </div>
    <p>Random Software Engineer from Hong Kong</p>
  </div>
);

export default NameCard;
