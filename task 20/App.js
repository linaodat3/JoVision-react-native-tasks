import React, { Component } from 'react';
import { View, Button } from 'react-native';
import MyClassPage from './MyClassPage';

class App extends Component {

  state = {
    showPage: false
  };

  togglePage = () => {
    this.setState({ showPage: !this.state.showPage });
  };

  render() {
    return (
      <View style={{ marginTop: 50, padding: 20 }}>
        <Button title="Show" onPress={this.togglePage} />

        {this.state.showPage && <MyClassPage />}
      </View>
    );
  }
}

export default App;
