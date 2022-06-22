/* eslint-disable @next/next/no-img-element */
import { css } from "@emotion/react";
import Router from "next/router";
import { useRef } from "react";
import { vote } from "../../../public/images";
import { testCaseType } from "../PreviewList/testCase";
import { testCase } from "../PreviewList/testCase";

interface FullListProps {
  type?: string;
}

const FullViewList = ({ type }: FullListProps) => {
  //const popularityVoteWrapper = useRef<HTMLDivElement>(null);
  //const recentVoteWrapper = useRef<HTMLDivElement>(null);
  const defaultVoteWrapper = useRef<HTMLDivElement>(null);

  switch (type) {
    case "popularity":
      return (
        <div css={backgroundStyle}>
          <div css={titleStyle}>
            <h4>인기 급상승 투표</h4>
          </div>
          <div css={contentsWrapper} ref={defaultVoteWrapper}>
            {testCase.map((v: testCaseType) => {
              return (
                <div
                  css={contentBackground}
                  key={v.key}
                  onClick={() => Router.push(`/vote/${v.key}`)}
                >
                  <img css={contentImage} src={v.image} alt="image" />
                  <div css={contentInfo}>
                    <span>{v.title}</span>
                    <span>{v.creator}</span>
                  </div>
                  <div css={contentInfo}>
                    <img css={statusIcon} src={vote.src} alt="" />
                    <span>{v.status}</span>
                    <span>{v.date}</span>
                  </div>
                </div>
              );
            })}
          </div>
          <button css={buttonStyle}>더 보기</button>
        </div>
      );
    case "recent":
      return (
        <div css={backgroundStyle}>
          <div css={titleStyle}>
            <h4>최근에 생성된 투표</h4>
          </div>
          <div css={contentsWrapper} ref={defaultVoteWrapper}>
            {testCase.map((v: testCaseType) => {
              return (
                <div
                  css={contentBackground}
                  key={v.key}
                  onClick={() => Router.push(`/vote/${v.key}`)}
                >
                  <img css={contentImage} src={v.image} alt="image" />
                  <div css={contentInfo}>
                    <span>{v.title}</span>
                    <span>{v.creator}</span>
                  </div>
                  <div css={contentInfo}>
                    <img css={statusIcon} src={vote.src} alt="" />
                    <span>{v.status}</span>
                    <span>{v.date}</span>
                  </div>
                </div>
              );
            })}
          </div>
          <button css={buttonStyle}>더 보기</button>
        </div>
      );
    default:
      return (
        <div css={backgroundStyle}>
          <div css={titleStyle}>
            <h4>모든 투표</h4>
          </div>
          <div css={contentsWrapper} ref={defaultVoteWrapper}>
            {testCase.map((v: testCaseType) => {
              return (
                <div
                  css={contentBackground}
                  key={v.key}
                  onClick={() => Router.push(`/vote/${v.key}`)}
                >
                  <img css={contentImage} src={v.image} alt="image" />
                  <div css={contentInfo}>
                    <span>{v.title}</span>
                    <span>{v.creator}</span>
                  </div>
                  <div css={contentInfo}>
                    <img css={statusIcon} src={vote.src} alt="" />
                    <span>{v.status}</span>
                    <span>{v.date}</span>
                  </div>
                </div>
              );
            })}
          </div>
          <button css={buttonStyle}>더 보기</button>
        </div>
      );
  }
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

const contentBackground = css`
  background-color: #efefef;

  margin-top: 0.5rem;
  margin-right: 1%;

  width: 19%;
  height: 10rem;
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
