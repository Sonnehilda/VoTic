import "@emotion/react";

type themeId =
  | "light0"
  | "light1"
  | "light2"
  | "light3"
  | "light4"
  | "dark0"
  | "dark1"
  | "dark2"
  | "dark3"
  | "dark4";

declare module "@emotion/react" {
  export interface Theme {
    [key in themeId]: {
      background: string;
      color: string;
      hoverBackground: string;
    };
  }
}
