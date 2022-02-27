import Text from "./Text";
import { View, StyleSheet } from "react-native";
import theme from "../theme";

const AspirationCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.overline} category="overline">
        Your aspiration
      </Text>
      <Text style={styles.text} category="h6">
        "I want to program more often."
      </Text>
    </View>
  );
};

export default AspirationCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.surface,
    elevation: 6,
    borderRadius: theme.borderRadius.medium,
    padding: theme.spacing.xlarge,
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginBottom: theme.spacing.xxlarge,
  },
  overline: {
    textAlign: "center",
    marginBottom: theme.spacing.large,
  },
  text: {
    textAlign: "center",
  },
});
