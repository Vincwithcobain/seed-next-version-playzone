import React from 'react'
import { CacheProvider } from '@emotion/react'
import { ThemeProvider, CssBaseline } from '@mui/material'

import createEmotionCache from '../utils/createEmotionCache'
import lightTheme from '../styles/theme/lightTheme'
import '../styles/globals.css'

import SeedMenu from '../components/menu'
import SeedFooter from '../components/footer'

const clientSideEmotionCache = createEmotionCache()

const MyApp = (props: any) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <SeedMenu />
        <Component {...pageProps} />
        <SeedFooter/>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp