// src ```javascript
// src/screens/Details.tsx
import React from 'react';
import { View, Text, Button, Linking } from 'react-native';

const Details = ({ route }) => {
  const { vaga } = route.params;

  const handleContact = () => {
    const whatsappNumber = '1234567890'; // Substitua pelo número real
    Linking.openURL(`https://wa.me/${whatsappNumber}`);
  };

  return (
    <View>
      <Text>{vaga.titulo}</Text>
      <Text>{vaga.descricao}</Text>
      {vaga.status === 'aberta' && (
        <Button title="Contatar" onPress={handleContact} />
      )}
    </View>
  );
};

export default Details;