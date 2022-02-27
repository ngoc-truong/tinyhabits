import { View, TextInput, StyleSheet, Pressable } from "react-native";
import { Link } from "react-router-native";
import theme from "../theme";
import Text from "./Text";

const Aspiration = ({ aspiration, onChangeAspiration }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headline}>Hello friend, let us dream...</Text>
        <Text category="h5">What do you want to achieve?</Text>
      </View>
      <View style={styles.form}>
        <Text>I want to...</Text>
        <TextInput
          style={styles.inputField}
          value={aspiration}
          onChangeText={onChangeAspiration}
        />
        <Pressable>
          <Link to="/behaviors">
            <Text category="button">Let's make it real</Text>
          </Link>
        </Pressable>
      </View>
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
