/* eslint-disable @next/next/no-img-element */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { testCaseType } from "../PreviewList/testCase";

const Vote = () => {
  const data: testCaseType[] = [
    { key: 0, title: "백색시유", status: 1368710 },
    { key: 1, title: "바나나 우유", status: 216866 },
    { key: 3, title: "초코 우유", status: 223932 },
    { key: 3, title: "커피 우유", status: 121736 },
    { key: 3, title: "딸기 우유", status: 86771 },
  ];
  const [totalStatus, setTotalStatus] = useState<number>(0);

  useEffect(() => {
    let temp = 0;
    data.forEach((v) => {
      temp += v.status;
    });
    setTotalStatus(temp);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div css={backgroundStyle}>
      <div css={titleStyle}>
        <h4>투표 현황</h4>
      </div>
      {data.map((v) => {
        return (
          <button
            key={v.title}
            css={() => optionStyle((100 / totalStatus) * v.status)}
          >
            <span>
              {v.title} ({((100 / totalStatus) * v.status).toFixed(1)}%)
              <span css={detailStyle}>({v.status.toLocaleString()}표)</span>
            </span>
            <strong />
          </button>
        );
      })}
    </div>
  );
};

export default Vote;

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

const optionStyle = (gauge: number) => css`
  all: unset;

  background-color: #f1f1f1;

  margin-top: 0.5rem;

  width: 97.9vw;
  height: 3rem;

  display: flex;
  align-items: center;

  word-break: keep-all;

  border: 0.1px solid #e1e1e1;
  border-radius: 0.5rem;
  transition: filter 0.25s ease;
  cursor: pointer;

  :hover {
    filter: brightness(95%);
  }

  span {
    position: relative;

    width: 97.9vw;

    justify-content: center;

    font-size: 0.85rem;
    text-align: center;

    z-index: 1;
  }

  strong {
    position: absolute;
    background-color: #00ffab;

    width: calc(${`${gauge / 1.021450459652707}vw`});
    height: 3rem;

    border-radius: 0.5rem;
    z-index: 0;

    @media (prefers-color-scheme: dark) {
      background-color: #1a1a1a;
    }
  }

  @media (prefers-color-scheme: dark) {
    background-color: #333;

    border: 0.1px solid #666;
  }
`;

const detailStyle = css`
  margin-left: 0.25rem;

  color: #a1a1a1;
  font-size: 0.85rem;
`;
