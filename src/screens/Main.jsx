import { StyleSheet, SafeAreaView } from "react-native";
import { Route, Routes, Navigate, Redirect } from "react-router-native";
import { useState, useEffect } from "react";
import axios from "axios";
import Constants from "expo-constants";

import theme from "../theme";
import AppBar from "../components/AppBar";
import Aspiration from "../components/Aspiration";
import Home from "./Home";
import Behaviors from "./Behaviors";
import Login from "./Login";

const Main = () => {
  const [user, setUser] = useState("");
  const [userData, setUserData] = useState([]);

  const fetchUserData = () => {
    if (user) {
      axios
        .get(`http://192.168.2.134:3001/api/users/${user.id}`)
        .then((response) => {
          setUserData(response.data);
        });
    }
  };

  //After user is logged in, get user data
  useEffect(() => {
    fetchUserData();
    console.log("Fetching user data.");
  }, [user]);

  console.log("Rendering");
  return (
    <SafeAreaView style={styles.container}>
      <AppBar setUser={setUser} />
      <Routes>
        {user && userData ? (
          <Route
            path="/"
            element={<Home aspirations={userData.aspirations} user={user} />}
            exact
          />
        ) : (
          <Route path="/" element={<Login setUser={setUser} />} exact />
        )}

        <Route
          path="/aspiration/:id"
          element={<Aspiration aspirations={userData.aspirations} />}
          exact
        />
        <Route path="/home" element={<Home />} exact />
        <Route path="/behaviors" element={<Behaviors />} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
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
