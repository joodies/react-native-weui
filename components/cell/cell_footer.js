'use strict';
import React, {
    Component,
    StyleSheet,
    View
} from 'react-native';

export default class CellFooter extends Component {
    render() {
        var {children,...others} = this.props;

        return (
            <View {...others} style={styles.ft}>
                {children}<View style={styles.access}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    ft: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 5,
    },
    access: {
        borderRightWidth: 2,
        borderTopWidth: 2,
        borderColor: '#C8C7CD',
        marginLeft:10,
        transform: [{
            translateY: 0
        }, {
            translateX: -10
        }, {
            rotate: '45deg'
        }],
        width: 10,
        height: 10,
    }
});
