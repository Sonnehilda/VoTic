import { css } from "@emotion/react";
import { useRef } from "react";

interface LoginModalProps {
  setModalState: React.Dispatch<React.SetStateAction<string>>;
}

const LoginModal = ({ setModalState }: LoginModalProps) => {
  const filterRef = useRef<HTMLDivElement>(null);

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
          <h1>로그인</h1>
          <span onClick={() => setModalState("")}>✕</span>
        </div>
        <form>
          <div css={inputStyle}>
            <label htmlFor="id">아이디</label>
            <input id="id" type="id" autoComplete="off" />
          </div>
          <div css={inputStyle}>
            <label htmlFor="pw">비밀번호</label>
            <input id="pw" type="password" />
          </div>
          <button css={buttonStyle}>로그인</button>
        </form>
        <div css={checkboxWrapper}>
          <input css={checkboxStyle} id="checkbox" type="checkbox" />
          <label css={labelStyle} htmlFor="checkbox">
            아이디 기억
          </label>
        </div>
        <div css={linkWrapper}>
          <span>아이디 찾기</span>
          <span>비밀번호 찾기</span>
        </div>
        <div css={linkWrapper}>
          회원이 아니신가요? <span>회원가입</span>
        </div>
      </div>
    </div>
  );
};

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

  width: 20rem;
  height: 25rem;

  border-radius: 0.5rem;
  z-index: 3;
`;

const titleStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    position: absolute;

    transform: translateX(8.95rem) translateY(-1.75rem);

    user-select: none;
    cursor: pointer;
  }
`;

const inputStyle = css`
  margin: 0 auto;
  width: 17rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  label {
    margin-bottom: 0.25rem;

    font-size: 0.25rem;

    user-select: none;
  }

  input {
    all: unset;

    background-color: #efefef;

    padding: 0.25rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    margin-bottom: 0.75rem;

    width: 16rem;
    height: 1.5rem;

    font-size: 0.75rem;

    border-radius: 0.5rem;
  }
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

  transition: filter 0.25s ease;
  border-radius: 0.5rem;
  cursor: pointer;

  :hover {
    filter: brightness(95%);
  }
`;

const checkboxWrapper = css`
  margin: 0 auto;

  width: 17.5rem;

  display: flex;
  justify-content: left;
  align-items: center;
`;

const checkboxStyle = css``;

const labelStyle = css`
  font-size: 0.25rem;

  user-select: none;
`;

const linkWrapper = css``;

export default LoginModal;
