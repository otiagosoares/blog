import { ThemeProvider } from "styled-components";
import Router from "next/router";
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress
import GlobalStyle from "../styles/global";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const theme = {
  colors: {
    primary: "#fff",
    secondary: "#131313",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle theme={theme} />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
