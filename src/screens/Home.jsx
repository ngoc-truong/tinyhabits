import { View, StyleSheet, Pressable } from "react-native";
import { Link } from "react-router-native";
import Text from "../components/Text";
import AspirationCard from "../components/AspirationCard";
import AspirationForm from "../components/AspirationForm";
import Button from "../components/Button";

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

      {aspirations ? (
        aspirations.map((aspiration) => {
          return (
            <Pressable key={aspiration.id}>
              <Link to={`/aspiration/${aspiration.id}`}>
                <AspirationCard content={aspiration.content} />
              </Link>
            </Pressable>
          );
        })
      ) : (
        <Text></Text>
      )}

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