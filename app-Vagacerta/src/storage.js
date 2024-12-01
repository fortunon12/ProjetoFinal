import {AsyncStorage} from 'react-native';


const _storeData = async (usuario) => {
    try {
      await AsyncStorage.setItem(
        'usuario',
        JSON.stringify (usuario)
      );
    } catch (error) {
      // Error saving data
    }
  };

const  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('usuario');
      if (value !== null) {
        
        console.log(value);
        return(value)
      }
    } catch (error) {
      // Error retrieving data
      
    }
  };