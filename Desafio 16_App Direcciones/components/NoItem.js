import React from 'react'
import {StyleSheet,View,Text} from 'react-native'
import {Image} from 'react-native-elements'


const NoItem = ({title,image}) =>{

    return(
        <View style={estilos.sinItems}>
            <Image source={image} containerStyle={estilos.imagenCarrito}/>
            <Text style={estilos.sinPrd}>{title}</Text>
        </View>
    )
}

const estilos = StyleSheet.create({
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

export default NoItem;