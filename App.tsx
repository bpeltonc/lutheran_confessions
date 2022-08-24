import { extendTheme, NativeBaseProvider } from "native-base";
import React from "react";
import "react-native-gesture-handler";
import Navigation from "./navigation";

const mainTheme = {
  dark: "#432818",
  medium: "#99582A",
  midDark: "#6F1D1B",
  midLight: "#BB9457",
  light: "#FFE6A7",
};
const theme = extendTheme({ colors: mainTheme });

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <Navigation />
    </NativeBaseProvider>
  );
}
