import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

// Écran d'accueil de l'application
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Hello World! My name is amina</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
        <Image source={require('./assets/991ce665cc7d0ee9b05e6881e5dab431.png')} style={styles.menuIcon} />
      </TouchableOpacity>
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
        <Stack.Screen name="Menu" component={MenuScreen} options={{ title: 'Menu', headerTitleAlign: 'center' }} />
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
    width: 100,
    height: 100,
    margin: 10,
  },
});
