import { useContext } from "react";
import { css } from "@emotion/react";
import { ThemeColorContext } from "../context/Theme";

export const GlobalStyle = () => {
  const { themeColor } = useContext(ThemeColorContext);

  return css`
    * {
      box-sizing: border-box;
      transition: color 0.15s ease, background-color 0.15s ease;
    }

    html,
    body {
      ${themeColor &&
      `background-color: ${themeColor === "light" ? "white" : "black"};`};

      padding: 0;
      margin: 0;

      max-width: 100vw;

      font-family: "INF";
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;

      //overflow: overlay;
      overflow-x: hidden;
      user-select: none;
    }

    img {
      pointer-events: none;
    }

    ::-webkit-scrollbar {
      width: 0.5rem;
    }
    ::-webkit-scrollbar-track {
      background-color: transparent;
    }
    ::-webkit-scrollbar-thumb {
      box-shadow: inset 0 0 6rem #00ffab;
    }
  `;
};
