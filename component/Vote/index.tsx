/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { css } from "@emotion/react";
import theme, { ThemeProps } from "../../styles/theme";
import { VoteValueType } from "../../types/voteValue";
import { useRef } from "react";

const Vote = ({ themeId }: ThemeProps) => {
  const data: VoteValueType[] = [
    { key: 0, title: "백색시유", status: 1368710 },
    { key: 1, title: "바나나 우유", status: 216866 },
    { key: 2, title: "초코 우유", status: 223932 },
    { key: 3, title: "커피 우유", status: 121736 },
    { key: 4, title: "딸기 우유", status: 86771 },
  ];

  const scrollRef = useRef<HTMLSpanElement[]>([]);
  const modeRef = useRef<boolean[] | number[]>([false]);
  const tempRef = useRef<boolean | number>(false);

  const [totalStatus, setTotalStatus] = useState<number>(0);

  useEffect(() => {
    let temp = 0;
    data.forEach((v) => {
      temp += v.status;
    });
    setTotalStatus(temp);

    const Timer = setInterval(() => {
      scrollRef.current.forEach((v, i) => {
        setTimeout(() => {
          try {
            if (v.scrollWidth > v.clientWidth && modeRef.current[i] != -1) {
              if (
                v.scrollLeft - (v.scrollWidth - v.clientWidth) < 2 &&
                v.scrollLeft - (v.scrollWidth - v.clientWidth) > -2
              ) {
                if (modeRef.current[i] === undefined) modeRef.current[i] = true;
                else modeRef.current[i] = !modeRef.current[i];
              }
              if (v.scrollLeft <= 0 && modeRef.current[i] !== undefined) {
                modeRef.current[i] = !modeRef.current[i];
              }
              if (modeRef.current[i] === true)
                v.scrollTo({
                  top: 0,
                  left: v.scrollLeft - 7.5,
                  behavior: "smooth",
                });
              if (
                modeRef.current[i] === false ||
                modeRef.current[i] === undefined
              )
                v.scrollTo({
                  top: 0,
                  left: v.scrollLeft + 7.5,
                  behavior: "smooth",
                });
            }
          } catch {
            clearInterval(Timer);
            return;
          }
        });
      });
    }, 100);
    return () => {
      clearInterval(Timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div css={() => backgroundStyle(themeId)}>
      <div css={() => titleStyle(themeId)}>
        <h4>투표 현황</h4>
      </div>
      {data.map((v) => {
        return (
          <button
            key={v.key}
            css={() => optionStyle(themeId, (100 / totalStatus) * v.status)}
          >
            <strong />
            <span
              onMouseEnter={() => {
                tempRef.current = modeRef.current[v.key];
                modeRef.current[v.key] = -1;
              }}
              onMouseLeave={() => {
                tempRef.current = modeRef.current[v.key] = tempRef.current;
              }}
              ref={(span) => (scrollRef.current[v.key] = span)}
            >
              {v.title} ({((100 / totalStatus) * v.status).toFixed(1)}%)
              <span css={detailStyle}>({v.status.toLocaleString()}표)</span>
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default Vote;

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

const optionStyle = (themeId: string, gauge: number) => css`
  all: unset;

  background-color: ${theme[themeId].background};

  margin-top: 0.5rem;

  width: 100%;
  height: 3rem;

  display: flex;
  align-items: center;

  word-break: keep-all;

  border: 0.1px solid ${theme[themeId.replace("0", "4")].background};
  border-radius: 0.5rem;
  transition: filter 0.25s ease;
  cursor: pointer;

  :hover {
    filter: brightness(95%);
  }

  span {
    position: relative;

    padding-left: 1rem;
    padding-right: 1rem;

    width: 100%;

    font-size: 0.85rem;
    text-align: center;
    white-space: nowrap;

    overflow-x: scroll;
    z-index: 1;

    ::-webkit-scrollbar {
      display: none;
    }
    ::-webkit-scrollbar-track {
      display: none;
    }
    ::-webkit-scrollbar-thumb {
      display: none;
    }

    span {
      padding: 0;
      padding-left: 0.25rem;
    }

    @media screen and (max-height: 240px) {
      span {
        display: none;
      }
    }
  }

  strong {
    background-color: #00ffab;

    position: absolute;

    width: ${gauge - 2}vw;
    height: 3rem;

    display: flex;

    border-radius: 0.5rem;
  }
`;

const detailStyle = css`
  padding-left: 0.25rem;

  color: #a1a1a1;
  font-size: 0.85rem;
`;
