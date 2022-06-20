import { css } from "@emotion/react";
import { useRef, useState } from "react";
import { discretion, purpose } from "./constant";

interface PolicyModalProps {
  setModalState: React.Dispatch<React.SetStateAction<string>>;
}

const PolicyModal = ({ setModalState }: PolicyModalProps) => {
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
      <div css={backgroundStyle}>
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
        <div css={contentWrapper}>
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
          <p>{discretion[0]}</p>
          <p>{discretion[1]}</p>
          <br />
          <p>{discretion[2]}</p>
          <p>{discretion[3]}</p>
          <br />
          <p>{discretion[4]}</p>
          <p>{discretion[5]}</p>
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
            위 개인정보 수집 및 이용에 동의합니다.
          </label>
        </div>
        <button
          css={buttonStyle}
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

  z-index: 2;
`;

const backgroundStyle = css`
  background-color: #f6f6f6;

  position: fixed;

  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);

  padding-bottom: 0.5rem;

  width: 20rem;

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

    user-select: none;
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
    font-size: 1.5vh;
    text-align: center;
  }
`;

const contentWrapper = css`
  margin: 0 auto;
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin-bottom: 1.34rem;

  width: 18rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-top: 0.1vh solid #000;
  border-bottom: 0.1vh solid #000;

  span {
    width: 6rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    font-size: 1.5vh;
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

  user-select: none;
`;

const buttonStyle = css`
  all: unset;

  background-color: #efefef;

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

  transition: background-color 0.25s ease, filter 0.25s ease;
  border-radius: 0.5rem;
  user-select: none;

  :enabled {
    cursor: pointer;
  }

  :hover:enabled {
    filter: brightness(95%);
  }

  :disabled {
    background-color: #e1e1e1;
  }
`;
