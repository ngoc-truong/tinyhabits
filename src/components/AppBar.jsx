import { View, ScrollView } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import AppTab from "./AppTab";
import Text from "./Text";

const AppBar = ({ setUser }) => {
  const logout = () => {
    setUser("");
  };

  return (
    <View>
      <ScrollView horizontal>
        <AppTab link="/" label="Home"></AppTab>
        <AppTab link="/behaviors" label="Behaviors"></AppTab>
        <Pressable onPress={logout}>
          <Text>Log Out</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default AppBar;
