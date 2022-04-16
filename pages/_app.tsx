import type { AppProps } from 'next/app';
import { CssBaseline, ThemeProvider } from '@mui/material';
import darkTheme from '../styles/theme/darkTheme';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
