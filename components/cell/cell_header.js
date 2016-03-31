'use strict';
import React, {
    Component,
    StyleSheet,
    View
} from 'react-native';

export default class CellHeader extends Component {
    render() {
        var {children,...others} = this.props;

        return (
            <View {...others} style={styles.hd}>{children}</View>
        );
    }
}

const styles = StyleSheet.create({
    hd: {
    }
});
