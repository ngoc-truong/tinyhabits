import Main from "./src/components/Main";
import { NativeRouter } from "react-router-native";
import { View, Text, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
// import { useFonts, JosefinSans_700Bold } from "@expo-google-fonts/josefin-sans";
import { useFonts } from "expo-font";

const App = () => {
  let [fontsLoaded] = useFonts({
    "JosefinSans-Bold": require("./assets/fonts/JosefinSans-Bold.ttf"),
    "JosefinSans-ExtraLight": require("./assets/fonts/JosefinSans-ExtraLight.ttf"),
    "JosefinSans-Light": require("./assets/fonts/JosefinSans-Light.ttf"),
    "JosefinSans-Medium": require("./assets/fonts/JosefinSans-Medium.ttf"),
    "JosefinSans-Regular": require("./assets/fonts/JosefinSans-Regular.ttf"),
    "JosefinSans-SemiBold": require("./assets/fonts/JosefinSans-SemiBold.ttf"),
    "JosefinSans-Thin": require("./assets/fonts/JosefinSans-Thin.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <NativeRouter>
        <Main />
      </NativeRouter>
    </>
  );
};

export default App;
