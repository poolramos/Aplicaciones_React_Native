import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import ProductCart from '../components/ProductCart'
import CartProduct from './CartProduct'
import Home from '../components/Home'
import ProductDesc from '../components/lista/ProductDesc'
import Color from '../constant/Color';

const Stack = createStackNavigator();
const HomeScreens = () =>{
    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle:{
                        backgroundColor:Color.primario,
                    },
                    headerTintColor:'white'
                }}
            >
                <Stack.Screen 
                    name="Home" 
                    component={Home}
                    options={{
                        headerTitle:'E-Commerce',
                        headerTitleAlign:'center',
                        headerRight: () => <ProductCart />
                    }}
                />
                <Stack.Screen 
                    name="Product"
                    component={ProductDesc}
                    options={({ route }) => ({ title: route.params.name })}
                />
                <Stack.Screen 
                    name="Cart"
                    component={CartProduct}
                    options={{
                        headerTitle:'Carrito'
                    }}
                
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default HomeScreens;