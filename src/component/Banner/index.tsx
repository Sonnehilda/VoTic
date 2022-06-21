/* eslint-disable @next/next/no-img-element */
import { css } from "@emotion/react";

interface BannerProps {
  setModalState: React.Dispatch<React.SetStateAction<string>>;
}

const Banner = ({ setModalState }: BannerProps) => {
  return (
    <div css={backgroundStyle}>
      <h3>VoTic 에 오신 것을 환영합니다.</h3>
      <div>
        <button css={buttonStyle} onClick={() => setModalState("login")}>
          투표 생성
        </button>
        <button css={buttonStyle}>임의의 투표 확인</button>
      </div>
    </div>
  );
};

export default Banner;

const backgroundStyle = css`
  background-color: #f6f6f6;

  margin: 0 auto;
  margin-top: 1.5rem;

  width: 100%;
  height: 12rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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

const buttonStyle = css`
  all: unset;

  background-color: #efefef;

  padding: 0.25rem;

  width: 15rem;
  height: 2rem;

  font-size: 1rem;
  text-align: center;

  transition: filter 0.25s ease;
  border-radius: 0.5rem;
  cursor: pointer;

  :hover {
    filter: brightness(95%);
  }
`;
