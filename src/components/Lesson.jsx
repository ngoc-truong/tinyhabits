import { View, StyleSheet } from "react-native";
import theme from "../theme";
import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.surface,
    marginBottom: theme.spacing.large,
    padding: theme.spacing.large,
    borderRadius: theme.borderRadius.small,
    elevation: 10,
  },
  overline: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

const Lesson = ({ overline, title, description, completed }) => {
  return (
    <View style={styles.container}>
      <View style={styles.overline}>
        <Text category="overline" margin="small">
          {overline}
        </Text>
        <Text category="overline">{completed ? "Done" : "Not Done Yet"}</Text>
      </View>

      <Text category="h6" margin="small">
        {title}
      </Text>
      <Text>{description}</Text>
    </View>
  );
};

export default Lesson;
