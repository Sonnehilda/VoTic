/* eslint-disable @next/next/no-img-element */
import { useRef } from "react";
import { css } from "@emotion/react";
import theme, { ThemeProps } from "../../styles/theme";
import { scrollNext, scrollPrev } from "../../lib/scroll";
import { getTitle } from "../../lib/getTitle";
import { testCase as data } from "../../lib/testCase";
import VoteCard from "../VoteCard";
import Router from "next/router";

interface PreviewListProps {
  type: string;
}

const PreviewList = ({ type, themeId }: PreviewListProps & ThemeProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  return (
    <div css={() => backgroundStyle(themeId)}>
      <div css={() => titleStyle(themeId)}>
        <h4 onClick={() => Router.push(`/list/${type}`)}>{getTitle(type)} →</h4>
      </div>
      <div ref={wrapperRef} css={contentsWrapper}>
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
              themeId={themeId}
            />
          );
        })}
      </div>
      <div css={scrollWrapper}>
        <div
          css={() => scrollStyle(themeId)}
          onClick={() => scrollPrev(wrapperRef)}
        >
          ◀
        </div>
        <div
          css={() => scrollStyle(themeId)}
          onClick={() => scrollNext(wrapperRef)}
        >
          ▶
        </div>
      </div>
    </div>
  );
};

export default PreviewList;

const backgroundStyle = (themeId: string) => css`
  background-color: ${theme[themeId].background};

  margin: 0 auto;
  margin-top: 1.5rem;
  padding-left: 1%;
  padding-right: 1%;

  width: 100%;
  height: 16rem;

  color: ${theme[themeId].color};
`;

const titleStyle = (themeId: string) => css`
  height: 2rem;

  display: flex;
  align-items: center;

  font-weight: 100;

  border-bottom: 0.1px solid ${theme[themeId.replace("0", "4")].background};

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

  @media screen and (max-width: 400px) {
    width: 98%;
  }
`;

const scrollWrapper = css`
  transform: translateY(-13.5rem);

  margin-top: 0.5rem;

  width: 100%;

  display: flex;
  justify-content: space-between;

  z-index: 0;

  @media screen and (max-width: 400px) {
    display: none !important;
  }
`;

const scrollStyle = (themeId: string) => css`
  background-color: ${theme[themeId.replace("0", "1")].background};

  width: 3%;
  height: 13rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 0.5rem;
  cursor: pointer;

  :hover {
    background-color: ${theme[themeId.replace("0", "1")].hoverBackground};
  }
`;
