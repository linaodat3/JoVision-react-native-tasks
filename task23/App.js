import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import MyClassPage from "./MyClassPage";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPage: false,
      text: "Hello!",
    };
  }

  updateText = (newText) => {
    this.setState({ text: newText });
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
        <Text style={styles.parentText}>{this.state.text}</Text>
        {this.state.showPage && (
          <MyClassPage updateParentText={this.updateText} />
        )}
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
  parentText: {
    fontSize: 20,
    marginTop: 20,
  },
});
