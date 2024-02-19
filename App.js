import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from './screen/SignUpScreen';
import SignInScreen from './screen/SignInScreen';
import PharmacyScreen from './screen/PharmacyScreen';
import WelcomeScreen from './screen/welcomeScreen';
import HomeScreen from './screen/HomeScreen';
import MapViewScreen from './screen/MapViewScreen';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{headerShown:false}} component={HomeScreen} />
        <Stack.Screen name="SignUp" options={{headerShown:false}} component={SignUpScreen} />
        <Stack.Screen name="SignIn" options={{headerShown:false}} component={SignInScreen} />
        <Stack.Screen name="Welcome" options={{headerShown:false}} component={WelcomeScreen} />
        <Stack.Screen name="Pharmacy" options={{headerShown:false}} component={PharmacyScreen} />
        <Stack.Screen name="MapView" options={{headerShown:false}} component={MapViewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
