import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity, Alert, ScrollView } from 'react-native';
import data from '../data';
import { getAuth, signOut } from 'firebase/auth';

export default function PharmacyScreen({ navigation }) {
  const auth = getAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log('User logged out successfully');
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      });
    } catch (error) {
      console.error('Logout error:', error.message);
      Alert.alert(
        'Error',
        error.message,
        [{ text: 'OK', onPress: () => console.log('OK Pressed') }]
      );
    }
  };

  useEffect(() => {
    // Code exécuté au chargement de l'écran Pharmacy
  }, []);

  const handleShowOnMap = (pharmacy) => {
    navigation.navigate('MapView', { pharmacy });
  };

  return (
    <ImageBackground source={require('../assets/v870-tang-32.jpg')} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.navbar}>
          <Text style={styles.navbarText}>Welcome to PharmacieGard</Text>
          <TouchableOpacity onPress={handleLogout}>
            <Text style={styles.logoutButton}>Déconnexion</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.scrollView}>
          {data.map((pharmacy) => (
            <TouchableOpacity key={pharmacy.id} style={styles.pharmacyContainer}>
              <Image source={{ uri: pharmacy.images[0] }} style={styles.pharmacyImage} />
              <Text style={styles.pharmacyName}>{pharmacy.name}</Text>
              <Text style={styles.pharmacyAddress}>{pharmacy.address}</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleShowOnMap(pharmacy)}
              >
                <Text style={styles.buttonText}>Afficher sur la carte</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    paddingTop: 0,
    padding: 20,
  },

  pharmacyContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  pharmacyImage: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  pharmacyName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  pharmacyAddress: {
    fontSize: 16,
    color: '#888',
  },
  button: {
    backgroundColor: '#009Cff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  navbarText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
  logoutButton: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
