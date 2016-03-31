'use strict';
import React, {
    Component,
    StyleSheet,
    View
} from 'react-native';

export default class Cells extends Component {
    render() {
        var {children,...others} = this.props;

        return (
            <View {...others} style={styles.cells}>{children}</View>
        );
    }
}

const styles = StyleSheet.create({
    cells: {
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        borderColor: '#D9D9D9'
    }
});
