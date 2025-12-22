import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import MyFunctionPage from "./MyFunctionPage";

export default function App() {
  const [showPage, setShowPage] = useState(false);
  const [text, setText] = useState("Hello!");

  return (
    <View style={styles.container}>
      <Button
        title={showPage ? "Hide" : "Show"}
        onPress={() => setShowPage(!showPage)}
      />
      <Text style={styles.parentText}>{text}</Text>
      {showPage && <MyFunctionPage updateParentText={setText} />}
    </View>
  );
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
