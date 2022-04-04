import { StyleSheet, TextInput, View, Button } from "react-native";
import Text from "../components/Text";
import { Formik } from "formik";
import theme from "../theme";
import loginService from "../services/login";
import aspirationService from "../services/aspiration";

const Login = ({ setLoggedIn, setUser }) => {
  const handleLogin = async (credentials) => {
    try {
      const user = await loginService.login(credentials);
      aspirationService.setToken(user.token);
      setUser(user);
      setLoggedIn(true);
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
