import React, { useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

class MyClassPage extends React.Component {
  render() {
    return (
      <View style={styles.classContainer}>
        <Text style={styles.classText}>Hello from MyClassPage!</Text>
      </View>
    );
  }
}

export default function App() {
  const [showClass, setShowClass] = useState(false);

  return (
    <View style={styles.container}>
      <Button title="Show" onPress={() => setShowClass(true)} />
      {showClass && <MyClassPage />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  classContainer: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  classText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
