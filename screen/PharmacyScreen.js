import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

export default function AddPharmacyForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [openingHours, setOpeningHours] = useState('');

  const handleSubmit = () => {
    // Vérification des champs obligatoires
    if (!name || !address || !phoneNumber || !openingHours) {
      alert('Veuillez remplir tous les champs.');
      return;
    }

    const newPharmacy = {
      name,
      address,
      phoneNumber,
      openingHours,
    };

    onSubmit(newPharmacy);

    setName('');
    setAddress('');
    setPhoneNumber('');
    setOpeningHours('');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/991ce665cc7d0ee9b05e6881e5dab431.png')} style={styles.logo} />
      <Text style={styles.addPharmacyText}>Ajouter une pharmacie</Text>
      <Text style={styles.label}>Nom :</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={text => setName(text)}
      />
      <Text style={styles.label}>Adresse :</Text>
      <TextInput
        style={styles.input}
        value={address}
        onChangeText={text => setAddress(text)}
      />
      <Text style={styles.label}>Numéro de téléphone :</Text>
      <TextInput
        style={styles.input}
        value={phoneNumber}
        onChangeText={text => setPhoneNumber(text)}
      />
      <Text style={styles.label}>Heures d'ouverture :</Text>
      <TextInput
        style={styles.input}
        value={openingHours}
        onChangeText={text => setOpeningHours(text)}
      />
      <Button title="Ajouter" onPress={handleSubmit} />
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
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%', 
  },
});
