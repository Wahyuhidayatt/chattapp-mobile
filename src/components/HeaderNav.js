import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import { Text } from '../components'

// Icon from library react-native-vector-icon
import AntDesign from 'react-native-vector-icons/AntDesign'

const SplashScren = (props) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={props.statusBarColor} barStyle={'light-content'}/>
      <AntDesign 
        name='arrowleft' 
        color='#FFF' 
        size={18} 
        style={styles.iconStyle}
        onPress={props.onPress}
      />
      <Text color='#FFF' type='medium'>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#075E54',
    height: 68,
    alignItems: 'center',
    paddingHorizontal: 24,
    flexDirection: 'row'
  },
  iconStyle: {
    marginRight: 20
  },
})

export default SplashScren;