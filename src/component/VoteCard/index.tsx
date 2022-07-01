/* eslint-disable @next/next/no-img-element */
import { vote } from "../../../public/images";
import { css } from "@emotion/react";
import Router from "next/router";
import { VoteValueType } from "../../../types/voteValue";

const VoteCard = ({
  index,
  image,
  title,
  creator,
  status,
  date,
  size,
}: VoteValueType) => {
  return (
    <div
      css={() => backgroundStyle(size)}
      onClick={() => Router.push(`/vote/${index}`)}
    >
      <img css={contentImage} src={image} alt="image" />
      <div css={contentInfo}>
        <span>{title}</span>
        <span>{creator}</span>
      </div>
      <div css={contentInfo}>
        <img css={statusIcon} src={vote.src} alt="" />
        <span>{status}</span>
        <span>{date}</span>
      </div>
    </div>
  );
};

const backgroundStyle = (size: string) => css`
  ${size !== "fixed"
    ? "margin-right: 0.5rem; width: 20rem;"
    : "margin-top: 0.5rem; margin-right: 1%; width: 19%;"}

  background-color: #efefef;

  height: 12.5rem;
  border-radius: 0.5rem;

  display: inline-block;

  transition: filter 0.25s ease;
  cursor: pointer;

  :hover {
    filter: brightness(95%);
  }

  :last-of-type {
    margin-right: 0;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #333;
  }
`;

const contentImage = css`
  width: 100%;
  height: 70%;

  transition: transform 0.25s ease;
  object-fit: cover;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
`;

const contentInfo = css`
  padding-left: 2.5%;
  padding-right: 2.5%;

  width: 100%;
  height: 12.5%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    text-overflow: ellipsis;
    white-space: nowrap;

    overflow: hidden;

    :first-of-type {
      width: 70%;

      font-size: 1rem;
      font-weight: 400;
      text-align: left;
    }
    :last-of-type {
      width: 30%;

      font-size: 0.75rem;
      font-weight: 100;
      text-align: right;
    }
  }
`;

const statusIcon = css`
  margin-top: 0.1rem;
  margin-right: 0.25rem;

  width: 0.75rem;
  height: 0.75rem;
`;

export default VoteCard;
