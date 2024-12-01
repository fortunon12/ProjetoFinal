// src/screens/EditProfile.tsx
import React, { useContext, useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import api from '../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthContext from '../AuthContext';

const EditProfile = () => {
  const { user, setUser  } = useContext(AuthContext);
  const [nome, setNome] = useState(user.nome);
  const [email, setEmail] = useState(user.email);

  const handleUpdate = async () => {
    try {
      const response = await api.put(`/usuarios/${user.id}`, { nome, email });
      const updatedUser  = response.data.user;
      setUser (updatedUser );
      await AsyncStorage.setItem('user', JSON.stringify(updatedUser ));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <TextInput placeholder="Nome" value={nome} onChangeText={setNome} />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <Button title="Atualizar" onPress={handleUpdate} />
    </View>
  );
};

export default EditProfile;