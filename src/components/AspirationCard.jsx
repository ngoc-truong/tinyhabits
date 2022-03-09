import Text from "./Text";
import { View, StyleSheet } from "react-native";
import theme from "../theme";

const AspirationCard = ({ content }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.overline} category="overline">
        Your aspiration
      </Text>
      <Text style={styles.text} category="h6">
        {content}
      </Text>
    </View>
  );
};

export default AspirationCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.surface,
    elevation: 4,
    borderRadius: theme.borderRadius.medium,
    padding: theme.spacing.xlarge,
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginBottom: theme.spacing.xlarge,
  },
  overline: {
    textAlign: "center",
    marginBottom: theme.spacing.large,
  },
  text: {
    textAlign: "center",
  },
});
