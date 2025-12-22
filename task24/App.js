import React, { useState, useRef } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import MyFunctionPage from "./MyFunctionPage";

export default function App() {
  const [showPage, setShowPage] = useState(false);
  const [inputText, setInputText] = useState("");
  const childRef = useRef();

  const handleTextChange = (text) => {
    setInputText(text);
    if (childRef.current) {
      childRef.current.updateText(text); // استدعاء دالة الابن عبر ref
    }
  };

  return (
    <View style={styles.container}>
      <Button
        title={showPage ? "Hide" : "Show"}
        onPress={() => setShowPage(!showPage)}
      />
      <TextInput
        style={styles.input}
        placeholder="Type something..."
        value={inputText}
        onChangeText={handleTextChange}
      />
      {showPage && <MyFunctionPage ref={childRef} />}
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
