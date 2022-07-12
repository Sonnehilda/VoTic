/* eslint-disable @next/next/no-img-element */
import { css } from "@emotion/react";
import { useRouter } from "next/router";
import { useContext } from "react";
import { UserContext } from "../../context/UserData";
import theme, { ThemeProps } from "../../styles/theme";

interface BannerProps {
  setModalState: React.Dispatch<React.SetStateAction<string>>;
}

const Banner = ({ setModalState, themeId }: BannerProps & ThemeProps) => {
  const { username } = useContext(UserContext);

  const router = useRouter();

  return (
    <div css={() => backgroundStyle(themeId)}>
      <h3>VoTic 에 오신 것을 환영합니다.</h3>
      {username === "" ? (
        <div>
          <button
            css={() => buttonStyle(themeId)}
            onClick={() => setModalState("login")}
          >
            로그인
          </button>
          <button
            css={() => buttonStyle(themeId)}
            onClick={() => setModalState("policy")}
          >
            회원가입
          </button>
        </div>
      ) : (
        <div>
          <button
            css={() => buttonStyle(themeId)}
            onClick={() => router.push("/write")}
          >
            투표 생성
          </button>
        </div>
      )}
    </div>
  );
};

export default Banner;

const backgroundStyle = (themeId: string) => css`
  background-color: ${theme[themeId].background};

  padding-left: 1%;
  padding-right: 1%;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;

  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  color: ${theme[themeId].color};

  h3 {
    margin-top: 0;

    font-size: 1.5rem;
    font-weight: 100;
  }

  div {
    width: 32.5rem;

    display: flex;
    justify-content: space-between;
  }
`;

const buttonStyle = (themeId: string) => css`
  all: unset;

  background-color: ${theme[themeId.replace("0", "1")].background};

  padding: 0.25rem;
  margin: 0 auto;
  margin-top: 0.5rem;
  margin-bottom: 0.25rem;

  width: 12.5rem;
  height: 2rem;

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
