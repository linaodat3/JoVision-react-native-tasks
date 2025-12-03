import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const Task16 = () => {
  const [showName, setShowName] = useState(false);

  const toggleName = () => setShowName(!showName);

  return (
    <View style={{ padding: 20 }}>
      <Button title="Show" onPress={toggleName} />
      {showName && <Text style={{ marginTop: 20, fontSize: 18 }}>Lina</Text>}
    </View>
  );
};

export default Task16;
