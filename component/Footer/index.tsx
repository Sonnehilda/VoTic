import { css } from "@emotion/react";
import theme, { ThemeProps } from "../../styles/theme";

const Footer = ({ themeId }: ThemeProps) => {
  return (
    <footer css={() => backgroundStyle(themeId)}>
      <strong>ⓒ 2022 __Rals All rights reserved.</strong>
      <span>Front-End : __Rals</span>
      <span>Back-End : khcho0125</span>
    </footer>
  );
};

export default Footer;

const backgroundStyle = (themeId: string) => css`
  background-color: ${theme[themeId].background};

  position: relative;

  width: 100%;
  height: 6rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: ${theme[themeId].color};
  font-size: 1rem;

  span {
    font-size: 0.75rem;

    :first-of-type {
      margin-top: 0.5rem;
    }
  }
`;
