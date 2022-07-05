/* eslint-disable @next/next/no-img-element */
import { css } from "@emotion/react";
import theme, { ThemeProps } from "../../styles/theme";
import Router from "next/router";
import { testCase } from "../PreviewList/testCase";

interface VoteViewProps {
  voteId: number;
}

const VoteView = ({ voteId, themeId }: VoteViewProps & ThemeProps) => {
  return (
    <div css={() => backgroundStyle(themeId)}>
      <span css={leaveStyle} onClick={() => Router.push("/")}>
        ← 홈페이지로 돌아가기
      </span>
      <div css={() => infoWrapper(themeId)}>
        <div css={contentInfo}>
          <h2>{testCase[voteId].title}</h2>
          <span>{testCase[voteId].date}</span>
        </div>
        <div css={contentInfo}>
          <strong>{testCase[voteId].creator}</strong>
        </div>
      </div>
      <div css={contentInfo}>
        <img src={testCase[voteId].image} alt="img" />
      </div>
    </div>
  );
};

export default VoteView;

const backgroundStyle = (themeId: string) => css`
  background-color: ${theme[themeId].background};

  padding-left: 1%;
  padding-right: 1%;
  padding-top: 0.3rem;
  padding-bottom: 0.25rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;

  width: 100%;

  color: ${theme[themeId].color};
`;

const leaveStyle = css`
  color: #a1a1a1;
  font-size: 0.75rem;

  transition: filter 0.25s ease;
  cursor: pointer;

  :hover {
    filter: brightness(120%);
  }
`;

const infoWrapper = (themeId: string) => css`
  border-bottom: 0.1px solid ${theme[themeId.replace("0", "4")].background};
`;

const contentInfo = css`
  height: 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  :first-of-type {
    margin-top: 0.5rem;
  }

  :last-of-type {
    padding-bottom: 0.25rem;

    height: max-content;
  }

  h2 {
    margin: 0;
  }

  strong {
    margin-top: 0.1rem;

    color: #a1a1a1;
    font-size: 0.9rem;
    font-weight: 300;
  }

  span {
    color: #a1a1a1;
    font-size: 0.9rem;
    font-weight: 300;
  }

  img {
    margin-top: 0.5rem;

    width: 100%;
    max-height: 15rem;

    object-fit: cover;
  }
`;