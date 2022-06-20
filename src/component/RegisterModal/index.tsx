import { css } from "@emotion/react";
import { useRef } from "react";

interface RegisterModalProps {
  setModalState: React.Dispatch<React.SetStateAction<string>>;
}

const RegisterModal = ({ setModalState }: RegisterModalProps) => {
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
          <h1>회원가입</h1>
          <span onClick={() => setModalState("policy")}>←</span>
        </div>
        <form>
          <div css={inputStyle}>
            <label htmlFor="id">
              아이디
              {false && <strong>사용할 수 없는 아이디입니다.</strong>}
            </label>
            <input id="id" type="id" autoComplete="off" />
          </div>
          <div css={inputStyle}>
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
          <div css={inputStyle}>
            <label htmlFor="email">이메일</label>
            <input
              id="email"
              type="email"
              autoComplete="off"
              disabled={false}
            />
          </div>
          <div css={inputStyle}>
            <label htmlFor="verify">
              이메일 인증 코드
              {false && <span>인증이 완료되었습니다.</span>}
            </label>
            <input
              id="verify"
              type="verify"
              autoComplete="off"
              disabled={false}
            />
          </div>
          <button css={buttonStyle}>회원가입</button>
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

    background-color: #efefef;

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
      background-color: #e1e1e1;
    }
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
