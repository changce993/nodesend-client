import AppState from '../context/app/appState';
import AuthState from '../context/auth/authState';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from '../theme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <AuthState>  
        <AppState>
          <GlobalStyles/>
          <Component {...pageProps} />
        </AppState>
      </AuthState>
    </ThemeProvider>
  )
}

export default MyApp
