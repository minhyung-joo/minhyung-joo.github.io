/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import NameCard from "./NameCard";
const hongkongImage = require("./images/hongkong.jpg");

const ProfileSection = () => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 500px;
      background-image: url(${hongkongImage});
    `}
  >
    <NameCard />
  </div>
);

export default ProfileSection;
