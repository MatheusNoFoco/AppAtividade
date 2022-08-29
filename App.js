import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import pok1 from './Componentes/pok1';
import pok2 from './Componentes/Pok2';
import pok3 from './Componentes/Pok3';
import pok4 from './Componentes/Pok4';
import pok5 from './Componentes/pok5';

const Drawer = createDrawerNavigator();
// const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='Charmander' component={pok1}/>
        <Drawer.Screen name='Squirtle' component={pok2}/>
        <Drawer.Screen name='Bulbasaur' component={pok3}/>
        <Drawer.Screen name='Pikachu' component={pok4}/>
        <Drawer.Screen name='Eeve' component={pok5}/>
      </Drawer.Navigator>

      {/* <BottomTab.Navigator>
        <BottomTab.Screen name='Home' component={telaHom}/>
        <BottomTab.Screen name='Descrição' component={telaDescricao}/>
        <BottomTab.Screen name='Biblioteca' component={telaBiblioteca}/>
        <BottomTab.Screen name='Rota' component={telaRota}/>
      </BottomTab.Navigator> */}

    </NavigationContainer>
  );
}
