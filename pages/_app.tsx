import { AppProps } from "next/app"
import Head from "next/head"
import { ThemeProvider } from "theme-ui"
import theme from "utils/theme"

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Some title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  )
}
