import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import { Route, Routes, Navigate } from "react-router-native";
import Text from "./Text";
import Constants from "expo-constants";
import theme from "../theme";
import LessonList from "./LessonList";
import ExerciseList from "./ExerciseList";
import AppBar from "./AppBar";

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

const Main = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text category="h5" margin="large">
          Howdy, Ngoc!
        </Text>
        <Text category="overline" margin="large">
          Lessons
        </Text>
      </View>
      {/* <LessonList style={styles.content} /> */}
      <Routes>
        <Route path="/" element={<LessonList />} exact />
        <Route path="/exercises" element={<ExerciseList />} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <AppBar style={styles.bottomCenter} />
    </SafeAreaView>
  );
};

export default Main;
