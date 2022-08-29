import React from 'react';
import { Text, Image, View } from 'react-native';
import estilo from './styles';
import Pikachu from '../assets/pikachu.png'

export default function TelaRotas () {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>
        Pikachu
      </Text>

      <Image style={{width: 200, height: 200}} source={Pikachu}/>

      <Text style={estilo.texto}>
        Elétrico
      </Text>

      <Text style={estilo.texto}>
      Pikachu que pode gerar eletricidade poderosa tem sacos de bochecha que são extra macios e super elásticos.
      </Text>
    </View>
  );
}