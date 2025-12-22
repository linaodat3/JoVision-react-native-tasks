import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class MyClassPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hello!",
    };
  }

  updateText = (newText) => {
    this.setState({ text: newText });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.state.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 10,
    width: "100%",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
  },
});
