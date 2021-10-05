import React from 'react';
import {View,StyleSheet} from 'react-native';
import Color from '../constant/Color';
import {useSelector} from 'react-redux'

//Componentes
import ProductList from './lista/ProductList';


const Home = ({navigation}) =>{

    const productList = useSelector(state => state.prdlist.list)

    const viewProduct = (item) =>{
        navigation.navigate('Product',{
            name:item.productName,
            item:item,
        })
    }

    return(
        <View>
            <View style={estilos.contenedorPrincipal}>
                <ProductList 
                    productList={productList}
                    viewProd={viewProduct}
                />
            </View>
        </View>
           
    )
}

const estilos = StyleSheet.create({
    contenedorPrincipal:{
        padding:10,
        height:'auto'
    },
})

export default Home;