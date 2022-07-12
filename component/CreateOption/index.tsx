/* eslint-disable @next/next/no-img-element */
import { MutableRefObject, useRef, useState } from "react";
import { css } from "@emotion/react";
import theme, { ThemeProps } from "../../styles/theme";
import {
  ValueNotExistException,
  OptionAlreadyExistsException,
  OptionNotFulfilledException,
  SucceededMessage,
  TitleNotExistException,
} from "../../lib/constants";
import Options from "../Option";
import { useRouter } from "next/router";

interface WriteVoteProps {
  titleRef: MutableRefObject<HTMLInputElement>;
}

const CreateOption = ({ titleRef, themeId }: WriteVoteProps & ThemeProps) => {
  const optionRef = useRef<HTMLInputElement>(null);

  const [options, setOptions] = useState<string[]>([]);

  const router = useRouter();

  const createOption = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      optionRef.current &&
      !options.includes(optionRef.current.value) &&
      optionRef.current.value.length > 0
    ) {
      setOptions([...options, optionRef.current.value]);
      optionRef.current.value = "";
    } else if (optionRef.current && optionRef.current.value.length <= 0) {
      alert(ValueNotExistException);
    } else if (optionRef.current && options.includes(optionRef.current.value)) {
      alert(OptionAlreadyExistsException);
    }
    optionRef.current?.focus();
  };

  const makeQuestion = () => {
    if (titleRef.current.value === "") {
      alert(TitleNotExistException);
    } else if (options.length < 2) {
      alert(OptionNotFulfilledException);
    } else if (titleRef.current) {
      alert(SucceededMessage);
      router.push("/");
    }
  };

  return (
    <div css={() => backgroundStyle(themeId)}>
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          createOption(e);
        }}
      >
        <input
          ref={optionRef}
          id="addOption"
          autoComplete="off"
          placeholder="선택지를 입력하세요."
        />
        <button>추가</button>
      </form>
      <div>
        {options.map((p, i) => (
          <Options
            key={i}
            options={options}
            setOptions={setOptions}
            index={i}
            option={p}
            themeId={themeId}
          />
        ))}
        <button css={() => buttonStyle(themeId)} onClick={() => makeQuestion()}>
          투표 생성
        </button>
      </div>
    </div>
  );
};

const backgroundStyle = (themeId: string) => css`
  background-color: ${theme[themeId].background};

  padding-left: 1%;
  padding-right: 1%;
  padding-top: 0.55rem;
  padding-bottom: 0.5rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;

  width: 100%;

  color: ${theme[themeId].color};

  input {
    all: unset;

    padding-bottom: 0.35rem;
    margin-right: 1%;
    margin-bottom: 0.5rem;

    width: 89%;

    font-size: 1rem;

    border-bottom: 0.1px solid ${theme[themeId.replace("0", "4")].background};
  }

  form button {
    all: unset;

    background-color: ${theme[themeId.replace("0", "1")].background};

    display: inline-flex;
    justify-content: center;
    align-items: center;

    width: 10%;
    height: 2rem;

    font-size: 0.75rem;

    transition: background-color 0.25s ease;
    border-radius: 0.5rem;
    cursor: pointer;

    :hover {
      background-color: ${theme[themeId.replace("0", "1")].hoverBackground};
    }
  }
`;

const buttonStyle = (themeId: string) => css`
  all: unset;

  background-color: ${theme[themeId.replace("0", "1")].background};

  position: relative;
  left: 50%;
  transform: translateX(-50%);

  padding: 0.25rem;
  margin-top: 0.5rem;
  margin-bottom: 0.25rem;

  width: 14.5rem;
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

export default CreateOption;
