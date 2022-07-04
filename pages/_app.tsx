import { ThemeProvider } from "@emotion/react";
import "../styles/globals.css";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
