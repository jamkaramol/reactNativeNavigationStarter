import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default class DetailsScreen extends Component {
  static navigationOptions = {
    title: "Details Page"
  };

  render() {
    const { navigation } = this.props;
    const id = navigation.getParam("id", 1);
    const title = navigation.getParam("title", "Default title");

    return (
      <View style={styles.container}>
        <Text style={styles.text}>DetailsScreen: App details </Text>
        {id && title && (
          <Text style={styles.text}>
            Id: {id} , Title: {title}
          </Text>
        )}
        <Button
          title="Go to Details... again"
          onPress={() =>
            this.props.navigation.push("Details", {
              id: Math.floor(Math.random() * 100),
              title: "Push method title"
            })
          }
        />
        <Button
          title="Go Back button"
          onPress={() => {
            this.props.navigation.goBack();
          }}
        />
        <Button
          onPress={() => navigation.navigate("MyModal")}
          title="Open modal"
          color="orange"
        />
      </View>
    );
  }
}
