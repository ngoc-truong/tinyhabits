import { StyleSheet, TextInput, View, Button } from "react-native";
import Text from "./Text";
import { Formik } from "formik";
import theme from "../theme";
import axios from "axios";
const baseUrl = "/api/login";

// import Button from "./Button";

const Login = ({ setUser }) => {
  const handleLogin = async (values) => {
    try {
      const user = await axios.post(
        "http://192.168.2.134:3001/api/login",
        values
      );
      console.log(user.data);
      setUser(user.data);
    } catch (exception) {
      console.log(`Something went wrong: ${exception}`);
    }
  };
  return (
    <>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values) => handleLogin(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <Text>Username</Text>
            <TextInput
              onChangeText={handleChange("username")}
              onBlur={handleBlur("username")}
              value={values.username}
              style={styles.inputField}
            />

            <Text>Password</Text>
            <TextInput
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              secureTextEntry={true}
              style={styles.inputField}
            />

            <Button onPress={handleSubmit} title="Login" />
          </View>
        )}
      </Formik>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  inputField: {
    borderRadius: theme.borderRadius.small,
    marginTop: theme.spacing.small,
    marginBottom: theme.spacing.large,
    padding: theme.spacing.large,
    borderColor: theme.colors.onBackground,
    borderWidth: 1,
  },
});
