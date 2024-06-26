import '../styles/globals.css'
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import HomeNavBar from '../components/navbar'

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="light">
        <HomeNavBar />
        <Component {...pageProps} />  
      </NextThemesProvider>
    </NextUIProvider>
  )
}

export default MyApp
