import { css } from "@emotion/react";
import theme, { ThemeProps } from "../../styles/theme";

interface OptionsProps {
  options: string[];
  setOptions: React.Dispatch<React.SetStateAction<string[]>>;
  index: number;
  option: string;
}

const Options = ({
  options,
  setOptions,
  index,
  option,
  themeId,
}: OptionsProps & ThemeProps) => {
  const deleteOption = () => {
    setOptions(
      options.filter((s) => {
        return s !== option;
      })
    );
  };

  return (
    <div css={() => backgroundStyle(themeId)}>
      <span>
        {index + 1}. {option}
      </span>
      <div css={deleteStyle} onClick={() => deleteOption()}>
        ✕
      </div>
    </div>
  );
};

const backgroundStyle = (themeId: string) => css`
  padding-left: 1%;
  padding-right: 1%;
  padding-bottom: 0.75rem;
  margin-top: 0.75rem;

  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;

  border-bottom: 0.1px solid ${theme[themeId.replace("0", "4")].background};

  span {
    width: 100%;

    font-size: 0.875rem;
    word-break: break-all;
  }

  :first-of-type {
    margin-top: 0.375rem;
  }

  :last-of-type {
    margin-bottom: 1rem;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  animation: fadeIn 0.5s ease-out;
`;

const deleteStyle = css`
  width: 3vh;
  color: #ff0000;
  font-size: 1.5vh;
  font-weight: 600;
  cursor: pointer;
  transition: filter 0.25s;
  :hover {
    filter: brightness(75%);
  }
`;

export default Options;
