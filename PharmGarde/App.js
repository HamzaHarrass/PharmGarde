import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View,Button, Image, TouchableOpacity } from 'react-native';
import SignUpScreen from './SignUpScreen';
import SignInScreen from './SignInScreen';

// Écran d'accueil de l'application
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
    <Text>Welcome To PharmGarde</Text>
      <Image source={require('./assets/991ce665cc7d0ee9b05e6881e5dab431.png')} style={styles.menuIcon} />
    <View style={styles.Button}>
    <Button  title="Sign In" onPress={() => navigation.navigate('SignIn')} />
    <Button  title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
    </View>
  </View>
  );
}

// Écran du menu
function MenuScreen() {
  return (
    <View style={styles.container}>
      <Text>Menu Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'PharmGarde', headerTitleAlign: 'center' }} />
      <Stack.Screen name="SignIn" component={SignInScreen} options={{ title: 'Sign In', headerTitleAlign: 'center' }} />
      <Stack.Screen name="SignUp" component={SignUpScreen} options={{ title: 'Sign Up', headerTitleAlign: 'center' }} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuIcon: {
    width: 200,
    height: 200,
    margin: 10,
  },
  Button:{
    display:'flex',
    gap:5,
  }
});
