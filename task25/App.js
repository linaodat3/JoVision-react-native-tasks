import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import MyClassPage from "./MyClassPage";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPage: false,
      inputText: "",
    };
    this.childRef = React.createRef(); 
  }

  handleTextChange = (text) => {
    this.setState({ inputText: text });
    if (this.childRef.current) {
      this.childRef.current.updateText(text); 
  };

  togglePage = () => {
    this.setState({ showPage: !this.state.showPage });
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          title={this.state.showPage ? "Hide" : "Show"}
          onPress={this.togglePage}
        />
        <TextInput
          style={styles.input}
          placeholder="Type something..."
          value={this.state.inputText}
          onChangeText={this.handleTextChange}
        />
        {this.state.showPage && <MyClassPage ref={this.childRef} />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: "#555",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    width: "100%",
    marginTop: 20,
  },
});
