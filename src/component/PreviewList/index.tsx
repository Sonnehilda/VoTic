/* eslint-disable @next/next/no-img-element */
import { css } from "@emotion/react";
import Router from "next/router";
import { useRef } from "react";
import { vote } from "../../../public/images";
import { testCase } from "./testCase";

interface PreviewListProps {
  type: string;
}

const PreviewList = ({ type }: PreviewListProps) => {
  const popularityVoteWrapper = useRef<HTMLDivElement>(null);
  const recentVoteWrapper = useRef<HTMLDivElement>(null);

  const scrollNext = (refObj: React.MutableRefObject<HTMLDivElement>) => {
    const sum: number =
      refObj.current.scrollLeft -
      (refObj.current.scrollWidth - refObj.current.clientWidth);
    if (sum < 2 && sum > -2)
      refObj.current.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    else if (
      refObj.current.scrollLeft +
        (refObj.current.scrollWidth - refObj.current.clientWidth) / 4 >
      refObj.current.scrollWidth - refObj.current.clientWidth
    )
      refObj.current.scrollTo({
        top: 0,
        left: refObj.current.scrollWidth - refObj.current.clientWidth,
        behavior: "smooth",
      });
    else
      refObj.current.scrollTo({
        top: 0,
        left:
          refObj.current.scrollLeft +
          (refObj.current.scrollWidth - refObj.current.clientWidth) / 4,
        behavior: "smooth",
      });
  };

  const scrollPrev = (refObj: React.MutableRefObject<HTMLDivElement>) => {
    if (refObj.current.scrollLeft === 0)
      refObj.current.scrollTo({
        top: 0,
        left: refObj.current.scrollWidth - refObj.current.clientWidth,
        behavior: "smooth",
      });
    else if (
      refObj.current.scrollLeft +
        (refObj.current.scrollWidth - refObj.current.clientWidth) / 4 <
      0
    )
      refObj.current.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    else
      refObj.current.scrollTo({
        top: 0,
        left:
          refObj.current.scrollLeft -
          (refObj.current.scrollWidth - refObj.current.clientWidth) / 4,
        behavior: "smooth",
      });
  };

  switch (type) {
    case "popularity":
      return (
        <div css={backgroundStyle}>
          <div css={titleStyle}>
            <h4 onClick={() => Router.push("/popularity")}>
              인기 급상승 투표 →
            </h4>
          </div>
          <div css={contentsWrapper} ref={popularityVoteWrapper}>
            {testCase.map((v) => {
              return (
                <div css={contentBackground} key={v.key}>
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
          <div css={scrollWrapper}>
            <div
              css={scrollStyle}
              onClick={() => scrollPrev(popularityVoteWrapper)}
            >
              ◀
            </div>
            <div
              css={scrollStyle}
              onClick={() => scrollNext(popularityVoteWrapper)}
            >
              ▶
            </div>
          </div>
        </div>
      );
    case "recent":
      return (
        <div css={backgroundStyle}>
          <div css={titleStyle}>
            <h4 onClick={() => Router.push("/recent")}>최근에 생성된 투표 →</h4>
          </div>
          <div css={contentsWrapper} ref={recentVoteWrapper}>
            {testCase.map((v) => {
              return (
                <div css={contentBackground} key={v.key}>
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
          <div css={scrollWrapper}>
            <div
              css={scrollStyle}
              onClick={() => scrollPrev(recentVoteWrapper)}
            >
              ◀
            </div>
            <div
              css={scrollStyle}
              onClick={() => scrollNext(recentVoteWrapper)}
            >
              ▶
            </div>
          </div>
        </div>
      );
  }
};

export default PreviewList;

const backgroundStyle = css`
  background-color: #f6f6f6;

  margin: 0 auto;
  margin-top: 1.5rem;
  padding-left: 1%;
  padding-right: 1%;

  width: 100%;
  height: 16rem;
`;

const titleStyle = css`
  height: 2rem;

  display: flex;
  align-items: center;

  color: #000;
  font-weight: 100;

  border-bottom: 0.1px solid #aaa;

  h4 {
    cursor: pointer;

    :hover {
      filter: opacity(50%);
    }
  }
`;

const contentsWrapper = css`
  position: relative;

  margin: 0 auto;
  margin-top: 0.5rem;

  width: 93%;

  border-radius: 0.5rem;
  overflow: overlay;
  overflow-x: auto;
  white-space: nowrap;
  z-index: 1;

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

  margin-right: 0.5rem;

  width: 20rem;
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

const scrollWrapper = css`
  transform: translateY(-13.5rem);

  margin-top: 0.5rem;

  width: 100%;

  display: flex;
  justify-content: space-between;

  z-index: 0;
`;

const scrollStyle = css`
  background-color: #efefef;

  width: 3%;
  height: 13rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 0.5rem;
  transition: filter 0.25s ease;
  cursor: pointer;

  :hover {
    filter: brightness(95%);
  }
`;
