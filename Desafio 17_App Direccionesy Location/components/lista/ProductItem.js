import React from 'react'
import {View,StyleSheet,Text,TouchableOpacity} from 'react-native'
import {Image,Button} from 'react-native-elements'
import Color from '../../constant/Color'
import Icon from 'react-native-vector-icons/FontAwesome';


const ProductList = ({item,viewProd}) =>{

   
    /* console.log(item) */


    return(
        <TouchableOpacity style={estilos.contenedorPrincipal} onPress={()=>{viewProd(item)}}>
            <View style={estilos.contenedorImagen}>
                <Image 
                    source={{uri:item.image}}
                    containerStyle={estilos.itemImage}
                /> 
            </View>
            <View style={estilos.contenedorDescripcion}>
                <Text style={estilos.itemPrice}>{item.item.productPrice}</Text>
                <Text style={estilos.itemName}>{item.item.productName}</Text>
            </View>
            
        </TouchableOpacity>
    )
}


const estilos = StyleSheet.create({
    contenedorPrincipal:{
        marginBottom:15, 
        backgroundColor:'white',
        borderRadius:1,
        width:180,
        height:180,
        marginRight:10,
        borderRadius:10,
    },
    contenedorImagen:{
        alignItems:'center'
    },
    contenedorDescripcion:{
        padding:10,
    },
    itemName:{
        fontFamily:'open-sans',
        textAlign:'left',
        marginBottom:10
    },
    itemImage:{
        width:160,
        height:100,
        marginTop:15,
    },
    itemPrice:{
        fontFamily:'open-sans',
        color:'black',
        textAlign:'left',
        fontSize:18,
    },
})


export default ProductList;