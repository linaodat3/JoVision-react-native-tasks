import React, { useState } from "react";
import { View, Button, StyleSheet } from "react-native";
import MyFunctionPage from "./MyFunctionPage";

export default function App() {
  const [showPage, setShowPage] = useState(false);

  return (
    <View style={styles.container}>
      <Button
        title={showPage ? "Hide" : "Show"}
        onPress={() => setShowPage(!showPage)}
      />
      {showPage && <MyFunctionPage />}
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
});
