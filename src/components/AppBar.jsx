import { View, ScrollView } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import AppTab from "./AppTab";
import Text from "./Text";

const AppBar = ({ loggedIn, setLoggedIn, setUser }) => {
  const logout = () => {
    setUser("");
    setLoggedIn(false);
  };

  return (
    <View>
      <ScrollView horizontal>
        <AppTab link="/" label="Home"></AppTab>
        <AppTab link="/behaviors" label="Behaviors"></AppTab>

        {loggedIn ? (
          <Pressable onPress={logout}>
            <Text>Log Out</Text>
          </Pressable>
        ) : (
          <Text></Text>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
