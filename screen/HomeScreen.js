import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';

const CustomButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../assets/v870-tang-32.jpg')}
      style={styles.backgroundImage}
    >
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
    </ImageBackground>
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
    backgroundColor: '#fff',
    width: '100%',
    paddingVertical: 20,
    alignItems: 'center',
  },
  navbarText: {
    fontSize: 24,
    color: '#009Cff',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  welcomeText: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  menuIcon: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  description: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
    fontSize: 16,
    color: 'black',
  },
  button: {
    backgroundColor: '#009Cff',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});
