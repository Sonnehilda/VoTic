import { useRef } from "react";
import { css } from "@emotion/react";
import theme, { ThemeProps } from "../../styles/theme";

interface RegisterModalProps {
  setModalState: React.Dispatch<React.SetStateAction<string>>;
}

const RegisterModal = ({
  setModalState,
  themeId,
}: RegisterModalProps & ThemeProps) => {
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
          <h1>회원가입</h1>
          <span onClick={() => setModalState("policy")}>←</span>
        </div>
        <form>
          <div css={() => inputStyle(themeId)}>
            <label htmlFor="id">
              아이디
              {false && <strong>사용할 수 없는 아이디입니다.</strong>}
            </label>
            <input id="id" type="id" autoComplete="off" />
          </div>
          <div css={() => inputStyle(themeId)}>
            <label htmlFor="pw">
              비밀번호
              {false ? <strong>8자리 이상</strong> : <span>8자리 이상</span>}
              <span>,</span>
              {false ? <strong>대 · 소문자</strong> : <span>대 · 소문자</span>}
              <span>&</span>
              {false ? (
                <strong>특수문자 조합</strong>
              ) : (
                <span>특수문자 조합</span>
              )}
            </label>
            <input id="pw" type="password" />
          </div>
          <div css={() => inputStyle(themeId)}>
            <label htmlFor="email">이메일</label>
            <input id="email" type="email" autoComplete="off" />
          </div>
          <div css={() => inputStyle(themeId)}>
            <label htmlFor="verify">
              이메일 인증 코드
              {false && <strong>코드가 올바르지 않습니다.</strong>}
            </label>
            <input id="verify" type="verify" autoComplete="off" />
          </div>
          <button css={() => buttonStyle(themeId)}>회원가입</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterModal;

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

    strong {
      all: unset;

      margin-left: 0.25rem;

      color: #ff0000;
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
    transition: background-color 0.25s ease;

    :disabled {
      background-color: ${theme[themeId.replace("0", "2")].background};
    }
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
