'use strict';
import React, {
    Component,
    StyleSheet,
    View
} from 'react-native';

export default class Cell extends Component {
    render() {
        var {children,...others} = this.props;

        return (
            <View {...others} style={styles.cell}>
                <View style={styles.inner}>{children}</View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cell: {
        paddingLeft:15
    },
    inner:{
        borderBottomWidth: 0.5,
        flexDirection: 'row',
        borderColor: '#D9D9D9',
        alignItems: 'center',
    }
});
