import React from 'react';
import {View, ScrollView, StyleSheet, Text} from 'react-native';

const Heading = () => (
  <View style={styles.header}>
    <Text style={styles.headerText}>Todos</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    marginTop: 80,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 72,
    color: 'rgba(175, 47, 47, 0.25)',
    fontWeight: '100',
  },
});
export default Heading;
