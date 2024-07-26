import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

export default class Quadrado extends React.Component {
  render() {
    const { value, desabilitado, onClick } = this.props;
    return (
      <View>
        <TouchableOpacity onPress={onClick} disabled={desabilitado}>
          <Text style={styles.text}>{value}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    minHeight: 100,
    minWidth: 100,
    fontSize: 60,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderWidth: 1,
    margin: 1,
  },
});
