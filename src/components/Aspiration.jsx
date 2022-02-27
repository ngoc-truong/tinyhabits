import { View, StyleSheet } from "react-native";
import theme from "../theme";
import AspirationCard from "./AspirationCard";
import BehaviorCard from "./BehaviorCard";
import Text from "./Text";

const Aspiration = ({ aspiration, onChangeAspiration }) => {
  return (
    <View>
      <Text margin="xlarge" category="h5">
        Aspiration
      </Text>
      <AspirationCard />
      <Text margin="medium" category="h5">
        Behaviors
      </Text>
      <Text margin="xlarge">
        Think of all behaviors which get you closer to your aspiration.
      </Text>
      <BehaviorCard text="I will program for 20min each day." />
      <BehaviorCard text="I will program for 20min each day." />
      <BehaviorCard text="I will program for 20min each day." />
    </View>
  );
};

export default Aspiration;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
  },
  header: {
    flexGrow: 1,
    marginBottom: theme.spacing.large,
  },
  form: {
    flexGrow: 10,
  },
  inputField: {
    height: 100,
    borderRadius: theme.borderRadius.small,
    marginTop: theme.spacing.small,
    marginBottom: theme.spacing.large,
    padding: theme.spacing.large,
    borderColor: theme.colors.onBackground,
    borderWidth: 1,
  },
  primaryButton: {
    color: theme.colors.onBackground,
    backgroundColor: theme.colors.surface,
    alignItems: "center",
    padding: theme.spacing.medium,
    borderRadius: theme.borderRadius.small,
    elevation: 4,
  },
  headline: {
    fontWeight: "bold",
    color: "green",
    fontFamily: "JosefinSans-Regular",
  },
});
