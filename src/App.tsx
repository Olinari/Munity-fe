import '@/style/ds.css';
import '@/style/normalize.css';
import Router from '@/router';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const darkTheme = createTheme({
  typography: {
    fontFamily: ['Poppins', 'Roboto', 'sans-serif'].join(','),
  },
  palette: {
    mode: 'dark',

    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#00ff00',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <ToastContainer />
      <CssBaseline />
      <Router />
    </ThemeProvider>
  );
}

export default App;
