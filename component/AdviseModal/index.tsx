import { useRef, useState } from "react";
import { css } from "@emotion/react";
import theme, { ThemeProps } from "../../styles/theme";
import { discretion } from "./constant";

interface AdviseModalProps {
  setModalState: React.Dispatch<React.SetStateAction<string>>;
}

const AdviseModal = ({
  setModalState,
  themeId,
}: AdviseModalProps & ThemeProps) => {
  const filterRef = useRef<HTMLDivElement>(null);

  const [advised, setAdvised] = useState<boolean>(false);

  return (
    <div ref={filterRef} css={darkFilter}>
      <div css={() => backgroundStyle(themeId)}>
        <div css={titleStyle}>
          <h1>이용 약관</h1>
        </div>
        <div css={phraseWrapper}>
          <p>{discretion[0]}</p>
          <p>{discretion[1]}</p>
          <p>{discretion[2]}</p>
          <br />
          <p>{discretion[3]}</p>
          <p>{discretion[4]}</p>
          <br />
          <p>{discretion[5]}</p>
          <br />
          <p>{discretion[6]}</p>
          <p>{discretion[7]}</p>
          <br />
          <p>{discretion[8]}</p>
          <br />
          <p>{discretion[9]}</p>
          <p>{discretion[10]}</p>
        </div>

        <div css={checkboxWrapper}>
          <input
            id="checkbox"
            type="checkbox"
            onChange={() => {
              setAdvised(!advised);
            }}
          />
          <label css={labelStyle} htmlFor="checkbox">
            위의 사항을 숙지했으며, 이에 동의합니다.
          </label>
        </div>
        <button
          css={() => buttonStyle(themeId)}
          disabled={!advised}
          onClick={() => setModalState("")}
        >
          다음
        </button>
      </div>
    </div>
  );
};

export default AdviseModal;

const darkFilter = css`
  background-color: rgba(0, 0, 0, 0.1);
  position: fixed;

  width: 100vw;
  height: 100vh;

  z-index: 3;
`;

const backgroundStyle = (themeId: string) => css`
  background-color: ${theme[themeId].background};

  position: fixed;

  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);

  padding-bottom: 0.75rem;

  width: 20rem;

  color: ${theme[themeId].color};

  border-radius: 0.5rem;
  z-index: 3;
`;

const titleStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    position: absolute;

    transform: translateX(-8.95rem) translateY(-1.75rem);

    cursor: pointer;
  }
`;

const phraseWrapper = css`
  margin-bottom: 1.34rem;

  p {
    margin: 0;

    color: #a1a1a1;
    font-size: 0.25rem;
    text-align: center;
  }
`;

const checkboxWrapper = css`
  margin: 0 auto;

  width: 20rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const labelStyle = css`
  margin-bottom: 0.1rem;
  font-size: 0.25rem;
`;

const buttonStyle = (themeId: string) => css`
  all: unset;

  ${themeId.includes("light")
    ? `background-color: ${theme[themeId.replace("0", "1")].background};`
    : `background-color: ${theme[themeId.replace("0", "2")].background};`}

  padding: 0.25rem;
  margin: 0 auto;
  margin-top: 0.5rem;
  margin-bottom: 0.25rem;

  width: 16.5rem;
  height: 1.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 0.75rem;
  text-align: center;

  transition: background-color 0.25s ease;
  border-radius: 0.5rem;

  :enabled {
    cursor: pointer;
  }

  :hover:enabled {
    ${themeId.includes("light")
      ? `background-color: ${theme[themeId.replace("0", "2")].hoverBackground};`
      : `background-color: ${
          theme[themeId.replace("0", "1")].hoverBackground
        };`}
  }

  :disabled {
    ${themeId.includes("light")
      ? `background-color: ${theme[themeId.replace("0", "2")].background};`
      : `background-color: ${theme[themeId.replace("0", "1")].background};`}
  }
`;
