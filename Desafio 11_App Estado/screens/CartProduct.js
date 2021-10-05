import React from 'react'
import {View,StyleSheet,Text,FlatList} from 'react-native'
import {Image} from 'react-native-elements'
import Color from '../constant/Color'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem'
import { useDispatch } from 'react-redux'
import {deleteItemCart} from '../store/actions/cartList.action'
import sinProductos from '../assets/images/sinproductos.png'


const NoItems = () =>{

    return(
        <View style={estilos.sinItems}>
            <Image source={sinProductos} containerStyle={estilos.imagenCarrito}/>
            <Text style={estilos.sinPrd}>No hay productos cargados</Text>
        </View>
    )
}


const CartProduct = () =>{

    const items = useSelector(state=>state.cartlist.cartlist)
    /* const cantPrd = useSelector(state=>state.cartlist.cantPrd) */


    const dispatch = useDispatch();
    const dltItem = (itemId)=>{
        dispatch(deleteItemCart(itemId))
    }

    let content
    if(items.length > 0)
        content = <FlatList data={items} renderItem={(data)=><CartItem item={data.item} dltItem={dltItem} keyExtractor={items=>items.productId}/>}/>
    else
        content = <NoItems />

    return (
        <View>
            {/* <FlatList data={items} renderItem={(data)=><CartItem item={data.item} dltItem={dltItem} keyExtractor={item=>item.productId}/>}/> */}
            {content}
        </View>
    )
}

const estilos = StyleSheet.create({
    contenedorPrincipal:{

    },
    sinItems:{
        padding:10,
        justifyContent:'center',
        alignItems:'center',
        marginTop:20
    },
    imagenCarrito:{
        width: 100,
        height:100
    },
    sinPrd:{
        fontFamily:'open-sans',
        fontSize:15,
        marginTop:10
    },
})


export default CartProduct;