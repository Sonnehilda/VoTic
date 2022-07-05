/* eslint-disable @next/next/no-img-element */
import { css } from "@emotion/react";
import { search, user, sun, moon } from "../../public/images";
import Router from "next/router";
import { useContext } from "react";
import { ThemeColorContext } from "../../context/Theme";

interface HeaderProps {
  setModalState: React.Dispatch<React.SetStateAction<string>>;
}

const Header = ({ setModalState }: HeaderProps) => {
  const { themeColor, toggleThemeColor } = useContext(ThemeColorContext);

  return (
    <header css={backgroundStyle}>
      <div>
        <div css={linkStyle} onClick={() => Router.push("/")}>
          <span>V</span>o<span>T</span>ic
        </div>
        <div css={themeColorIcon} onClick={() => toggleThemeColor()}>
          <img
            src={`${themeColor === "light" ? sun.src : moon.src}`}
            alt="Dark Mode"
          />
          <span>{themeColor === "light" ? "라이트 모드" : "다크 모드"}</span>
        </div>
      </div>
      <form>
        <input css={inputStyle} type="text" placeholder="검색" />
        <img css={inputIcon} src={`${search.src}`} alt="" />
      </form>
      <div css={userStyle} onClick={() => setModalState("login")}>
        <span>로그인</span>
        <img css={userIcon} src={`${user.src}`} alt="User Icon" />
      </div>
    </header>
  );
};

export default Header;

const backgroundStyle = css`
  background-color: #00ffab;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-bottom: 0.15rem;

  height: 3rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    align-items: center;

    :first-of-type {
      justify-content: left;
    }
    :last-of-type {
      justify-content: right;
    }
  }

  form {
    position: absolute;

    left: 50%;
    transform: translateX(-50%);

    width: 40%;

    border-bottom: 0.1px solid #fff;

    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  }
`;

const linkStyle = css`
  margin-right: 0.25rem;

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
    font-size: 1.5rem;
    font-weight: 600;
  }
`;

const inputIcon = css`
  margin-left: 0.25rem;
  width: 0.75rem;
  height: 0.75rem;

  transition: opacity 0.25s ease-out;
  cursor: pointer;
  opacity: 0;
`;

const inputStyle = css`
  all: unset;

  padding-left: 0.25rem;
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

  border: 0.1px solid #fff;
  border-radius: 50%;
  transition: filter 0.15s ease;
  cursor: pointer;
`;

const themeColorIcon = css`
  cursor: pointer;

  img {
    margin-top: 0.2rem;
    margin-left: 0.5rem;

    width: 1.25rem;
    height: 1.25rem;

    transition: filter 0.15s ease;
  }

  :hover img,
  :hover span {
    filter: brightness(90%) drop-shadow(0 0 0.5rem #aaa);
  }

  span {
    margin-top: 0.2rem;
    margin-left: 0.4rem;

    color: #fff;
    font-size: 0.75rem;
    font-weight: 100;
    text-align: right;
    text-overflow: ellipsis;
    white-space: nowrap;

    overflow: hidden;
    transition: filter 0.15s ease;
  }
`;