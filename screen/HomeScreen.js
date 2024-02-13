import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const CustomButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome To PharmGarde</Text>
      <Image
        source={require('../assets/991ce665cc7d0ee9b05e6881e5dab431.png')}
        style={styles.menuIcon}
      />
      <View style={styles.buttonContainer}>
        {/* <CustomButton title="Sign In" onPress={() => navigation.navigate('SignIn')} />
        <CustomButton title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
        <CustomButton title="Pharmacy" onPress={() => navigation.navigate('Pharmacy')} /> */}
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 20,
    marginBottom: 20,
  },
  menuIcon: {
    width: 50,
    height: 50,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
});
