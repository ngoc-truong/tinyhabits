import { Text as NativeText, StyleSheet } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  standard: {
    color: theme.colors.onBackground,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.regular,
  },
  h1: {
    fontSize: theme.fontSizes.h1,
    fontWeight: theme.fontWeights.light,
  },
  h2: {
    fontSize: theme.fontSizes.h2,
    fontWeight: theme.fontWeights.light,
  },
  h3: {
    fontSize: theme.fontSizes.h3,
    fontWeight: theme.fontWeights.bold,
  },
  h4: {
    fontSize: theme.fontSizes.h4,
    fontWeight: theme.fontWeights.bold,
  },
  h5: {
    fontSize: theme.fontSizes.h5,
    fontWeight: theme.fontWeights.bold,
  },
  h6: {
    fontSize: theme.fontSizes.h6,
    fontWeight: theme.fontWeights.bold,
  },
  overline: {
    fontSize: theme.fontSizes.overline,
    fontWeight: theme.fontWeights.bold,
    textTransform: "uppercase",
    color: theme.colors.subheadlineColor,
  },
  marginSmall: {
    marginBottom: theme.spacing.small,
  },
  marginLarge: {
    marginBottom: theme.spacing.large,
  },
});

const Text = ({ category, style, margin, ...props }) => {
  const textStyle = [
    styles.standard,
    category === "h1" && styles.h1,
    category === "h2" && styles.h2,
    category === "h3" && styles.h3,
    category === "h4" && styles.h4,
    category === "h5" && styles.h5,
    category === "h6" && styles.h6,
    category === "overline" && styles.overline,
    margin === "small" && styles.marginSmall,
    margin === "large" && styles.marginLarge,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;
