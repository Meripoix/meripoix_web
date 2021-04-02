import Head from 'next/head'
import { AppProps } from 'next/app'
import React, { useEffect } from 'react'
import { ThemeProvider } from '@material-ui/core/styles'

import theme from '@styles/themes'
import CssBaseline from '@material-ui/core/CssBaseline'


function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])
  return (
  <>
    <Head>
      <title>Cardápio</title>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
    </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
  </>
) 
}

export default MyApp
