import React, { Component } from "react";
import { View, TextInput, StyleSheet } from "react-native";

export default class MyClassPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
    };
  }

  handleTextChange = (text) => {
    this.setState({ inputText: text });
    this.props.updateParentText(text); // تمرير النص للوالد
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Type something..."
          value={this.state.inputText}
          onChangeText={this.handleTextChange}
        />
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
  input: {
    height: 40,
    borderColor: "#555",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});
