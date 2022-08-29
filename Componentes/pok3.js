import React from 'react';
import { Text, Image, View } from 'react-native';
import estilo from './styles';
import Bulbasaur from '../assets/bulbasaur.png'

export default function pok3 () {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>
        Bulbasaur
      </Text>

      <Image style={{width: 200, height: 200}} source={Bulbasaur}/>

      <Text style={estilo.texto}>
        Grama Veneno
      </Text>

      <Text style={estilo.texto}>
      Há uma semente de planta em suas costas desde o dia em que este Pokémon nasce. A semente lentamente cresce.
      </Text>
    </View>
  );
}