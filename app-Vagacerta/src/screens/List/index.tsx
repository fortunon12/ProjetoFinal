import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { Image, FlatList, View, Text, Alert } from 'react-native';
import { ListContainer, TextVagas } from './styles';
import BGTop from '../../assets/BGTop.png';
import Logo from '../../components/Logo';
import VagaCard from '../../components/VagaCard';
import { Feather } from '@expo/vector-icons';
import { 
    Wrapper,
    Container, 
    Header, 
    HeaderButtonContainer, 
    ButtonIcon, 
    ButtonText,
} from '../Profile/styles';
import { useAuth } from '../../AuthContext'; // Importando o contexto de autenticação

export default function List({}) {
    const [vagas, setVagas] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchVagas = async () => {
            try {
                const response = await  api.get('/vagas', {headers: {'Content-Type': 'application/json'}});
                setVagas(response.data?.jobs ?? []);
                console.log(response)
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchVagas();
    }, []);
console.log(vagas)
    return (
        <Wrapper>
            <Image source={BGTop} style={{ maxHeight: 86 }} />
           
            <Container>
                <TextVagas>{vagas?.length} vagas encontradas!</TextVagas>
                <ListContainer>
                    {isLoading ? (
                        <Text>Carregando...</Text>
                    ) : (
                        <FlatList
                            data={vagas}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) => (
                                <VagaCard
                                    id={item.id}
                                    title={item.titulo}
                                    dataCreated={item.dataCadastro}
                                    company={item.empresa}
                                />
                            )}
                            showsVerticalScrollIndicator={true}
                            ListEmptyComponent={() => (
                                <View>
                                    <Text>
                                        Você ainda não tem vagas cadastradas
                                    </Text>
                                    <Text>
                                        Crie vagas.
                                    </Text>
                                </View>
                            )}
                        />
                    )}
                </ListContainer>
            </Container>
        </Wrapper>
    );
}