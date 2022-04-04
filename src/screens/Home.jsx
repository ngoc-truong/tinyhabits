import { View, StyleSheet, Pressable } from "react-native";
import { useState } from "react";
import { Link } from "react-router-native";
import Text from "../components/Text";
import AspirationCard from "../components/AspirationCard";
import AspirationForm from "../components/AspirationForm";

const Home = ({ setAspirations, aspirations, user }) => {
  return (
    <View>
      <Text margin="medium" category="h5">
        Howdy, {user.username}
      </Text>
      <Text style={styles.third} margin="xlarge">
        I'm so proud of you that you will follow your aspirations.
      </Text>
      <AspirationForm
        setAspirations={setAspirations}
        aspirations={aspirations}
      />

      {aspirations ? (
        aspirations.map((aspiration) => {
          return (
            <Pressable key={aspiration.id}>
              <Link to={`/aspiration/${aspiration.id}`}>
                <AspirationCard
                  id={aspiration.id}
                  content={aspiration.content}
                  aspirations={aspirations}
                  setAspirations={setAspirations}
                />
              </Link>
            </Pressable>
          );
        })
      ) : (
        <Text></Text>
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  third: {
    width: 200,
  },
});
