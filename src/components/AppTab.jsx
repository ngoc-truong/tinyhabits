import { Pressable, StyleSheet } from "react-native";
import { Link } from "react-router-native";
import Text from "./Text";
import theme from "../theme";

const AppTab = ({ link, label }) => {
  return (
    <Pressable style={styles.container}>
      <Link to={link}>
        <Text>{label}</Text>
      </Link>
    </Pressable>
  );
};

export default AppTab;

const styles = StyleSheet.create({
  container: {
    marginRight: theme.spacing.medium,
  },
});
