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
  TouchableHighlight
} from 'react-native';

class Button extends Component {
  render() {
    var touchableProps = {},
        layColor = '',
        underlayColor = '',
        textColor = '',
        borderColor = '';

    if (!this.props.disabled) {
      touchableProps.onPress = this.props.onPress;
      touchableProps.onPressIn = this.props.onPressIn;
      touchableProps.onPressOut = this.props.onPressOut;
      touchableProps.onLongPress = this.props.onLongPress;
    }

    switch (this.props.type) {
      case 'primary':
        layColor = '#04BE02';
        underlayColor = '#039702';
        textColor = '#ffffff';
        borderColor = '#04B102';
        if(this.props.disabled){
          textColor = '#98E497';
          underlayColor = '#04BE02';
        }
        break;
      case 'warn':
        layColor = '#EF4F4F';
        underlayColor = '#C13E3E';
        textColor = '#ffffff';
        borderColor = '#DE4949';
        if(this.props.disabled){
          textColor = '#F7A9A9';
          underlayColor = '#EF4F4F';
        }
        break;
      case 'default':
      default:
        layColor = '#F7F7F7';
        underlayColor = '#DEDEDE'
        textColor = '#000000';
        borderColor = '#E6E6E6';
        if(this.props.disabled){
          textColor = '#D4D4D4';
          underlayColor = '#F7F7F7';
        }
    }
    return (
      <TouchableHighlight {...touchableProps} style={[styles.baseButton,{backgroundColor:layColor,borderColor:borderColor},this.props.style]} underlayColor={underlayColor}>
        <Text style={[styles.text,{color:textColor}]}>
          {this.props.value}
        </Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  baseButton: {
    borderRadius: 5,
    paddingLeft: 14,
    paddingRight: 14,
    borderWidth: 0.5,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
  },
});

module.exports = Button;
