import { palette } from "../lib/palette";
import { themeId } from "./emotion";

const theme = {
  light0: {
    background: palette.light0,
    color: "black",
    hoverBackground: palette.light1,
  },
  light1: {
    background: palette.light1,
    color: "black",
    hoverBackground: palette.light2,
  },
  light2: {
    background: palette.light2,
    color: "black",
    hoverBackground: palette.light3,
  },
  light3: {
    background: palette.light3,
    color: "black",
    hoverBackground: palette.light4,
  },
  light4: {
    background: palette.light4,
    color: "black",
    hoverBackground: palette.light5,
  },
  dark0: {
    background: palette.dark0,
    color: "white",
    hoverBackground: palette.dark2,
  },
  dark1: {
    background: palette.dark1,
    color: "white",
    hoverBackground: palette.dark3,
  },
  dark2: {
    background: palette.dark2,
    color: "white",
    hoverBackground: palette.dark4,
  },
  dark3: {
    background: palette.dark3,
    color: "white",
    hoverBackground: palette.dark5,
  },
  dark4: {
    background: palette.dark4,
    color: "white",
    hoverBackground: palette.dark5,
  },
};

export interface ThemeProps {
  themeId: themeId | string;
}

export default theme;
