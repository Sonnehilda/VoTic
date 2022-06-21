/* eslint-disable @next/next/no-img-element */
import { css } from "@emotion/react";
import Router from "next/router";
import { testCase } from "../PreviewList/testCase";

interface VoteViewProps {
  voteId: number;
}

const VoteView = ({ voteId }: VoteViewProps) => {
  return (
    <div css={backgroundStyle}>
      <span css={leaveStyle} onClick={() => Router.push("/")}>
        ← 홈페이지로 돌아가기
      </span>
      <div css={infoWrapper}>
        <div css={contentInfo}>
          <h2>{testCase[voteId].title}</h2>
          <span>{testCase[voteId].date}</span>
        </div>
        <div css={contentInfo}>
          <strong>{testCase[voteId].creator}</strong>
        </div>
        <div css={contentInfo}>
          <img src={testCase[voteId].image} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default VoteView;

const backgroundStyle = css`
  background-color: #f6f6f6;

  padding-left: 1%;
  padding-right: 1%;
  padding-bottom: 0.5rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;

  width: 100%;
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

const infoWrapper = css`
  border-bottom: 0.1px solid #aaa;
`;

const contentInfo = css`
  height: 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    margin: 0;
  }

  strong {
    font-size: 1rem;
    font-weight: 400;
  }

  span {
    font-size: 0.75rem;
    font-weight: 100;
  }

  img {
    width: 100%;
    max-height: 15rem;

    object-fit: cover;
  }

  :first-of-type {
    margin-top: 0.5rem;
  }

  :last-of-type {
    padding-bottom: 0.5rem;

    height: max-content;
  }
`;
