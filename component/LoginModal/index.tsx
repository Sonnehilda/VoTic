import { useRef } from "react";
import { css } from "@emotion/react";
import theme, { ThemeProps } from "../../styles/theme";

interface LoginModalProps {
  setModalState: React.Dispatch<React.SetStateAction<string>>;
}

const LoginModal = ({
  setModalState,
  themeId,
}: LoginModalProps & ThemeProps) => {
  const filterRef = useRef<HTMLDivElement>(null);

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
          <h1>로그인</h1>
          <span onClick={() => setModalState("")}>✕</span>
        </div>
        <form>
          <div css={() => inputStyle(themeId)}>
            <label htmlFor="id">아이디</label>
            <input id="id" type="id" autoComplete="off" />
          </div>
          <div css={() => inputStyle(themeId)}>
            <label htmlFor="pw">
              비밀번호
              <span>대 · 소문자 & 특수문자 조합</span>
            </label>
            <input id="pw" type="password" />
          </div>
          <button css={() => buttonStyle(themeId)}>로그인</button>
        </form>
        <div css={checkboxWrapper}>
          <input id="checkbox" type="checkbox" />
          <label css={labelStyle} htmlFor="checkbox">
            아이디 저장
          </label>
        </div>
        <div css={linkWrapper}>
          <span>아이디 찾기</span>
          <strong>|</strong>
          <span>비밀번호 찾기</span>
        </div>
        <div css={linkWrapper}>
          <strong>회원이 아니신가요?</strong>
          <span onClick={() => setModalState("policy")}>회원가입</span>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;

const darkFilter = css`
  background-color: rgba(0, 0, 0, 0.1);
  position: fixed;

  width: 100vw;
  height: 100vh;

  z-index: 2;
`;

const backgroundStyle = (themeId: string) => css`
  background-color: ${theme[themeId].background};

  position: fixed;

  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);

  padding-bottom: 0.5rem;

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

const inputStyle = (themeId: string) => css`
  margin: 0 auto;

  width: 17rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  label {
    margin-bottom: 0.25rem;

    font-size: 0.25rem;

    span {
      margin-left: 0.25rem;

      color: #a1a1a1;
    }
  }

  input {
    all: unset;

    background-color: ${theme[themeId.replace("0", "1")].background};

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
  cursor: pointer;

  :hover {
    background-color: ${theme[themeId.replace("0", "1")].hoverBackground};
  }
`;

const checkboxWrapper = css`
  margin: 0 auto;

  width: 17.5rem;

  display: flex;
  justify-content: left;
  align-items: center;
`;

const labelStyle = css`
  margin-bottom: 0.1rem;
  font-size: 0.25rem;
`;

const linkWrapper = css`
  margin: 0 auto;

  display: flex;
  justify-content: center;

  font-size: 0.25rem;

  strong {
    all: unset;

    margin: 0.25rem;

    font-size: 0.25rem;
  }

  span {
    margin: 0.25rem;

    color: #00ffab;
    text-decoration: underline;

    cursor: pointer;
  }
`;
