import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

export default function MyFunctionPage({ updateParentText }) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Type something..."
        onChangeText={(text) => updateParentText(text)}
      />
    </View>
  );
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
