import React, { useEffect, useState, useRef } from 'react';
import {View, StyleSheet, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import { HeaderNav, BubleChatLeft, BubleChatRight } from '../components';
import {BASE_URL} from "@env"

// Import package socket from library
import { io } from "socket.io-client";

// Import icon from library react native vector icon
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons'

const RoomChatting = ({navigation, route}) => {
  const scrollViewRef = useRef();
  const socket = io.connect(BASE_URL);

  // State
  const [userId, setUserId] = useState('')
  const [messages, setMessages] = useState([])
  const [inputText, setInput] = useState('')

  // For first rendering
  useEffect(() => {
    console.log(BASE_URL)
    generateUserId()
    socket.on('connect', () => {
      socket.on('getMessage', (msg) => {
        setMessages(messages => [...messages, msg])
      });
    });
  }, [])

  // Function to generate user id from backend
  const generateUserId = () => {
    fetch(`${BASE_URL}/getUserId`)
    .then(response => response.json())
    .then(data => setUserId(data.id))
    .catch(error => console.error(error));
  }

  // Function to connect to socket client
  const connectToSocket = () => {

  }

  const sendMessage = () => {
    console.log(inputText)
    if(inputText != ''){
      fetch(`${BASE_URL}/sendMessage`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        userId: userId,
        message: inputText,
        username: route.params.username,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        setInput('')
        //Showing response message coming from server 
        // console.log(responseJson);
      })
      .catch((error) => {
      //display error message
        console.log(error);
      })
      .finally(() => {
        console.log('hhhhhhh')
      })
    }
  }

  return (
    <View style={styles.container}>
      <HeaderNav
        title= 'Room Chatting' 
        statusBarColor= '#075E54'
        onPress={() => navigation.goBack()}
      />
      <View style={styles.body}>
        <ScrollView 
          contentContainerStyle={{paddingTop: 12}}
          showsVerticalScrollIndicator={false}
          ref={scrollViewRef}
          onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
        >
          {messages.map((chat, id) => (
            chat.userId == userId ?
            <BubleChatRight
              key={id}
              data={chat}
            />
            :
            <BubleChatLeft 
              key={id}
              data={chat}
            />
          ))}
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <View style={styles.piInput}>
          <TextInput
            style={styles.input} 
            placeholder='Input your message'
            onChangeText={(text) => setInput(text)} 
            value={inputText}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={() => sendMessage()} >
          <MaterialCommunity name='send' color='#FFF' size={20}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  body: {
    flex: 1,
  },
  piInput: {
    backgroundColor: '#FFF',
    flex: 1,
    borderRadius: 100,
    paddingHorizontal: 15,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#C4C4C4',
    marginRight: 5
  },
  input: {
    padding: 0,
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
  },
  button: {
    borderRadius: 100,
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#075E54',
  },
  footer: {
    flexDirection: 'row',
    padding: 10
  },
})

export default RoomChatting;