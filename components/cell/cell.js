/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

class Cell extends Component {
  render() {
    var touchableProps = {};

    if (!this.props.disabled) {
      touchableProps.onPress = this.props.onPress;
      touchableProps.onPressIn = this.props.onPressIn;
      touchableProps.onPressOut = this.props.onPressOut;
      touchableProps.onLongPress = this.props.onLongPress;
    }
    
    return (
      <TouchableHighlight {...touchableProps} underlayColor={underlayColor}>
        <View style={[styles.baseCell,this.props.style]}>
          <View style={styles.hd}></View>
          <View style={styles.bd}><Text style={styles.text}>Cell</Text></View>
          <View style={styles.ft}>
            <View style={styles.access}></View>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  baseCell: {
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    borderColor: '#D9D9D9',
  },
  hd:{
  },
  bd:{
    flex:1,
  },
  ft:{
    justifyContent:'center',
    flexDirection: 'row',
    paddingRight:5
  },
  text: {
    fontSize: 18,
    margin: 10,
  },
  access:{
    borderRightWidth:2,
    borderTopWidth:2,
    borderColor:'#C8C7CD',
    transform: [{rotate: '45deg'},{translateY:5}],
    width:10,
    height:10,
  }
});

module.exports = Cell;
