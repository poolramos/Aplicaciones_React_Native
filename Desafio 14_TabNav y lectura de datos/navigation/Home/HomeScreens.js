import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ProductCart from '../../components/ProductCart'
import CartProduct from '../../screens/CartProduct'
import Home from '../../components/Home'
import ProductDesc from '../../components/lista/ProductDesc'
import Color from '../../constant/Color';
import Logout from '../../components/Logout'

const Stack = createStackNavigator();
const HomeScreens = () =>{
    return(
            <Stack.Navigator
                screenOptions={{
                    headerStyle:{
                        backgroundColor:Color.primario,
                    },
                    headerTintColor:'white',
                }}
            >
                <Stack.Screen 
                    name="Home" 
                    component={Home}
                      options={{
                        headerTitle:'E-Commerce',
                        headerTitleAlign:'center',
                        headerRight: () => <ProductCart />,
                        headerLeft: () => <Logout />
                    }}  
                />
                <Stack.Screen 
                    name="Product"
                    component={ProductDesc}
                    options={{
                        headerTitle:''
                    }}
                    /* options={({ route }) => ({ title: route.params.name })} */
                />
                <Stack.Screen 
                    name="Cart"
                    component={CartProduct}
                    options={{
                        headerTitle:'Carrito',
                        headerShown:true,
                    }}        
                />
            </Stack.Navigator>
    )
}

export default HomeScreens;