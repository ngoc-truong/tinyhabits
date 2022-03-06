import { StyleSheet, SafeAreaView } from "react-native";
import { Route, Routes, Navigate } from "react-router-native";
import { useState, useEffect } from "react";
import axios from "axios";
import Constants from "expo-constants";

import theme from "../theme";
import AppBar from "./AppBar";
import Home from "./Home";
import Aspiration from "./Aspiration";
import Behaviors from "./Behaviors";
import Text from "./Text";

const Main = () => {
  const [users, setUsers] = useState([]);
  const [aspirations, setAspirations] = useState();

  useEffect(() => {
    console.log("EFFEEEEEKKKKKTTT");
    axios.get("http://192.168.2.134:3001/api/aspirations").then((response) => {
      setAspirations(response.data);
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {aspirations.map((aspiration) => {
        return (
          <Text key={aspiration.id}>
            {aspiration.content} by {aspiration.user.name}
          </Text>
        );
      })}
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/aspiration" element={<Aspiration />} exact />
        <Route path="/behaviors" element={<Behaviors />} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <AppBar />
    </SafeAreaView>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    padding: theme.spacing.xlarge,
    backgroundColor: theme.colors.background,
    display: "flex",
    justifyContent: "space-between",
    flex: 1,
  },
  bottomCenter: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 30,
  },
});
