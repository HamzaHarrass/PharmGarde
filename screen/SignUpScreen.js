import React from 'react';
import { View, Text, TextInput, Button, Image, ImageBackground, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Formik } from 'formik';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { auth } from '../firebase';
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import Logo from '../assets/991ce665cc7d0ee9b05e6881e5dab431.png'; 

export default function SignUpScreen({ navigation }) {
  const handleSignUp = async (values) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
      const user = userCredential.user;
      await AsyncStorage.setItem('userToken', user.accessToken);
      console.log('User signed up:', user.email);
      console.log('Token saved successfully!');
      navigation.navigate('Pharmacy');
    } catch (error) {
      console.error('Error signing up:', error);
      alert(error.message);
    }
  };

  return (
    <ImageBackground source={require('../assets/v870-tang-32.jpg')} style={styles.background}>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.inputContainer}>
          <Image source={Logo} style={styles.logo} />
          
          <Formik
            initialValues={{ username: '', email: '', password: '' }}
            onSubmit={(values) => handleSignUp(values)}
            validate={(values) => {
              const errors = {};
              if (!values.username) {
                errors.username = 'Le nom d\'utilisateur est requis';
              }
              if (!values.email) {
                errors.email = 'L\'adresse email est requise';
              } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
                errors.email = 'Adresse email invalide';
              }
              if (!values.password) {
                errors.password = 'Le mot de passe est requis';
              } else if (values.password.length < 6) {
                errors.password = 'Le mot de passe doit contenir au moins 6 caractères';
              }
              return errors;
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
              <View>
                <TextInput
                  style={styles.input}
                  placeholder="Username"
                  onChangeText={handleChange('username')}
                  onBlur={handleBlur('username')}
                  value={values.username}
                />
                <Text style={styles.errorText}>{errors.username}</Text>

                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />
                <Text style={styles.errorText}>{errors.email}</Text>

                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  secureTextEntry={true}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                />
                <Text style={styles.errorText}>{errors.password}</Text>

                <Button title="Sign Up" onPress={handleSubmit} />
              </View>
            )}
          </Formik>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 20,
  },
  inputContainer: {
    width: '100%',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#009Cff',
    borderRadius: 10,
    paddingHorizontal: 100,
    fontSize: 16,
    color:'black',
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
  },
});
