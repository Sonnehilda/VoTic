/* eslint-disable @next/next/no-img-element */
import { FormEvent, useContext, useRef, useState } from "react";
import { css } from "@emotion/react";
import theme, { ThemeProps } from "../../styles/theme";
import { UserContext } from "../../context/UserData";
import { check, pencil, user } from "../../public/images";
import Router from "next/router";

const MyInfo = ({ themeId }: ThemeProps) => {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const [editState, setEditState] = useState<boolean>(false);

  const { username, changeUsername, pfp, changePfp } = useContext(UserContext);

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
        changePfp(event.target.result);
    };
  };

  return (
    <div css={() => backgroundStyle(themeId)}>
      <span css={leaveStyle} onClick={() => Router.push("/")}>
        ← 홈페이지로 돌아가기
      </span>
      <div css={() => imgInput(themeId, pfp)}>
        <label htmlFor="img"></label>
        <input
          ref={fileRef}
          id="img"
          type="file"
          accept="image/*"
          onChange={() => readFile()}
        />
      </div>
      <div css={() => nameWrapper(themeId)}>
        {editState ? (
          <form
            onSubmit={(e: FormEvent<HTMLFormElement>) => {
              e.preventDefault();
              if (e.target[0].value != "") changeUsername(e.target[0].value);
              setEditState(!editState);
            }}
          >
            <input ref={nameInputRef} placeholder="새로운 닉네임" />
          </form>
        ) : (
          <span>{username}</span>
        )}

        <div
          css={() => editStyle(themeId, editState)}
          onClick={() => {
            if (editState && nameInputRef.current.value != "")
              changeUsername(nameInputRef.current.value);
            setEditState(!editState);
          }}
        >
          <img src={editState ? check.src : pencil.src} alt="editImage" />
        </div>
      </div>
    </div>
  );
};

export default MyInfo;

const backgroundStyle = (themeId: string) => css`
  background-color: ${theme[themeId].background};

  padding-left: 1%;
  padding-right: 1%;
  padding-top: 0.3rem;
  padding-bottom: 1rem;
  margin-top: 1.5rem;

  width: 100%;

  display: inline-flex;
  flex-direction: column;

  color: ${theme[themeId].color};
`;

const leaveStyle = css`
  width: max-content;

  color: #a1a1a1;
  font-size: 0.75rem;

  transition: filter 0.25s ease;
  cursor: pointer;

  :hover {
    filter: brightness(120%);
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
        : `background-image: url(${user.src});
      background-size: contain;
      background-position: center;`}

      position: absolute;

      width: 9rem;
      height: 9rem;

      border-radius: 50%;
      transition: filter 0.25s ease;
      content: "";

      ${previewImg === "" && themeId === "light0"
        ? "filter: invert(100%);"
        : "filter: invert(0%);"}
    }

    padding: 0.5rem;
    margin: 0 auto;

    width: 9rem;
    height: 9rem;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;
    transition: background-color 0.25s ease;
    cursor: pointer;

    :hover {
      background-color: ${theme[themeId.replace("0", "1")].hoverBackground};
    }
  }
`;

const nameWrapper = (themeId: string) => css`
  margin: 0 auto;
  margin-top: 1rem;

  height: 1.25rem;

  display: flex;
  justify-content: center;
  align-items: center;

  input {
    all: unset;

    transform: translateX(-0.5rem);

    padding-bottom: 0.1rem;

    border-bottom: 0.1px solid
      ${themeId.includes("light")
        ? theme[themeId.replace("light", "dark")].background
        : theme[themeId.replace("dark", "light")].background};
  }
`;

const editStyle = (themeId: string, editState: boolean) => css`
  background-color: #00ffab;

  padding: 0.15rem;
  padding-left: ${editState ? "0.175rem" : "0.2rem"};
  padding-bottom: ${editState ? "0.1rem" : "0.175rem"};
  margin-left: 0.25rem;

  width: 1.25rem;
  height: 1.25rem;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 0.8rem;
    height: 0.8rem;
  }

  border-radius: 50%;
  cursor: pointer;
`;
