import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Image source={require('../assets/logo.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 66,
    backgroundColor: '#227C9D',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Header;
