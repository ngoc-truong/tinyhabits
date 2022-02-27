import { View, StyleSheet, Pressable } from "react-native";
import { Link } from "react-router-native";
import Text from "./Text";
import AspirationCard from "./AspirationCard";
import Button from "./Button";

const Home = () => {
  return (
    <View>
      <Text margin="medium" category="h5">
        Howdy, Ngoc
      </Text>
      <Text style={styles.third} margin="xlarge">
        I'm so proud of you that you will follow your aspirations.
      </Text>
      <Pressable>
        <Link to="/aspiration">
          <AspirationCard />
        </Link>
      </Pressable>
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
