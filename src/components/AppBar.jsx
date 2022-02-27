import { View, ScrollView } from "react-native";
import AppTab from "./AppTab";

const AppBar = () => {
  return (
    <View>
      <ScrollView horizontal>
        <AppTab link="/" label="Home"></AppTab>
        <AppTab link="/aspiration" label="Aspiration"></AppTab>
        <AppTab link="/behaviors" label="Behaviors"></AppTab>
      </ScrollView>
    </View>
  );
};

export default AppBar;
