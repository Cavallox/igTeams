import React from "react";
import { ThemeProvider } from "styled-components";
import { Groups } from "@screens/groups";
import theme from "./src/theme";

export default function App() {
  return(
    <ThemeProvider theme={theme}>
      <Groups />
    </ThemeProvider>
  
  );
}
