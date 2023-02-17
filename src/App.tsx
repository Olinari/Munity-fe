import '@/style/ds.css';
import '@/style/normalize.css';
import Router from '@/router';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  );
}

export default App;
