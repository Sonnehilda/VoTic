/* eslint-disable @next/next/no-img-element */
import { css } from "@emotion/react";
import { search, user } from "../../../public/images";

interface HeaderProps {
  setModalState: React.Dispatch<React.SetStateAction<string>>;
}

const Header = ({ setModalState }: HeaderProps) => {
  return (
    <nav css={backgroundStyle}>
      <div css={linkStyle}>
        <span>V</span>o<span>T</span>ic
      </div>
      <form>
        <input css={inputStyle} type="text" placeholder="검색" />
        <img css={inputIcon} src={`${search.src}`} alt="" />
      </form>
      <div css={userStyle} onClick={() => setModalState("login")}>
        <span>로그인</span>
        <img css={userIcon} src={`${user.src}`} alt="user" />
      </div>
    </nav>
  );
};

const backgroundStyle = css`
  background-color: #00ffab;

  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-bottom: 0.15rem;

  height: 3rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  user-select: none;

  div {
    display: flex;

    :first-of-type {
      width: 25%;
      justify-content: left;
    }
    :last-of-type {
      width: 25%;
      justify-content: right;
    }
  }

  form {
    width: 40%;

    border-bottom: 0.1px solid #fff;

    display: flex;
    align-items: center;
  }
`;

const linkStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;

  color: white;
  font-size: 1rem;
  font-weight: 100;

  transition: filter 0.15s ease;
  cursor: pointer;

  :first-of-type {
    color: white;
    font-size: 1.5rem;
  }

  :hover {
    filter: brightness(90%) drop-shadow(0 0 0.5rem #aaa);
  }

  span {
    color: #e3fcbf;
    font-size: 1.5rem;
    font-weight: 600;
  }
`;

const inputIcon = css`
  position: absolute;

  margin-left: 10.25rem;

  width: 0.75rem;
  height: 0.75rem;

  transition: margin-left 0.25s, opacity 0.25s ease-out;
  cursor: pointer;
  filter: invert(100%);
  opacity: 0;
`;

const inputStyle = css`
  all: unset;

  padding-left: 1.25rem;
  padding-right: 1.25rem;

  width: 100%;
  height: 1.75rem;

  color: #fff;
  font-weight: 100;
  text-align: center;

  ::placeholder {
    color: #fff;

    transition: opacity 0.25s ease;
  }

  :focus::placeholder {
    opacity: 0;
  }

  :focus ~ img {
    margin-left: 0.25rem;

    opacity: 1;
  }
`;

const userStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: white;
  font-size: 1rem;
  font-weight: 100;

  transition: filter 0.15s ease;
  cursor: pointer;

  :hover {
    filter: brightness(90%) drop-shadow(0 0 0.5rem #aaa);
  }

  span {
    padding-right: 0.5rem;

    color: #fff;
    font-size: 0.75rem;
    font-weight: 100;
    text-align: right;
    text-overflow: ellipsis;
    white-space: nowrap;

    overflow: hidden;
  }
`;

const userIcon = css`
  padding: 0.1rem;
  margin-top: 0.15rem;

  width: 1.5rem;
  height: 1.5rem;

  border: 0.1px solid #000;
  border-radius: 50%;
  transition: filter 0.15s ease;
  cursor: pointer;
  filter: invert(100%);
`;

export default Header;
