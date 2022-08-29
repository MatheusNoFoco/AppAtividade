import React from 'react';
import { Text, Image, View } from 'react-native';
import estilo from './styles';
import charmander from '../assets/charmander.png';


export default function pok1 () {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>
        Charmander
      </Text>
      
      <Image style={{width: 200, height: 200}} source={charmander}/>
        
      <Text style={estilo.texto}>
        Fogo
      </Text>

      <Text style={estilo.texto}>
      Tem preferência por coisas quentes. Quando chove, diz-se que o vapor jorra da ponta da cauda.
      </Text>

     
    </View>
  );
}