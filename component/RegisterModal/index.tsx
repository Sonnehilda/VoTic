import { useRef, useState } from "react";
import { css } from "@emotion/react";
import theme, { ThemeProps } from "../../styles/theme";
import {
  IdHasTakenException,
  EmailHasTakenException,
  GeneralException,
  PwDoesNotMatchException,
  ValueNotExistException,
  VerifyCodeDoesNotMatchException,
  WrongEmailFormException,
} from "../../lib/constants";

interface RegisterModalProps {
  setModalState: React.Dispatch<React.SetStateAction<string>>;
}

const RegisterModal = ({
  setModalState,
  themeId,
}: RegisterModalProps & ThemeProps) => {
  const filterRef = useRef<HTMLDivElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const [pwWarning, setPwWarning] = useState<number>(0);
  const [emailWarning, setEmailWarning] = useState<number>(0);
  const [email, setEmail] = useState<string>("");

  const validateForm = (e: React.FormEvent<HTMLFormElement>): boolean => {
    if (
      e.target[0].value != "" && // 아이디 input
      e.target[1].value != "" && // 비밀번호 input
      e.target[2].value != "" && // 비밀번호 확인 input
      e.target[3].value != "" && // 이메일 input
      e.target[4].value != "" // 이메일 인증 코드 input
    ) {
      if (e.target[1].value !== e.target[2].value) {
        setPwWarning(4);
        return false;
      }
      if (e.target[1].value.length < 8) {
        setPwWarning(1);
        return false;
      }
      if (
        e.target[1].value.search(/[a-z]/) === -1 ||
        e.target[1].value.search(/[A-Z]/) === -1
      ) {
        setPwWarning(2);
        return false;
      }
      if (e.target[1].value.search(/\W|\s/g) === -1) {
        setPwWarning(3);
        return false;
      }
      if (validateEmail()) {
        if (e.target[3].value != email) {
          setEmailWarning(3);
          return false;
        }
        if (pwWarning != 0) setPwWarning(0);
        return true;
      } else {
        if (pwWarning != 0) setPwWarning(0);
        return false;
      }
    } else {
      alert(ValueNotExistException);
      return false;
    }
  };

  const validateEmail = (): boolean => {
    const regex =
      /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    if (!regex.test(emailRef.current.value)) {
      setEmailWarning(1);
      return false;
    } else {
      if (emailWarning != 0) setEmailWarning(0);
      return true;
    }
  };

  return (
    <div
      ref={filterRef}
      css={darkFilter}
      onMouseDown={(e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === filterRef.current) setModalState("");
      }}
    >
      <div css={() => backgroundStyle(themeId)}>
        <div css={titleStyle}>
          <h1>회원가입</h1>
          <span onClick={() => setModalState("policy")}>←</span>
        </div>
        <form
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            if (validateForm(e)) console.log("REGISTERED");
          }}
        >
          <div css={() => inputStyle(themeId)}>
            <label htmlFor="id">
              아이디
              {false && <strong>{IdHasTakenException}</strong>}
            </label>
            <input id="id" type="id" autoComplete="off" />
          </div>
          <div css={() => inputStyle(themeId)}>
            <label htmlFor="pw">
              비밀번호
              {pwWarning === 1 ? (
                <strong>8자리 이상</strong>
              ) : (
                <span>8자리 이상</span>
              )}
              <span>,</span>
              {pwWarning === 2 ? (
                <strong>대 · 소문자</strong>
              ) : (
                <span>대 · 소문자</span>
              )}
              <span>&</span>
              {pwWarning === 3 ? (
                <strong>특수문자 조합</strong>
              ) : (
                <span>특수문자 조합</span>
              )}
            </label>
            <input id="pw" type="password" />
          </div>
          <div css={() => inputStyle(themeId)}>
            <label htmlFor="checkpw">
              비밀번호 확인
              {pwWarning === 4 && <strong>{PwDoesNotMatchException}</strong>}
            </label>
            <input id="checkpw" type="password" autoComplete="off" />
          </div>
          <div css={() => inputStyle(themeId)}>
            <label htmlFor="email">
              이메일
              {emailWarning === 1 ? (
                <strong>{WrongEmailFormException}</strong>
              ) : emailWarning === 2 ? (
                <strong>{EmailHasTakenException}</strong>
              ) : (
                emailWarning === 3 && <strong>{GeneralException}</strong>
              )}
            </label>
            <input
              ref={emailRef}
              id="email"
              type=""
              autoComplete="off"
              disabled={email === "" ? false : true}
            />
          </div>
          <div css={() => inputStyle(themeId)}>
            <label htmlFor="verify">
              이메일 인증 코드
              {false && <strong>{VerifyCodeDoesNotMatchException}</strong>}
            </label>
            <input id="verify" autoComplete="off" />
            {email === "" ? (
              <span
                onClick={() => {
                  if (validateEmail()) setEmail(emailRef.current.value);
                }}
              >
                전송 요청
              </span>
            ) : (
              <span>인증</span>
            )}
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
      all: unset;

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
    padding-right: 3.5rem;
    margin-bottom: 0.75rem;

    width: 13rem;
    height: 1.5rem;

    font-size: 0.75rem;

    border-radius: 0.5rem;
    transition: background-color 0.25s ease;

    :disabled {
      background-color: ${theme[themeId.replace("0", "2")].background};
    }

    :last-child {
      width: 16rem;
      padding-right: 0.5rem;
    }
  }

  span {
    background-color: ${theme[themeId.replace("0", "1")].background};

    position: absolute;

    width: 3rem;

    display: flex;
    justify-content: right;
    align-items: center;

    transform: translateX(13.6rem) translateY(1.65rem);

    font-size: 0.25rem;

    cursor: pointer;
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
