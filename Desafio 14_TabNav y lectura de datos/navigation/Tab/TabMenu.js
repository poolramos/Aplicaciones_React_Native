import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome';
import Color from '../../constant/Color'
import HomeScreens from '../Home/HomeScreens'
import UserScreens from '../UserProfile/UserScreens';
import FavScreens from '../Fav/FavScreens';

const Stack = createMaterialBottomTabNavigator()
const TabMenu = () =>{
    return(
        <Stack.Navigator
            initialRouteName="Home"
            barStyle={{backgroundColor: Color.primario}}
        >
            <Stack.Screen 
                name="Home"    
                component={HomeScreens}
                options={{
                    tabBarLabel: 'Inicio',
                    tabBarIcon: ({ color }) => (
                      <Icon name="home" color='white' size={26} />
                    ),
                  }}
            />

            <Stack.Screen 
                name="Fav"    
                component={FavScreens}
                options={{
                    tabBarLabel: 'Favoritos',
                    tabBarIcon: ({ color }) => (
                      <Icon name="heart" color='white' size={20} />
                    ),
                  }}
            />

            {/* <Stack.Screen 
                name="User"    
                component={UserScreens}
                options={{
                    tabBarLabel: 'Perfil',
                    tabBarIcon: ({ color }) => (
                      <Icon name="user" color='white' size={26} />
                    ),
                  }}
            /> */}
        </Stack.Navigator>
    )
}

export default TabMenu;