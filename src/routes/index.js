import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screen import
import SplashScren from '../screens/SplashScreen';
import Register from '../screens/Register';
import RoomChatting from '../screens/Chatting';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ 
          headerShown: false,
          animation: 'slide_from_right',
          gestureEnabled: true
        }} 
      >
        <Stack.Screen name="SplashScren" component={SplashScren} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="RoomChatting" component={RoomChatting} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;