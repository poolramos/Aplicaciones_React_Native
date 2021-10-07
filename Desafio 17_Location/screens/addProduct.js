import React,{useState,useEffect} from 'react'
import {SafeAreaView,StyleSheet,Text,View,Switch,ScrollView} from 'react-native'
import {Input,Button,Image} from 'react-native-elements'
import Color from '../constant/Color'
import * as Location from 'expo-location';
import * as ImagePicker from 'expo-image-picker';
import { addItem } from '../store/actions/productlist.action';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

const addProduct = ({navigation}) =>{

    const newProduct = {
        productId:"",
        productName:"",
        productDetail:"",
        productPrice:"",
        latitud:"",
        longitud:""
    }

    const cantProduct = useSelector(state=>state.prdlist.list)

    const [product,setProduct] = useState(newProduct)

    const dispatch = useDispatch()

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () =>{
        setIsEnabled(previousState => !previousState)
        activateLocation()
    }

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    const activateLocation = async () =>{
        let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
    
          let location = await Location.getCurrentPositionAsync({});
          setLocation(location);
    }

      let text = 'Waiting..';
      if (errorMsg) {
        text = errorMsg;
      } else if (location) {
        text = JSON.stringify(location);
        console.log(location)
      }

      const [image, setImage] = useState(null);

      const imagePermission = async () =>{
        if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
              alert('Sorry, we need camera roll permissions to make this work!');
            }
          }
      }

      const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          setImage(result.uri);
        }
      };

      const saveProduct = (campo,valor) =>{
          setProduct({...product,[campo]:valor})
      }

      const addProduct = () =>{
          let nuevoId = cantProduct.length + 1
          /* console.log(nuevoId) */
          product.productId = nuevoId
          if(location){
              product.latitud = location.coords.latitude
              product.longitud = location.coords.longitude
          }
          /* console.log(product) */
           dispatch(addItem(product,image)) 
           navigation.push('Home')
      }

    return(
        <SafeAreaView> 
            <ScrollView style={estilos.contenedorPrincipal}>
                {/* <Text>add Product</Text> */}
                <View style={{flexDirection:'column',justifyContent:'center',marginBottom:20,alignItems:'center'}}>
                    {image && <Image source={{ uri: image }} style={{ width: 200, height: 200,borderRadius:12 }} />}
                    <View style={{flexDirection:'row',justifyContent:'center',marginBottom:20,alignItems:'center'}}>
                        <Button title="Seleccionar imagen" onPress={pickImage} type="clear"/>
                        {image && <Button type="clear" icon={<Icon name="trash" color="red" size={30}/>} onPress={()=>setImage(null)} />}
                    </View>
                </View>
                <Input 
                    label='Nombre Producto'
                    placeholder="Aqui..."
                    labelStyle={estilos.label}
                    inputContainerStyle={estilos.input}
                    onChangeText={(value)=>saveProduct('productName',value)}
                />
                <Input 
                    label='Descripcion Producto'
                    placeholder="Aqui..."
                    labelStyle={estilos.label}
                    inputContainerStyle={estilos.input}
                    containerStyle={estilos.inputContenedor}
                    onChangeText={(value)=>saveProduct('productDetail',value)}
                />
                <Input 
                    label='Precio'
                    placeholder="Aqui..."
                    keyboardType="numeric"
                    labelStyle={estilos.label}
                    inputContainerStyle={estilos.input}
                    onChangeText={(value)=>saveProduct('productPrice',value)}
                />

                <Button 
                    type="solid"
                    title="Publicar"
                    onPress={addProduct}
                />
            </ScrollView>
        </SafeAreaView>
    )
}

const estilos = StyleSheet.create({
    contenedorPrincipal:{
        padding:10
    },
    input:{
        padding:5,
        borderWidth:1,
    },
    inputContenedor:{

    },
    label:{
        marginBottom:10
    },
    switch:{
        flexDirection:'row',
        justifyContent:'center',
        alignContent:'center',
    },
    textoSwitch:{
        marginRight:10,
        fontFamily:'open-sans',
        fontWeight:'bold',
        fontSize:15
    },
})

export default addProduct;