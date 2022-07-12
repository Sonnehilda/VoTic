/* eslint-disable @next/next/no-img-element */
import { MutableRefObject, useRef, useState } from "react";
import { css } from "@emotion/react";
import theme, { ThemeProps } from "../../styles/theme";
import { upload } from "../../public/images";
import Router from "next/router";

interface WriteVoteProps {
  titleRef: MutableRefObject<HTMLInputElement>;
}

const WriteVote = ({ titleRef, themeId }: WriteVoteProps & ThemeProps) => {
  const fileRef = useRef<HTMLInputElement>(null);

  const [previewImage, setPreviewImage] = useState<string | ArrayBuffer>("");

  const readFile = () => {
    const fReader = new FileReader();
    if (fileRef.current && fileRef.current.files)
      try {
        fReader.readAsDataURL(fileRef.current.files[0]);
      } catch {
        return;
      }
    fReader.onloadend = (event: ProgressEvent<FileReader>) => {
      if (event && event.target && event.target.result)
        setPreviewImage(event.target.result);
    };
  };

  return (
    <div css={() => backgroundStyle(themeId)}>
      <span css={leaveStyle} onClick={() => Router.push("/")}>
        ← 홈페이지로 돌아가기
      </span>
      <div css={() => regInput(themeId)}>
        <input
          ref={titleRef}
          id="title"
          autoComplete="off"
          placeholder="투표의 제목을 입력하세요."
        />
      </div>
      <div css={() => imgInput(themeId, previewImage)}>
        <label htmlFor="img">클릭하여 사진 업로드</label>
        <input
          ref={fileRef}
          id="img"
          type="file"
          accept="image/*"
          onChange={() => readFile()}
        />
      </div>
    </div>
  );
};

export default WriteVote;

const backgroundStyle = (themeId: string) => css`
  background-color: ${theme[themeId].background};

  padding-left: 1%;
  padding-right: 1%;
  padding-top: 0.3rem;
  padding-bottom: 0.25rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;

  width: 100%;

  color: ${theme[themeId].color};
`;

const leaveStyle = css`
  color: #a1a1a1;
  font-size: 0.75rem;

  transition: filter 0.25s ease;
  cursor: pointer;

  :hover {
    filter: brightness(120%);
  }
`;

const regInput = (themeId: string) => css`
  padding-bottom: 0.6rem;
  margin-top: 0.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  input {
    all: unset;

    padding-bottom: 0.25rem;

    border-bottom: 0.1px solid ${theme[themeId.replace("0", "4")].background};
  }
`;

const imgInput = (themeId: string, previewImg?: string | ArrayBuffer) => css`
  display: flex;

  input {
    position: absolute;

    display: none;
  }

  label {
    all: unset;

    background-color: ${theme[themeId.replace("0", "1")].background};

    ::before {
      background-repeat: no-repeat;
      ${previewImg
        ? `background-image: url(${previewImg});
      background-size: cover;
      background-position: center;`
        : `background-image: url(${upload.src});
      background-size: 5rem 5rem;
      background-position: 50% 4.5rem;`}

      position: absolute;

      transform: translateX(-0.1%) translateY(-3rem);

      width: 98%;
      height: 15rem;

      transition: filter 0.25s ease;
      content: "";

      ${previewImg === "" && themeId === "light0"
        ? "filter: invert(100%);"
        : "filter: invert(0%);"}
    }

    padding-top: 5.75rem;
    margin-bottom: 0.175rem;

    width: 100%;
    height: 9.25rem;

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${theme[themeId].color};
    font-size: 0.75rem;
    text-align: center;
    ${previewImg && "font-size: 0;"}

    transition: background-color 0.25s ease;
    cursor: pointer;

    :hover {
      background-color: ${theme[themeId.replace("0", "1")].hoverBackground};
    }
  }
`;
