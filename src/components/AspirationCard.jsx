import Text from "./Text";
import { View, StyleSheet, Pressable } from "react-native";
import theme from "../theme";
import aspirationService from "../services/aspiration";

const AspirationCard = ({ aspirations, setAspirations, content, id }) => {
  const deleteAspiration = async () => {
    const status = await aspirationService.deleteAspiration(id);
    const newAspirationArray = aspirations.filter(
      (aspiration) => aspiration.id !== id
    );
    setAspirations(newAspirationArray);
    console.log(`Successfully deleted: ${status}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.overline} category="overline">
        Your aspiration
      </Text>
      <Text style={styles.text} category="h6">
        {content}
      </Text>
      <Text>{id}</Text>
      <Pressable onPress={deleteAspiration}>
        <Text>Delete</Text>
      </Pressable>
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
