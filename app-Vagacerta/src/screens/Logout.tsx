// src/screens/Logout.tsx
import React, { useContext } from 'react';
import { View, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthContext from '../AuthContext';

const Logout = () => {
  const { setUser  } = useContext(AuthContext);

  const handleLogout = async () => {
    await AsyncStorage.removeItem('user');
    setUser (null);
  };

  return (
    <View>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default Logout;