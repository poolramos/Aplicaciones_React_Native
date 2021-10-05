import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import store from './store'
//Fonts
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

//Componentes
import HomeScreens from './screens/HomeScreens'

export default function App() {

  const [dataLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })

  if (!dataLoaded) {
    return <AppLoading />
  }

    
  return (
    <Provider store={store}>
          <SafeAreaView style={styles.container}>
            <HomeScreens />
            <StatusBar style="auto" />
          </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
