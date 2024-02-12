import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import SignUpScreen from './SignUpScreen';
import SignInScreen from './SignInScreen';
import PharmacyScreen from './PharmacyScreen';

// CustomButton pour contrôler le style du texte
const CustomButton = ({ title, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

// Écran d'accueil de l'application
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome To PharmGarde</Text>
      <Image source={require('./assets/991ce665cc7d0ee9b05e6881e5dab431.png')} style={styles.menuIcon} />
      <View style={styles.Button}>
        <CustomButton title="Sign In" onPress={() => navigation.navigate('SignIn')} />
        <CustomButton title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
        <CustomButton title="Pharmacy" onPress={() => navigation.navigate('Pharmacy')} />
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
        <Stack.Screen name="Pharmacy" component={PharmacyScreen} options={{ title: 'Pharmacy', headerTitleAlign: 'center' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6FCF97', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    color: '#FFFFFF',
    fontSize: 24,
    marginBottom: 20,
  },
  menuIcon: {
    width: 200,
    height: 200,
    margin: 10,
  },
  Button: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
  button: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#000000', // Couleur du texte noir
    fontSize: 16,
  },
});
