import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image ,ImageBackground, StyleSheet, Alert } from 'react-native';
import { Formik } from 'formik';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Logo from '../assets/991ce665cc7d0ee9b05e6881e5dab431.png';
import Pharmacy from "./PharmacyScreen";

export default function SignInScreen({ navigation }) {
  const auth = getAuth();

  const handleSignIn = async (values) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, values.email, values.password);
      const user = userCredential.user;
      await AsyncStorage.setItem('userToken', user.accessToken);
      console.log('User signed in:', user.email);
      navigation.navigate('Pharmacy');
    } catch (error) {
      console.error('Sign in error:', error.code, error.message);
      Alert.alert(
        "Error",
        error.message,
        [{ text: "OK", onPress: () => console.log("OK Pressed") }]
      );
    }
  };

  return (
    <ImageBackground source={require('../assets/v870-tang-32.jpg')} style={styles.background}>
      <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />

        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={values => handleSignIn(values)}
          validate={values => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
              errors.email = 'Invalid email address';
            }
            if (!values.password) {
              errors.password = 'Required';
            }
            return errors;
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
            <>
              <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
              <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
              {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
              <Button title="Sign In" onPress={handleSubmit} />
            </>
          )}
        </Formik>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#009Cff',
    color:'black',
    fontWeight: 'bold',
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 5,
  },
});
