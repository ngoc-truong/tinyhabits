import { StyleSheet, SafeAreaView, Text } from "react-native";
import { Route, Routes, Navigate } from "react-router-native";
import { useState } from "react";
import Constants from "expo-constants";

import theme from "../theme";
import AppBar from "./AppBar";
import Home from "./Home";
import Aspiration from "./Aspiration";
import Behaviors from "./Behaviors";

const Main = () => {
  const [aspiration, onChangeAspiration] = useState("MOOOOIN");
  return (
    <SafeAreaView style={styles.container}>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route
          path="/aspiration"
          element={
            <Aspiration
              aspiration={aspiration}
              onChangeAspiration={onChangeAspiration}
            />
          }
          exact
        />
        <Route path="/behaviors" element={<Behaviors />} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <AppBar />
    </SafeAreaView>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    padding: theme.spacing.xlarge,
    backgroundColor: theme.colors.background,
    display: "flex",
    justifyContent: "space-between",
    flex: 1,
  },
  bottomCenter: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 30,
  },
});
