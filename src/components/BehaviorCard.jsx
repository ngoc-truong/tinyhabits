import Text from "./Text";
import { View, StyleSheet } from "react-native";
import theme from "../theme";

const BehaviorCard = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.overline} category="overline">
        Behavior
      </Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default BehaviorCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.surface,
    elevation: 4,
    borderRadius: theme.borderRadius.medium,
    padding: theme.spacing.medium,
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginBottom: theme.spacing.medium,
  },
  overline: {
    textAlign: "center",
  },
  text: {
    textAlign: "center",
  },
});
