/* eslint-disable @next/next/no-img-element */
import { css } from "@emotion/react";
import Router from "next/router";
import { useRef } from "react";
import VoteCard from "../VoteCard";
import { testCase as data } from "./testCase";

interface PreviewListProps {
  title: string;
  type: string;
}

const PreviewList = ({ title, type }: PreviewListProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

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

  return (
    <div css={backgroundStyle}>
      <div css={titleStyle}>
        <h4 onClick={() => Router.push(`/${type}`)}>{title} →</h4>
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
            />
          );
        })}
      </div>
      <div css={scrollWrapper}>
        <div css={scrollStyle} onClick={() => scrollPrev(wrapperRef)}>
          ◀
        </div>
        <div css={scrollStyle} onClick={() => scrollNext(wrapperRef)}>
          ▶
        </div>
      </div>
    </div>
  );
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

  @media (prefers-color-scheme: dark) {
    ::-webkit-scrollbar-thumb {
      box-shadow: inset 0 0 6rem #000;
    }
  }
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

  @media (prefers-color-scheme: dark) {
    background-color: #333;
  }
`;
