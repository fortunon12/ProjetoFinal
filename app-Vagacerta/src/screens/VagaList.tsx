// src/screens/VagasList.tsx
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import api from '../services/api';

const VagasList = () => {
  const [vagas, setVagas] = useState([]);

  useEffect(() => {
    const fetchVagas = async () => {
      try {
        const response = await api.get('/vagas');
        setVagas(response.data.jobs);
      } catch (error) {
        console.error(error);
      }
    };

    fetchVagas();
  }, []);

  return (
    <View>
      {vagas.map(vaga => (
        <Text key={vaga.id}>{vaga.titulo}</Text>
      ))}
    </View>
  );
};

export default VagasList;