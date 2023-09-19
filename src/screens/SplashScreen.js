import React, { useEffect } from 'react';
import {View, StyleSheet, Image, StatusBar} from 'react-native';

const SplashScren = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Register')
    }, 3000);
  }, [])
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#FFF'} barStyle={'light-content'}/>
      <Image
        source={require('../assets/images/logo.png')}
        style={styles.imageResize}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageResize: {
    width: 250,
    height: 250
  }
})

export default SplashScren;