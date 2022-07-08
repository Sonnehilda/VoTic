/* eslint-disable @next/next/no-img-element */
import { useRef } from "react";
import { css } from "@emotion/react";
import theme, { ThemeProps } from "../../styles/theme";
import { getTitle } from "../../lib/getTitle";
import { testCase as data } from "../../lib/testCase";
import VoteCard from "../VoteCard";

interface FullListProps {
  type?: string;
}

const FullViewList = ({ type, themeId }: FullListProps & ThemeProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  return (
    <div css={() => backgroundStyle(themeId)}>
      <div css={() => titleStyle(themeId)}>
        <h4>{getTitle(type)}</h4>
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
              size="fixed"
              themeId={themeId}
            />
          );
        })}
      </div>
      <button css={() => buttonStyle(themeId)}>더 보기</button>
    </div>
  );
};

export default FullViewList;

const backgroundStyle = (themeId: string) => css`
  background-color: ${theme[themeId].background};

  padding-left: 1%;
  padding-right: 1%;
  padding-bottom: 0.5rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;

  width: 100%;

  color: ${theme[themeId].color};
`;

const titleStyle = (themeId: string) => css`
  height: 2rem;

  display: flex;
  align-items: center;

  font-weight: 100;

  border-bottom: 0.1px solid ${theme[themeId.replace("0", "4")].background};
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

const buttonStyle = (themeId: string) => css`
  all: unset;

  background-color: ${theme[themeId.replace("0", "1")].background};

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

  transition: background-color 0.25s ease;
  border-radius: 0.5rem;
  cursor: pointer;

  :hover {
    background-color: ${theme[themeId.replace("0", "1")].hoverBackground};
  }
`;
