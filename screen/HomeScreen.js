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
      <Text style={styles.welcomeText}>Welcome To PharmGarde </Text>
      <Image
        source={require('../assets/991ce665cc7d0ee9b05e6881e5dab431.png')}
        style={styles.menuIcon}
      />
      <View style={styles.buttonContainer}>
        <CustomButton title="Sign In" onPress={() => navigation.navigate('SignIn')} />
        <CustomButton title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
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
  button:{
    backgroundColor: '#6FCF97',
    width:'100%',
    padding: 5 ,
    borderRadius: 8
  },
  buttonContainer: {
    gap:8,
    justifyContent: 'space-around',
    width: '80%',
     // Ajoutez une couleur de fond pour les boutons
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    textAlign:'center' // Assurez-vous que la couleur du texte est visible sur le fond
  },
});
