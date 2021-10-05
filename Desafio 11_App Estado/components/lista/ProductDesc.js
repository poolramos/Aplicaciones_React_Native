import React from 'react'
import {View,StyleSheet,Text} from 'react-native'
import {Image,Button} from 'react-native-elements'
import Color from '../../constant/Color'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch } from 'react-redux';
import {addItemCart} from '../../store/actions/cartList.action'

const ProductDesc = ({route,navigation}) =>{

    const dispatch = useDispatch();
    const additem = (item)=>{
        dispatch(addItemCart(item))
        navigation.push('Cart')
    }

    return(
        <View style={estilos.contenedorPrincipal}>
            <View style={estilos.contenedorImage}>
                <Image 
                    source={route.params.item.productImage}
                    containerStyle={estilos.prdImage}
                />
            </View>

         <View style={estilos.contenedor}>
            <Text style={estilos.namePrd}>{route.params.item.productName}</Text>
            <View style={estilos.contenedorDetail}>
                <Text style={estilos.descPrd}>{route.params.item.productDetail}</Text>
            </View>
            <Text style={estilos.pricePrd}>{route.params.item.productPrice}</Text>
         </View>
         <Button 
                title=" Agregar al Carrito"
                buttonStyle={estilos.botonComprar}
                containerStyle={estilos.contenedorBtn}
                icon={<Icon name="shopping-cart" size={25} color="white" />}
                onPress={()=>additem(route.params.item)}
            />
        </View>
    )
}

const estilos = StyleSheet.create({
    contenedorPrincipal:{
        padding:10
    },
    contenedorImage:{
        alignItems:'center',
        marginTop:20,
        padding:10
    },
    prdImage:{
        width:250,
        height:150,
        borderRadius:20
    },
    contenedor:{
        padding:15,
        backgroundColor:'#FFFBFA',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius:20,
    },
    contenedorDetail:{
        padding:10,
        backgroundColor:'#F1F1F1',
        borderRadius:20,
    },
    namePrd:{
      fontFamily:'open-sans-bold',
      fontSize:15,
      marginBottom:5,
      textAlign:'center'  
    },
    descPrd:{
        fontFamily:'open-sans',
        marginTop:10,
        textAlign:"left",
        marginBottom:10
    },
    pricePrd:{
        textAlign:'center',
        fontFamily:'open-sans',
        color:'green',
        fontSize:20
    },
    contenedorBtn:{
        padding:15
    },
    botonComprar:{
        backgroundColor: Color.primario,
        borderRadius:15,
        margin:'auto',
    },
})


export default ProductDesc;