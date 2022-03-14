import { View, StyleSheet, Pressable } from "react-native";
import { Link } from "react-router-native";
import Text from "./Text";
import AspirationCard from "./AspirationCard";
import AspirationForm from "./AspirationForm";
import Button from "./Button";

const Home = ({ aspirations, user }) => {
  return (
    <View>
      <Text margin="medium" category="h5">
        Howdy, {user.username}
      </Text>
      <Text style={styles.third} margin="xlarge">
        I'm so proud of you that you will follow your aspirations.
      </Text>
      <AspirationForm />

      {aspirations.map((aspiration) => {
        return (
          <Pressable key={aspiration.id}>
            <Link to={`/aspiration/${aspiration.id}`}>
              <AspirationCard content={aspiration.content} />
            </Link>
          </Pressable>
        );
      })}

      <Button label="Add aspiration" />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  third: {
    width: 200,
  },
});
