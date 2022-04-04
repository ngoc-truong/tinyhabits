import { StyleSheet, TextInput, View, Button } from "react-native";
import theme from "../theme";
import Text from "./Text";
import { Formik } from "formik";
import aspirationService from "../services/aspiration";

const AspirationForm = ({ aspirations, setAspirations }) => {
  const addAspiration = async (values) => {
    const aspirationObject = {
      content: values.aspiration,
    };
    const returnedAspiration = await aspirationService.create(aspirationObject);
    setAspirations([...aspirations, returnedAspiration]);
  };

  return (
    <Formik
      initialValues={{ aspiration: "" }}
      onSubmit={(values) => addAspiration(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View>
          <Text>Aspiration</Text>
          <TextInput
            onChangeText={handleChange("aspiration")}
            onBlur={handleBlur("aspiration")}
            value={values.aspiration}
            style={styles.inputField}
          />

          <Button onPress={handleSubmit} title="Add aspiration" />
        </View>
      )}
    </Formik>
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
