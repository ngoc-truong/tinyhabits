import { Pressable, StyleSheet } from "react-native";
import { Link } from "react-router-native";
import theme from "../theme";
import Text from "./Text";
import { LinearGradient } from "expo-linear-gradient";

const Button = ({ label, type, link }) => {
  return (
    <LinearGradient
      style={styles.container}
      start={{ x: 0.0, y: 0.5 }}
      end={{ x: 1.0, y: 0.5 }}
      colors={["rgba(0, 173, 150, 1.0)", "rgba(40, 22, 101, 0.8)"]}
    >
      <Pressable>
        <Text style={styles.text} category="button">
          {label}
        </Text>
        {/* <Link to={link}>
        <Text>{label}</Text>
      </Link> */}
      </Pressable>
    </LinearGradient>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.medium,
    borderRadius: theme.borderRadius.xxlarge,
  },
  text: {
    textAlign: "center",
    color: theme.colors.white,
  },
});
