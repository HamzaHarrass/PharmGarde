import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import data from '../data';
import { ScrollView } from 'react-native-gesture-handler';

export default function PharmacyScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Liste des pharmacies</Text>
      {data.map((pharmacy) => (
        <TouchableOpacity key={pharmacy.id} style={styles.pharmacyContainer}>
          <Image source={{ uri: pharmacy.images[0] }} style={styles.pharmacyImage} />
          <Text style={styles.pharmacyName}>{pharmacy.name}</Text>
          <Text style={styles.pharmacyAddress}>{pharmacy.address}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
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
});
