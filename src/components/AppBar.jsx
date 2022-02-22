import { StyleSheet, View, ScrollView, Pressable } from "react-native";
import { Link } from "react-router-native";
import Text from "./Text";

const AppBar = () => {
  return (
    <View>
      <ScrollView horizontal>
        <Pressable>
          <Link to="/">
            <Text>Learn</Text>
          </Link>
        </Pressable>
        <Pressable>
          <Link to="/exercises">
            <Text>Practice</Text>
          </Link>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default AppBar;
