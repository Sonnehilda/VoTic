import { useRef, useState } from "react";
import { css } from "@emotion/react";
import theme, { ThemeProps } from "../../styles/theme";
import { iAgree, privacyPolicyDiscretion, purpose } from "../../lib/constants";

interface PolicyModalProps {
  setModalState: React.Dispatch<React.SetStateAction<string>>;
}

const PolicyModal = ({
  setModalState,
  themeId,
}: PolicyModalProps & ThemeProps) => {
  const filterRef = useRef<HTMLDivElement>(null);

  const [advised, setAdvised] = useState<boolean>(false);

  return (
    <div
      ref={filterRef}
      css={darkFilter}
      onMouseDown={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (e.target === filterRef.current) setModalState("");
      }}
    >
      <div css={() => backgroundStyle(themeId)}>
        <div css={titleStyle}>
          <h1>회원가입</h1>
          <span onClick={() => setModalState("login")}>←</span>
        </div>

        <div css={phraseWrapper}>
          <p>{purpose[0]}</p>
          <p>{purpose[1]}</p>
          <p>{purpose[2]}</p>
        </div>

        <div css={titleWrapper}>
          <span>수집 항목</span>
          <span>수집 목적</span>
          <span>보유 기간</span>
        </div>
        <div css={() => contentWrapper(themeId)}>
          <div>
            <span>이메일</span>
          </div>
          <div>
            <span>이용자 식별 및</span>
            <span>본인 여부 확인</span>
          </div>
          <div>
            <span>회원 탈퇴 시까지</span>
          </div>
        </div>

        <div css={phraseWrapper}>
          <p>{privacyPolicyDiscretion[0]}</p>
          <p>{privacyPolicyDiscretion[1]}</p>
          <br />
          <p>{privacyPolicyDiscretion[2]}</p>
          <p>{privacyPolicyDiscretion[3]}</p>
          <br />
          <p>{privacyPolicyDiscretion[4]}</p>
          <p>{privacyPolicyDiscretion[5]}</p>
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
            {iAgree}
          </label>
        </div>
        <button
          css={() => buttonStyle(themeId)}
          disabled={!advised}
          onClick={() => setModalState("register")}
        >
          다음
        </button>
      </div>
    </div>
  );
};

export default PolicyModal;

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

const titleWrapper = css`
  margin: 0 auto;
  margin-bottom: 0.25rem;

  width: 18rem;

  display: flex;
  justify-content: center;
  align-items: center;

  span {
    width: 6rem;

    color: #a1a1a1;
    font-size: 0.25rem;
    text-align: center;
  }
`;

const contentWrapper = (themeId: string) => css`
  margin: 0 auto;
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin-bottom: 1.34rem;

  width: 18rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-top: 0.1px solid
    ${themeId.includes("light")
      ? theme[themeId.replace("light", "dark")].background
      : theme[themeId.replace("dark", "light")].background};
  border-bottom: 0.1px solid
    ${themeId.includes("light")
      ? theme[themeId.replace("light", "dark")].background
      : theme[themeId.replace("dark", "light")].background};

  span {
    width: 6rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    font-size: 0.25rem;
    text-align: center;
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

  background-color: ${theme[themeId.replace("0", "1")].background};

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
    background-color: ${theme[themeId.replace("0", "1")].hoverBackground};
  }

  :disabled {
    background-color: ${theme[themeId.replace("0", "2")].background};
  }
`;
