import React, { useState } from 'react';
import {
  View, 
  StyleSheet, 
  Image, 
  StatusBar, 
  TextInput, 
  TouchableOpacity,
  ScrollView,
  ToastAndroid
} from 'react-native';
import { Text } from '../components';
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons'

const Register = ({navigation}) => {
  const [username, setUsername] = useState('')

  const changeUsername = () => {
    if(username == '') {
      ToastAndroid.show('Please enter username', ToastAndroid.SHORT)
    } else {
      setUsername('')
      navigation.navigate('RoomChatting', {username: username})
    }
  }
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#075E54'} barStyle={'ligt-content'}/>
      <ScrollView contentContainerStyle={{flexGrow: 1}} keyboardShouldPersistTaps={'always'}>
        <View style={styles.header}>
          <View style={styles.wrapLogo}>
            <MaterialCommunity name={'chat-processing-outline'} size={200} color='#FFF' style={{alignSelf: 'center'}}/>
          </View>
          <Text color='#FFF' type='medium' size={35}>The best{'\n'}app for{'\n'}your chatting</Text>
        </View>

        <View style={styles.body}>
          <View style={styles.headerText}>
            <Text type='medium' size={25} color='#075E54'>Welcome back</Text>
            <Text size={12} color='#C4C4C4'>Please input your name</Text>
          </View>
          <View style={styles.wrapInputAndButton}>
            <View style={styles.piInput}>
              <TextInput
                style={styles.input} 
                placeholder='Input your name here'
                onChangeText={(text) => setUsername(text)}
                value={username}
              />
            </View>
            <TouchableOpacity style={styles.button} onPress={() => changeUsername()}>
              <AntDesign name='arrowright' size={25} color='#FFF'/>
            </TouchableOpacity>
          </View>
          <Text style={styles.version} type='medium' color='#C4C4C4'>v.1.0</Text>
        </View>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#075E54',
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    height: '60%',
  },
  wrapLogo: {
    flex: 1,
  },
  headerText: {
    marginBottom: 15,
    alignSelf: 'center',
    alignItems: 'center',
    marginBottom: 40
  },
  body: {
    flex: 1,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 50,
    padding: 20
  },
  imageResize: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginTop: 30
  },
  piInput: {
    borderWidth: 0.4,
    borderColor: '#075E54',
    borderRadius: 10,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    flex: 1,
    marginRight: 5
  },
  input: {
    padding: 0,
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
  },
  version: {
    alignSelf: 'center',
    marginTop: 30
  },
  wrapInputAndButton: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  button: {
    borderRadius: 10,
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#075E54'
  }
})

export default Register;