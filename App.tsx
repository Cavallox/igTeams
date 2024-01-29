import React from "react";
import { ActivityIndicator } from "react-native";
import { ThemeProvider } from "styled-components";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto"
import { Groups } from "@screens/groups";
import theme from "./src/theme";

export default function App() {
  const [fontsLoaded] = ({Roboto_400Regular, Roboto_700Bold});

  return(
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Groups /> : <ActivityIndicator />}
    </ThemeProvider>
  
  );
}
