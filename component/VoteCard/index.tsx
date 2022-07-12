/* eslint-disable @next/next/no-img-element */
import { css } from "@emotion/react";
import theme, { ThemeProps } from "../../styles/theme";
import { vote } from "../../public/images";
import { VoteValueType } from "../../types/voteValue";
import { useRouter } from "next/router";

interface VoteCardProps {
  size?: string;
}

const VoteCard = ({
  index,
  image,
  title,
  creator,
  status,
  date,
  size,
  themeId,
}: VoteValueType & VoteCardProps & ThemeProps) => {
  const router = useRouter();

  return (
    <div
      css={() => backgroundStyle(themeId, size)}
      onClick={() => router.push(`/vote/${index}`)}
    >
      <img css={contentImage} src={image} alt="image" />
      <div css={contentInfo}>
        <span>{title}</span>
        <span>{creator}</span>
      </div>
      <div css={contentInfo}>
        <img css={() => statusIcon(themeId)} src={vote.src} alt="" />
        <span>{status.toLocaleString()}</span>
        <span>{date}</span>
      </div>
    </div>
  );
};

const backgroundStyle = (themeId: string, size: string) => css`
  ${size !== "fixed"
    ? "margin-right: 0.5rem; width: 20rem;"
    : "margin-top: 0.5rem; margin-right: 1%; width: 19%; @media screen and (max-height: 600px) { margin-top: 0.5rem; margin-right: 1%; width: 49%; }"}

  background-color: ${theme[themeId.replace("0", "1")].background};

  height: 12.5rem;
  border-radius: 0.5rem;

  display: inline-block;

  color: ${theme[themeId].color};

  transition: filter 0.25s ease;
  cursor: pointer;

  :hover {
    filter: brightness(95%);
  }

  :last-of-type {
    margin-right: 0;
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
      width: 75%;

      font-size: 0.9rem;
      font-weight: 400;
    }
    :last-of-type {
      width: 25%;

      font-size: 0.75rem;
      font-weight: 100;
      text-align: right;
    }
  }
`;

const statusIcon = (themeId: string) => css`
  margin-top: 0.1rem;
  margin-right: 0.25rem;

  width: 0.75rem;
  height: 0.75rem;

  transition: filter 0.25s ease;

  ${themeId === "light0" ? "filter: invert(100%);" : "filter: invert(0%);"}
`;

export default VoteCard;
