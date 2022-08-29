import React from 'react';
import { Text, Image, View } from 'react-native';
import estilo from './styles';
import squirtle from '../assets/squirtle.png'


export default function pok2 () {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>
        Squirtle
      </Text>

      <Image style={{width: 200, height: 200}} source={squirtle}/>

      <Text style={estilo.texto}>
        Água
      </Text>

      <Text style={estilo.texto}>
      Quando ele retrai seu pescoço longo em sua concha, ele esguicha água com força vigorosa.
      </Text>
    </View>
  );
}