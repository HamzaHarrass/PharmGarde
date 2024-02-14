import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Logo from '../assets/991ce665cc7d0ee9b05e6881e5dab431.png';
import Pharmacy from "./PharmacyScreen"

export default function SignInScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const auth = getAuth();

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User signed in:", user.email);
      navigation.navigate('Pharmacy');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Sign in error:", errorCode, errorMessage);
      Alert.alert(
        "Error",
        errorMessage,
        [{ text: "OK", onPress: () => console.log("OK Pressed") }]
      );
    });
  };


  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />

      <Text>Sign In</Text>
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
      <Button title="Sign In" onPress={handleSignIn} />
    </View>
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
