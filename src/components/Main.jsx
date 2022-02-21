import { View, StyleSheet } from "react-native";
import Text from "./Text";
import Constants from "expo-constants";
import theme from "../theme";
import LessonList from "./LessonList";

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    padding: theme.spacing.large,
    backgroundColor: theme.colors.background,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <Text category="h5" margin="large">
        Howdy, Ngoc!
      </Text>
      <Text category="overline" margin="large">
        Lessons
      </Text>
      <LessonList />
    </View>
  );
};

export default Main;
