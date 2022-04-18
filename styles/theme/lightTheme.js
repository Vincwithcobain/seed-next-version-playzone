import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#127f06',
      light: '#51af3d',
      dark: '#005100'
    }
  },
  typography: {
    h6: {
      fontSize: "1rem"
    }
  }
});

export default lightTheme;