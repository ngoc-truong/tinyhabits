import { StyleSheet, SafeAreaView } from "react-native";
import { Route, Routes, Navigate, Redirect } from "react-router-native";
import { useState, useEffect } from "react";
import Constants from "expo-constants";

import theme from "../theme";
import AppBar from "../components/AppBar";
import Aspiration from "../components/Aspiration";
import Home from "./Home";
import Behaviors from "./Behaviors";
import Login from "./Login";
import userService from "../services/user";

const Main = () => {
  const [user, setUser] = useState("");
  const [aspirations, setAspirations] = useState([]);

  const fetchUserData = async () => {
    if (user) {
      try {
        const data = await userService.getUserData(user);
        setAspirations(data.aspirations);
      } catch (exception) {
        console.log("Could not get user data");
      }
    }
  };

  //After user is logged in, get user data
  useEffect(() => {
    fetchUserData();
  }, [user]);

  return (
    <SafeAreaView style={styles.container}>
      <AppBar setUser={setUser} />
      <Routes>
        {user && aspirations ? (
          <>
            <Route
              path="/"
              element={
                <Home
                  setAspirations={setAspirations}
                  aspirations={aspirations}
                  user={user}
                />
              }
              exact
            />
            <Route
              path="/aspiration/:id"
              element={<Aspiration aspirations={aspirations} />}
              exact
            />
          </>
        ) : (
          <Route path="/" element={<Login setUser={setUser} />} exact />
        )}

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
