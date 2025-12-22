import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

export default function MyFunctionPage() {
  useEffect(() => {
    console.log("MyFunctionPage mounted");

    return () => {
      console.log("MyFunctionPage unmounted");
    };
  }, []);

  useEffect(() => {
    console.log("MyFunctionPage updated");
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello from MyFunctionPage!</Text>
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
  },
  text: {
    fontSize: 18,
    textAlign: "center",
  },
});
