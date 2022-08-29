import React from 'react';
import { Text, Image, View } from 'react-native';
import estilo from './styles';
import Eeve from '../assets/eeve.png'

export default function TelaRotas () {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>
        Eeve
      </Text>

      <Image style={{width: 200, height: 200}} source={Eeve}/>

      <Text style={estilo.texto}>
        Normal
      </Text>

      <Text style={estilo.texto}>
      Tem a capacidade de alterar a composição de seu corpo para se adequar ao seu ambiente circundante.
      </Text>
    </View>
  );
}