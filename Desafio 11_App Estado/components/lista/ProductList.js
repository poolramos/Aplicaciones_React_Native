import React from 'react'
import {View,FlatList,StyleSheet} from 'react-native'
import {} from 'react-native-elements'
import Color from '../../constant/Color'

//Componentes
import ProductItem from './ProductItem'

const ProductList = ({productList,viewProd}) =>{

    return(
        <View style={estilos.contenedorPrincipal}>
            <FlatList 
                data={productList}
                renderItem={(data)=>
                    <ProductItem
                        item={data.item}
                        viewProd={viewProd}
                    />
                }
                keyExtractor={item=>item.productId}
              
            />
        </View>
    )
}

const estilos = StyleSheet.create({
    contenedorPrincipal:{
        
    },
})

export default ProductList;