import { StyleSheet, SafeAreaView, Text } from "react-native";
import { Route, Routes, Navigate } from "react-router-native";
import Constants from "expo-constants";
import theme from "../theme";
import Aspiration from "./Aspiration";
import LessonList from "./LessonList";
import Behaviors from "./Behaviors";
import AppBar from "./AppBar";
import { useState } from "react";

const Main = () => {
  const [aspiration, onChangeAspiration] = useState("MOOOOIN");
  return (
    <SafeAreaView style={styles.container}>
      <Routes>
        <Route path="/" element={<LessonList />} exact />
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
      <AppBar style={styles.bottomCenter} />
    </SafeAreaView>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    padding: theme.spacing.large,
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
