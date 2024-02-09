import { CssBaseline, ThemeProvider, Typography } from '@mui/material'
import { createTheme } from '@mui/material/styles';
import { themeSettings } from "theme";

function App() {

  const theme = createTheme(themeSettings());

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Typography
          fontSize="32px"
          fontWeight="bold"
          color="primary"
        >
          SocialMedia
        </Typography>
      </ThemeProvider>
    </div>
  );
}

export default App;
