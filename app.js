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

import Cells from './components/cell/cells';
import Cell from './components/cell/cell';
import CellHeader from './components/cell/cell_header';
import CellBody from './components/cell/cell_body';
import CellFooter from './components/cell/cell_footer';

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
        <Cells>
          <Cell>
            <CellHeader><Text>text</Text></CellHeader>
            <CellBody><Text>text</Text></CellBody>
            <CellFooter><Text>text</Text></CellFooter>
          </Cell>
        </Cells>
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
