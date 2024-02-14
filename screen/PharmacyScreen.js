import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function AddPharmacyForm({ onSubmit }) {

  const handlePress = () => {
    // Supposons que vous récupériez les informations de l'image et de l'adresse de la pharmacie depuis une source externe ou d'une autre manière
    const pharmacyImage = require('../assets/131a67b1-7653-4147-ae71-f51c6038240a-1.png'); // Remplacez cet exemple par le chemin de votre image de pharmacie
    const pharmacyAddress = "123 rue de la pharmacie, Ville";

    // Appel de la fonction onSubmit avec les informations de l'image et de l'adresse de la pharmacie
    onSubmit(pharmacyImage, pharmacyAddress);
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/991ce665cc7d0ee9b05e6881e5dab431.png')} style={styles.logo} />
      <Text style={styles.addPharmacyText}>pharmacie</Text>
      <TouchableOpacity onPress={handlePress}>
        <Image source={require('../assets/131a67b1-7653-4147-ae71-f51c6038240a-1.png')} style={styles.pharmacyImage} />
        <Text style={styles.pharmacyAddress}>123 rue de la pharmacie, Ville</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  addPharmacyText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  pharmacyImage: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  pharmacyAddress: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
