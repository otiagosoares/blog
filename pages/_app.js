import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const GlobalStyle = createGlobalStyle`
  html{
    scroll-behavior: smooth;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Noto Serif', serif;
    background-color: ${({ theme }) => theme.colors.primary};
  }
  a{
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const theme = {
  colors: {
    primary: '#fff',
    secondary: "#131313"
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
  )
}
