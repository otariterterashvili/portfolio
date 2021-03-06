import React, { useState, useEffect } from 'react'
import useDarkMode from 'use-dark-mode'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { lightTheme, darkTheme } from '../static/theme'
import '../static/css/reset.css'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => (props) => props.theme.bg};
  }
`

const MyApp = ({ Component, pageProps }) => {
  const [isMounted, setIsMounted] = useState(false)
  const darkMode = useDarkMode(true)
  const theme = darkMode.value ? darkTheme : lightTheme

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <button onClick={darkMode.enable}>DARK MODE</button>
      <button onClick={darkMode.disable}>LIGHT MODE</button>
      {isMounted && <Component {...pageProps} />}
    </ThemeProvider>
  )
}

export default MyApp
