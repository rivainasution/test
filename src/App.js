import { ThemeProvider } from '@emotion/react';
import Main from './pages/Main';
import { createTheme } from '@mui/material';

function App() {
  const outerTheme = createTheme({
    palette: {
      primary: {
        main: '#FAAF',
        light: '#F33A3A',
      },
      secondary: {
        main: '#44C4A1',
      },
    },
  });
  return (
    <ThemeProvider theme={outerTheme}>
      <Main />
    </ThemeProvider>
  );
}

export default App;
