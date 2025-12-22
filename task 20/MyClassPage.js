import React, { Component } from 'react';
import { View, Text } from 'react-native';

class MyClassPage extends Component {

  componentDidMount() {
    console.log('MyClassPage loaded');
  }

  componentWillUnmount() {
    console.log('MyClassPage unloaded');
  }

  render() {
    return (
      <View style={{ marginTop: 20, padding: 20, backgroundColor: '#ddd' }}>
        <Text>MyClassPage Component</Text>
      </View>
    );
  }
}

export default MyClassPage;
