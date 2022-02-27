import { View, ScrollView, Pressable } from "react-native";
import { Link } from "react-router-native";
import Text from "./Text";

const AppBar = () => {
  return (
    <View>
      <ScrollView horizontal>
        <Pressable>
          <Link to="/aspiration">
            <Text>Aspiration</Text>
          </Link>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default AppBar;
