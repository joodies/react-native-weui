'use strict';
import React, {
    Component,
    StyleSheet,
    View
} from 'react-native';

export default class CellBody extends Component {
    render() {
        var {children,...others} = this.props;

        return (
            <View {...others} style={styles.bd}>{children}</View>
        );
    }
}

const styles = StyleSheet.create({
    bd: {
        flex: 1,
        padding: 5,
    }
});
