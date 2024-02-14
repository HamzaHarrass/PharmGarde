import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from './screen/SignUpScreen';
import SignInScreen from './screen/SignInScreen';
import PharmacyScreen from './screen/PharmacyScreen';
import WelcomeScreen from './screen/welcomeScreen';
import HomeScreen from './screen/HomeScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Pharmacy" component={PharmacyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
