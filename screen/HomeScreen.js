import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const CustomButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.navbarText}>PharmGarde</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.welcomeText}>Welcome To PharmGarde</Text>
        <Image
          source={require('../assets/991ce665cc7d0ee9b05e6881e5dab431.png')}
          style={styles.menuIcon}
        />
        <Text style={styles.description}>
          This application will display nearby pharmacies on the map.
        </Text>

        <View style={styles.buttonContainer}>
          <CustomButton title="Sign In" onPress={() => navigation.navigate('SignIn')} />
          <CustomButton title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
        </View>
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
  navbar: {
    backgroundColor: '#6FCF97',
    width: '100%',
    paddingVertical: 10,
    alignItems: 'center',
  },
  navbarText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
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
  description: {
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#6FCF97',
    width: '100%',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  buttonContainer: {
    width: '100%',
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
});
