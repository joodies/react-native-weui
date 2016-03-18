/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Alert
} from 'react-native';

var Button = require("./components/button");

class App extends Component {
  onpress(){
    Alert.alert('Alert Title','alertMessage')
  }
  render() {
    return (
      <View style={styles.container}>
        <Button type="default" value="你好" onPress={this.onpress} style={{margin:5}}/>
        <Button type="default" value="你好" onPress={this.onpress} disabled="true" style={{margin:5}}/>
        <Button type="primary" value="你好" onPress={this.onpress} style={{margin:5}}/>
        <Button type="primary" value="你好" onPress={this.onpress} disabled="true" style={{margin:5}}/>
        <Button type="warn" value="你好" onPress={this.onpress} style={{margin:5}}/>
        <Button type="warn" value="你好" onPress={this.onpress} disabled="true" style={{margin:5}}/>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
  },
});

module.exports = App;
