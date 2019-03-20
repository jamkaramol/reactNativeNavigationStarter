import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  welcomeText: { fontSize: 20, justifyContent: "center", alignItems: "center" },
  description: { fontSize: 14, justifyContent: "center", alignItems: "center" }
});

export default class HoseScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
      headerRight: (
        <Button
          onPress={() => navigation.navigate("MyModal")}
          title="Open modal"
          color="orange"
        />
      )
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcomeText}>
          Welcome to the React native navigation
        </Text>
        <Button
          title="Go to Details page"
          onPress={() => {
            this.props.navigation.navigate("Details", {
              id: 1,
              title: "Native user"
            });
          }}
        />
      </View>
    );
  }
}
