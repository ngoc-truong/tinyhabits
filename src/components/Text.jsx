import { Text as NativeText, StyleSheet } from "react-native";
import { normalizeRect } from "react-native/Libraries/StyleSheet/Rect";
import theme from "../theme";

const Text = ({ category, style, margin, ...props }) => {
  const textStyle = [
    styles.standard,
    category === "h1" && styles.h1,
    category === "h2" && styles.h2,
    category === "h3" && styles.h3,
    category === "h4" && styles.h4,
    category === "h5" && styles.h5,
    category === "h6" && styles.h6,
    category === "button" && styles.button,
    category === "overline" && styles.overline,
    margin === "small" && styles.marginSmall,
    margin === "medium" && styles.marginMedium,
    margin === "large" && styles.marginLarge,
    margin === "xlarge" && styles.marginXLarge,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;

const styles = StyleSheet.create({
  standard: {
    color: theme.colors.onBackground,
    fontSize: theme.fontSizes.body,
    fontFamily: "JosefinSans-Regular",
    fontWeight: theme.fontWeights.regular,
    lineHeight: 20,
  },
  h1: {
    fontSize: theme.fontSizes.h1,
    fontFamily: "JosefinSans-Light",
    lineHeight: 30,
  },
  h2: {
    fontSize: theme.fontSizes.h2,
    fontFamily: "JosefinSans-Light",
    lineHeight: 30,
  },
  h3: {
    fontSize: theme.fontSizes.h3,
    fontFamily: "JosefinSans-Bold",
    lineHeight: 30,
  },
  h4: {
    fontSize: theme.fontSizes.h4,
    fontFamily: "JosefinSans-Bold",
    lineHeight: 30,
  },
  h5: {
    fontSize: theme.fontSizes.h5,
    fontFamily: "JosefinSans-Bold",
    lineHeight: 30,
  },
  h6: {
    fontSize: theme.fontSizes.h6,
    fontFamily: "JosefinSans-Bold",
  },
  overline: {
    fontSize: theme.fontSizes.overline,
    fontFamily: "JosefinSans-Regular",
    textTransform: "uppercase",
    color: theme.colors.overline,
    letterSpacing: 1.5,
  },
  button: {
    fontSize: theme.fontSizes.button,
    fontFamily: "JosefinSans-Regular",
    textTransform: "uppercase",
    letterSpacing: 1.1,
  },
  marginSmall: {
    marginBottom: theme.spacing.small,
  },
  marginMedium: {
    marginBottom: theme.spacing.medium,
  },
  marginLarge: {
    marginBottom: theme.spacing.large,
  },
  marginXLarge: {
    marginBottom: theme.spacing.xlarge,
  },
});
