// src/screens/LoginScreen.tsx
import React, { useContext, useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import api from '../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthContext from '../AuthContext';

const LoginScreen = () => {
  const { setUser  } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async () => {
    try {
      const response = await api.post('/usuarios/login', { email, senha });
      const userData = response.data.user;
      setUser (userData);
      await AsyncStorage.setItem('user', JSON.stringify(userData));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput placeholder="Senha" value={senha} onChangeText={setSenha} secureTextEntry />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;