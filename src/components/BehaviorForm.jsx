import { StyleSheet, TextInput, View, Button } from "react-native";
import theme from "../theme";
import Text from "./Text";
import { Formik } from "formik";
import behaviorService from "../services/behavior";

const BehaviorForm = ({ aspirationId }) => {
  const addBehavior = async (values) => {
    const behaviorObject = {
      content: values.behavior,
      motivating: values.motivating,
      easy: values.easy,
      aspiration_id: aspirationId,
    };
    const returnedBehavior = await behaviorService.create(behaviorObject);
  };

  return (
    <Formik
      initialValues={{ behavior: "", easy: "" }}
      onSubmit={(values) => addBehavior(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View>
          <Text>Behavior</Text>
          <TextInput
            onChangeText={handleChange("behavior")}
            onBlur={handleBlur("behavior")}
            value={values.behavior}
            style={styles.inputField}
          />

          <Text>Motivating</Text>
          <TextInput
            onChangeText={handleChange("motivating")}
            onBlur={handleBlur("motivating")}
            value={values.motivating}
            style={styles.inputField}
          />

          <Text>Easy</Text>
          <TextInput
            onChangeText={handleChange("easy")}
            onBlur={handleBlur("easy")}
            value={values.easy}
            style={styles.inputField}
          />

          <Button onPress={handleSubmit} title="Add behavior" />
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

export default BehaviorForm;
