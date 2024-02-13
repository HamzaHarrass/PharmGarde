import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, KeyboardAvoidingView } from 'react-native'; 
import Logo from '../assets/991ce665cc7d0ee9b05e6881e5dab431.png';
import {createUserWithEmailAndPassword , getAuth } from "firebase/auth"

export default function SignUpScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const auth = getAuth();
  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth , email, password) 
    .then(userCredentials =>{
      const user = userCredentials.user;
      console.log(user.email); 
    })
    .catch(error => alert(error.message))
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
