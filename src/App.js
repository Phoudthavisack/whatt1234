// material
import { ThemeProvider } from "@mui/material/styles";
// router
import Routers from "./routers";
// theme
import theme from "./themes";
// ---------------------------------------- //
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routers />
    </ThemeProvider>
  );
}

export default App;
