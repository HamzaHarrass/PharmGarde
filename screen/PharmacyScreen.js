import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import data from '../data';
import { ScrollView } from 'react-native-gesture-handler';
export default function PharmacyScreen({ navigation }) {
  useEffect(() => {

  }, []);

  const handleShowOnMap = (pharmacy) => {
    navigation.navigate('MapView', { pharmacy });
  };



  return (
    <View style={{ flex: 1 }}>
      <View style={styles.navbar}>
        <Text style={styles.navbarText}>Welcome to PharmacieGard</Text>
        <TouchableOpacity>
          <Text style={styles.logoutButton}>Déconnexion</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.container}>
        <Text style={styles.heading}>Liste des pharmacies</Text>
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
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
    backgroundColor: '#6FCF97',
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
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#6FCF97',
  },
  navbarText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  logoutButton: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
