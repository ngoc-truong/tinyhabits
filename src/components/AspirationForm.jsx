import { StyleSheet, TextInput, View, Pressable } from "react-native";
import { useState } from "react";
import theme from "../theme";
import Text from "./Text";
import Button from "./Button";

const AspirationForm = () => {
  const [aspiration, setAspiration] = useState("");

  const onChangeText = (value) => {
    setAspiration(value);
  };

  return (
    <View>
      <Text>Enter your aspiration</Text>
      <TextInput
        style={styles.inputField}
        onChangeText={onChangeText}
        value={aspiration}
        placeholder="Aspiration"
      />
      <Text>What you've typed: {aspiration}</Text>
      <Button label="Add aspiration"></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  inputField: {
    borderWidth: 1,
    borderColor: theme.colors.primary,
    padding: theme.spacing.small,
    marginBottom: theme.spacing.medium,
  },
});
export default AspirationForm;
