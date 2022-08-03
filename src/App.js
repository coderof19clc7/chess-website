import "aos/dist/aos.css";

import { CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/styles";
import AOS from "aos";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/home";

function App() {
  let theme = createTheme();
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
    </ThemeProvider>
  );
}

export default App;
