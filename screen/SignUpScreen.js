import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { auth } from '../firebase';
import Pharmacy from "./PharmacyScreen";
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import Logo from '../assets/991ce665cc7d0ee9b05e6881e5dab431.png'; 

export default function SignUpScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const auth = getAuth();

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredentials) => {
        const user = userCredentials.user;
        try {
          await AsyncStorage.setItem('userToken', user.accessToken);
          console.log(user.email , user.accessToken);
          console.log('Token saved successfully!');
          navigation.navigate('Pharmacy');
        } catch (error) {
          console.log('Error saving token:', error);
        }
      })
      .catch(error => alert(error.message));
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Image source={Logo} style={styles.logo} />
  
      <Text>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <Button title="Sign Up" onPress={handleSignUp} />
    </KeyboardAvoidingView>
  );  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
});
