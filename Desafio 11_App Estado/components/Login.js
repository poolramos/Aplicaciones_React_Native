import React,{useState} from 'react'
import {View,StyleSheet} from 'react-native'
import {Input,Card,Button,Image,Header} from 'react-native-elements'
import Color from '../constant/Color'
import Icon from 'react-native-vector-icons/FontAwesome';




//Imagenes
import Logo from '../assets/images/logo.png'

const Login = ({Login,saveUser,userValue,passwordValue}) =>{

 
    return (
        <View>
            <Header
                centerComponent={{ text: 'Iniciar Sesion', style: { color: '#ffff',fontWeight:'bold',fontSize:20,fontFamily:'open-sans-bold' } }}
                backgroundColor={Color.primario}
            />
            <View style={estilos.contenedorPrincipal}>
                 
                <View style={estilos.contenedorImagen}>
                    <Image 
                        source={Logo}
                        containerStyle={estilos.logo}
                    />
                </View>
            <Card containerStyle={estilos.card}>
                    <Input 
                        label="Usuario"
                        placeholder=" aqui..."
                        autoCorrect={false}
                        keyboardType='default'
                        leftIcon={<Icon name="user" color={Color.secundario} size={20}/>}
                        onChangeText={(value)=>saveUser('username',value)}
                        value={userValue}
                    />
                    <Input 
                        label="Contraseña"
                        placeholder="aqui..."
                        autoCorrect={false}
                        keyboardType='default'
                        secureTextEntry={true}
                        leftIcon={<Icon name="key" color={Color.secundario} size={20}/>}
                        onChangeText={(value)=>saveUser('password',value)}
                        value={passwordValue}
                    />
                    <Button 
                        title="Ingresar"
                        type="solid"
                        buttonStyle={estilos.botonLogin}
                        titleStyle={estilos.tituloBoton}
                        onPress={Login}
                    />
            </Card>
        </View>
        </View>
        
    )
}

const estilos = StyleSheet.create({
    contenedorPrincipal:{
     padding:10
    },
    card:{
     borderRadius:20,
    },
    botonLogin:{
        backgroundColor: Color.primario,
        borderRadius:5,
        marginTop:10,
        marginBottom:10   
    },
    tituloBoton:{
        fontWeight:'bold',
        fontSize:18
    },
    contenedorImagen:{
        padding:20,
        justifyContent:'center',
        alignItems:'center'
    },
    logo:{
        width:150,
        height: 150,
    },
    
})


export default Login;