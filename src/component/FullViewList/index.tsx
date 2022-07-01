/* eslint-disable @next/next/no-img-element */
import { css } from "@emotion/react";
import { useRef } from "react";
import { testCase as data } from "../PreviewList/testCase";
import VoteCard from "../VoteCard";

interface FullListProps {
  title?: string;
  type?: string;
}

const FullViewList = ({ title, type }: FullListProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  return (
    <div css={backgroundStyle}>
      <div css={titleStyle}>
        <h4>{title ? title : "모든 투표"}</h4>
      </div>
      <div css={contentsWrapper} ref={wrapperRef}>
        {data.map((v) => {
          return (
            <VoteCard
              key={v.key}
              index={v.key}
              image={v.image}
              title={v.title}
              creator={v.creator}
              status={v.status}
              date={v.date}
              size="fixed"
            />
          );
        })}
      </div>
      <button css={buttonStyle}>더 보기</button>
    </div>
  );
};

export default FullViewList;

const backgroundStyle = css`
  background-color: #f6f6f6;

  padding-left: 1%;
  padding-right: 1%;
  padding-bottom: 0.5rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;

  width: 100%;

  @media (prefers-color-scheme: dark) {
    background-color: #1a1a1a;
  }
`;

const titleStyle = css`
  height: 2rem;

  display: flex;
  align-items: center;

  font-weight: 100;

  border-bottom: 0.1px solid #aaa;
`;

const contentsWrapper = css`
  position: relative;

  margin-left: 0.5%;

  width: 100%;

  display: flex;
  flex-wrap: wrap;

  ::-webkit-scrollbar {
    height: 0.5rem;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 1.5rem;
    box-shadow: inset 0 0 6rem #00ffab;
  }
`;

const buttonStyle = css`
  all: unset;

  background-color: #efefef;

  padding: 0.25rem;
  margin: 0 auto;
  margin-top: 0.5rem;
  margin-bottom: 0.25rem;

  width: 16.5rem;
  height: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 0.75rem;
  text-align: center;

  transition: filter 0.25s ease;
  border-radius: 0.5rem;
  cursor: pointer;

  :hover {
    filter: brightness(95%);
  }

  @media (prefers-color-scheme: dark) {
    background-color: #333;
  }
`;
