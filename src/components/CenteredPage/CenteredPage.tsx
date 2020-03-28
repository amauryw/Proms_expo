
import * as React from 'react';
import { View, StyleSheet } from 'react-native';

type PropsType = {};

class CenteredPage extends React.Component<PropsType> {
  render() {
    return <View style={styles.centerEverything} {...this.props} />;
  }
}

const styles = StyleSheet.create({
  centerEverything: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CenteredPage;
