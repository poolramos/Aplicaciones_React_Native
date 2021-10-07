import React,{useState} from 'react'
import {View,FlatList,StyleSheet,RefreshControl,SafeAreaView} from 'react-native'
import {} from 'react-native-elements'
import Color from '../../constant/Color'
//Componentes
import ProductItem from './ProductItem'

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }


const ProductList = ({productList,viewProd}) =>{
    
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);

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
                    numColumns={2}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }
                />
         
            
        </View>
    )
}

const estilos = StyleSheet.create({
    contenedorPrincipal:{
        
    },
})

export default ProductList;