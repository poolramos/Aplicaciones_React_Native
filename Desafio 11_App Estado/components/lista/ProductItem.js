import React from 'react'
import {View,StyleSheet,Text} from 'react-native'
import {Image,Button} from 'react-native-elements'
import Color from '../../constant/Color'
import Icon from 'react-native-vector-icons/FontAwesome';


const ProductList = ({item,viewProd}) =>{

    return(
        <View style={estilos.contenedorPrincipal} >
             <View style={estilos.contenedorProduct}>   
                <Image 
                    source={item.productImage}
                    containerStyle={estilos.itemImage}
                /> 
                 <View style={estilos.contenedorDetalle}> 
                    <Text style={estilos.itemName}>{item.productName}</Text>
                    <Text style={estilos.itemPrice}>{item.productPrice}</Text>
                    <Button 
                        title=" Ver Producto"
                        buttonStyle={estilos.botonCarrito}
                        icon={<Icon name="shopping-bag" color="white" size={20} />}
                        onPress={()=>{viewProd(item)}}
                     />
                 </View> 
            </View> 
        </View>
    )
}


const estilos = StyleSheet.create({
    contenedorPrincipal:{
        alignItems:'center',
        marginBottom:15, 
        backgroundColor:'#FFFBFA',
        borderRadius:15
    },
    contenedorProduct:{
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomWidth:1,
        borderBottomColor: '#DCDCDC'

    },
    contenedorDetalle:{
        padding:20,
        marginLeft:5,
    },
    itemName:{
        textAlign:'left',
        fontWeight:'bold',
        marginBottom:10
    },
    itemImage:{
        width:200,
        height:100,
        marginTop:15,
        borderRadius:10
    },
    itemPrice:{
        padding:10,
        textAlign:'left',
        fontSize:15,
        color:'green'
    },
    botonCarrito:{
        backgroundColor:Color.primario,
        borderRadius:15,
        width:'auto',
    },
})


export default ProductList;