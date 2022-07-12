import "../styles/font.css";
import { Global, ThemeProvider } from "@emotion/react";
import { GlobalStyle } from "../styles/global";
import { ThemeColorProvider } from "../context/Theme";
import theme from "../styles/theme";
import { UserProvider } from "../context/UserData";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <UserProvider>
        <ThemeColorProvider>
          <Global styles={GlobalStyle} />
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </ThemeColorProvider>
      </UserProvider>
    </>
  );
}

export default MyApp;
