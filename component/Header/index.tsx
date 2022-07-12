/* eslint-disable @next/next/no-img-element */

import { FormEvent, useContext, useEffect, useState } from "react";
import { css } from "@emotion/react";
import theme, { ThemeProps } from "../../styles/theme";
import { ThemeColorContext } from "../../context/Theme";
import { UserContext } from "../../context/UserData";
import { search, user, sun, moon } from "../../public/images";
import Router, { useRouter } from "next/router";

interface HeaderProps {
  setModalState: React.Dispatch<React.SetStateAction<string>>;
}

const Header = ({ setModalState, themeId }: HeaderProps & ThemeProps) => {
  const [dropDownState, setDropDownState] = useState<boolean>(false);
  const [hideHeaderState, setHideHeaderState] = useState<boolean>(false);

  const { themeColor, toggleThemeColor } = useContext(ThemeColorContext);
  const { username, pfp } = useContext(UserContext);

  const router = useRouter();

  useEffect(() => {
    let prevScrollTop = 0;
    const toggleHeader = () => {
      const nextScrollTop = window.pageYOffset || 0;
      if (prevScrollTop > 45 && nextScrollTop > prevScrollTop) {
        setDropDownState(false);
        setHideHeaderState(true);
      } else if (nextScrollTop < prevScrollTop) {
        setHideHeaderState(false);
      }
      prevScrollTop = nextScrollTop;
    };
    document.addEventListener("scroll", toggleHeader);
    return () => document.removeEventListener("scroll", toggleHeader);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header css={() => backgroundStyle(hideHeaderState)}>
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
      <form
        onSubmit={(e: FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          router.push({
            pathname: "/search",
            query: {
              q: e.target[0].value,
            },
          });
        }}
      >
        <input css={inputStyle} type="text" placeholder="검색" />
        <img css={inputIcon} src={`${search.src}`} alt="" />
      </form>
      <div>
        {dropDownState === true && (
          <div css={() => dropDownStateStyle(themeId)}>
            <button onClick={() => Router.push("/mypage")}>내 정보</button>
            <button onClick={() => Router.push("/write")}>
              새 투표 만들기
            </button>
          </div>
        )}
        <div
          css={userStyle}
          onClick={() => {
            if (username === "") setModalState("login");
            else setDropDownState(!dropDownState);
          }}
        >
          {username === "" ? <span>로그인</span> : <span>{username}</span>}
          <img
            css={() => userIcon(pfp)}
            src={`${pfp ? pfp : user.src}`}
            alt="User Icon"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;

const backgroundStyle = (hideHeaderState: boolean) => css`
  position: fixed;

  ${hideHeaderState ? "top: -3rem;" : "top: 0;"}

  background-color: #00ffab;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-bottom: 0.15rem;

  width: 100%;
  height: 3rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  transition: top 0.25s ease;
  z-index: 2;

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

    @media screen and (max-width: 300px) {
      display: none !important;
    }
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

    width: 10rem;

    color: #fff;
    font-size: 0.75rem;
    font-weight: 100;
    text-align: right;
    text-overflow: ellipsis;
    white-space: nowrap;

    overflow: hidden;

    @media screen and (max-width: 480px) {
      display: none !important;
    }
  }
`;

const userIcon = (pfp?: string | ArrayBuffer) => css`
  ${pfp === "" && "padding: 0.1rem;"}
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

  @media screen and (max-device-width: 400px) {
    display: none !important;
  }

  img {
    margin-top: 0.2rem;
    margin-left: 0.5rem;

    width: 1.25rem;
    height: 1.25rem;

    transition: filter 0.15s ease;

    @media screen and (max-width: 400px) {
      display: none !important;
    }
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

    @media screen and (max-width: 600px) {
      display: none !important;
    }
  }
`;

const dropDownStateStyle = (themeId: string) => css`
  position: absolute;

  transform: translateX(0.5rem) translateY(4.15rem);

  display: flex;
  justify-content: center;
  flex-direction: column;

  width: 7.5rem;

  z-index: 2;

  button {
    all: unset;

    background-color: ${theme[themeId.replace("0", "1")].background};

    width: 7.5rem;
    height: 2.5rem;

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${theme[themeId].color};
    font-size: 0.75rem;

    transition: background-color 0.25s ease;
    border: 0.1vh solid #000;
    border-bottom: 0;
    cursor: pointer;

    :first-of-type {
      border-top-left-radius: 0.5rem;
      border-top-right-radius: 0.5rem;
    }

    :last-of-type {
      border-bottom: 0.1px solid #000;
      border-bottom-left-radius: 0.5rem;
      border-bottom-right-radius: 0.5rem;
    }

    :first-of-type:before {
      position: absolute;

      transform: translateX(2.5rem) translateY(-1.5rem);

      width: 0;
      height: 0;

      border-bottom: 0.6rem solid ${theme[themeId.replace("0", "1")].background};
      border-left: 0.3rem solid transparent;
      border-right: 0.3rem solid transparent;

      content: " ";

      z-index: 1;
    }

    :first-of-type:after {
      position: absolute;

      transform: translateX(2.5rem) translateY(-1.6rem);

      width: 0;
      height: 0;

      border-bottom: 0.6rem solid #000;
      border-left: 0.3rem solid transparent;
      border-right: 0.3rem solid transparent;

      content: " ";
    }

    :hover {
      background-color: ${theme[themeId.replace("0", "1")].hoverBackground};

      :first-of-type:before {
        border-bottom: 0.6rem solid
          ${theme[themeId.replace("0", "1")].hoverBackground};
      }
    }
  }
`;
