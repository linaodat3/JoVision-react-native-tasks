import React, { useState, forwardRef, useImperativeHandle } from "react";
import { View, Text, StyleSheet } from "react-native";

const MyFunctionPage = forwardRef((props, ref) => {
  const [text, setText] = useState("Hello!");

  // expose methods to parent via ref
  useImperativeHandle(ref, () => ({
    updateText(newText) {
      setText(newText);
    },
  }));

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
});

export default MyFunctionPage;

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
