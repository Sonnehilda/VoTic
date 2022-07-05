import { Global, ThemeProvider } from "@emotion/react";
import { GlobalStyle } from "../styles/global";
import { ThemeColorProvider } from "../context/Theme";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeColorProvider>
        <Global styles={GlobalStyle} />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ThemeColorProvider>
    </>
  );
}

export default MyApp;
